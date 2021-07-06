import React, {useState} from 'react';
import { Modal } from 'react-native';

import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
  colors
} from "../styles/appStyles";

import { AntDesign } from "@expo/vector-icons";

const InputModal = ({
  modalVisible,
  setModalVisible,
  handleAddTodo
}) => {
  const [todoInputValue, setTodoInputValue] = useState("");

  const handleTextChange = (text) => {
    setTodoInputValue(text);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }
  const handleSubmit = () => {
    handleAddTodo({
      title: todoInputValue,
      date: `${new Date().toLocaleString()}`,
      key: `${Date.now()}`
    });
    setTodoInputValue("");
  }
  return (
    <>
      <ModalButton onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={30} color={colors.secondary} />
      </ModalButton>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle>What's up?</HeaderTitle>
              <AntDesign name="edit" size={30} color={colors.tertiary} />
            </ModalIcon>
            <StyledInput
              placeholder="Add a todo"
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              autoFocus
              onChangeText={handleTextChange}
              value={todoInputValue}
              onSubmitEditing={handleSubmit}
            />
            <ModalActionGroup>
              <ModalAction color={colors.primary} onPress={handleCloseModal}>
                <AntDesign name="close" size={28} color={colors.tertiary} />
              </ModalAction>
              <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                <AntDesign name="check" size={28} color={colors.secondary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;
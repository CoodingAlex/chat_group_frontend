import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background: rgba(18, 15, 19, 0.5);
`;
export const AddChannelModal = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 34px;
  background: #120f13;
  border-radius: 24px;
`;

export const DescriptionInput = styled.input``;

export const ModalButton = styled.button`
  align-self: flex-end;
  background: #2f80ed;
  border: none;
  border-radius: 8px;
  outline: none;
  width: 20%;
  height: 30px;
  color: white;
  font-family: 'Noto Sans', sans-serif;
`;

const defaultInputProps = `
  max-width: 100%;
  padding: 5px;
  background: #3C393F;
  border: none;
  outline: none;
  border-radius: 8px;
  font-family: 'Noto Sans', sans-serif;
  color: #828282;
`;
export const ModalInput = styled.input`
  ${defaultInputProps}
  height: 40px;
`;
export const ModalTextArea = styled.textarea`
  ${defaultInputProps}
  min-height: 100px;
  max-height: 100px;
`;

export const RegisterToggle = styled.p`
  color: #2f80ed;
  cursor: pointer;
`;

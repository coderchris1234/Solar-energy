import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContainer = styled.div`
  background: #fff;
  width: 70%;
  /* max-width: 420px; */
  padding: 25px;
  border-radius: 14px;
  animation: slideUp 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  border-radius: 8px;
  border: 1px solid #ffcb05;
  font-size: 15px;
  transition: 0.2s;
  outline: none;

  &:focus {
    border-color: #ffcb05;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  margin-top: 15px;
  border-radius: 10px;
  background: #ffcb05;
  border: none;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: 0.25s;
  color: white;

  &:hover {
    background: #f2bb00;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Error = styled.div`
  background: #ffefef;
  color: #d40000;
  font-size: 14px;
  padding: 10px;
  border-radius: 8px;
  margin-top: 8px;
`;

export const SuccessMessage = styled.div`
  text-align: center;
  padding: 20px;

  h3 {
    margin-bottom: 10px;
    font-size: 22px;
  }

  p {
    font-size: 15px;
    color: #444;
  }
`;

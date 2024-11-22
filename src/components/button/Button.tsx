'use client';

import styled from 'styled-components';

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const MyButton = ({ onClick, text }: ButtonProps) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default MyButton;

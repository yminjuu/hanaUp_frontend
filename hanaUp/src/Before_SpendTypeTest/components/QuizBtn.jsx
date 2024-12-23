import styled, { css } from 'styled-components';
import color from '../../styles/color';
import font from '../../styles/font';
import { useState } from 'react';

const Container = styled.div`
  cursor: pointer;

  width: 100%;
  display: flex;
  padding: 15px;
  align-items: center;

  border-radius: 10px;

  color: var(--bk, #2d2d2d);
  ${font.caption.cap2B};

  ${props =>
    props.type
      ? css`
          border: 1px solid ${color.brand.primary};
          background-color: rgba(70, 215, 194, 0.2);
        `
      : css`
          border: 1px solid ${color.grayscale.gray2};
          background-color: '#ffffff';
        `}
`;

// type: false, true로 관리
const QuizBtn = ({ type, text, onClick }) => {
  return (
    <Container onClick={onClick} type={type}>
      <div>{text}</div>
    </Container>
  );
};

export default QuizBtn;

// 뒤로가기버튼, 제목
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import arrow_left from '../common/assets/arrow-left.png';
import font from '../styles/font';

const Container = styled.div`
  display: flex;
  padding: 12px 24px 0px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const BackBtnWrapper = styled.div`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;

  align-items: center;
  padding: 9px;
`;

const BackBtn = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.div`
  color: #37383c;
  text-align: center;

  ${font.header.h3};
`;

const PrimaryHeader = ({ header_title }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackBtnWrapper onClick={() => navigate(-1)}>
        <BackBtn src={arrow_left}></BackBtn>
      </BackBtnWrapper>
      <Title>{header_title}</Title>
      <BackBtnWrapper />
    </Container>
  );
};

export default PrimaryHeader;
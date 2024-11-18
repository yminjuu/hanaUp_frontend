import styled, { css } from 'styled-components';
import color from '../styles/color';
import font from '../styles/font';
import countryInfo from '../common/arrays/countryInfo';

const Container = styled.div`
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  align-self: stretch;

  border-radius: 10px;
  background: ${color.grayscale.gray1};
`;

const MoneyAmountInteger = styled.div`
  color: ${color.grayscale.black};
  ${font.header.h1};
  letter-spacing: -1.08px;
  position: relative;
`;

const IcnContainer = styled.img`
  object-fit: cover;
  height: 24px;

  position: absolute;
  right: -30px;
  top: -5px;
`;

const SubText = styled.div`
  ${font.header.h5R}
  color: ${color.grayscale.gray6};
`;

// type: single, entire (여행 날짜가 단일인지, duration인지)
// startDate, endDate, currency(화폐 단위), country(나라명), amount(예상치)
// 소수점을 받으면 처리해야됨
// country 영어로 받아야
const DollarBox = ({ type, startDate, endDate, currency, country, amount }) => {
  return (
    <Container>
      <MoneyAmountInteger>
        {currency} {amount}
        <IcnContainer src={`/img/countryIcons/${country}.png`} />
      </MoneyAmountInteger>
      <SubText>
        {type == 'single'
          ? `${startDate.getFullYear()}년 ${startDate.getMonth() + 1}월 ${startDate.getDate() + 1}일`
          : `${startDate.toLocaleDateString()}~${endDate.toLocaleDateString()}의 여행`}
      </SubText>
    </Container>
  );
};

export default DollarBox;

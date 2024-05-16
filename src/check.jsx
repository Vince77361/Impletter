import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const Check = () => {

  const navigate = useNavigate();

  return (
    <>
      <RootRoot>
        <Title>
          <Logo loading='lazy' alt='' src='/logo.svg'></Logo>STEP.3 보낼 편지 확인
        </Title>
        <Button onClick={() => { navigate('/final'); }}>발송하기</Button>
      </RootRoot>
    </>
  );
};

export default Check;

const RootRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  background-color: #f2f5f8;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const Title = styled.div`
  color: #000;
  /* text-align: left; */
  display: inline-flex;
  font-family: 'VITRO CORE OTF';
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 30px;
  margin-top: 0;
  margin-left: 0; /* 화면 왼쪽 상단에 위치하도록 마진 조절 */
`;

const Button = styled.div`
  border-radius: 20px;
  background: #3d92f4;
  display: inline-flex;
  width: 80px;
  height: 40px;
  padding: 15px 142px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;

  &:hover {
    background: #5278d4;
  }
`;
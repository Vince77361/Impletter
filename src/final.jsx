import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Final = () => {
  const navigate = useNavigate();
  return (
    <>
      <RootRoot>
        <Title>
          <Logo loading='lazy' alt='' src='/logo.svg'></Logo>
        </Title>
        <h1>편지쓰기 완료!</h1>
        <Text>
          최선을 다한 후, 이곳에서 <br />
          당신을 볼 수 있는 그 날을 기대할게요!
        </Text>
        <Button onClick={() => navigate('/')}>디미고 입시 성공하기</Button>
      </RootRoot>
    </>
  );
};

export default Final;

const RootRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f2f5f8;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
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
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.28px;

  &:hover {
    background: #5278d4;
  }
`;

const Text = styled.div`
  font-weight: 500;
  padding-bottom: 20px;
`;

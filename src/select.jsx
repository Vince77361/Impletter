import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Frame = () => {

  const navigate = useNavigate();

  return (
    <>
      <RootRoot>
        <Title>
          <Logo loading='lazy' alt='' src='/logo.svg'></Logo> STEP.1 편지지 고르기
        </Title>
        <BoxField>
          <Box onClick={() => { navigate('/write/1'); }}></Box>
          <Box onClick={() => { navigate('/write/2'); }}></Box>
          <Box onClick={() => { navigate('/write/3'); }}></Box>
        </BoxField>
        <Footer>
          <Brand>
            <Implude1>
              <ImpludeTxt>
                <Span>#</Span>
                <Implude>IMPLUDE</Implude>
              </ImpludeTxt>
            </Implude1>
            <Icon>
              <IconChild loading='lazy' alt='' src='/group-28.svg' />
            </Icon>
            <LayerInfo>
              <Layer1Icon loading='lazy' alt='' src='/layer-1.svg' />
            </LayerInfo>
          </Brand>
        </Footer>
      </RootRoot>
    </>
  );
};

export default Frame;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const Box = styled.div`
  width: 300px;
  height: 500px;
  background: gray;
  margin: 15px;
`;

const BoxField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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

const Span = styled.span`
  color: #0076ff;
  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 800;
`;

const Implude = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 800;
`;

const ImpludeTxt = styled.span`
  line-break: anywhere;
`;

const Implude1 = styled.div`
  display: flex;
  align-items: center;
`;

const IconChild = styled.img`
  width: 18px;
  height: 18px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Layer1Icon = styled.img`
  height: 40px;
`;

const LayerInfo = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

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


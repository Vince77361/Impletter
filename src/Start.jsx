import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Start() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  let data = {
    name: name,
    email: email,
  };

  useEffect(() => {
    setName('');
    setEmail('');
  }, []);

  return (
    <>
      <RootRoot>
        <BoxField>
          <LogoField>
            <Logo loading='lazy' alt='' src='/logo.svg' />
            <Title>
              합격 발표 직전의 나에게
              <br />
              편지쓰기
            </Title>
          </LogoField>

          <TextField>
            <Content>이름</Content>
            <InputField
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Content>미래에 내가 받을 메일</Content>
            <InputField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Box>
              디미고라는 목표를 향해 최선을 다한 미래의 당신에게 <br />
              수고했다는 의미를 담은 편지를 작성해봐요 :&#41;
            </Box>
            <Button
              onClick={() => {
                navigate('/select', { state: data });
              }}
            >
              편지 쓰러 가기
            </Button>
          </TextField>
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
}

const BoxField = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  padding: 20px;
`;

const TextField = styled.div`
  display: inline;
`;

const InputField = styled.input`
  border: none;
  border-radius: 16px;
  background: #fff;
  display: flex;
  width: 500px;
  height: 30px;
  padding: 24px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin-bottom: 48px;
  margin-top: 10px;
  font-size: 20px;
`;

const Content = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Button = styled.div`
  border-radius: 20px;
  background: #3d92f4;
  display: inline-flex;
  height: 70px;
  width: 500px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;

  &:hover {
    background: #5278d4;
  }
`;

const Box = styled.div`
  margin-bottom: 48px;
  font-size: 20px;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 38px;
`;

const LogoField = styled.div`
  display: inline;
  margin-right: 70px;
`;

const Span = styled.span`
  color: #0076ff;
  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
const Implude = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
const ImpludeTxt = styled.span`
  line-break: anywhere;
`;
const Implude1 = styled.div`
  height: 48px;
  position: relative;
  font-weight: 800;
  display: flex;
  align-items: center;
  @media screen and (max-width: 750px) {
    font-size: 26px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const IconChild = styled.img`
  width: 18px;
  height: 18px;
  position: relative;
`;
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px 0px 0px;
`;
const Layer1Icon = styled.img`
  align-self: stretch;
  height: 40px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
`;
const LayerInfo = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 0px 0px;
  box-sizing: border-box;
`;
const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-xl);
  }
`;
const Footer = styled.footer`
  width: 1116px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: #0076ff;
  font-family: var(--font-poppins);
`;
const RootRoot = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f2f5f8;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 80px;
  padding-left: 200px;
  box-sizing: border-box;
  gap: 50px;
  line-height: normal;
  letter-spacing: normal;

  @media screen and (max-width: 1050px) {
    gap: 99px;
    padding-left: 201px;
    padding-right: 120px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: 49px;
    padding-left: 100px;
    padding-right: 60px;
    box-sizing: border-box;
  }
`;

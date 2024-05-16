import styled from 'styled-components';

const Frame = () => {
  return (
    <>
      <RootRoot>
        <Title>
          <Logo loading='lazy' alt='' src='/logo.svg'></Logo> STEP.1 편지지 고르기
        </Title>
        




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

const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: 'VITRO CORE OTF';
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
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
  padding: 277px 240px 32px 402px;
  box-sizing: border-box;
  gap: 198px;
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

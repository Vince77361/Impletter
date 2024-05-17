import styled, { css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import html2canvas from 'html2canvas';

const Letter = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const location = useLocation();
  const data = location.state;

  const handleChange = (e) => {
    const newValue = e.target.value;
    const lines = newValue.split('\n').length;
    if (lines <= 14) {
      setValue(newValue);
    }
    if (newValue < 300) {
      setValue(newValue);
    }
  };

  const onCapture = () => {
    html2canvas(document.getElementById('container')).then((canvas) => {
      onSaveAs(
        canvas.toDataURL('image/png'),
        `${data.user.name}-${data.user.email}.png`
      );
    });
    navigate('/final');
  };

  const onSaveAs = (uri, filename) => {
    let link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.removeChild(link);
  };

  return (
    <>
      <RootRoot>
        <Title>
          <Logo loading='lazy' alt='' src='/logo.svg'></Logo>STEP.2 편지 쓰기
        </Title>
        <p style={{ marginTop: '-20px', fontWeight: '700' }}>
          편지의 줄 수를 초과할 경우 제대로 발송이 되지 않습니다.
        </p>
        <ImageContainer id='container'>
          <Image src={data.img} />
          <TextareaField
            ImagePath={data.img}
            onChange={handleChange}
            dangerouslySetInnerHTML={{ __html: value }} // 변경된 부분: innerHTML 사용
            contentEditable
          />
        </ImageContainer>
        <Button
          onClick={() => {
            onCapture();
          }}
        >
          완료하기
        </Button>
      </RootRoot>
    </>
  );
};

export default Letter;

const ImageContainer = styled.div`
  position: relative;
  width: 390px;
  height: 551px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const Title = styled.div`
  color: #000;
  display: inline-flex;
  font-family: 'VITRO CORE OTF';
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 30px;
  margin-top: 0;
  margin-left: 0;
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

const TextareaField = styled.div`
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  width: 340px;
  height: 330px; /* 조절할 수 있음 */
  background: rgba(255, 255, 255, 0); /* 투명도 조절 */
  border-radius: 5px;
  border: none;
  padding: 10px;
  line-height: 21.5px;
  box-sizing: border-box;
  word-break: break-all;
  overflow: hidden;
  outline: none; /* 포커스 표시 제거 */
  white-space: pre-wrap; /* 줄 바꿈 지원 */
  ${(props) =>
    props.ImagePath === '../img/blackbg.png' &&
    css`
      color: #ffffff;
    `}
`;

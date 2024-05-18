import styled, { css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import './font.css';

const Letter = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const location = useLocation();
  const data = location.state;
  const textareaRef = useRef(null);
  const [isComposing, setIsComposing] = useState(false);

  const handleInput = (e) => {
    if (!isComposing) {
      const newValue = e.target.innerText;
      const lines = newValue.split('\n').length;
      if (lines <= 14 && newValue.length < 300) {
        setValue(newValue);
      }
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = (e) => {
    setIsComposing(false);
    handleInput(e); // Composition이 끝나면 최종 값을 처리합니다.
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 기본 엔터 키 동작을 막음
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const br = document.createElement('br');
      range.deleteContents();
      range.insertNode(br);
      range.setStartAfter(br);
      range.setEndAfter(br);
      selection.removeAllRanges();
      selection.addRange(range);
      setValue(textareaRef.current.innerText); // value 상태 업데이트
    }
  };

  const onCapture = () => {
    const container = document.getElementById('container');
    container.style.overflow = 'visible';
    html2canvas(container).then((canvas) => {
      onSaveAs(
        canvas.toDataURL('image/png'),
        `${data.user.name}-${data.user.email}.png`
      );
    });
    container.style.overflow = 'hidden';
    navigate('/final');
  };

  const onSaveAs = (uri, filename) => {
    let link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (textareaRef.current) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(textareaRef.current);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [value]);

  return (
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
          ref={textareaRef}
          contentEditable
          onInput={handleInput}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
          dangerouslySetInnerHTML={{ __html: value }} // 초기 value 설정
        />
      </ImageContainer>
      <Button onClick={onCapture}>완료하기</Button>
    </RootRoot>
  );
};

export default Letter;

const ImageContainer = styled.div`
  position: relative;
  width: 390px;
  height: 551px;
  margin-bottom: 20px;
  overflow: hidden;
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
  font-family: 'Cafe';
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  width: 340px;
  height: 330px;
  background: rgba(255, 255, 255, 0);
  border-radius: 5px;
  border: none;
  padding: 10px;
  line-height: 21.5px;
  box-sizing: border-box;
  word-break: break-all;
  overflow: hidden;
  outline: none;
  white-space: pre-wrap;
  ${(props) =>
    props.ImagePath === '../img/blackbg.png' &&
    css`
      color: #ffffff;
    `}
`;

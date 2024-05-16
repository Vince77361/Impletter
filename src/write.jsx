import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';

const Letter = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto'; //height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  return (
    <>
      <RootRoot>
        <Title>
          <Logo loading='lazy' alt='' src='/logo.svg'></Logo>STEP.2 편지 쓰기
        </Title>
        <TextareaField
        //   ref={textarea}
        //   onChange={handleResizeHeight}
        ></TextareaField>
        <Button
          onClick={() => {
            navigate('/check');
          }}
        >
          완료하기
        </Button>
        {/* <h1>{id}</h1> */}
      </RootRoot>
    </>
  );
};

export default Letter;

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

const TextareaField = styled.textarea`
  width: 400px;
  height: 600px;
  background: transparent;
  resize: none;
  border-radius: 5px;
  border: none;
  margin-bottom: 40px;

  /* font-family: "Cafe24 Shiningstar"; */
`;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styledComponent/Section';

export const StyledBoard = styled.div`
  width: 100%;
  min-height: calc(93.5vh);
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCell = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
  }
`;

const StyledPopup = styled.div`
  position: absolute;
  top: 30%;
  left: 18%;
  width: 500px;
  height: 300px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Wrapper = styled.div<{ leftx: number; topy: number; color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 29px;
  box-shadow: 0 0 6px;
  position: absolute;
  top: ${(props) => props.topy}px;
  left: ${(props) => props.leftx}px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  // font-color: white;
  color: white;
`;

interface BallProps {
  x: number;
  y: number;
  setDowned: any;
  name: string;
  color: string;
}

const Ball = function Ball({ x, y, setDowned, name, color }: BallProps) {
  // let offsetX: number;
  // let offsetY: number;
  // const [corX, setCorX] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  // const move = (e: any) => {
  //   const el = e.target;
  //   // el.style.left = `${e.pageX - offsetX}px`;
  //   // el.style.top = `${e.pageY - offsetY}px`;
  //   // offsetX = e.clientX;
  //   console.log('pare', x);
  //   if (mouseDown) {
  //     // setCorX(x);
  //   }
  // };
  const mouseDowns = (e: any) => {
    const el = e.target;

    // offsetX = e.clientX - el.getBoundingClientRect().left;
    // offsetY = e.clientY - el.getBoundingClientRect().top;
    // el.offsetX = e.clientX;
    setDowned(true);
    // setCorX(x);
    // setMouseDown(true);

    // el.addEventListener('mousemove', move);
  };

  const mouseUps = (e: any) => {
    setDowned(false);
  };
  // const remove = (e: any) => {
  //   const el = e.target;
  //   console.log('remove');
  //   setMouseDown(false);
  //   el.removeEventListener('mousemove', move);
  // };

  return (
    <Wrapper onMouseDown={mouseDowns} onMouseUp={mouseUps} leftx={x} topy={y} color={color}>
      {name}
    </Wrapper>
  );
};

const Project = function Project() {
  const [Popup, setShowPopup] = useState(false);
  const [popupmsg, setPopupmsg] = useState('');
  const [verse, setVerse] = useState('');
  const [donwed, setDowned] = useState(false);
  const [donwed2, setDowned2] = useState(false);
  const [donwed3, setDowned3] = useState(false);

  const [coorX, setCoorX] = useState(20);
  const [coorY, setCoorY] = useState(700);
  const [coorX2, setCoorX2] = useState(20);
  const [coorY2, setCoorY2] = useState(700);
  const [coorX3, setCoorX3] = useState(20);
  const [coorY3, setCoorY3] = useState(700);

  const showPopup = (msg: string) => {
    if (!Popup) {
      setShowPopup(true);
    }
    setPopupmsg(msg);
    // console.log('click', msg);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const onMouseMove = (e: any) => {
    console.log(e.pageY);
    if (donwed) {
      setCoorX(e.pageX);
      setCoorY(e.pageY - 2310);
    }
    if (donwed2) {
      setCoorX2(e.pageX);
      setCoorY2(e.pageY - 2310);
    }
    if (donwed3) {
      setCoorX3(e.pageX);
      setCoorY3(e.pageY - 2310);
    }
  };

  const onMouseDown = () => {
    // setDowned(true);
  };

  const onMouseUp = () => {
    // setDowned(false);
  };

  // useEffect(() => {});

  return (
    <StyledSection id="project">
      <StyledBoard onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
        <StyledRow>
          <StyledCell
            onClick={() => {
              showPopup('부모님 사랑해요');
              setVerse('');
            }}
          >
            1 **
          </StyledCell>
          <StyledCell>2</StyledCell>
          <StyledCell>3</StyledCell>
          <StyledCell
            onClick={() => {
              showPopup(`친구는 사랑이 끊이지 아니하고`);
              setVerse('잠언 17장 17절');
            }}
          >
            4 **
          </StyledCell>
          <StyledCell>5</StyledCell>
        </StyledRow>
        <StyledRow>
          <StyledCell>1</StyledCell>
          <StyledCell
            onClick={() => {
              showPopup(`나는 주의 말씀을 지키리라`);
              setVerse('시편 119장 57절');
            }}
          >
            2 **
          </StyledCell>
        </StyledRow>
        <StyledRow>
          <StyledCell>1</StyledCell>
          <StyledCell>2</StyledCell>
        </StyledRow>
        <StyledRow>
          <StyledCell
            onClick={() => {
              showPopup('평생에 자기 옆에 두고 읽어서');
              setVerse('신명기 17장 19절');
            }}
          >
            1**
          </StyledCell>
          <StyledCell
            onClick={() => {
              showPopup('우리를 사랑하시는 분은 누구일까요?');
              setVerse('');
            }}
          >
            2**
          </StyledCell>
        </StyledRow>
        <StyledRow>
          <StyledCell>1</StyledCell>
          <StyledCell
            onClick={() => {
              showPopup('아무사람도 보지 못하였고 또 볼수 없는 자시니');
              setVerse('디모데전서 6`장 16절');
            }}
          >
            2**
          </StyledCell>
          <StyledCell>3</StyledCell>
          <StyledCell
            onClick={() => {
              showPopup('우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라');
              setVerse('요한일서 4장 19절');
            }}
          >
            4**
          </StyledCell>
          <StyledCell>5</StyledCell>
        </StyledRow>
      </StyledBoard>
      {Popup && (
        <StyledPopup onClick={closePopup}>
          {popupmsg} <br /> <br />
          {verse}
        </StyledPopup>
      )}
      <Ball x={coorX} y={coorY} setDowned={setDowned} name="선율" color="red" />
      <Ball x={coorX2} y={coorY2} setDowned={setDowned2} name="율" color="blue" />
      <Ball x={coorX3} y={coorY3} setDowned={setDowned3} name="희준" color="green" />
    </StyledSection>
  );
};

export default Project;

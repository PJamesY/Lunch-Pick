import { useState } from 'react';
import Head from 'next/head';
import { BsFillTreeFill, BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { AiFillStar, AiFillHeart, AiFillCloud } from 'react-icons/ai';
import { GiFireFlower } from 'react-icons/gi';

interface ObjectProps {
  left: number;
  isDay: boolean;
}

const Flower = function Flower({ left, isDay }: ObjectProps) {
  const [showOption, setShowOption] = useState(false);
  const [color, setColor] = useState('white');

  return (
    <div className="wrapper">
      {showOption && (
        <div className="select-color">
          <div
            className="color red"
            onClick={() => {
              setColor('red');
            }}
          />
          <div
            className="color green"
            onClick={() => {
              setColor('green');
            }}
          />
          <div className="color blue" onClick={() => setColor('blue')} />
          <div className="color yellow" onClick={() => setColor('#ffff99')} />
        </div>
      )}
      <div className="flower">
        <IconContext.Provider value={{ color: '#659157', size: `${isDay ? '160' : '80'}` }}>
          <GiFireFlower />
          <IconContext.Provider value={{ color: `${color}`, size: `${isDay ? '180' : '90'}` }}>
            <div
              className="heart"
              onClick={() => {
                setShowOption(!showOption);
              }}
            >
              <AiFillHeart />
            </div>
          </IconContext.Provider>
        </IconContext.Provider>
      </div>
      <style jsx>{`
        .wrapper {
          position: absolute;
          bottom: 0px;
          left: ${left}%;
        }
        .flower {
          position: relative;
        }
        .heart {
          position: absolute;
          left: -6%;
          top: -20%;
          z-index: 299;
        }
        .select-color {
          position: absolute;
          left: 90%;
          z-index: 300;
          bottom: 50%;
        }
        .color {
          width: 30px;
          height: 30px;
          border-radius: 20px;
          z-index: 300;
          cursor: pointer;
        }
        .red {
          background-color: red;
        }
        .green {
          background-color: green;
        }
        .blue {
          background-color: blue;
        }
        .yellow {
          background-color: #ffff99;
        }
      `}</style>
    </div>
  );
};

const Tree = function Tree({ left, isDay }: ObjectProps) {
  const [showOption, setShowOption] = useState(false);
  const [color, setColor] = useState('white');

  return (
    <div className="wrapper">
      {showOption && (
        <div className="select-color">
          <div
            className="color red"
            onClick={() => {
              setColor('red');
            }}
          />
          <div
            className="color green"
            onClick={() => {
              setColor('green');
            }}
          />
          <div className="color blue" onClick={() => setColor('blue')} />
          <div className="color yellow" onClick={() => setColor('#ffff99')} />
        </div>
      )}
      <div className="tree">
        <IconContext.Provider value={{ color: '#765c48', size: `${isDay ? '300' : '100'}`, className: 'tree' }}>
          <BsFillTreeFill />
          <IconContext.Provider value={{ color: `${color}`, size: `${isDay ? '90' : '30'}`, className: 'star' }}>
            <div
              className="star star1"
              onClick={() => {
                setShowOption(!showOption);
              }}
            >
              <AiFillStar />
            </div>
            <div className="star star2">
              <AiFillStar />
            </div>
          </IconContext.Provider>
        </IconContext.Provider>
      </div>
      <style jsx>{`
        .wrapper {
          position: absolute;
          bottom: 0px;
          left: ${left}%;
        }
        .select-color {
          position: absolute;
          left: 90%;
          z-index: 300;
          bottom: 20%;
        }
        .tree {
          position: relative;
        }
        .star {
          position: absolute;
          z-index: 299;
        }

        .color {
          width: 30px;
          height: 30px;
          border-radius: 20px;
          z-index: 300;
          cursor: pointer;
        }
        .red {
          background-color: red;
        }
        .green {
          background-color: green;
        }
        .blue {
          background-color: blue;
        }
        .yellow {
          background-color: #ffff99;
        }

        .star1 {
          top: 10%;
          left: 30%;
        }
        .star2 {
          top: 35%;
          left: 50%;
        }
      `}</style>
    </div>
  );
};

const Day = function Day() {
  return (
    <>
      <IconContext.Provider value={{ color: '#DA2B27', size: '140', className: 'tree' }}>
        <div className="moon">
          <BsFillSunFill />
        </div>
      </IconContext.Provider>

      <IconContext.Provider value={{ color: '#26C6F8', size: '60', className: 'tree' }}>
        <div className="star1">
          <AiFillCloud />
        </div>
        <div className="star2">
          <AiFillCloud />
        </div>
        <div className="star3">
          <AiFillCloud />
        </div>
        <div className="star4">
          <AiFillCloud />
        </div>
        <div className="star5">
          <AiFillCloud />
        </div>
        <div className="star6">
          <AiFillCloud />
        </div>
      </IconContext.Provider>
      <style jsx>{`
        .moon {
          padding-top: 2%;
          margin-left: 80%;
        }
        .star1 {
          margin-top: -12%;
          margin-left: 10%;
        }
        .star2 {
          margin-left: 30%;
        }
        .star3 {
          margin-left: 60%;
        }
        .star4 {
          margin-left: 90%;
        }
        .star5 {
          margin-left: 20%;
        }
        .star6 {
          margin-top: -10%;
          margin-left: 50%;
        }
      `}</style>
    </>
  );
};

const Night = function Night() {
  return (
    <>
      <IconContext.Provider value={{ color: '#ffff99', size: '150', className: 'tree' }}>
        <div className="moon">
          <BsFillMoonStarsFill />
        </div>
      </IconContext.Provider>

      <IconContext.Provider value={{ color: '#ffff99', size: '50', className: 'tree' }}>
        <div className="star1">
          <AiFillStar />
        </div>
        <div className="star2">
          <AiFillStar />
        </div>
        <div className="star3">
          <AiFillStar />
        </div>
        <div className="star4">
          <AiFillStar />
        </div>
        <div className="star5">
          <AiFillStar />
        </div>
        <div className="star6">
          <AiFillStar />
        </div>
      </IconContext.Provider>
      <style jsx>{`
        .moon {
          padding-top: 2%;
          margin-left: 80%;
        }
        .star1 {
          margin-top: -12%;
          margin-left: 10%;
        }
        .star2 {
          margin-left: 30%;
        }
        .star3 {
          margin-left: 60%;
        }
        .star4 {
          margin-left: 90%;
        }
        .star5 {
          margin-left: 20%;
        }
        .star6 {
          margin-top: -10%;
          margin-left: 50%;
        }
      `}</style>
    </>
  );
};

interface PaperProps {
  head: string;
}

const Paper = function Paper({ head }: PaperProps) {
  const [isDay, setIsDay] = useState(false);

  return (
    <div className="container">
      <Head>
        <title>Paper</title>
      </Head>

      <div className="option">
        <button
          onClick={() => {
            setIsDay(!isDay);
          }}
        >
          {`${isDay ? '낮' : '밤'}`}
        </button>
      </div>

      <div className="paper">
        {isDay ? <Day /> : <Night />}
        <Tree left={0} isDay={isDay} />
        <Tree left={40} isDay={isDay} />
        <Tree left={75} isDay={isDay} />
        <Flower left={25} isDay={isDay} />
        <Flower left={63} isDay={isDay} />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .container::-webkit-scrollbar {
          display: none;
        }
        .option {
          margin-top: -10px;
          height: 3vh;
        }
        .paper {
          height: 100vh;
          background-color: ${isDay ? 'white' : 'black'};
        }
      `}</style>
    </div>
  );
};

export default Paper;

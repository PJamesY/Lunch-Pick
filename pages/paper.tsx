import { useState } from 'react';
import Head from 'next/head';
import { BsFillTreeFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';

interface ObjectProps {
  left: number;
  isDay: boolean;
}

const Flower = function Flower({ left, isDay }: ObjectProps) {
  return (
    <div className="wrapper">
      <style jsx>{`
        .wrapper {
          position: absolute;
          bottom: 0px;
          left: ${left}%;
        }
        .tree {
          position: relative;
        }
        .star {
          position: absolute;
          z-index: 299;
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

const Tree = function Tree({ left, isDay }: ObjectProps) {
  return (
    <div className="wrapper">
      <div className="tree">
        <IconContext.Provider value={{ color: 'blue', size: `${isDay ? '300' : '100'}`, className: 'tree' }}>
          <>
            <BsFillTreeFill />
            <IconContext.Provider value={{ color: 'white', size: `${isDay ? '90' : '30'}`, className: 'star' }}>
              <div className="star star1">
                <AiFillStar />
              </div>
              <div className="star star2">
                <AiFillStar />
              </div>
            </IconContext.Provider>
          </>
        </IconContext.Provider>
      </div>
      <style jsx>{`
        .wrapper {
          position: absolute;
          bottom: 0px;
          left: ${left}%;
        }
        .tree {
          position: relative;
        }
        .star {
          position: absolute;
          z-index: 299;
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

interface PaperProps {
  head: string;
}

const Paper = function Paper({ head }: PaperProps) {
  const [isDay, setIsDay] = useState(true);

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
          밤
        </button>
      </div>

      <div className="paper">
        <Tree left={0} isDay={isDay} />
        <Tree left={40} isDay={isDay} />
        <Tree left={75} isDay={isDay} />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .option {
          height: 5vh;
        }
        .paper {
          height: 95vh;
          background-color: ${isDay ? 'white' : 'black'};
        }
      `}</style>
    </div>
  );
};

export default Paper;

import React, { useEffect } from 'react';
import Image from 'next/image';

export interface LoginButtonProps {
  backgroundColor: string;
  imgSrc: string;
  text: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, backgroundColor, imgSrc, text }) => {
  return (
    <>
      <div className="loginButton">
        <Image src={imgSrc} width="20" height="20" />
        <span>{text}</span>
      </div>
      <style jsx>
        {`
          .loginButton {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 200px;
            padding: 15px 40px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            background-color: ${backgroundColor};
            margin-bottom: 20px;
          }
          span {
            margin-left: 15px;
          }
        `}
      </style>
    </>
  );
};

export default LoginButton;

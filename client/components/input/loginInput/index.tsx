import React, { useEffect } from 'react';

export interface LoginInputProps {}

const LoginInput: React.FC<LoginInputProps> = ({ children }) => {
  return (
    <>
      <input type="text" placeholder="아이디를 입력해 주세요" />
      <input type="text" placeholder="비밀번호를 입력해 주세요" />
      <button className="submit">로그인</button>
      <style jsx>
        {`
          input {
            width: 200px;
            padding: 15px 20px;
            margin-bottom: 20px;
          }
          .submit {
            width: 200px;
            background-color: rgba(128, 0, 128, 0.671);
            color: white;
            font-weight: bold;
            border: none;
            padding: 15px 20px;
            border-radius: 5px;
          }
        `}
      </style>
    </>
  );
};

export default LoginInput;

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoginButton from '../components/button/loginButton';
import LoginInput from '../components/input/loginInput';

const Login = function Login() {
  const user = true;
  const router = useRouter();

  // useEffect(() => {
  //   if (user) {
  //     router.push('/');
  //   }
  // }, []);

  return (
    <>
      <div className="login">
        <h1 className="loginTitle">Choose login</h1>
        <div className="wrapper">
          <div className="left">
            <LoginButton backgroundColor="#df4930" imgSrc="/google.png" text="Google" />
            <LoginButton backgroundColor="#507cc0" imgSrc="/facebook.png" text="Facebook" />
            <LoginButton backgroundColor="black" imgSrc="/github.png" text="Github" />
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <LoginInput />
          </div>
        </div>
      </div>
      <style jsx>{`
        .login {
          height: calc(100vh - 95px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wrapper {
          width: 60%;
          height: 75%;
          -webkit-box-shadow: 0px 5px 40px -21px rgba(66, 68, 90, 1);
          box-shadow: 0px 5px 40px -21px rgba(66, 68, 90, 1);
          display: flex;
          align-items: center;
          border-radius: 20px;
        }
        .left,
        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .center {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .or {
          border: 2px solid lightgray;
          border-radius: 50%;
          padding: 10px;
          color: gray;
          background-color: white;
          font-weight: bold;
        }
        .line {
          width: 0.5px;
          height: 70%;
          background-color: lightgray;
          position: absolute;
          z-index: -1;
          // margin: auto;
        }
        .loginTitle {
          position: absolute;
          top: 150px;
          color: lightgray;
        }
      `}</style>
    </>
  );
};

export default Login;

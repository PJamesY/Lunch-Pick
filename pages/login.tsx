import Image from 'next/image';

const Login = function Login() {
  return (
    <>
      <div className="login">
        <h1>Choose login</h1>
        <div className="wrapper">
          <div className="left">
            <div>
              <Image src="/google.png" width="64" height="64" />
              Google
            </div>
            <div>
              <Image src="/facebook.png" width="64" height="64" />
              Facebook
            </div>
            <div>
              <Image src="/github.png" width="64" height="64" />
              Github
            </div>
          </div>
          <div className="right">
            <input type="text" placeholder="아이디를 입력해 주세요" />
            <input type="text" placeholder="비밀번호를 입력해 주세요" />
            <button className="submit">로그인</button>
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
        }
      `}</style>
    </>
  );
};

export default Login;

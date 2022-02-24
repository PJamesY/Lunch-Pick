import { AiOutlineUser } from 'react-icons/ai';

const NavBar = function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <span className="title">JAMES</span>
        <ul>
          <li>
            <AiOutlineUser />
          </li>
          <li>James</li>
          <li>로그아웃</li>
        </ul>
      </div>
      <style jsx>
        {`
          .nav-bar {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            background-color: #f76707;
          }
          .title {
            font-weight: bold;
          }
          ul {
            display: flex;
            align-items: center;
          }
          li {
            list-style: none;
          }
        `}
      </style>
    </>
  );
};

export default NavBar;

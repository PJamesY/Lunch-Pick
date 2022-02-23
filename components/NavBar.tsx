import { AiOutlineUser } from 'react-icons/ai';

const NavBar = function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <span className="title">JAMES</span>
        <AiOutlineUser />
      </div>
      <style jsx>
        {`
          .nav-bar {
            display: flex;
            justify-content: space-between;
            width: 100%;
            background-color: #f76707;
          }
          .title {
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default NavBar;

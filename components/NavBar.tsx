const NavBar = function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <span className="title">JAMES</span>
      </div>
      <style jsx>
        {`
          .nav-bar {
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

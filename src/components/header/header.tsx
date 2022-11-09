import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <div className="logoImg">
          <img src={require("../../assets/logo_web.png")} alt="img" />
        </div>
        <div className="searchBar">
          <form action="" className="formContainer">
            <input
              type="text"
              className="searchField"
              placeholder="Search City"
            />
            <img
              src={require("../../assets/icon_search_white.png")}
              alt=""
              className="searchIcon"
            />
          </form>
        </div>
      </div>

      <div className="linksContainer">fhghgj;lk'</div>
    </div>
  );
};

export default Header;

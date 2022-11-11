import { useEffect, useState } from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import { weather } from "../../redux/weatherSlice";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import HomeTab from "../homeTab/homeTab";
import Favourite from "../favourite/favourite";
import Recent from "../recent/recent";

const Header = () => {
  const [fetchedData, setFetchedData] = useState<any>([]);
  const [search, setSearch] = useState("udupi");
  const [nav, setNav] = useState(false);

  const searchData = JSON.parse(localStorage.getItem("search") || "[]");

  if (searchData === undefined) {
    localStorage.setItem("search", "[]");
  }
  const dispatch = useDispatch();

  const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${search}&format=json&u=f`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "33488c6306msh37ceff98be05773p168ba2jsnabe9876935fc",
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setFetchedData(json))
      .catch((err) => console.error("error:" + err));
  }, [search]);
  // console.log(fetchedData);
  const arr: any[] = [];
  const recentSearchHandler = () => {
    if (JSON.stringify(fetchedData) !== "[]") {
      searchData.map((user: any) => {
        console.log("fetchedData", fetchedData);

        if (user.location.woeid === fetchedData.location.woeid) {
          arr.push("exists");
        }
      });
      if (arr.includes("exists")) {
        //alert("already exists");
      } else {
        if (search !== "[]") {
          fetchedData && searchData.push(fetchedData);
          localStorage.setItem("search", JSON.stringify(searchData));
        } else {
          alert("empty");
        }
      }
    } else {
      // alert("enter search term");
    }
  };

  useEffect(() => {
    dispatch(weather(fetchedData));
    recentSearchHandler();
  }, [fetchedData]);

  return (
    <div>
      <div className="headerContainer">
        <div className="logoImg">
          <img src={require("../../assets/logo_web.png")} alt="img" />
        </div>
        <div className="searchBar">
          <form
            action=""
            className="formContainer"
            onSubmit={(e: any) => {
              e.preventDefault();
              setSearch(e.target.searchIP.value);
            }}
          >
            <input
              type="text"
              className="searchField"
              placeholder="Search City"
              name="searchIP"
            />
            <img
              src={require("../../assets/icon_search_white.png")}
              alt=""
              className="searchIcon"
            />
          </form>
        </div>
      </div>
      <div
        className="burger"
        onClick={() => {
          setNav(true);
        }}
      >
        Burger
      </div>
      {nav && (
        <div className="linkList">
          {" "}
          <Link
            className="linkNames"
            to="/"
            onClick={() => {
              setNav(false);
            }}
          >
            HOME
          </Link>
          <Link
            className="linkNames"
            to="/fav"
            onClick={() => {
              setNav(false);
            }}
          >
            FAVOURITE
          </Link>
          <Link
            className="linkNames"
            to="/recent"
            onClick={() => {
              setNav(false);
            }}
          >
            RECENT SEARCH
          </Link>
          <div
            className="close"
            onClick={() => {
              setNav(false);
            }}
          >
            close
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

import "./tabsHeader.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HomeTab from "../homeTab/homeTab";
import Favourite from "../favourite/favourite";
import Recent from "../recent/recent";
import { Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TabsHeader = () => {
  const [value, onChange] = useState("");

  // var date = { currentTime: new Date().toLocaleString() };

  const date = new Date();

  setInterval(function () {
    today();
  }, 1000);

  const today = () => {
    onChange(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getFullYear()}  ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: true,
      })}`
    );
  };

  function tabs() {
    return (
      <>
        {" "}
        <div className="tabsSelect">
          <Tab>HOME</Tab>
          <Tab>FAVOURITE</Tab>
          <Tab>RECENT SEARCH</Tab>
        </div>
        <div className="dateDisplay">
          <div>{value}</div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="tabLinks">
        <div className="tabsSelect">
          <Link to="/" className="linkNames">
            HOME
          </Link>
          <Link to="/fav">FAVOURITE</Link>
          <Link to="/recent">RECENT SEARCH</Link>
        </div>
        <div className="dateDisplay">
          <div>{value}</div>
        </div>
      </div>
      {/* <TabPanel>
            <h2>
              <HomeTab />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <Favourite />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <Recent />
            </h2>
          </TabPanel> */}
      <Routes>
        <Route path="/" element={<HomeTab />} />
        <Route path="/fav" element={<Favourite />} />{" "}
        <Route path="/recent" element={<Recent />} />
      </Routes>
    </div>
  );
};

export default TabsHeader;

import "./tabsHeader.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HomeTab from "../homeTab/homeTab";
import Favourite from "../favourite/favourite";
import Recent from "../recent/recent";

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

  return (
    <div>
      <Tabs>
        <TabList>
          <div>
            <Tab>HOME</Tab>
            <Tab>FAVOURITE</Tab>
            <Tab>RECENT SEARCH</Tab>
          </div>
          <div>{value}</div>
        </TabList>

        <TabPanel>
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
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsHeader;

import "./homeTab.css";
import { useSelector } from "react-redux";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

const HomeTab = () => {
  const Data = useSelector((state: any) => state.weatherData.value);
  console.log("data", Data);

  const previousData = JSON.parse(localStorage.getItem("fav") || "[]");

  const addFav = () => {
    const arr: any[] = [];
    previousData.map((user: any) => {
      // console.log("previousData.user.location.woeid", user.location.woeid);
      if (user.location.woeid === Data.location.woeid) {
        arr.push("exists");
      }
    });
    if (arr.includes("exists")) {
      alert("already exists");
    } else {
      if (Data !== "") {
        previousData.push(Data);
        localStorage.setItem("fav", JSON.stringify(previousData));
      } else {
        alert("empty");
      }
    }
  };

  // const existData: any[] = [];
  // previousData.map((user: any) => {
  //   if (user.location.woeid === Data.location.woeid) {
  //     existData.push("pushed");
  //   }
  // });
  return (
    <div>
      <div className="homeTabContainer">
        <div className="locationName">
          {Data && Data.location && Data.location.city},&nbsp;
          {Data && Data.location && Data.location.country}
        </div>
        <div className="addFav">
          <div className="favImg">
            <img
              src={require("../../assets/icon_favourite.png")}
              alt="img"
              className="heartImg"
            />
          </div>
          <div className="favText" onClick={addFav}>
            Add to favourite
          </div>
        </div>
        <div className="weatherDisplay">
          <div className="weatherImg">
            <img
              src={require("../../assets/icon_mostly_sunny.png")}
              alt=""
              className="sunnyImg"
            />
          </div>
          <div className="weatherDegree">
            {Data.current_observation &&
              Data.current_observation.condition &&
              Data.current_observation.condition.temperature}
          </div>
          <div className="weatherDetail">
            {Data.current_observation &&
              Data.current_observation.condition &&
              Data.current_observation.condition.text}
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_temperature_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Min - Max</div>
            <div className="minMaxDegree">
              {Data.current_observation &&
                Data.current_observation.condition &&
                Data.current_observation.condition.temperature - 3}
              &deg; -{" "}
              {Data.current_observation &&
                Data.current_observation.condition &&
                Data.current_observation.condition.temperature + 3}
              &deg;
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_precipitation_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Precipitation</div>
            <div className="minMaxDegree">
              {Data.current_observation &&
                Data.current_observation.atmosphere &&
                Data.current_observation.atmosphere.pressure}
              %
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_humidity_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Humidity</div>
            <div className="minMaxDegree">
              {Data.current_observation &&
                Data.current_observation.atmosphere &&
                Data.current_observation.atmosphere.humidity}
              %
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_wind_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Wind</div>
            <div className="minMaxDegree">
              {" "}
              {Data.current_observation &&
                Data.current_observation.wind &&
                Data.current_observation.wind.speed}{" "}
              mph
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_visibility_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Visibility</div>
            <div className="minMaxDegree">
              {Data.current_observation &&
                Data.current_observation.atmosphere &&
                Data.current_observation.atmosphere.visibility}{" "}
              mph
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;

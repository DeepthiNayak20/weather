import "./homeTab.css";

const HomeTab = () => {
  return (
    <div>
      <div className="homeTabContainer">
        <div className="locationName">udupi, karnataka</div>
        <div className="addFav">
          <div className="favImg">
            <img
              src={require("../../assets/icon_favourite.png")}
              alt="img"
              className="heartImg"
            />
          </div>
          <div className="favText">Add to favourite</div>
        </div>
        <div className="weatherDisplay">
          <div className="weatherImg">
            <img
              src={require("../../assets/icon_mostly_sunny.png")}
              alt=""
              className="sunnyImg"
            />
          </div>
          <div className="weatherDegree">87</div>
          <div className="weatherDetail">Mostly Sunny</div>
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
            <div className="minMaxDegree">75&deg; - 90&deg;</div>
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
            <div className="minMaxDegree">0%</div>
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
            <div className="minMaxDegree">47%</div>
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
            <div className="minMaxDegree">4 mph</div>
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
            <div className="minMaxDegree">12 mph</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;

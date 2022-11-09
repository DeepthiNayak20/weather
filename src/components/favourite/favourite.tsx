import { useState } from "react";
import "./favourite.css";

const Favourite = () => {
  const [fav, setFav] = useState(false);
  return (
    <div>
      <div className="favourites">
        {fav ? (
          <div className="nothing">
            <div className="nothingImg">
              <img
                src={require("../../assets/icon_nothing.png")}
                alt=""
                className="notImage"
              />
            </div>
            <div className="nothingText">No Favourites added</div>
          </div>
        ) : (
          <div className="favContainer">
            <div className="favHead">
              <div className="cities">6 City added as favourite</div>
              <div className="removeAll">Remove All</div>
            </div>
            <div className="favBody">
              <div className="state">Udupi, Karnataka</div>
              <div className="threeElements">
                <div className="elementOne">
                  <img
                    src={require("../../assets/icon_mostly_sunny_small.png")}
                    alt=""
                    className="elementOneImg"
                  />
                </div>
                <div className="elementTwo">
                  31<span className="deg">&#8451;</span>
                </div>
                <div className="elementThree">Mostly Sunny</div>
              </div>
              <div className="fillHeart">
                <img
                  src={require("../../assets/icon_favourite_Active.png")}
                  alt=""
                  className="fillHeartImg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourite;

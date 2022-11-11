import { useEffect, useState } from "react";
import "./recent.css";
import "./../favourite/favourite.css";

const Recent = () => {
  const [dialog, setDialog] = useState(false);

  const recentSearchData = JSON.parse(localStorage.getItem("search") || "[]");
  useEffect(() => {
    console.log("recentSearchData", recentSearchData);
  }, [recentSearchData]);

  return (
    <div>
      {JSON.stringify(recentSearchData) === "[]" ? (
        <div className="nothing">
          <div className="nothingImg">
            <img
              src={require("../../assets/icon_nothing.png")}
              alt=""
              className="notImage"
            />
          </div>
          <div className="nothingText">No Recent Search</div>
        </div>
      ) : (
        <div>
          <div className="favContainer">
            <div className="favHead">
              <div className="cities">You recently searched for</div>
              <div
                className="removeAll"
                onClick={() => {
                  setDialog(true);
                }}
              >
                Clear All
              </div>
            </div>
            <div className="favColumnReverse">
              {" "}
              {recentSearchData.map((searchData: any, i: any) => {
                return (
                  <div className="favBodyContainer" key={i}>
                    <div className="favBody">
                      <div className="state">
                        {searchData &&
                          searchData.location &&
                          searchData.location.city}
                        ,{" "}
                        {searchData &&
                          searchData.location &&
                          searchData.location.country}
                      </div>
                      <div className="threeElements">
                        <div className="elementOne">
                          <img
                            src={require("../../assets/icon_mostly_sunny_small.png")}
                            alt=""
                            className="elementOneImg"
                          />
                        </div>
                        <div className="elementTwo">
                          {searchData.current_observation.condition.temperature}
                          <span className="deg">&#8451;</span>
                        </div>
                        <div className="elementThree">
                          {searchData.current_observation &&
                            searchData.current_observation.condition &&
                            searchData.current_observation.condition.text}
                        </div>
                      </div>
                      <div className="fillHeart">
                        <img
                          src={require("../../assets/icon_favourite_Active.png")}
                          alt=""
                          className="fillHeartImg"
                        />
                      </div>
                    </div>
                    {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {dialog ? (
        <div>
          <div className="modalContainer">
            <div className="overlay">
              <div className="modalContent">
                <div className="infoModal">
                  Are you sure want to remove all the favourites?
                </div>
                <div className="modalButtons">
                  <form action="" className="modalForm">
                    <button className="btnNo" onClick={() => setDialog(false)}>
                      No
                    </button>
                    <button
                      className="btnNo"
                      type="button"
                      onClick={() => {
                        localStorage.removeItem("search");
                        setDialog(false);
                      }}
                    >
                      Yes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Recent;

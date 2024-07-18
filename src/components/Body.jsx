import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/CustomHooks/useRestaurantList";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";
import './Body.css'

const Body = () => {
  const { restaurantsList, isLoading, isError } = useRestaurantList();
  const [listRes, setListRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchinput, setSearchInput] = useState("");
  const checkOnline = useOnlineStatus();

  useEffect(() => {
    if (restaurantsList) {
      setListRes(restaurantsList);
      setFilterRes(restaurantsList);
    }
  }, [restaurantsList]);
  const handleSearch = () => {
    const fil = listRes.filter((res) =>
      res.info.name.toLowerCase().includes(searchinput.toLowerCase())
    );
    setFilterRes(fil);
  };

  const avgRatingHandle = () => {
    setFilterRes(listRes.filter((res) => res.info.avgRating >= 4.5));
  };

  if (isLoading) {
    return <ShimmerUi />;
  }

  if (isError) {
    return <div>Error loading data...</div>;
  }
  if (checkOnline === false) return <h1>Please check internet connection</h1>;
  return (
    <div>
      <div className="search-bar-container">
        <div className="search-bar">
          <input
            type="text"
            value={searchinput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          <button className="top-rated-button" onClick={avgRatingHandle}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filterRes.map((res) => (
          <div key={res?.info?.id}>
            <Link to={"/restaurant/" + res?.info?.id}>
              <RestaurantCard resData={res} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

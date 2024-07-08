import { resData } from "../utils/ResList";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
        <div>
          <button>Top Rated Restaurants</button>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {resData.map((resList, index) => (
          <div key={index}>
            <RestaurantCard resData={resList} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

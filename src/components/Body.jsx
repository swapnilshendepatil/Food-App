import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useQuery } from "@tanstack/react-query";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { fetchData } from "../utils/API";



const Body = () => {
  const {
    data: restaurantsList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["restaurantListData"],
    queryFn: fetchData,
  });

  const [listRes, setListRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchinput, setSearchInput] = useState("");

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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <input
            type="text"
            value={searchinput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          <button onClick={avgRatingHandle}>Top Rated Restaurants</button>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filterRes.map((res) => (
          <div key={res?.info?.id}>
            <Link to={'/restaurant/' + res?.info?.id}>
              <RestaurantCard resData={res} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

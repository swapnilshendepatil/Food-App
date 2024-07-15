import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useQuery } from "@tanstack/react-query";
import { Res_List_API } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";

const fetchData = async () => {
  try {
    const res = await fetch(Res_List_API);
    const data = await res.json();
    return (
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  } catch (error) {
    console.log(error);
  }
};

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

  console.log('list res',listRes)
  console.log('filter res',filterRes)


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
        {filterRes.map((res, index) => (
          <div key={index}>
            <RestaurantCard resData={res} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

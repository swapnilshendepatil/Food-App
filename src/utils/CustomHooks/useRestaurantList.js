import { useQuery } from "@tanstack/react-query";
import { Res_List_API } from "../constants";

const useRestaurantList = () => {
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
  const {
    data: restaurantsList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["restaurantListData"],
    queryFn: fetchData,
  });

  return { restaurantsList, isLoading, isError };
};

export default useRestaurantList;

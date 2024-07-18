import { useQuery } from "@tanstack/react-query";
import { Res_Menu } from "../constants";

const fetchMenuData = async ({ resId }) => {
  const res = await fetch(Res_Menu + resId);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

const useRestaurantMenu = (resId) => {
  const { data: resMenuList, isLoading } = useQuery({
    queryKey: ["resMenuData", resId],
    queryFn: () => fetchMenuData(resId),
  });
  return { resMenuList, isLoading };
};

export default useRestaurantMenu;

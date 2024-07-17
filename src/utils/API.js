import { Res_List_API, Res_Menu } from "./constants";

export const fetchData = async () => {
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

export const fetchMenuData = async ({ resId }) => {
    const res = await fetch(Res_Menu + resId);
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;

};
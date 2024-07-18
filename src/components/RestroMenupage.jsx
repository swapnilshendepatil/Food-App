import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/CustomHooks/useRestaurantMenu";

const RestroMenupage = () => {
    const resId = useParams();
    const [resInfo, setResInfo] = useState([]);
    const [menu, setMenu] = useState([]);
    const { resMenuList, isLoading } = useRestaurantMenu(resId)

    useEffect(() => {
        if (resMenuList) {
            setResInfo(resMenuList?.data?.cards[2]?.card?.card?.info);
            setMenu(
                resMenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
                    ?.card?.itemCards
            );
        }
    }, [resMenuList]);

    if (isLoading) return <div>Loading....</div>;

    return (
        <div>
            <h2>{resInfo?.name}</h2>
            <p>
                {resInfo?.cuisines ? resInfo.cuisines.join(",") : "N/A"}-
                {resInfo?.costForTwoMessage}
            </p>
            <span>{resInfo?.avgRating}</span>
            {menu.map((res) => (
                <li key={res?.card?.info?.id}>
                    {res?.card?.info?.name}-{res?.card?.info?.price / 100}
                </li>
            ))}
        </div>
    );
};

export default RestroMenupage;

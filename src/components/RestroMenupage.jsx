import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/CustomHooks/useRestaurantMenu";
import './ResMenuPage.css'

const RestroMenupage = () => {
    const resId = useParams();
    const [resInfo, setResInfo] = useState([]);
    const [menu, setMenu] = useState([]);
    const { resMenuList, isLoading } = useRestaurantMenu(resId)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (resMenuList) {
            setResInfo(resMenuList?.data?.cards[2]?.card?.card?.info);
            setMenu(
                resMenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
                    ?.card?.itemCards
            );
        }
    }, [resMenuList]);

    console.log(resMenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    if (isLoading) return <div>Loading....</div>;

    return (
        <div>
            <h2>{resInfo?.name}</h2>
            <p>
                {resInfo?.cuisines ? resInfo.cuisines.join(",") : "N/A"}-
                {resInfo?.costForTwoMessage}
            </p>
            <span>{resInfo?.avgRating}</span>

            <div className="menu-container">
                <h3 onClick={() => setOpen(!open)} className="menu-title">
                    {resMenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title}
                </h3>
                {open && (
                    <div className="menu-list">
                        {menu.map((res) => (
                            <li key={res?.card?.info?.id} className="menu-item">
                                {res?.card?.info?.name} - {res?.card?.info?.price / 100}
                            </li>
                        ))}
                    </div>
                )}
            </div>
            {/* {resMenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((resmenuList, index) => (
                <div key={index}>
                    <h3> {resmenuList?.card?.card?.title} </h3>
                    {resmenuList?.card?.card?.itemCards.map((menu) => (
                        <span>{menu?.card?.info?.name}</span>
                    ))}
                </div>
            ))} */}
        </div>
    );
};

export default RestroMenupage;

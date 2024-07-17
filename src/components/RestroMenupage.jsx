import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchMenuData } from "../utils/API";
import { useParams } from "react-router-dom";

const RestroMenupage = () => {
    const [resInfo, setResInfo] = useState([]);
    const [menu, setMenu] = useState([]);
    const resId = useParams()

    const { data, isLoading } = useQuery({
        queryKey: ['resMenuData', resId],
        queryFn: () => fetchMenuData(resId)
    })
    useEffect(() => {
        if (data) {
            setResInfo(data?.data?.cards[2]?.card?.card?.info)
            setMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        }
    }, [data])

    if (isLoading) return <div>Loading....</div>



    return (
        <div>
            <h2>{resInfo?.name}</h2>
            <p>{resInfo?.cuisines}-{resInfo?.costForTwoMessage}</p>
            <span>{resInfo?.avgRating}</span>
            {menu.map(res => <li key={res?.card?.info?.id}>{res?.card?.info?.name}-{res?.card?.info?.price / 100}</li>)}
        </div>
    );
};

export default RestroMenupage;

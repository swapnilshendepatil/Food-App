import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/CustomHooks/useRestaurantMenu";
import "./ResMenuPage.css";
import { CDN_URL } from "../utils/constants";
// import { CartContext } from "../context/CartContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RestroMenupage = () => {
    const resId = useParams();
    const [resInfo, setResInfo] = useState([]);
    const [menu, setMenu] = useState([]);
    const { resMenuList, isLoading } = useRestaurantMenu(resId);
    const [openIndex, setOpenIndex] = useState(null);

    // const values = useContext(CartContext)
    const dispatch = useDispatch()
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        if (resMenuList) {
            setResInfo(resMenuList?.data?.cards[2]?.card?.card?.info);
            setMenu(
                resMenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            );
        }
    }, [resMenuList]);

    const category = menu.filter(
        (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


    if (isLoading) return <div>Loading....</div>;
    const handleAddItems = (resList) => {
        dispatch(addItem({ name: resList?.card?.info?.name, price: resList?.card?.info?.price / 100 || resList?.card?.info?.defaultPrice / 100, photo: CDN_URL + resList?.card?.info?.imageId }))
        toast.success(`${resList?.card?.info?.name} Added in Cart`)
    }

    return (
        <div className="menu-container">
            <h2 className="restaurant-name">{resInfo?.name}</h2>
            <p className="restaurant-info">
                {resInfo?.cuisines ? resInfo.cuisines.join(",") : "N/A"}-
                {resInfo?.costForTwoMessage}
            </p>
            <span className="restaurant-rating">{resInfo?.avgRating}</span>
            <div className="accordion-container">
                {category.map((data, index) => (
                    <div key={index} className="accordion-item">
                        <h3 className="accordion-title" onClick={() => toggleOpen(index)}>
                            {data?.card?.card?.title}
                        </h3>
                        {openIndex === index && (
                            <ul className="accordion-content">
                                {data?.card?.card?.itemCards.map((resList, resIndex) => (
                                    <div
                                        key={resIndex}
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <li className="accordion-list-item">
                                            {resList?.card?.info?.name}
                                            <span> ₹{resList?.card?.info?.price / 100 || resList?.card?.info?.defaultPrice / 100}</span>
                                            <span style={{ fontSize: "small", width: "450px" }}>
                                                {resList?.card?.info?.description}
                                            </span>
                                        </li>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                padding: "10px",
                                            }}
                                        >
                                            <img
                                                style={{ width: "90px", height: "90px" }}
                                                src={CDN_URL + resList?.card?.info?.imageId}
                                            />
                                            {/* <button className="cart-btn" onClick={() => values.setData([...values.data, { name: resList?.card?.info?.name, price: resList?.card?.info?.price / 100 }])}>Add</button> */}
                                            <button className="cart-btn" onClick={() => handleAddItems(resList)}>Add</button>
                                            <ToastContainer />

                                        </div>
                                    </div>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestroMenupage;

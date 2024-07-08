import { CDN_URL } from "../utils/constants";
import "./resCard.css";
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-media">
          <img
            style={{ height: "200px", width: "100%" }}
            src={CDN_URL + cloudinaryImageId}
          />
          <div className="delivery-time">
            {resData.info.sla.deliveryTime} min
          </div>
          <div className="bookmark"></div>
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <p className="place-name">{name}</p>
              <p className="place-speciality">{cuisines.join(",")}</p>
            </div>
            <div className="place-review">
              <p className="rating">{avgRating}&#x2605;</p>
              <p className="per-person">{costForTwo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

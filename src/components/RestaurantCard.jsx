import "./resCard.css";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-media">
          <img
            style={{ height: "200px", width: "100%" }}
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              resData.info.cloudinaryImageId
            }
          />
          <div className="delivery-time">
            {resData.info.sla.deliveryTime} min
          </div>
          <div className="bookmark"></div>
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <p className="place-name">{resData.info.name}</p>
              <p className="place-speciality">
                {resData.info.cuisines.join(",")}
              </p>
            </div>
            <div className="place-review">
              <p className="rating">{resData.info.avgRating}&#x2605;</p>
              <p className="per-person">{resData.info.costForTwo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

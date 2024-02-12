const Card = (props) => {
  const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
     } = resData?.info;
    return (
      <div className= "w-[300px] p-3 border-solid border-gray-500 bg-orange-100 rounded-xl m-3 hover:bg-orange-200 ">
        <img src={CDN_URL+cloudinaryImageId} alt="restaurant img" className="rounded-xl"></img>
        <h3 className=" font-bold py-1 text-lg">{name}</h3>
        <h4 className=" font-semibold">{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };
  
 export default Card; 

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const Products = () => {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        (async function () {
            try {
                const response = await fetch("/product.json");
                const data = await response.json();
                console.log(data);
                setData(data);
                setisLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        })();
    }, []);
    function ratings(rating) {
        let count = rating.count;
        if (count > 0) {
            if (count < 1) {
                return <FaStarHalfAlt />
            }
            rating.count--;
            return <FaStar />
        }
        else {
            rating.count--;
            return <FaRegStar />
        }
    }
    return (
        <div className="product-container">
            {isLoading ? <h1>Loading..</h1> : data.map(item => {
                let rating = { count: item?.rating };
                return (
                    <Link to={`${encodeURIComponent(item.productName.split(" ").join("-"))}/details/${item.id}`} key={item.id}>
                        <div className="card">
                            <div className="card-img">
                                <img src={`/images/${item.img}`} alt={item.productName} />
                            </div>
                            <div className="desc">
                                <span className="brand">{item.brand}</span>
                                <h1 className="product-name">{item.productName}</h1>
                                <p className="rating-stars" title={`Ratings: ${rating.count}`}>
                                    {ratings(rating)}
                                    {ratings(rating)}
                                    {ratings(rating)}
                                    {ratings(rating)}
                                    {ratings(rating)}
                                </p>
                                <p>{item.price ?
                                    <span><span className="item-price">&#8377;{item.price}</span> &nbsp;<strike className="strike-price">&#8377;{item.mrp}</strike>&nbsp;<span className="discount-percent">({((parseFloat(item.price) / parseFloat(item.mrp)) * 100).toFixed(2)}% off)</span></span>
                                    :
                                    <span className="item-price">&#8377;{item.mrp}</span>}
                                </p>

                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
export default Products;
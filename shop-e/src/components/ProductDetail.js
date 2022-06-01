import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaSearchLocation } from "react-icons/fa";
import "./ProductDetail.css";
const fetchData = async (id, setProductDetails, setIsLoadingFail) => {
    try {
        const res = await fetch(`/${id}.json`);
        if (res.ok) {
            const data = await res.json();
            setProductDetails(data);
        }

        // console.log(data);
    }
    catch (err) {
        console.log(err);
        setProductDetails(null);
        setIsLoadingFail(true);
    }
}
const ProductDetail = () => {
    const [productDetails, setProductDetails] = useState();
    const [isLoadingFail, setIsLoadingFail] = useState(false);
    const id = useParams("id").id;
    useEffect(() => {
        fetchData(id, setProductDetails, setIsLoadingFail);
    }, [id, isLoadingFail]);
    return (
        productDetails ? <RenderProduct productDetails={productDetails} /> : (isLoadingFail ? <div className="somthing-went-wrong"><h1>Somthing Went Wrong!</h1><Link to="/">Back Home</Link> </div> : <h1>Loading...</h1>)
        // <article className="product">
        //     <div className="product-img">
        //         <img src={`/images/${productDetails?.img}`} alt={productDetails?.productName} />
        //     </div>
        //     <div className="product-details">
        //         <span className="product-brand">{productDetails?.brand}</span>
        //         <h1 className="product-name">{productDetails?.productName}</h1>
        //         <p>{productDetails?.price ?
        //             <span><span className="item-price">&#8377;{productDetails?.price}</span> &nbsp;<strike className="strike-price">&#8377;{productDetails?.mrp}</strike>&nbsp;<span className="discount-percent">({((parseFloat(productDetails?.price) / parseFloat(productDetails?.mrp)) * 100).toFixed(2)}% off)</span></span>
        //             :
        //             <span className="item-price">&#8377;{productDetails?.mrp}</span>}
        //         </p>
        //         <br></br>
        //         <p>Size: {
        //             Object?.keys(productDetails?.size)
        //         }</p>
        //     </div>
        // </article >
    );
}

const RenderProduct = ({ productDetails }) => {
    const [pincode, setPincode] = useState("");
    const [deleveryDate, setDeleveryDate] = useState("");
    function checkDelevery(e) {
        e.preventDefault();
        if (pincode.length != 6 || isNaN(pincode) || /\s/.test(e.target.value)) {       // /\s/ is a regex commant to check for space between string
            console.log("Please provide correct pin")
            setDeleveryDate(false);
            return;
        }
        console.log("Delevery within 2 days")
        setDeleveryDate("delevery within 2 days, Delevery chargers: Rs 40");
        return;
        //check for delevery avalibility in that pincode // use pincode useState;
    }
    function checkPincode(e) {
        if (isNaN(e.target.value) || /\s/.test(e.target.value)) return;
        setPincode(e.target.value);
    }
    let rating = { count: productDetails?.rating };
    return (
        <article className="product">
            <div className="product-img">
                <img src={`/images/${productDetails?.img}`} alt={productDetails?.productName} />
            </div>
            <div className="product-details">
                <span className="product-brand">{productDetails?.brand}</span>
                <h1 className="product-name">{productDetails?.productName}</h1>
                <p>{productDetails?.price ?
                    <span><span className="item-price">&#8377;{productDetails?.price}</span> &nbsp;<strike className="strike-price">&#8377;{productDetails?.mrp}</strike>&nbsp;<span className="discount-percent">({((parseFloat(productDetails?.price) / parseFloat(productDetails?.mrp)) * 100).toFixed(2)}% off)</span></span>
                    :
                    <span className="item-price">&#8377;{productDetails?.mrp}</span>}
                </p>

                <p className="rating-stars" title={`Ratings: ${productDetails.rating.count}`}>
                    {ratings(rating)}
                    {ratings(rating)}
                    {ratings(rating)}
                    {ratings(rating)}
                    {ratings(rating)}
                </p>

                <br></br>
                <div className="other-varients">
                    <div>Size: {
                        getOtherVarients(productDetails.size, productDetails)
                    }</div>
                    <div>Color: {
                        getOtherVarients(productDetails.color, productDetails)
                    }</div>
                </div>
                <div>
                    <form onSubmit={checkDelevery} className="check-delevery-form">
                        <label>
                            <FaSearchLocation />
                            <input type="text" name="name" onChange={checkPincode} value={pincode} placeholder="Enter delevery pincode" />
                        </label>
                        <input type="submit" value="Check" />
                    </form>
                    <div className="is-delevery-available">{deleveryDate ? <div className="product-available-at-location">{deleveryDate}</div> : (deleveryDate === false ? <div className="incorrect-pincode">Please enter correct Pincode</div> : null)}</div>
                </div>
                <button className="primary-btn-250px">Add to Cart</button>
                <div className="about-product">

                    <h4>About the Product</h4>

                    <ul>
                        {productDetails.aboutProduct.map(item => {

                            return <li key={Math.random()}>{item}</li>;

                        })}
                    </ul>
                </div>
            </div>
        </article >
    )
}
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
function getOtherVarients(otherVarients, currentVarient) {
    let Temp = [];
    for (const item in otherVarients) {
        Temp.push(<Link className={currentVarient.id === otherVarients[item].id ? "current-varient other-varient-colors" : "other-varient-colors"} key={otherVarients[item].id} to={`/products/${encodeURIComponent(otherVarients[item].productName.split(" ").join("-"))}/details/${otherVarients[item].id}`}>{checkIfColor(item) ? <span className="color-box-details-page" style={{ backgroundColor: item }}></span> : item}</Link >)
    }
    return Temp;
}

function checkIfColor(str) {
    if (str[0] != '#')
        return false;

    if (!(str.length == 4 || str.length == 7))
        return false;

    for (let i = 1; i < str.length; i++)
        if (!((str[i] >= '0' && str[i] <= 9)
            || (str[i] >= 'a' && str[i] <= 'f')
            || (str[i] >= 'A' || str[i] <= 'F')))
            return false;

    return true;
}
export default ProductDetail;
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
                <br></br>
                <div className="other-varients">
                    <div>Size: {
                        getOtherVarients(productDetails.size, productDetails)
                    }</div>
                    <div>Color: {
                        getOtherVarients(productDetails.color, productDetails)
                    }</div>
                </div>
                <button className="primary-btn-250px">Add to Cart</button>
            </div>
        </article >
    )
}

function getOtherVarients(otherVarients, currentVarient) {
    let Temp = [];
    for (const item in otherVarients) {
        Temp.push(<Link className={currentVarient.id === otherVarients[item].id ? "current-varient other-varient-colors" : "other-varient-colors"} key={otherVarients[item].id} to={`/products/${encodeURIComponent(otherVarients[item].productName.split(" ").join("-"))}/details/${otherVarients[item].id}`}>{checkIfColor(item) ? <span className="color-box-details-page" style={{ backgroundColor: item }}></span> : item}</Link >)
    }
    // console.log(Temp);
    return Temp;
    // var MyComponent = Components[type + "Component"];
    // return <MyComponent />;
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
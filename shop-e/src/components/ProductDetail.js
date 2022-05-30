import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetail.css";
const fetchData = async (id, setProductDetails) => {
    const res = await fetch(`/${id}.json`);
    const data = await res.json();
    setProductDetails(data);
    console.log(data);

}
const ProductDetail = () => {
    const [productDetails, setProductDetails] = useState();
    const id = useParams("id").id;
    useEffect(() => {
        fetchData(id, setProductDetails);
    }, [id]);
    return (
        // productDetails ? <RenderProduct /> : <h1>Loading...</h1>
        < article className="product" >
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
            </div>
        </article >
    );
}

// const RenderProduct = () => {
//     return (< article className="product-details" >
//         <div className="img">
//             <img src={`${productDetails.img}`} />
//         </div>
//     </article >)
// }
export default ProductDetail;
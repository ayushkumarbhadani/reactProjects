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
                <h2>{productDetails?.productName}</h2>
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
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const fetchData = async (id, setProductDetails) => {
    const res = await fetch(`/${id}.json`);
    const data = await res.json();
    setProductDetails(data);

}
const ProductDetail = () => {
    const [productDetails, setProductDetails] = useState();
    const id = useParams("id").id;
    useEffect(() => {
        fetchData(id, setProductDetails);
    }, [id]);
    return (
        <article className="product-details">Hello</article>
    );
}
export default ProductDetail;
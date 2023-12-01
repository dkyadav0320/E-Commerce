import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { addCart } from './redux/action';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';



const Product = () => {
const {id} = useParams();
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(false);

const dispatch = useDispatch();
const addProduct = (product) => {
    dispatch(addCart(product));
}
useEffect (() => {
    try {

    
    const getProduct = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        console.log ("Product",response);
if (!response.ok) {
    console.log ("response not ok")
    throw new Error('Network response was not ok.');
}
const data = await response.json();
setProduct(data);
console.log ("Product X ",product);
console.log ("data ",data);
setLoading(false);
if (!data) {
    console.log ("data not found");
    throw new Error('Empty response received from the API.');
} else {
    // setProduct(data);
}
        // const response = await fetch("https://fakestoreapi.com/products/${id}");
        // setProduct(await response.json());
       
    }
    getProduct();}
    catch  (err) {
        console.log("error getting data", err);
        setLoading(false);
    }

}, [id]);


    const Loading= () => {
        return (
            <>
            <div className="col-md-6">
                <Skeleton height={350}/>
                </div> 
                <div className="col-md-6" style={{lineHeight:3}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton   height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton   height={50} />
                    <Skeleton   height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={150} style={{marginLeft:5}} />
                    </div>        
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
            <div className="col-md-6">
                <img src= {product.image} alt= {product.title}
                height= "350px" width= "350px" />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercae text-black-45">
                    {product.category}
                </h4>
                <h1 className="display-5"> {product.title}</h1>
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate} 
                    <i className= "fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">
                    $ {product.price}
                </h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark px-4 py-2" onClick= {() => addProduct(product)}>
                    Add to Cart
                </button>
                <NavLink to = "/cart" className= "btn btn-dark ms-2 px-3 py-2">
                    Go to Cart
                </NavLink>
            </div>
            </>
        )
    }
    return (
       <div>
        <div className="container py-5">
            <div className="row py-3">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
       </div>
    );
}

export default Product;
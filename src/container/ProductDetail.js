import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useEffect} from 'react'
import {useDispatch,useSelector } from 'react-redux'
import {selectproduct,removeSelectproduct} from '../redux/actinos/productActions'

const ProductDetail= ()=>{
    const product= useSelector(state => state.product)
    const {image,title,price,category,description}=product
    const {productId}=useParams()
   const dispatch = useDispatch()
  
    const fetchProductDetail=async()=>{
        const result = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(console.error())
        dispatch(selectproduct(result.data))
    }
    useEffect(()=>{
        if(productId && productId !== "") fetchProductDetail()
        return()=>{
            dispatch(removeSelectproduct())
        }
    },[productId])
    return(
        <div className='ui grid container'>
            {Object.keys(product).length === 0 ?(<div>...loading</div>
            ): (<div className='ui placeholder segment'>
                <div className='ui tow column stackable center aligned grid'>
                    
                    <div >
                        <div className='ui small image '>
                            <img className='ui fluid image' src={image} />
                        </div>
                        <div className='column rp'>
                            <h1>{title}</h1>
                            <h2>
                               <a className='ui teal tag label'>${price}</a> 
                            </h2>
                            <h3 className='ui brown block header'>{category}</h3>
                            <p>{description}</p>
                            <div className='ui vertical animated button' tabIndex="0">
                                <div className='hidden content'>
                                    <i className='shop icon'></i>
                                </div>
                                <div className='visible content'>Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
           
        </div>
    )
}

export default ProductDetail
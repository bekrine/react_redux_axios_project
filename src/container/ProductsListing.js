import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ProductContainer from './ProductContainer'
import axios from 'axios'
import { useEffect } from 'react'
import {setproducts} from '../redux/actinos/productActions'

const ProductsListing=()=>{     
    const products = useSelector(state => state)
    const dispatsh=useDispatch()
    const fetchProduct=async()=>{
        const respance= await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log('erro',err)
            
        })
        dispatsh(setproducts(respance.data) )
    }
    useEffect(()=>{
        fetchProduct();
    },[])
    console.log('product:',products)
    return(
        <div className='ui grid container' >
            <ProductContainer/>
        </div>
    )
}

export default ProductsListing
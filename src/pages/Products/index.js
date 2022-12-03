import {Link, Outlet} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Products = () => {
	const [products, setProducts] = useState([])

	const PRODUCT_API = 'https://637899960992902a251e3530.mockapi.io/ci77/products'

	const handleGetProducts = () => {
        axios.get(PRODUCT_API)
            .then(function (response) {
                // handle success
                setProducts(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

	const handleCreateProduct = () => {
		const product = {
			name: "Iphone 14 Pro Max",
			price: 33000000,
			color: "green",
			id: "4"
		}
        axios.post(PRODUCT_API, product)
            .then(function (response) {
                // handle success
                setProducts(prev => [...prev, response.data])
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

	const renderProducts = (products) => {
		return products.map(product => {
			const { id, name } = product;
			const productLink = `product/${id}`
			return <li key={id}><Link to={productLink}>{name}</Link></li> 
		} )
	}

	return (
		<div>
			<button onClick={handleGetProducts}>Get Products</button>
			<button onClick={handleCreateProduct}>Create Product</button>
		<ul>
			{renderProducts(products)}
		</ul>
		<Outlet />
		</div>
	)
};

export default Products;
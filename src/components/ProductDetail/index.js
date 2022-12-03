import {useParams} from 'react-router-dom'

const ProductDetail = () => {
	const params = useParams();
	return (
		<h3>Product {params.productId}</h3>
	)
}

export default ProductDetail
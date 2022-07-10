import {useParams} from "react-router-dom"

const Product = () => {
  const param = useParams()
  return (
    <div>
      <h1>Product Page - {param.productId}</h1>
    </div>
  )
}

export default Product

import {Link, useParams} from "react-router-dom";
import products from '../data'
const SingleProduct = () => {
  const {productid} = useParams();
  const product = products.find((product)=> product.id === productid);
  const {image, name} = product;
  return (
    <section className='section product'>
    <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>Back to the product</Link>
    </section>
  );
};

export default SingleProduct;

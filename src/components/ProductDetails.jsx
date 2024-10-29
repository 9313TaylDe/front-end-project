import ListaProducts from "../components/ListaProducts";
import CardProducts from "../components/CardProducts";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartProvider";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, removeFromCart } = useContext(CartContext); // Updated

  const productItem = ListaProducts.find((item) => item.id === parseInt(id));
  if (!productItem) {
    <h2>Produto não encontrado</h2>;
  }
  return (
    <div className="container-products-details">
      <CardProducts
        key={productItem.id}
        id={productItem.id}
        nome={productItem.nome}
        image={productItem.image}
        price={productItem.price}
        new_price={productItem.new_price}
        model={productItem.model}
        disccount={productItem.disccount}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </div>
  );
};

export default ProductDetails;

// import ListaProducts from "../components/ListaProducts";
// import CardProducts from "../components/CardProducts";
// import { useParams } from "react-router-dom";
// import { useContext, useState } from "react";
// import { CartContext } from "./CartProvider";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { addToCart, removeFromCart } = useContext(CartContext); // Updated

//   // Find product from the ListaProducts array
//   const productItem = ListaProducts.find((item) => item.id === parseInt(id));

//   if (!productItem) {
//     return <h2>Produto não encontrado</h2>;
//   }

//   return (
//     <div>
//       <CardProducts
//         key={productItem.id}
//         id={productItem.id}
//         nome={productItem.nome}
//         image={productItem.image}
//         price={productItem.price}
//         new_price={productItem.new_price}
//         model={productItem.model}
//         disccount={productItem.disccount}
//         removeFromCart={removeFromCart}
//         addToCart={addToCart}
//       />
//       <section>
//         <span className="tituloPrincipal">
//           <h2>Hamburguer</h2>
//         </span>
//         {productItem.model.split("\n").map((item, index) => (
//           <li className="descriptionPage" key={index}>
//             {item}
//           </li>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default ProductDetails;

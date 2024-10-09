import { setLocalStorage, getLocalStorage, getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';


const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

  // //const dataSource = new ProductData("tents");
  
  // function addProductToCart(product) {
  //   // TODO product should be an array
  //   const currentCart = getLocalStorage("so-cart") || [];
  //   currentCart.push(product);
  //   setLocalStorage("so-cart", currentCart);
  // }
  
  // // add to cart button event handler
  // async function addToCartHandler(e) {  
  //   const product = await findProductById(e.target.dataset.id);
  //   addProductToCart(product);
  // }
  
  // // add listener to Add to Cart button
  // document
  //   .getElementById("addToCart")
  //   .addEventListener("click", addToCartHandler);

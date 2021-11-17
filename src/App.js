import React,{useState} from 'react'
import Data from "./data";
import Navbar from "./Navbar"
import "./App.css"
import Main from "./Main";
import Basket from "./Basket"

function App() {
const {products} = Data
const[cartItems,setCartItems] = useState([])

const onAdd = (product) => {
 const exist = cartItems.find((x) => x.id === product.id) ;
 if(exist){
   setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty : exist.qty + 1 } : x ))
} else {
  setCartItems([...cartItems, {...product,qty:1}])
}
};





const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        
      )
    );
  }
};


  return (
    <div className="App">
     <Navbar cartItems={cartItems}/>
     <Main products={products}  onAdd={onAdd}/>
     <hr/>
     <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
    </div>
  );
}

export default App;

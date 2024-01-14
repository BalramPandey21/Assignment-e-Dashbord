// import React from "react";
// import "./App.css";
// import Navbar from "./Compoents/Navbar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./Compoents/Signup";
// import Login from "./Compoents/Login";
// import PrivateComponent from "./Compoents/PrivateComponent";
// import AddProduct from "./Compoents/AddProduct";
// import UpdateProduct from "./Compoents/UpdateProduct";
// import ProductsPage from "./Compoents/ProductsPage";

// export default function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar/>
//         <Routes>
//           <Route element={<PrivateComponent />}>
//             <Route path="/" element={<ProductsPage />}/>
//             <Route path="/add" element={<AddProduct />}/>
//             <Route path="/update/:id" element={<UpdateProduct/>}/>
//             <Route path="/profile" element={<h1>Profile Page</h1>}/>
//             <Route path="/logout" element={<h1>logout Page</h1>} />
//           </Route>
//           <Route path="/signup" element={<Signup/>}/>
//           <Route path="/login" element={<Login />}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './E-commerce/HomePage';
import NavBar from './E-commerce/NavBar';
import Products from './E-commerce/Products';
import AddProduct from './E-commerce/AddProduct';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

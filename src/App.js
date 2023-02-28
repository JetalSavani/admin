import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Catagory from "./Catagory";
import Subcatagory from "./Subcatagory";
import Product from "./Product/Product";
import Color from "./Color";
import Datatable from "./Datatable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/form1" element={<Form1 />}></Route>
          <Route path="/form2" element={<Form2 />}></Route>
          <Route path="/catagory" element={<Catagory />}></Route>
          <Route path="/subcatagory" element={<Subcatagory />}></Route>

          <Route path="/product" element={<Product />}></Route>

          <Route path="/color" element={<Color />} />

          <Route path="/datatable" element={<Datatable/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

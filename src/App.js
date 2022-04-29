import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Navebar from "./components/Navebar";
import styled from "styled-components";
import Cart from "./pages/Cart";


const Container = styled.div`
  
`;

const App = () => {
  return  (
       <Container>
      <Cart />

       </Container>
     );

};


export default App;

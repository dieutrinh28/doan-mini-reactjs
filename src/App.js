
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductListAPI from './components/api/ProductListAPI';
import CreateProductAPI from './components/api/CreateProductAPI';
import UpdateProductAPI from './components/api/UpdateProductAPI';
import Home from './components/Home';
import Login from './components/Login';
// import ProductList from './components/ProductList';
// import AddProduct from './components/AddProduct';
//import EditProduct from './components/EditProduct';

 
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route exact path='/login'  element={<Login />} />
          <Route exact path='/list' element={<ProductListAPI />} />
          <Route exact path='/create' element={<CreateProductAPI/>} />
          <Route exact path='/edit' element={<UpdateProductAPI />} />          
        </Routes>
      </Router>
     
    </div>
  );
}
export default App;

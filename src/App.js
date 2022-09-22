
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/create' element={<AddProduct/>}/>
          <Route exact path='/edit' element={<EditProduct/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

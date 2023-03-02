
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { NotFound } from './Components/NotFound';
import { ProductDetail } from './Components/ProductDetails';
import {Products} from './Components/Products';

function App() {
  
  return (
    <div >
      <NavBar></NavBar>
    <Routes>
      <Route path="/Products">
        <Route  path="list" element={<Products/>}/>
        <Route path="detail/:name" element={<ProductDetail />}></Route>
        <Route  path="*" element={<NotFound/>}/>
      </Route>
    
    </Routes>
        
       
      
    </div>
  );
}

export default App;


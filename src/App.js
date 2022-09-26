import './App.css';
import ProductForm from './Components/ProductForm.jsx';
import ProductListing from './Components/ProductListing.jsx';

function App() {
  return (
    <div className="App">
       <button onClick={()=><ProductForm/>}>List New Product</button>
       
       <button onClick={()=><ProductListing/>}>Available Products</button>
       
    </div>
  );
}

export default App;

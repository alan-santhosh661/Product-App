import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <AddProduct />
      <SearchProduct />
      <ShoppingCart />
    </div>
  );
}

export default App;

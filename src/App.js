import './App.css';
import { Buy } from './Component/Buy';
import { Return } from './Component/Return';
import { Shop } from './Component/Shop';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { ShirtShop } from './Component/ShirtShop';
import { JeanShop } from './Component/JeansShop';
import { ShopDetails } from './Component/ShopDetails';
import ShopusingConect from './Component/ShopusingConect';
import { Login } from './Component/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/* <ShopDetails/> */}
        {/* <Shop/>
        <Buy/>
        <Return/> */}
        {/* <ShirtShop/> */}
        {/* <JeanShop/> */}
        {/* <ShopusingConect/> */}
        <Login/>
        </header>
      </div>
    </Provider>
  );
}

export default App;

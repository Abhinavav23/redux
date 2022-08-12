import './App.css';
import { Buy } from './Component/Buy';
import { Return } from './Component/Return';
import { Shop } from './Component/Shop';
import { Provider } from 'react-redux'
import {store} from './redux/redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        <Shop/>
        <Buy/>
        <Return/>
        </header>
      </div>
    </Provider>
  );
}

export default App;

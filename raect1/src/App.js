import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import {Stor} from './Stor';
import Productpath from './Productpath';

function App() {

  return (
    <div className="App">

      <Provider store={Stor}>
          <Productpath/>
      </Provider>
      
    </div>
  );
}

export default App;

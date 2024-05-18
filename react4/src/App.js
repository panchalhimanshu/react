import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Showdata from './Showdata';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Adddata from './Adddata';

function App() {
  
  return (
    <div className="">
<Adddata/>
<Showdata/>
    </div>
  );
}

export default App;

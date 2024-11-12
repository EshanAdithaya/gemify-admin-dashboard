import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './admin/layouts/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import Collections from './admin/pages/Collections';
import Auctions from './admin/pages/Auctions';
import Marketplace from './admin/pages/Marketplace';
import Customers from './admin/pages/Customers';
import Analytics from './admin/pages/Analytics';
import Messages from './admin/pages/Messages';
import Orders from './admin/pages/Orders';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

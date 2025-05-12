import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Login from './layouts/auth/Login'
import Crudbarang from './components/Crudbarang';
import Customer from './components/Customer';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/barang" element={<Crudbarang />} />
                <Route path="/customer" element={<Customer />} />
            </Routes>
        </BrowserRouter>
    );
  };
  

ReactDOM.createRoot(document.getElementById('app')!).render(<App />)

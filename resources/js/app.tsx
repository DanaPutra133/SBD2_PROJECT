import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Login from './layouts/auth/Login'
import Crudbarang from './components/Crudbarang';
import Customer from './components/customer';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/barang" element={<Crudbarang />} />
                <Route path="/customer" element={<Customer />} />
            </Routes>
        </BrowserRouter>
    );
  };
  

ReactDOM.createRoot(document.getElementById('app')!).render(<App />)

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './pages/Login/Login';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import { AuthProvider } from './pages/Context/AuthContext';
import Identifiants from './pages/Usuarios/Identifiants';
import Parameters from './pages/Parameters/Parameters';
import ClientForm from './pages/Parameters/components/ClientForm/ClientForm';
import ProductForm from './pages/Parameters/components/ProductForm/ProductForm';
import SupplierForm from './pages/Parameters/components/SupplierForm/SupplierForm';
import Categories from './pages/Parameters/components/Categories/Categories';
import Functionalities from './pages/Functionalities/Functionalities';
import FunctPage from './pages/Functionalities/components/Functpage/FunctPage'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header/>
            <main>
              <Routes>
                <Route index element={<Login/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/identifiants"} element={<Identifiants/>}/>
                <Route path={"/parameters"} element={<Parameters/>}>
                  <Route index element={<ProductForm/>}/>
                  <Route path={'clientForm'} element={<ClientForm/>}/>
                  <Route path={'productForm'} element={<ProductForm/>}/>
                  <Route path={'supplierForm'} element={<SupplierForm/>}/>
                  <Route path={'categories'} element={<Categories/>}/>
                </Route>
                <Route path={"/fonctionalites"} element={<Functionalities/>}/>
                <Route path={'/fonctionalites/:functName'} element={<FunctPage/>}/>
              </Routes>
            </main>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from "./component/Products";
import Product from "./component/Product";
function App() {
  const browserRouter = createBrowserRouter (
    [{
      path : "/", 
      element: <Navbar/>,
      children : [{index: true, element: <Home />},
    {path : "/products", 
  element: <Products /> },
{path : "/products/:id", element: <Product />},

    ]
    }]
  )
  return (
 <>
  {/* <Routes>
  <Route path='/' component= {<Home/>} />
    <Route path="/products" component= {Products} />
    <Route path="/products/:id" component= {Product} />
    </Routes>
   <Navbar/> */}
   <RouterProvider router={browserRouter}/>
 </>
  );
};

export default App;

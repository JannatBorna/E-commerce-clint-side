import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Authentication/Login";
import AuthProvider from "./AuthProvider/AuthProvider";
import Register from "./components/Authentication/Register";
import Singlepage from "./components/Singlepage/Singlepage";
import Cart from "./components/Cartpage/Cart";
import Checkout from "./Checkoutpage/Checkout";
import NotFound from "./components/Shared/NotFound/NotFound";
import Products from "./components/Home/Products/Products/Products";
import Blog from "./components/Home/Blogs/Blog";

import Payment from "./Payment/Payment";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Addproduct from "./components/Dashboard/Addproduct/Addproduct";
import Dashboardhome from "./components/Dashboard/Dashboardhome/Dashboardhome";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddProducts from "./components/Dashboard/Admin/Admin/AddProducts";
import MakeAdmin from "./components/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageProducts from "./components/Dashboard/Admin/ManageProducts/ManageProducts";
import Dashboardbanner from "./components/Dashboard/Dashboardbanner/Dashboardbanner";
import Myorders from "./components/Dashboard/Myoders/Myorders";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/singlepage/:id" element={<PrivateRoute><Singlepage /></PrivateRoute>} />
            <Route path="/cartpage" element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path="/payment/:id" element={<PrivateRoute><Payment /></PrivateRoute>} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              >
                <Route
                  exact
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboardbanner/>
                    </PrivateRoute>
                  }
              ></Route>
              <Route
                exact
                path="/dashboard/myorders"
                element={
                  <PrivateRoute>
                    <Myorders/>
                  </PrivateRoute>
                }
              ></Route>
             

              <Route
                exact
                path="/dashboard/allorderproduct"
                element={
                  <AdminRoute>
                    <Dashboardhome></Dashboardhome>
                   </AdminRoute>
                }
              ></Route>
              

              <Route
                path="/dashboard/addproduct"
                element={
                  <AdminRoute>
                    <AddProducts/>
                  </AdminRoute>
                }
              ></Route>
              <Route
                  path={`/dashboard/makeAdmin`}
                  element={
                    <AdminRoute>
                      <MakeAdmin/>
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path={`/dashboard/manageProduct`}
                  element={
                    <AdminRoute>
                      <ManageProducts/>
                    </AdminRoute>
                  }
              >
                
                </Route>
            </Route>
            <Route path="/checkout/:total" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route exact path="*" element={<NotFound />}>
            </Route>
          

           
         </Routes> 
         
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

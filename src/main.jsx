import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// Pages 
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';

// Css 
import "./LocationsTable.css"
import AdminAddNew from './pages/AdminAddNew';
import AdminEdit from './pages/AdminEdit';
import Home from './pages/Home';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import TermsOfService from './components/Footer/TermsOfService';

window.global = window;
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, 
  {
    path: '/admin/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <AdminPanel />
  },
  {
    path: '/admin/add',
    element: <AdminAddNew />
  },
  {
    path: '/admin/edit/:id',
    element: <AdminEdit />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  },
  {
    path: '/terms-of-service',
    element: <TermsOfService />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

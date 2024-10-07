import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/Singup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
  },
  {
    path: '/user-page',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

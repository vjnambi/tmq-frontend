import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home';

import Game from './pages/Game';
import { loader as gameLoader } from './pages/Game';

function App() {

  const router = createBrowserRouter([
    {
      path: '/game/:id',
      element: <Game />,
      loader: gameLoader
    },
    {
      path: '/',
      element: <Home />,
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

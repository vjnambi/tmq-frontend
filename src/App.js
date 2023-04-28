import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home';

import Game from './pages/Game';
import { loader as gameLoader } from './pages/Game';
import ApplePay from './pages/ApplePay';
import Register from './pages/Register';
import Login from './pages/Login';
import {loader as qsLoader} from './pages/QuestionSets';
import QuestionSets from './pages/QuestionSets';
import {loader as qLoader} from './pages/Questions';
import Questions from './pages/Questions'
import Search from './pages/Search';

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
    {
      path: '/apple',
      element: <ApplePay />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/questionsets',
      element: <QuestionSets />,
      loader: qsLoader
    },
    {
      path: '/questions/:qsId',
      element: <Questions />,
      loader: qLoader
    },
    {
      path: '/search',
      element: <Search />
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

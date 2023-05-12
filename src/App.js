import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import SubjectResults from './components/SubjectResults';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'subjects/:name',
        element: <SubjectResults />
      },
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])


function App() {
  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from "react-router-dom";
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';
import { authenticatedRoutes, unauthenticatedRoutes } from './routes';
import Admin from './containers/Admin';

function App() {
  return (
    <>
      <Routes>
        {unauthenticatedRoutes.map((route:any, index:any) => (
          <Route key={index} path={route.path} element={
            <Suspense fallback={<Loader />}>
              {route.element}
            </Suspense>
          } />
        ))}

        <Route element={<Admin />}>
          {authenticatedRoutes.map((route:any, index:any) => (
            <Route key={index} path={route.path} element={
              <Suspense fallback={<Loader />}>
                {route.element}
              </Suspense>
            } />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;

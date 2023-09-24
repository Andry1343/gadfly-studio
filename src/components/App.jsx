import { Layout } from './layout/layout';
import { lazy } from 'react';
//import { Home } from './pages/home/home';
import { Routes, Route } from 'react-router-dom';
//import { Prices } from './pages/prices/prices';
import { NotFound } from './pages/notFound/notFound';

const Home = lazy(() => import('./pages/home/home'));
const Prices = lazy(() => import('./pages/prices/prices'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      
    </Routes>
    
  );
};

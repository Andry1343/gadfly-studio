import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/notFound/notFound';
import Contacts from './pages/contacts/contacts';

const Layout = lazy(() => import('./layout/layout'));
const Home = lazy(() => import('./pages/home/home'));
const Prices = lazy(() => import('./pages/prices/prices'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  );
};

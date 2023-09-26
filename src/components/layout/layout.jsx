import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="prices">Ціни</NavLink>
          <NavLink to="contacts">Контакти</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>

    </>
  );
};

export default Layout;

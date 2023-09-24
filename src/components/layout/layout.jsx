import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="prices">Prices</NavLink>
        </nav>
      </header>

      {/* <footer>
        <h1>Foter</h1>
      </footer> */}

      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>

    </>
  );
};

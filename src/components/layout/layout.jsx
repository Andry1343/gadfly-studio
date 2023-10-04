import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import styles from 'components/layout/layout.module.css'


export const Layout = () => {
  return (
      <div className='container'>
         <header className={styles.navigatoin}>
        <nav>
          <NavLink to="/" end className={styles.navigatoin_a}><span className={styles.navigatoin_text}>Home</span></NavLink>
          <NavLink to="prices" className={styles.navigatoin_a}><span className={styles.navigatoin_text}>Ціни</span></NavLink>
          <NavLink to="contacts" className={styles.navigatoin_a}><span className={styles.navigatoin_text}>Контакти</span></NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>
      </div>
  );
};

export default Layout;

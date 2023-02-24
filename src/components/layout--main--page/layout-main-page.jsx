import { Outlet } from 'react-router-dom';
import { NavMenu } from '../nav-menu/nav-menu';
import '../../index.css';

export function LayoutMainPage() {
  return (
    <div className='outlet-wrapper'>
      <NavMenu />
      <Outlet />
    </div>
  );
}

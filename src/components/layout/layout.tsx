import '../../index.css';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Error } from '../error/error';
import { useAppSelector } from '../../hooks/storeHooks';
import { Status } from '../../enums/enums';

export const Layout: React.FC = () => {
  const { status } = useAppSelector((state) => state.booksSlice);
  const bookState = useAppSelector((state) => state.bookSlice);
  const bookStatus = bookState.status;
  return (
    <div className='main-wrapper'>
      <Header />
      <main className='main-container'>
        {status === Status.ERROR || bookStatus === Status.ERROR ? (
          <div>
            <Error />
          </div>
        ) : (
          ''
        )}

        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

import { useSelector } from 'react-redux';
import '../../index.css';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Error } from '../error/error';

export function Layout() {
  const { status } = useSelector((state) => state.booksSlice);
  const bookState = useSelector((state) => state.bookSlice);
  const bookStatus = bookState.status;
  return (
    <div className='main-wrapper'>
      <Header />
      <main className='main-container'>
        {status === 'error' || bookStatus === 'error' ? (
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
}

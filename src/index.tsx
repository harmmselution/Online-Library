import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import { Main } from './pages/main/main';
import { Rules } from './pages/rules/rules';
import { BookPage } from './pages/book--page/book-page';
import { Layout } from './components/layout/layout';
import { LayoutMainPage } from './components/layout--main--page/layout-main-page';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<LayoutMainPage />}>
            <Route path='/' element={<Navigate to='/books/all' />} />
            <Route path='/books/:category' element={<Main />} />
            <Route path='/rules' element={<Rules contentView='Правила пользования' />} />
            <Route path='/contract' element={<Rules contentView='Договор оферты' />} />
          </Route>
          <Route path='/books/:category/:id' element={<BookPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);

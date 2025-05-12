import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { GlobalStyle } from './styles/global'; // Importe o GlobalStyle
import { Analytics } from "@vercel/analytics/react";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle /> {/* ← Esta é a forma CORRETA */}
      <Header />
      <Main />
      <Analytics />
      <Footer />
    </>
  );
}

export default App;
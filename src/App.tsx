import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header/header';
import Carousel from './components/Carousel/carousel';
import Details from './components/Details/details';
import './App.css';
import Modal from './components/Modal/modal';
import MainContentProvider from './hooks/ThemeContent';

function App() {
  return (
    <MainContentProvider>
      <Modal/>
      <div className="App">
      <Header/>
      <section className="body">
        <Carousel/>
        <Details/>
      </section>

      </div>
    </MainContentProvider>
      
  );
}

export default App;

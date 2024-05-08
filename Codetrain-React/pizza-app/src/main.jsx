import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('.homelink');
  const aboutLink = document.querySelector('.aboutlink');
  const menuLink = document.querySelector('.menulink');
  const contactLink = document.querySelector('.contactlink');

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  aboutLink.addEventListener('click', () => {
    homeLink.classList.remove('active');
    aboutLink.classList.add('active');
    menuLink.classList.remove('active');
    contactLink.classList.remove('active');
  });

  homeLink.addEventListener('click', () => {
    homeLink.classList.add('active');
    aboutLink.classList.remove('active');
    menuLink.classList.remove('active');
    contactLink.classList.remove('active');
  });

  menuLink.addEventListener('click', () => {
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    menuLink.classList.add('active');
    contactLink.classList.remove('active');
  });

  contactLink.addEventListener('click', () => {
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    menuLink.classList.remove('active');
    contactLink.classList.add('active');
  });

  document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (
      !clickedElement.classList.contains('homelink') &&
      !clickedElement.classList.contains('aboutlink') &&
      !clickedElement.classList.contains('menulink') &&
      !clickedElement.classList.contains('contactlink')
    ) {
      homeLink.classList.remove('active');
    }
  });
});

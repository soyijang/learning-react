
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //프로젝트에 리액트 라우터를 적용할 때는 index.js 에서 browserRouter 로 감싸줌.   
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
);



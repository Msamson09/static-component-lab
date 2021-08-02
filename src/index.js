  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sidebar from './Sidebar';
import Reviews from "./Reviews"
import Rating from "./Rating"
import SentimentAnalysis from "./SentimentAnalysis"
import WebsiteVisitors from "./WebsiteVisitors"

ReactDOM.render(
  <React.StrictMode>
    <Sidebar className="sidebar" />
    <Reviews className="reviews" />
    <Rating className="rating"/>
    <SentimentAnalysis className="sentimentAnalysis"/>
    <WebsiteVisitors className="websiteVisitors"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

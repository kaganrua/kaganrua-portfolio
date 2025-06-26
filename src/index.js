import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider, Helmet } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet prioritizeSeoTags>

     
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BQVWZWHQN1"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BQVWZWHQN1');
          `}
        </script>
        
        <title>Kagan Rua - Software Developer</title>
        <meta name="description" content="I am a software developer specializing in React, Python, and cloud technologies. I build scalable web applications and optimize performance." />
        <meta name="keywords" content="Software Developer, React, Python, Cloud, AWS, Full Stack" />
        <meta name="author" content="Kagan Rua" />
        
        {/* Open Graph for social media */}
        <meta property="og:title" content="Kagan Rua - Software Developer" />
        <meta property="og:description" content="I build scalable web applications using React, Python, and AWS." />
        <meta property="og:image" content="https://kaganrua.com/professional-photo.jpeg" />
        <meta property="og:url" content="https://kaganrua.com" />
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="kagan rua" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
    <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

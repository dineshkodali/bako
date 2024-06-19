import React from 'react';
import '../styles/Home.css';


function Home() {
  return (
    <div className="main-content">
      <div className="intro">
        <h1>I'm Bako Doe.</h1>
        <p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
      </div>
      <div className="buttons">
        <button className="portfolio-btn">View Portfolio</button>
        <button className="hire-btn">Hire me</button>
      </div>
    </div>
  );
}

export default Home;

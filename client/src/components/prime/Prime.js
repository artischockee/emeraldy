import './Prime.sass';
import React from 'react';
import Header from '../header/Header';

const Prime = () => (
  <section className="section main__section">
    <Header inSection />
    <main
      className="prime"
      style={{ backgroundImage: "url(images/background.jpg)" }}
    >
      <div className="grid grid_col-12">
        <h1 className="prime__title">Welcome to <br /> Emeraldy project</h1>
      </div>
      <div className="grid grid_col-12 grid_row-2">
        <p className="prime__learn-more">
          Learn more
        </p>
        <div className="prime__information grid grid_col-7">
          <div className="prime__location">
            <h4 className="heading heading_gray">Address</h4>
            <p>636000, Tomsk, Tomsk Region, Russian Federation</p>
          </div>
          <div className="prime__price">
            <h4 className="heading heading_gray">Price</h4>
            <p><span>$</span>2.999.999</p>
          </div>
        </div>
      </div>
    </main>
  </section>
);

export default Prime;
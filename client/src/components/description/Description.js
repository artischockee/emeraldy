import './Description.sass';
import React from 'react';

const Description = () => (
  <section className="section main__section">
    <main className="description">
      <div className="grid grid_col-12">
        <h1 className="home__title">Welcome to <br /> Emeraldy project</h1>
      </div>
      <div className="grid grid_col-12 grid_row-2">
        <p className="home__learn-more">
          Learn more
        </p>
        <div className="home__information grid grid_col-7">
          <div className="home__location">
            <h4 className="heading heading_gray">Address</h4>
            <p>636000, Tomsk, Tomsk Region, Russian Federation</p>
          </div>
          <div className="home__price">
            <h4 className="heading heading_gray">Price</h4>
            <p><span>$</span>2.999.999</p>
          </div>
        </div>
      </div>
    </main>
  </section>
);

export default Description;
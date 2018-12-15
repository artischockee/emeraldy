import React from 'react';
import Link from '../generic/Link';

const Home = () => (
  <React.Fragment>
    <div className="home__link-container">
      <Link className="link" to="/scholastic">
          <div className="link__image" style={{ backgroundImage: "url(images/scholastic.png)" }} />
      </Link>
    </div>
  </React.Fragment>
);

export default Home;
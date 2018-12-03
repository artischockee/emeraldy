import React from 'react';
import { Route } from 'react-router-dom';

const About = ({ match }) => (
  <React.Fragment>
    <p className="just">About</p>
    <Route path={match.url +  "/me"} component={AboutMe} />
  </React.Fragment>
);

export const AboutMe = () => (
  <React.Fragment>
    <p className="just">this is all about me :D</p>
  </React.Fragment>
);

export default About;
import React from 'react';
import { Grid, Cell } from 'react-mdl'
import pp from '../img/pp.jpg'

class LandingPage extends React.Component {
  render () {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={pp} alt="profile-picture" className="profile-picture"/>

            <div className="banner-text">
              <h1>Muhammad Taha Mazari</h1>
              <hr />
              <p>Final year student of BSc Computer Science at NUST. My interests are Machine Learning, Computer Vision, Python and web development using Javascript frameworks like React, Node, Express etc.</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;

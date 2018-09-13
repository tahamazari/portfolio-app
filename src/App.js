import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'
import resume from './resume.pdf'

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Muhammad Taha Mazari" scroll>
                  <Navigation>
                      <Link className="nav-links" to="/"><i class="fas fa-home"></i></Link>
                      <a className="nav-links" href="https://www.linkedin.com/in/taha-mazari-ba81279a/" target="_blank">LinkedIn</a>
                      <a className="nav-links" href="https://github.com/tahamazari" target="_blank">Github</a>
                      <a className="nav-links" href={resume} target="_blank">Resume</a>
                      <Link className="nav-links" to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;

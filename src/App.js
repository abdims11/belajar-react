import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

 
function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="ReactJs" scroll>
                <Navigation>
                    <Link to="/projects">Project</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/content">Content</Link>
                    <Link to="/abdi">Abdi</Link>
                </Navigation>
            </Header>
            <Drawer title="ReactJs">
                <Navigation>
                    <Link to="/projects">Project</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/content">Content</Link>
                    <Link to="/abdi">Abdi</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from "react-router-dom";

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Content from './content';
import Projects from './projects';
import Resume from './resume';
import Abdi from './abdi';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/content" component={Content} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/abdi" component={Abdi} />
    </Switch>
)

export default Main;
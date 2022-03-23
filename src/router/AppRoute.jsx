import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { ContactScreen } from '../components/pages/contactScreen/ContactScreen';
import { ProjectsScreen } from '../components/pages/projectsScreen/ProjectsScreen';
import { FormationScreen } from '../components/pages/formationScreen/FormationScreen';
import { AboutMeScreen } from '../components/pages/aboutMeScreen/AboutMeScreen';
import { WelcomeScreen } from '../components/pages/welcomeScreen/WelcomeScreen';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import '../index.css';

export default function AppRoute() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/about" component={AboutMeScreen}>
            <AboutMeScreen />
          </Route>
          <Route exact path="/formation" component={FormationScreen}>
            <FormationScreen />
          </Route>
          <Route exact path="/projects" component={ProjectsScreen}>
            <ProjectsScreen />
          </Route>
          <Route exact path="/contact" component={ContactScreen}>
            <ContactScreen />
          </Route>

          <Redirect to="/about" />
        </Switch>
      </div>
    </Router>
  );
}

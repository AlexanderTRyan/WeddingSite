import React from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import About from "./components/About.tsx";
import Registry from "./components/Registry.tsx";
import RSVP from "./components/RSVP.tsx";
import TheCouple from "./components/TheCouple.tsx";
import Donation from "./components/Donation.tsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  // Import Router, Route, and Switch
import "./App.less"

const App = () => {
  return (
    <Router> {/* Wrap the entire App with Router */}
      <Header />

      <Switch> {/* Use Switch to render only the first matching Route */}
        <Route exact path="/" component={TheCouple} />
        <Route path="/about" component={About} />
        <Route path="/registry" component={Registry} />
        <Route path="/rsvp" component={RSVP} />
        <Route path="/donation" component={Donation} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;

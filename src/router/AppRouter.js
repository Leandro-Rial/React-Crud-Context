import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddUser from '../components/AddUser';
import ContextScreen from '../components/ContextScreen';
import EditUser from '../components/EditUser';

const AppRouter = () => {
  return (
    <div style={{ maxWidth: "50rem", margin: "4rem auto" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={ContextScreen} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import Enrollment from './pages/enrollment';
import Thanks from './pages/thanks';
import Welcome from './pages/welcome';

const App: React.FunctionComponent = (): React.ReactElement => (
  <>
    <Router>
      <Header />
      <main className='flex flex-col justify-center flex-grow w-full max-w-5xl px-4 mx-auto my-6 overflow-y-auto'>
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route path='/enroll'>
            <Enrollment />
          </Route>
          <Route path='/thanks'>
            <Thanks />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  </>
);

export default App;

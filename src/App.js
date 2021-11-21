import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const FriendList = lazy(() => import('./components/friendList'));
const App = ({store}) => (
  <Provider store = {store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element ={<FriendList/>}/>
        </Routes>
      </Suspense>
    </Router>
  </Provider>
);

export default App;
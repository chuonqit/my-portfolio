import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CSSBaseLine from '../../components/Common/CSSBaseLine';
import Spine from '../../components/Common/Spine';

import Home from '../Home';

const App = () => {
  return (
    <BrowserRouter>
      <Spine />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <CSSBaseLine />
    </BrowserRouter>
  );
};

export default App;

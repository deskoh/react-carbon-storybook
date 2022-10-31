import { Content, Theme } from '@carbon/react';
import { Route, Routes } from 'react-router-dom';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

import './App.scss';

function App() {
  return (
    <>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      <Content>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/repos" element={<RepoPage />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;

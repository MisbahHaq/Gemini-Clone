import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Man/Main';
import Settings from './components/Pages/Settings';
import Help from './components/Pages/Help';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import SetPage from './components/SettingsPage/SetPage';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route path="/profile" element={<Profile posts={props.posts} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<SetPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

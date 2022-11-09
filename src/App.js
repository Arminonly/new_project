import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIe1y4-MXDb4XMXTOY6wQ50wosd_13iYqGFg&usqp=CAU"
          alt=""
        />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">Main content</div>
    </div>
  );
}

export default App;

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
          <a>Message</a>
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
      <div className="content">
        <img
          src="https://kartinkin.net/uploads/posts/2022-02/1645867502_7-kartinkin-net-p-turizm-kartinki-dlya-prezentatsii-7.jpg"
          alt=""
        />
        <div>ava+content</div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

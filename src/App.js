import './App.css';
import svg1 from './images/blob.svg';
import logo from './images/logo.png';
import discord from './images/discord.png';

function App() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"></link>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.3.1/css/all.min.css" rel="stylesheet"></link>
      <nav class="navbar">
        <div class="container">
          <section class="wrapper">
            <img className="logo" src={logo} width="5%" alt="logo"></img>
            <h1 class="brand"><a href="./index.html" class="brand-link">DCC</a></h1>
            <button type="button" class="burger" id="burger">
              <span class="burger-line"></span>
              <span class="burger-line"></span>
              <span class="burger-line"></span>
              <span class="burger-line"></span>
            </button>
            <div class="menu" id="menu">
              <ul class="menu-inner">
                <li class="menu-item"><a href="#no" class="menu-link active">Home</a></li>
                <li class="menu-item"><a href="#no" class="menu-link">Socials</a></li>
                <li class="menu-item"><a href="#no" class="menu-link">Projects</a></li>
                <li class="menu-item"><a href="#no" class="menu-link">Events</a></li>
                <li class="menu-item"><a href="#no" class="menu-link">Contact</a></li>
              </ul>
            </div>
          </section>
        </div>
      </nav>
      <div className="Section1">
        <div className="green-filler"></div>
        <img className = "img1" src={svg1} width="120%"alt="alt-text"></img>
        <h1 className="Title">The Dubai <br/>Computing Community</h1>
        <p className="titletext">
          As Computer Science exapnds across the UAE, we aim to foster a community where <br/>
          programmers can connect, collaborate, and innovate regardless of age and skillset.
        </p>
        <img className = "discord_img" src={discord} width="40%"alt="alt-text"></img>
        <div class="buttons_">
          <button class="blob-btn">
            Join the Discord
            <span class="blob-btn__inner">
              <span class="blob-btn__blobs">
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
              </span>
            </span>
          </button>
          <br/>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
        <div class="buttons_2">
          <button class="blob-btn">
            Follow Our Instagram
            <span class="blob-btn__inner">
              <span class="blob-btn__blobs">
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
              </span>
            </span>
          </button>
          <br/>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
      <section class="fact-area">
        <div class="container2">
          <div class="fact-box">
            <div class="row align-items-center">
              <div class="col single-fact">
                <h2>250+</h2>
                <p>Total Users</p>
              </div>
              <div class="col single-fact">
                <h2>3</h2>
                <p>Total Competitions</p>
              </div>
              <div class="col single-fact">
                <h2>35+</h2>
                <p>Helpful Channels</p>
              </div>
              <div class="col single-fact">
                <h2>3 Different Levels</h2>
                <p>Weekly Challenges</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

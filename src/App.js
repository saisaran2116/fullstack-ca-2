import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Wanderlust Diaries</h1>
        <nav>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hi, I'm Saran! A passionate traveler who loves exploring new cultures, cuisines, and landscapes. Join me as I share my adventures and travel tips from around the world.
        </p>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog-section">
        <h2>Latest Blog Posts</h2>
        <div className="blog-posts">
          <article className="blog-post">
            <h3>Exploring the Streets of Paris</h3>
            <p>
              Discover the hidden gems and iconic sights of Paris in this travel diary. From the Eiffel Tower to cozy cafes, experience the magic of the City of Lights.
            </p>
          </article>
          <article className="blog-post">
            <h3>Adventures in the Swiss Alps</h3>
            <p>
              Join me as I hike through breathtaking mountain trails, enjoy local Swiss cuisine, and soak in the stunning alpine scenery.
            </p>
          </article>
          <article className="blog-post">
            <h3>Beach Hopping in Thailand</h3>
            <p>
              Sun, sand, and sea! A guide to the best beaches in Thailand, plus tips for island hopping and enjoying tropical paradise.
            </p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>
          Contact: <a href="mailto:saran.travelblog@example.com">saran.travelblog@example.com</a>
        </p>
        <p>
          Follow me:
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"> Twitter</a> |
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

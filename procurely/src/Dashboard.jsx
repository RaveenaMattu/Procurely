import { useState } from "react";
import { Link } from 'react-router-dom';
import Footer from "./components/Footer";
import "./Dashboard.css";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const popularSearches = [
    "best smartphone under $500",
    "laptops with long battery life",
    "best fitness smartwatch",
    "best noise cancelling headphones",
    "GoPro alternatives under $200",
    "best DSLR for beginners",
    "DJI drone with 4K camera",
    "best handheld gaming consoles 2025",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const MicrophoneIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        d="M20.0002 23.3333C18.6113 23.3333 17.4307 22.8472 16.4585 21.875C15.4863 20.9028 15.0002 19.7222 15.0002 18.3333V8.33331C15.0002 6.94442 15.4863 5.76387 16.4585 4.79165C17.4307 3.81942 18.6113 3.33331 20.0002 3.33331C21.3891 3.33331 22.5696 3.81942 23.5418 4.79165C24.5141 5.76387 25.0002 6.94442 25.0002 8.33331V18.3333C25.0002 19.7222 24.5141 20.9028 23.5418 21.875C22.5696 22.8472 21.3891 23.3333 20.0002 23.3333ZM18.3335 35V29.875C15.4446 29.4861 13.0557 28.1944 11.1668 26C9.27794 23.8055 8.3335 21.25 8.3335 18.3333H11.6668C11.6668 20.6389 12.4793 22.6041 14.1043 24.2291C15.7293 25.8541 17.6946 26.6666 20.0002 26.6666C22.3057 26.6666 24.271 25.8541 25.896 24.2291C27.521 22.6041 28.3335 20.6389 28.3335 18.3333H31.6668C31.6668 21.25 30.7224 23.8055 28.8335 26C26.9446 28.1944 24.5557 29.4861 21.6668 29.875V35H18.3335Z"
        fill="#1D1B20"
      />
    </svg>
  );

  const ArrowForwardIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
        fill="#FEF7FF"
      />
    </svg>
  );

  const BookmarkIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M6.6665 28V6.66667C6.6665 5.93333 6.92762 5.30556 7.44984 4.78333C7.97206 4.26111 8.59984 4 9.33317 4H22.6665C23.3998 4 24.0276 4.26111 24.5498 4.78333C25.0721 5.30556 25.3332 5.93333 25.3332 6.66667V28L15.9998 24L6.6665 28ZM9.33317 23.9333L15.9998 21.0667L22.6665 23.9333V6.66667H9.33317V23.9333Z"
        fill="#1D1B20"
      />
    </svg>
  );

  const DropdownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 15L7 10H17L12 15Z" fill="#1D1B20" />
    </svg>
  );

  return (
    <div className="dashboard-page">
      <div className="dashboard-background">
        <header className="dashboard-header">
          <div className="dashboard-header-content">
            <Link to="/">
            <img
              className="dashboard-logo"
              src={process.env.PUBLIC_URL + "/effishop.png"}
              alt="EffiShop Logo"
            />
            </Link>
            <div className="user-section">
              <span className="user-greeting">Hey User !</span>
              <div className="user-avatar">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f8c61353cb5a37e66ec9341fa669f258aada2d1d?width=80"
                  alt="User Avatar"
                />
              </div>
              <button className="help-button">
                <span>?</span>
              </button>
            </div>
          </div>
        </header>

        <main className="dashboard-main">
          <form className="search-container" onSubmit={handleSearch}>
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Say or type what are you looking for today ....."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" className="mic-button">
                <MicrophoneIcon />
              </button>
              <button type="submit" className="search-submit-button">
                <ArrowForwardIcon />
              </button>
            </div>
          </form>

          {searchQuery && (
            <div className="search-prompt-display">
              <p>"{searchQuery}"</p>
              <button className="bookmark-button">
                <BookmarkIcon />
              </button>
            </div>
          )}

          <div className="filter-section">
            <button className="filter-button">
              <span>Filter By</span>
              <DropdownIcon />
            </button>
            <button className="filter-button">
              <span>Sort By</span>
              <DropdownIcon />
            </button>
          </div>

          <div className="results-placeholder">
            <p>Search for any product to see available options</p>
          </div>

          <section className="popular-searches-section">
            <h2 className="section-heading">
              <span className="heading-accent"></span>
              Popular Searches
            </h2>
            <div className="search-items-grid">
              {popularSearches.map((search, index) => (
                <button key={index} className="search-item">
                  {search}
                </button>
              ))}
            </div>
          </section>

          <section className="recent-searches-section">
            <h2 className="section-heading">
              <span className="heading-accent"></span>
              Your Recent Searches
            </h2>
            <div className="empty-state">
              <p>Start browsing to view your search history...</p>
            </div>
          </section>
        </main>

        <div className="promo-banner">
          <p>
            Your <span className="promo-highlight-white">SHORTCUT</span> to
            smarter <span className="promo-highlight-yellow">TECH SHOPPING.</span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;

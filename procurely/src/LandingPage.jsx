import React, { useState } from "react";
import "./LandingPage.css";
import LoginModal from "./LoginModal";

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const faqs = [
    {
      question: "1. Why not just Google the product?",
      answer:
        "Because Procurely provides curated, verified results instead of random links.",
    },
    {
      question: "2. How does this save me time?",
      answer:
        "We compare multiple sources instantly and give you one clear answer.",
    },
    {
      question: "3. Can I use it for free?",
      answer: "Yes, our basic plan is free. Premium features are optional.",
    },
    {
      question: "4. Will Procurely help me find budget-friendly options?",
      answer:
        "Yes. Whether you want top-of-the-line or best-value, Procurely matches results to your shopping style.",
    },
    {
      question: "5. What kind of tech products do people usually buy?",
      answer: `Here are the most popular categories our users search for:\n
      - Laptops & MacBooks\n
      - Smartphones (iPhone, Samsung Galaxy, etc.)\n
      - Headphones & Earbuds (AirPods, Bose, Sony)\n
      - Smartwatches & Wearables (Apple Watch, Fitbit, Garmin)\n
      - Tablets & iPads\n
      - Gaming Consoles (PlayStation, Xbox, Nintendo Switch)\n
      - Monitors & PC Accessories\n
      - Cameras & Drones\n
      - Smart Home Devices (Alexa, Google Nest, Ring Doorbells)\n
      - External Storage & SSDs`,
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const CheckIcon = () => (
    <svg width="31" height="32" viewBox="0 0 31 32" fill="none">
      <path
        d="M12.9167 21.8666L7.75 16.5333L9.55833 14.6666L12.9167 18.1333L21.4417 9.33331L23.25 11.2L12.9167 21.8666Z"
        fill="#FFE66D"
      />
    </svg>
  );

  const ArrowIcon = () => (
    <svg width="52" height="46" viewBox="0 0 52 46" fill="none">
      <path
        d="M34.61 24.9166H8.80078V21.0833H34.61L22.7388 10.35L25.7596 7.66663L42.7185 23L25.7596 38.3333L22.7388 35.65L34.61 24.9166Z"
        fill="#1D1B20"
      />
    </svg>
  );

  const SearchIcon = () => (
    <svg width="42" height="42" viewBox="0 0 84 84" fill="none">
      <path
        d="M35 56C47.1503 56 57 46.1503 57 34C57 21.8497 47.1503 12 35 12C22.8497 12 13 21.8497 13 34C13 46.1503 22.8497 56 35 56Z"
        stroke="#1E1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.5859 49.586L64.9999 65"
        stroke="#1E1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CartIcon = () => (
    <svg width="43" height="48" viewBox="0 0 43 48" fill="none">
      <path
        d="M2.625 2H9.625L14.315 28.78C14.475 29.7008 14.9133 30.5279 15.5532 31.1166C16.1931 31.7053 16.9937 32.018 17.815 32H34.825C35.6463 32.018 36.4469 31.7053 37.0868 31.1166C37.7267 30.5279 38.165 29.7008 38.325 28.78L41.125 12H11.375M18.375 42C18.375 43.1046 17.5915 44 16.625 44C15.6585 44 14.875 43.1046 14.875 42C14.875 40.8954 15.6585 40 16.625 40C17.5915 40 18.375 40.8954 18.375 42ZM37.625 42C37.625 43.1046 36.8415 44 35.875 44C34.9085 44 34.125 43.1046 34.125 42C34.125 40.8954 34.9085 40 35.875 40C36.8415 40 37.625 40.8954 37.625 42Z"
        stroke="#1E1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const FileIcon = () => (
    <svg width="43" height="46" viewBox="0 0 43 46" fill="none">
      <path
        d="M25 4.65942H11C10.0717 4.65942 9.1815 5.05538 8.52513 5.76019C7.86875 6.46499 7.5 7.42092 7.5 8.41767V38.4836C7.5 39.4804 7.86875 40.4363 8.52513 41.1411C9.1815 41.8459 10.0717 42.2418 11 42.2418H32C32.9283 42.2418 33.8185 41.8459 34.4749 41.1411C35.1313 40.4363 35.5 39.4804 35.5 38.4836V15.9342M25 4.65942L35.5 15.9342M25 4.65942V15.9342H35.5M28.5 25.3298H14.5M28.5 32.8462H14.5M18 17.8133H14.5"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path
        d="M12 18L24 30L36 18"
        stroke="#1E1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const StarIcon = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path
        d="M28.0001 4.6665L35.2101 19.2732L51.3334 21.6298L39.6667 32.9932L42.4201 49.0465L28.0001 41.4632L13.5801 49.0465L16.3334 32.9932L4.66675 21.6298L20.7901 19.2732L28.0001 4.6665Z"
        fill="#FFE66D"
      />
    </svg>
  );

  const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20C3.45 20 2.975 19.8083 2.575 19.425C2.19167 19.025 2 18.55 2 18V6C2 5.45 2.19167 4.98333 2.575 4.6C2.975 4.2 3.45 4 4 4H20C20.55 4 21.0167 4.2 21.4 4.6C21.8 4.98333 22 5.45 22 6V18C22 18.55 21.8 19.025 21.4 19.425C21.0167 19.8083 20.55 20 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
        fill="white"
      />
    </svg>
  );

  const LocationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C11.7667 22 11.5667 21.9333 11.4 21.8C11.2333 21.6667 11.1083 21.4917 11.025 21.275C10.7083 20.3417 10.3083 19.4667 9.825 18.65C9.35833 17.8333 8.7 16.875 7.85 15.775C7 14.675 6.30833 13.625 5.775 12.625C5.25833 11.625 5 10.4167 5 9C5 7.05 5.675 5.4 7.025 4.05C8.39167 2.68333 10.05 2 12 2C13.95 2 15.6 2.68333 16.95 4.05C18.3167 5.4 19 7.05 19 9C19 10.5167 18.7083 11.7833 18.125 12.8C17.5583 13.8 16.9 14.7917 16.15 15.775C15.25 16.975 14.5667 17.975 14.1 18.775C13.65 19.5583 13.275 20.3917 12.975 21.275C12.8917 21.5083 12.7583 21.6917 12.575 21.825C12.4083 21.9417 12.2167 22 12 22ZM12 11.5C12.7 11.5 13.2917 11.2583 13.775 10.775C14.2583 10.2917 14.5 9.7 14.5 9C14.5 8.3 14.2583 7.70833 13.775 7.225C13.2917 6.74167 12.7 6.5 12 6.5C11.3 6.5 10.7083 6.74167 10.225 7.225C9.74167 7.70833 9.5 8.3 9.5 9C9.5 9.7 9.74167 10.2917 10.225 10.775C10.7083 11.2583 11.3 11.5 12 11.5Z"
        fill="white"
      />
    </svg>
  );

  const PhoneIcon = () => (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      transform="rotate(-131.048)"
    >
      <path
        d="M13.9136 19.5568C12.6221 18.0737 11.6483 16.3525 10.9921 14.3935C10.336 12.4344 10.1179 10.3757 10.3379 8.21723C10.3574 7.93506 10.4677 7.70642 10.6688 7.5313C10.8699 7.35618 11.1116 7.27837 11.3937 7.29786L14.601 7.55486C14.8596 7.57273 15.0746 7.66732 15.2459 7.83863C15.4171 8.00994 15.5119 8.22027 15.5301 8.4696L15.7753 12.1014C15.7875 12.2676 15.7652 12.4196 15.7084 12.5575C15.6516 12.6953 15.5604 12.819 15.4347 12.9284L13.2853 14.8C13.5504 15.4089 13.8579 16.0031 14.2077 16.5825C14.5575 17.1619 14.9622 17.7155 15.4219 18.2435C15.8816 18.7714 16.3743 19.2484 16.9001 19.6746C17.4259 20.1007 17.9722 20.4869 18.5389 20.8332L20.6882 18.9617C20.8139 18.8522 20.9489 18.7789 21.0933 18.7416C21.2376 18.7043 21.3913 18.7031 21.5542 18.738L25.1178 19.4803C25.3623 19.5326 25.5576 19.6554 25.7037 19.8486C25.8498 20.0418 25.914 20.2677 25.8961 20.5264L25.7096 23.7385C25.6901 24.0207 25.5798 24.2493 25.3787 24.4244C25.1776 24.5996 24.936 24.6774 24.6538 24.6579C22.4966 24.5915 20.4901 24.0956 18.6344 23.17C16.7787 22.2444 15.2051 21.04 13.9136 19.5568Z"
        fill="white"
      />
    </svg>
  );

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img className="logo-image"  src="/effishop.png" alt="EffiShop Logo"/>
            {/* <div className="logo-circle"></div>
            <span className="logo-text">Procurely</span> */}
          </div>
          <button
            className="login-button"
            onClick={() => setIsLoginModalOpen(true)}
          >
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Shopping
              <br />
              <span className="hero-title-line2">
                for Tech <span className="hero-highlight">Made Easy</span>
              </span>
            </h1>

            <div className="hero-features">
              <div className="feature-item">
                <CheckIcon />
                <span>AI agents work 24/7 without breaks</span>
              </div>
              <div className="feature-item">
                <CheckIcon />
                <span>Learns and adapts to your sales process</span>
              </div>
              <div className="feature-item">
                <CheckIcon />
                <span>Instant responses to prospects</span>
              </div>
              <div className="feature-item">
                <CheckIcon />
                <span>Maximizes revenue with minimal effort</span>
              </div>
              <div className="feature-item">
                <CheckIcon />
                <span>Complimentary demonstration available</span>
              </div>
            </div>

            <button className="get-started-button">
              <span>Get Started</span>
              <ArrowIcon />
            </button>
          </div>

          <div className="hero-image">
            <div className="hero-image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="section-content">
          <h2 className="section-title">
            <span className="title-highlight">Why</span> Choose Us?
          </h2>

          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="features-list">
            <div className="feature-card">
              <SearchIcon />
              <span>Easy Search: Smart filters and top searches.</span>
            </div>
            <div className="feature-card">
              <CartIcon />
              <span>Quick Checkout: Saved payment info & fast checkout.</span>
            </div>
            <div className="feature-card">
              <FileIcon />
              <span>Search History: Download invoices anytime.</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-content">
          <h2 className="section-title">
            <span className="hero-highlight">How</span> Procurely Works?
          </h2>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1.</div>
              <div className="step-content">
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">2.</div>
              <div className="step-content">
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3.</div>
              <div className="step-content">
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-content">
          <h2 className="section-title">
            <span className="hero-highlight">Frequently</span> Asked Questions?
          </h2>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDownIcon />
                </button>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">
          What Our Users Say About Procurely?
        </h2>

        <div className="testimonials-container-wrapper">
          <div className="testimonials-container">
            {/* Testimonial Card 1 */}
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <h3 className="testimonial-title">Awesome Job</h3>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b5746e2ba8de52487eba4d5a1dd05f3f0a50dcf6?width=80"
                    alt="Reviewer"
                  />
                </div>
                <div className="author-info">
                  <div className="author-name">Reviewer Name</div>
                  <div className="author-date">Date</div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <h3 className="testimonial-title">Excellent Service</h3>
              <p className="testimonial-text">
                Fusce a libero efficitur, sollicitudin odio in, tempor magna.
                Morbi vel lorem at elit pharetra malesuada.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b5746e2ba8de52487eba4d5a1dd05f3f0a50dcf6?width=80"
                    alt="Reviewer"
                  />
                </div>
                <div className="author-info">
                  <div className="author-name">Another Reviewer</div>
                  <div className="author-date">Date</div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <button
            className="view-all-link"
            onClick={() => console.log("View all testimonials")}
          >
            View More &gt;&gt;
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-brand">Effibotic</h3>
            <p className="footer-description">
              A Canadian AI company providing advanced automated solution for
              SMB's
            </p>
          </div>

          <div className="footer-right">
            <h3 className="footer-contact-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MailIcon />
                <span>siva@effibotic.com</span>
              </div>
              <div className="contact-item">
                <MailIcon />
                <span>rupendra@effibotic.com</span>
              </div>
              <div className="contact-item">
                <span className="transform -scale-x-100 inline-block">
                  <PhoneIcon />
                </span>
                <span>+1 (647) 724-2624</span>
              </div>
              <div className="contact-item">
                <PhoneIcon />
                <span>+1 (289) 986-0990</span>
              </div>
              <div className="contact-item">
                <LocationIcon />
                <span>8 Nelson St W, Brampton, ON L6X 1B7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2025 Effibotic. All Rights Reserved.
          </span>
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Legal</span>
          </div>
        </div>
      </footer>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
};

export default LandingPage;

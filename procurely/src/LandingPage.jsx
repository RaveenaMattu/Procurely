import { useState, useEffect } from "react";
import "./LandingPage.css";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";

const LandingPage = () => {
  const taglines = [
    {
      text: "Hours of research, done in seconds.",
      highlights: ["done in seconds."],
    },
    {
      text: "Shop tech smart. No ads. No hassle.",
      highlights: ["No ads.", "No hassle."],
    },
    {
      text: "Shopping for tech, simplified.",
      highlights: ["simplified."],
    },
    {
      text: "Like asking a techy friend—only faster.",
      highlights: ["faster."],
    },
    {
      text: "Confident buying choices, every time.",
      highlights: ["Confident buying"],
    },
  ];

  // Highlight function for each tagline
  const highlightText = (text, highlights) => {
    let parts = [text];

    highlights.forEach((keyword) => {
      parts = parts.flatMap((part) =>
        typeof part === "string"
          ? part.split(new RegExp(`(${keyword})`, "gi")).map((p, i) =>
              p.toLowerCase() === keyword.toLowerCase() ? (
                <span key={p + i} className="hero-highlight">
                  {p}
                </span>
              ) : (
                p
              )
            )
          : part
      );
    });

    return parts;
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        setFade(true); // fade back in
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  const [openFaq, setOpenFaq] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const faqs = [
    {
      question: "1. Why not just Google the product?",
      answer:
        "Because Effishop provides curated, verified results instead of random links.",
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
      question: "4. Will EffiShop help me find budget-friendly options?",
      answer:
        "Yes. Whether you want top-of-the-line or best-value, EffiShop matches results to your shopping style.",
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

  const handleLoginClick = () => {
    setIsRegistrationModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleRegistrationClick = () => {
    setIsLoginModalOpen(false);
    setIsRegistrationModalOpen(true);
  };

  const CheckIcon = () => (
    <svg width="31" height="32" viewBox="0 0 31 32" fill="none">
      <path
        d="M12.9167 21.8666L7.75 16.5333L9.55833 14.6666L12.9167 18.1333L21.4417 9.33331L23.25 11.2L12.9167 21.8666Z"
        fill="#1d1f1f"
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

  const HourglassIcon = () => (
    <svg
      width="42"
      height="42"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top Bowl */}
      <path
        d="M21 12H63V24C63 30 51 36 42 42C33 36 21 30 21 24V12Z"
        stroke="#1E1E1E"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom Bowl */}
      <path
        d="M63 72H21V60C21 54 33 48 42 42C51 48 63 54 63 60V72Z"
        stroke="#1E1E1E"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sand Line */}
      <path
        d="M42 42V42"
        stroke="#1E1E1E"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const DealTagIcon = () => (
    <svg width="42" height="42" viewBox="0 0 100 100" fill="none">
      <path
        d="M12 36L36 12L72 48L48 72L12 36Z"
        stroke="#1E1E1E"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="30" r="4" fill="#1E1E1E" />
    </svg>
  );

  const CartIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 30 30"
      fill="none"
      stroke="#1E1E1E"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );

  const ChatBubbleIcon = () => (
    <svg width="42" height="42" viewBox="0 0 100 100" fill="none">
      <path
        d="M21 60L12 72V24C12 17.373 17.373 12 24 12H60C66.627 12 72 17.373 72 24V48C72 54.627 66.627 60 60 60H21Z"
        stroke="#1E1E1E"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
      <path
        d="M12 18L24 30L36 18"
        stroke="#1E1E1E"
        strokeWidth="3"
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
      className="rotated-icon"
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
            <img
              className="logo-image"
              src="/effishop.png"
              alt="EffiShop Logo"
            />
            {/* <div className="logo-circle"></div>
            <span className="logo-text">EffiShop</span> */}
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
              {/* Shopping
              <br /> */}
              <span
                className={`hero-title-line2 ${fade ? "fade-in" : "fade-out"}`}
              >
                {highlightText(
                  taglines[currentIndex].text,
                  taglines[currentIndex].highlights
                )}
              </span>
            </h1>
            <div className="hero-features">
              <p className="hero-description">
                Imagine having a tech-savvy friend who knows every product,
                every review, and every price—updated in real time. That’s{" "}
                <span className="highlight">Effishop</span>.
              </p>
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
            </div>

            <button
              className="get-started-button"
              onClick={() => setIsRegistrationModalOpen(true)}
            >
              <span>Get Started</span>
              <ArrowIcon />
            </button>
          </div>

          <div className="hero-image">
            <img
              src="/header.png"
              alt="Hero"
              className="hero-image-placeholder"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="section-content">
          <h2 className="section-title">
            <span className="title-highlight">Why</span> Choose EffiShop?
          </h2>

          <p className="section-description">
            Hours of research shouldn’t take hours. With Effishop, complex
            comparisons are done in seconds. Whether you’re shopping for a
            laptop, headphones, or your next phone, we make sure you get the
            best option—fast, reliable, and without the hassle.
          </p>

          <div className="features-list">
            <div className="feature-card">
              <div className="feature-header">
                <HourglassIcon />
                <span>Saves You Hours:</span>
              </div>
              <p>
                No more bouncing between multiple sites. EffiShop does the searching in seconds.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <DealTagIcon />
                <span>Find Best Deals:</span>
              </div>
              <p>
                Whether it’s brand-new, or refurbished, EffiShop
                finds you the best option.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <CartIcon />
                <span>One-Click Checkout:</span>
              </div>
              <p>
                Once you’ve decided, we send you straight to the best place to
                buy.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <ChatBubbleIcon />
                <span>Like Asking a Friend:</span>
              </div>
              <p>
                Get honest, unbiased recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-content">
          <h2 className="section-title">
            <span className="hero-highlight">How</span> EffiShop Works?
          </h2>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1.</div>
              <div className="step-content">
                <h3>Tell Us About Yourself:</h3>
                <p>
                  Quick survey to build your shopping “avatar”—are you a bargain
                  hunter, brand loyalist, or a value-seeker?
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">2.</div>
              <div className="step-content">
                <h3>Search Made Simpler:</h3>
                <p>
                  Just type in (or say) what you need—Procurely understands
                  plain language.
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3.</div>
              <div className="step-content">
                <h3>See Everything at Once </h3>
                <p>
                  Best prices, trusted reviews, price trends, and product
                  comparisons—no endless tabs.
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">4.</div>
              <div className="step-content">
                <h3>Buy with Confidence:</h3>
                <p>
                  Click straight through to the top deal and relax knowing you
                  didn’t miss out.
                </p>
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
        <h2 className="section-title">
          What Our Users Say About EffiShop?
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
        onRegistrationClick={handleRegistrationClick}
      />

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
};

export default LandingPage;

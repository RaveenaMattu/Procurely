import { useState, useEffect } from "react";
import Footer from "./components/Footer";
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




  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img
              className="logo-image"
              src={process.env.PUBLIC_URL + "/effishop.png"}
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
              src={process.env.PUBLIC_URL + "/header.png"}
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
            Hours of research shouldn’t take hours. With EffiShop, complex
            comparisons are done in seconds. Whether you’re shopping for any
            tech products like laptops, headphones, or your next phone, we make
            sure you get the best option—fast, reliable, and without the hassle.
          </p>

          <div className="features-list">
            <div className="feature-card">
              <div className="feature-header">
                <HourglassIcon />
                <span>Saves You Hours:</span>
              </div>
              <p>
                No more bouncing between multiple sites. EffiShop does the
                searching in seconds.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <DealTagIcon />
                <span>Find Best Deals:</span>
              </div>
              <p>
                Whether it’s brand-new, or refurbished, EffiShop finds you the
                best option.
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
              <p>Get honest, unbiased recommendations.</p>
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
          What Our Users Say About{" "}
          <span className="title-highlight">EffiShop?</span>
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
                I usually spend hours reading reviews and comparing specs before
                buying a laptop. EffiShop did it all in minutes—and I ended up
                saving $250.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b5746e2ba8de52487eba4d5a1dd05f3f0a50dcf6?width=80"
                    alt="Reviewer"
                  />
                </div>
                <div className="author-info">
                  <div className="author-name">Emily R.</div>
                  <div className="author-date">Jan 14, 2025</div>
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
                I was about to buy from Amazon, but EffiShop showed me a better
                deal on a refurbished one from Best Buy. Saved money and got it
                faster!
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b5746e2ba8de52487eba4d5a1dd05f3f0a50dcf6?width=80"
                    alt="Reviewer"
                  />
                </div>
                <div className="author-info">
                  <div className="author-name">Daniel K.</div>
                  <div className="author-date">May 23, 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          {/* <button
            className="view-all-link"
            onClick={() => console.log("View all testimonials")}
          >
            View More &gt;&gt;
          </button> */}
        </div>
      </section>

      {/* Footer */}
      <Footer />

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

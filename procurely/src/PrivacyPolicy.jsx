import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';
import Footer from './components/Footer';

const PrivacyPolicy = () => {



  return (
    <div className="privacy-policy-page">
      <header className="policy-header">
        <div className="policy-header-content">
          <Link to="/" className="policy-logo-section">
            <img
              className="policy-logo-image"
              src={process.env.PUBLIC_URL + '/effishop.png'}
              alt="EffiShop Logo"
            />
          </Link>
        </div>
      </header>

      <main className="policy-main">
        <div className="policy-content">
          <h1 className="policy-page-title">Privacy Policy</h1>
          <p className="policy-effective-date">
            Effective Date: <span>October 21, 2025</span>
          </p>

          <p className="policy-intro">
            At <span className="company-name">EffiShop by Effibotic Inc.</span>, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.
          </p>

          <section className="policy-section">
            <h2 className="section-title">Information We Collect</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              When you interact with our services—including Facebook Lead Ads, website forms, or other digital touchpoints—we may collect the following types of personal information:
            </p>
            <ul className="policy-list">
              <li><strong>Contact Information</strong> (e.g., name, email address, phone number)</li>
              <li><strong>Business Information</strong> (e.g., company name, role, industry)</li>
              <li><strong>Usage Data</strong> (e.g., device type, browser, interaction behavior)</li>
              <li><strong>Marketing Preferences</strong> (e.g., opt-ins, subscriptions)</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-title">2. How We Use Your Information</h2>
            <div className="section-divider"></div>
            <p className="section-text">We use your information to:</p>
            <ul className="policy-list simple-list">
              <li>Deliver our services and products</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve user experience and system performance</li>
              <li>Send updates, offers, and marketing communications (only if opted in)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-title">3. Sharing Your Information</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              We <strong>do not sell</strong> your personal data. However, we may share it with:
            </p>
            <ul className="policy-list">
              <li><strong>Service providers</strong> helping us operate our business (e.g., CRM tools, email services)</li>
              <li><strong>Legal authorities</strong> if required by law</li>
              <li><strong>Partners and affiliates</strong> only with your consent</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-title">4. Your Privacy Rights</h2>
            <div className="section-divider"></div>
            <p className="section-text">You have the right to:</p>
            <ul className="policy-list simple-list">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt-out of marketing communications at any time</li>
              <li className="contact-line">To exercise your rights, contact us at: <a href="mailto:siva@effibotic.com">siva@effibotic.com</a></li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-title">5. Data Retention & Security</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              We retain your data only as long as necessary for business and legal purposes. We implement industry-standard safeguards to protect your data from unauthorized access or misuse.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">6. Third-Party Links</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              Our services may include links to third-party platforms (e.g., Facebook, payment providers). We are not responsible for their privacy practices and encourage you to review their privacy policies.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">7. Changes to This Policy</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              We may update this policy from time to time. Changes will be posted on this page with the updated date.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">8. Terms of Service</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              By using our services, you agree to our <Link to="/terms">Terms of Service</Link>. Our Terms of Service are currently under development and will be available here soon. Please check back later for more information.
            </p>
            <div className="section-divider"></div>
          </section>

          <div className="custom-notice">
            <strong>Custom Notice (for Facebook Forms):</strong> By submitting this form, you agree to be contacted by Salesy - Effibotic Inc. for product updates, offers, and helpful resources. You can unsubscribe at any time.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

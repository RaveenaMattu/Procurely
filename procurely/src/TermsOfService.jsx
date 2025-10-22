import React from 'react';
import { Link } from 'react-router-dom';
import './TermsOfService.css';
import Footer from './components/Footer';

const TermsOfService = () => {



  return (
    <div className="terms-page">
      <header className="terms-header">
        <div className="terms-header-content">
          <Link to="/" className="terms-logo-section">
            <img
              className="terms-logo-image"
              src={process.env.PUBLIC_URL + '/effishop.png'}
              alt="EffiShop Logo"
            />
          </Link>
        </div>
      </header>

      <main className="terms-main">
        <div className="terms-content">
          <h1 className="terms-page-title">Terms of Service</h1>
          <p className="terms-effective-date">
            Effective Date: <span>October 21, 2025</span>
          </p>

          <p className="terms-intro">
            Welcome to <strong>Effibotic Inc.</strong> These Terms of Service ("Terms") govern your use of our AI automation services, including Schedly AI, Salesly AI, and related products and services. By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <section className="terms-section">
            <h2 className="section-title">1. Acceptance of Terms</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              By accessing our website, using our services, or engaging with our AI automation tools, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="section-text">
              If you do not agree to these Terms, please discontinue use of our services immediately.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">2. Description of Services</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              Effibotic provides AI-powered business automation solutions, including but not limited to:
            </p>
            <ul className="terms-list">
              <li><strong>Schedly AI</strong> - Intelligent scheduling and appointment management</li>
              <li><strong>Salesly AI</strong> - Advanced sales automation and lead generation</li>
              <li><strong>EffiShop</strong> - Smart procurement and supply chain optimization (coming soon)</li>
              <li><strong>AI Training Programs</strong> - Educational services for businesses and healthcare professionals</li>
              <li><strong>Consultation Services</strong> - Custom AI implementation and strategy guidance</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">3. User Responsibilities</h2>
            <div className="section-divider"></div>
            <p className="section-text">When using our services, you agree to:</p>
            <ul className="terms-list simple-list">
              <li>Provide accurate and complete information during registration and use</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful business purposes</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not attempt to reverse engineer, hack, or misuse our AI systems</li>
              <li>Not use our services to send spam, malware, or engage in fraudulent activities</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">4. Service Availability and Modifications</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              We strive to provide reliable and uninterrupted service, but we cannot guarantee:
            </p>
            <ul className="terms-list simple-list">
              <li>100% uptime or continuous availability of our services</li>
              <li>That our services will be error-free or bug-free</li>
              <li>Compatibility with all third-party systems or software</li>
            </ul>
            <p className="section-text bottom-spacing">
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice to users.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">5. Payment Terms and Billing</h2>
            <div className="section-divider"></div>
            <p className="section-text">For paid services:</p>
            <ul className="terms-list simple-list">
              <li>Payments are due according to your selected billing cycle</li>
              <li>All fees are non-refundable unless otherwise specified</li>
              <li>We reserve the right to suspend services for non-payment</li>
              <li>Price changes will be communicated with 30 days advance notice</li>
              <li>You are responsible for applicable taxes in your jurisdiction</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">6. Intellectual Property Rights</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              All content, technology, and materials provided by Effibotic, including but not limited to:
            </p>
            <ul className="terms-list simple-list">
              <li>AI algorithms and machine learning models</li>
              <li>Software code and applications</li>
              <li>Documentation, training materials, and methodologies</li>
              <li>Trademarks, logos, and brand assets</li>
            </ul>
            <p className="section-text bottom-spacing">
              remain the exclusive property of Effibotic Inc. Users are granted a limited, non-transferable license to use our services as intended.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">7. Data Protection and Privacy</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              Your privacy is important to us. Our collection, use, and protection of your personal data is governed by our <Link to="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference. By using our services, you consent to our data practices as described in the Privacy Policy.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">8. Limitation of Liability</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              To the maximum extent permitted by law, Effibotic Inc. shall not be liable for:
            </p>
            <ul className="terms-list simple-list">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Service interruptions or technical malfunctions</li>
              <li>Actions taken by third-party integrations or services</li>
            </ul>
            <p className="section-text bottom-spacing">
              Our total liability shall not exceed the amount paid by you for our services in the 12 months preceding the claim.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">9. Indemnification</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              You agree to indemnify, defend, and hold harmless Effibotic Inc., its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">10. Termination</h2>
            <div className="section-divider"></div>
            <p className="section-text">Either party may terminate this agreement at any time:</p>
            <ul className="terms-list simple-list">
              <li>You may discontinue using our services at any time</li>
              <li>We may suspend or terminate your access for violations of these Terms</li>
              <li>Upon termination, your right to use our services ceases immediately</li>
              <li>Certain provisions of these Terms will survive termination</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">11. Governing Law and Disputes</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Effibotic Inc. is incorporated, without regard to conflict of law principles.
            </p>
            <p className="section-text">
              Any disputes arising from these Terms or our services shall be resolved through binding arbitration, except where prohibited by law.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">12. Changes to Terms</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              We reserve the right to update these Terms at any time. Material changes will be communicated via email or prominent notice on our website. Continued use of our services after changes constitute acceptance of the updated Terms.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">13. Contact Information</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              If you have questions about these Terms or our services, please contact us:
            </p>
            <p className="section-text">
              <strong>Email: </strong> <a href="mailto:siva@effibotic.com">siva@effibotic.com</a><br />
              <strong>Website </strong>: <a href="https://effibotic.com" target="_blank" rel="noopener noreferrer">https://effibotic.com</a><br />
              <strong>Business Hours: </strong> Monday - Friday, 9:00 AM - 6:00 PM EST
            </p>
            <div className="section-divider"></div>
            <p className="section-text last-updated">
              Last Updated: October 21, 2025 - These Terms of Service are effective immediately upon posting.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

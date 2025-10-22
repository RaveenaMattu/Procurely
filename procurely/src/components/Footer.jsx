import { Link } from "react-router-dom";
import "./Footer.css";

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

const Footer = () => {
  return (
    <footer className="footer site-footer">
      <div className="footer-content footer-layout">
        <div className="footer-left footer-about">
          <h3 className="footer-brand">Effibotic</h3>
          <p className="footer-description">
            A Canadian AI company providing advanced automated solution for SMB's
          </p>
        </div>

        <div className="footer-right footer-contact">
          <h3 className="footer-contact-title">Contact</h3>
          <div className="contact-info">
            <div className="contact-item"><MailIcon /><span>siva@effibotic.com</span></div>
            <div className="contact-item"><MailIcon /><span>rupendra@effibotic.com</span></div>
            <div className="contact-item"><span className="transform -scale-x-100 inline-block"><PhoneIcon /></span><span>+1 (647) 724-2624</span></div>
            <div className="contact-item"><PhoneIcon /><span>+1 (289) 986-0990</span></div>
            <div className="contact-item"><LocationIcon /><span>8 Nelson St W, Brampton, ON L6X 1B7</span></div>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom footer-meta">
        <span className="footer-copyright">© 2025 Effibotic. All Rights Reserved.</span>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

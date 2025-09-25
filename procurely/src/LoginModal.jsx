import React, { useState, useEffect } from "react";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "username":
        if (!value.trim()) {
          newErrors.username = "Username is required";
        } else if (value.length < 3) {
          newErrors.username = "Username must be at least 3 characters";
        } else {
          delete newErrors.username;
        }
        break;
      case "password":
        if (!value) {
          newErrors.password = "Password is required";
        } else if (value.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (name) => {
    setTouched({ ...touched, [name]: true });
    const value = name === "username" ? username : password;
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ username: true, password: true });

    // Validate all fields
    const isUsernameValid = validateField("username", username);
    const isPasswordValid = validateField("password", password);

    if (isUsernameValid && isPasswordValid) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        console.log("Login submitted:", { username, password });
        // Handle successful login here
        onClose();
      }, 1500);
    }
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setErrors({});
    setTouched({});
    setIsLoading(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  const UserIcon = () => (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
      <path
        d="M8 7.21962C6.9 7.21962 5.95833 6.89182 5.175 6.23621C4.39167 5.58061 4 4.7925 4 3.87186C4 2.95123 4.39167 2.16311 5.175 1.50751C5.95833 0.85191 6.9 0.524109 8 0.524109C9.1 0.524109 10.0417 0.85191 10.825 1.50751C11.6083 2.16311 12 2.95123 12 3.87186C12 4.7925 11.6083 5.58061 10.825 6.23621C10.0417 6.89182 9.1 7.21962 8 7.21962ZM0 13.9151V11.5717C0 11.0974 0.145833 10.6615 0.4375 10.264C0.729167 9.86643 1.11667 9.56304 1.6 9.35381C2.63333 8.92139 3.68333 8.59708 4.75 8.38087C5.81667 8.16466 6.9 8.05656 8 8.05656C9.1 8.05656 10.1833 8.16466 11.25 8.38087C12.3167 8.59708 13.3667 8.92139 14.4 9.35381C14.8833 9.56304 15.2708 9.86643 15.5625 10.264C15.8542 10.6615 16 11.0974 16 11.5717V13.9151H0ZM2 12.2412H14V11.5717C14 11.4183 13.9542 11.2788 13.8625 11.1532C13.7708 11.0277 13.65 10.93 13.5 10.8603C12.6 10.4837 11.6917 10.2012 10.775 10.0129C9.85833 9.82459 8.93333 9.73043 8 9.73043C7.06667 9.73043 6.14167 9.82459 5.225 10.0129C4.30833 10.2012 3.4 10.4837 2.5 10.8603C2.35 10.93 2.22917 11.0277 2.1375 11.1532C2.04583 11.2788 2 11.4183 2 11.5717V12.2412ZM8 5.54574C8.55 5.54574 9.02083 5.38184 9.4125 5.05404C9.80417 4.72624 10 4.33218 10 3.87186C10 3.41155 9.80417 3.01749 9.4125 2.68969C9.02083 2.36189 8.55 2.19799 8 2.19799C7.45 2.19799 6.97917 2.36189 6.5875 2.68969C6.19583 3.01749 6 3.41155 6 3.87186C6 4.33218 6.19583 4.72624 6.5875 5.05404C6.97917 5.38184 7.45 5.54574 8 5.54574Z"
        fill="#8E8B8B"
      />
    </svg>
  );

  const KeyIcon = () => (
    <svg width="23" height="11" viewBox="0 0 23 11" fill="none">
      <path
        d="M6 7.64229C5.45 7.64229 4.97917 7.47838 4.5875 7.15058C4.19583 6.82278 4 6.42872 4 5.96841C4 5.50809 4.19583 5.11403 4.5875 4.78623C4.97917 4.45843 5.45 4.29453 6 4.29453C6.55 4.29453 7.02083 4.45843 7.4125 4.78623C7.80417 5.11403 8 5.50809 8 5.96841C8 6.42872 7.80417 6.82278 7.4125 7.15058C7.02083 7.47838 6.55 7.64229 6 7.64229ZM6 10.99C4.33333 10.99 2.91667 10.5018 1.75 9.5254C0.583333 8.54897 0 7.36331 0 5.96841C0 4.57351 0.583333 3.38785 1.75 2.41142C2.91667 1.43499 4.33333 0.946777 6 0.946777C7.11667 0.946777 8.12917 1.17694 9.0375 1.63725C9.94583 2.09757 10.6667 2.70435 11.2 3.45759H20L23 5.96841L18.5 9.73463L16.5 8.47922L14.5 9.73463L12.375 8.47922H11.2C10.6667 9.23247 9.94583 9.83925 9.0375 10.2996C8.12917 10.7599 7.11667 10.99 6 10.99ZM6 9.31616C6.93333 9.31616 7.75417 9.07903 8.4625 8.60476C9.17083 8.1305 9.64167 7.53069 9.875 6.80535H13L14.45 7.66321L16.5 6.38688L18.275 7.53767L20.15 5.96841L19.15 5.13147H9.875C9.64167 4.40612 9.17083 3.80632 8.4625 3.33205C7.75417 2.85779 6.93333 2.62065 6 2.62065C4.9 2.62065 3.95833 2.94846 3.175 3.60406C2.39167 4.25966 2 5.04778 2 5.96841C2 6.88904 2.39167 7.67716 3.175 8.33276C3.95833 8.98836 4.9 9.31616 6 9.31616Z"
        fill="#8E8B8B"
      />
    </svg>
  );

  return (
    <div className="login-modal-overlay" onClick={handleClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-button"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="login-modal-content">
          <div className="login-image-section">
            <img
              src="/login.png"
              alt="Security illustration"
              className="login-illustration"
            />
          </div>

          <div className="login-form-section">
            <h1 className="login-title">
              Sign In to your <span className="login-title-highlight">Dashboard</span>
            </h1>

            <form onSubmit={handleSubmit} className="login-form" noValidate>
              <div className="input-group">
                <UserIcon />
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (touched.username) {
                      validateField("username", e.target.value);
                    }
                  }}
                  onBlur={() => handleBlur("username")}
                  className={`login-input ${
                    errors.username && touched.username ? "input-error" : ""
                  }`}
                  disabled={isLoading}
                  autoComplete="username"
                  required
                />
                {errors.username && touched.username && (
                  <div className="error-message">{errors.username}</div>
                )}
              </div>

              <div className="input-group">
                <KeyIcon />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (touched.password) {
                      validateField("password", e.target.value);
                    }
                  }}
                  onBlur={() => handleBlur("password")}
                  className={`login-input ${
                    errors.password && touched.password ? "input-error" : ""
                  }`}
                  disabled={isLoading}
                  autoComplete="current-password"
                  required
                />
                {errors.password && touched.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>

              <button
                type="submit"
                className={`login-submit-button ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Signing In...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <div className="login-links">
              <a
                href=" "
                className="forgot-password-link"
                onClick={(e) => e.preventDefault()}
              >
                Forgot Password ?
              </a>

              <div className="register-section">
                <span className="register-text">Not registered yet ?</span>
                <a
                  href=" "
                  className="register-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Register here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

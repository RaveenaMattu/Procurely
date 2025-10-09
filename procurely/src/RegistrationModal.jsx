import React, { useState, useEffect } from "react";
import "./RegistrationModal.css";

const RegistrationModal = ({ isOpen, onClose, onLoginClick }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    ageRange: "",
    techComfort: "",
    deviceSetup: "",
    priceConscious: "",
    brandConscious: "",
    buyingFactors: [],
    productCategories: [],
    purchaseFrequency: "",
    deliverySpeed: "",
    refurbishedOpen: "",
  });

  const totalSteps = 6;

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

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.address && formData.ageRange;
      case 2:
        return formData.techComfort && formData.deviceSetup;
      case 3:
        return (
          formData.priceConscious &&
          formData.brandConscious &&
          formData.buyingFactors.length === 2
        );
      case 4:
        return (
          formData.productCategories.length > 0 && formData.purchaseFrequency
        );
      case 5:
        return formData.deliverySpeed && formData.refurbishedOpen;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost/procurely/procurely/backend/register.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
          setCurrentStep(6);
        } else {
          alert(result.error || "Something went wrong");
        }
      } catch (error) {
        alert("Server error: " + error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      fullName: "",
      address: "",
      ageRange: "",
      techComfort: "",
      deviceSetup: "",
      priceConscious: "",
      brandConscious: "",
      buyingFactors: [],
      productCategories: [],
      purchaseFrequency: "",
      deliverySpeed: "",
      refurbishedOpen: "",
    });
    setIsLoading(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleBackToLogin = () => {
    resetForm();
    onClose();
    onLoginClick();
  };

  if (!isOpen) return null;

  const ArrowDownIcon = () => (
    <svg width="27" height="26" viewBox="0 0 27 26" fill="none">
      <path
        d="M13.9416 16.676L7.4541 10.1886L8.96785 8.6748L13.9416 13.6485L18.9153 8.6748L20.4291 10.1886L13.9416 16.676Z"
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

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Tell us about YOURSELF";
      case 2:
        return "TECH SAVVY Level";
      case 3:
        return "BUYING Behaviour";
      case 4:
        return "Product INTERESTS";
      case 5:
        return "DELIVERY and CONDITION";
      case 6:
        return "Profile Complete!";
      default:
        return "";
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="registration-form">
            <div className="form-field">
              <input
                type="text"
                placeholder="What's your full name ?"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-field">
              <input
                type="text"
                placeholder="What's your address ?"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-field">
              <select
                value={formData.ageRange}
                onChange={(e) => handleInputChange("ageRange", e.target.value)}
                className="form-select"
              >
                <option value="">What's your age range ?</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46-55">46-55</option>
                <option value="56+">56+</option>
              </select>
              <ArrowDownIcon />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="registration-form">
            <div className="form-field">
              <select
                value={formData.techComfort}
                onChange={(e) =>
                  handleInputChange("techComfort", e.target.value)
                }
                className="form-select"
              >
                <option value="">
                  How comfortable are you with technology ?
                </option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
              <ArrowDownIcon />
            </div>
            <div className="form-field">
              <select
                value={formData.deviceSetup}
                onChange={(e) =>
                  handleInputChange("deviceSetup", e.target.value)
                }
                className="form-select"
              >
                <option value="">
                  Do you usually set up your device yourself ?
                </option>
                <option value="always">Always</option>
                <option value="sometimes">Sometimes</option>
                <option value="rarely">Rarely</option>
                <option value="never">Never</option>
              </select>
              <ArrowDownIcon />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="registration-form">
            <div className="checkbox-section">
              <h4 className="checkbox-title">
                What matters most when buying tech? (Pick 2)*
              </h4>
              <div className="checkbox-group">
                {[
                  "Price",
                  "Brand",
                  "Features and Specs",
                  "Delivery Speed",
                  "Warranty and Support",
                ].map((factor) => (
                  <label key={factor} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={formData.buyingFactors.includes(factor)}
                      onChange={() =>
                        handleCheckboxChange("buyingFactors", factor)
                      }
                      disabled={
                        !formData.buyingFactors.includes(factor) &&
                        formData.buyingFactors.length >= 2
                      }
                    />
                    <span className="checkbox-label">{factor}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-field">
              <select
                value={formData.priceConscious}
                onChange={(e) =>
                  handleInputChange("priceConscious", e.target.value)
                }
                className="form-select"
              >
                <option value="">How price-conscious are you ?</option>
                <option value="very">Very price-conscious</option>
                <option value="somewhat">Somewhat price-conscious</option>
                <option value="not-very">Not very price-conscious</option>
                <option value="price-not-important">
                  Price is not important
                </option>
              </select>
              <ArrowDownIcon />
            </div>
            <div className="form-field">
              <select
                value={formData.brandConscious}
                onChange={(e) =>
                  handleInputChange("brandConscious", e.target.value)
                }
                className="form-select"
              >
                <option value="">How brand-conscious are you ?</option>
                <option value="very">Very brand-conscious</option>
                <option value="somewhat">Somewhat brand-conscious</option>
                <option value="not-very">Not very brand-conscious</option>
                <option value="brand-not-important">
                  Brand is not important
                </option>
              </select>
              <ArrowDownIcon />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="registration-form">
            <div className="checkbox-section">
              <h4 className="checkbox-title">
                What categories do you shop most in?*
              </h4>
              <div className="checkbox-group">
                {[
                  "Smartphones",
                  "Laptops/Tablets",
                  "Smart Home",
                  "Wearables",
                  "TVs",
                  "Kitchen Appliances",
                  "Audio",
                ].map((category) => (
                  <label key={category} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={formData.productCategories.includes(category)}
                      onChange={() =>
                        handleCheckboxChange("productCategories", category)
                      }
                    />
                    <span className="checkbox-label">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-field">
              <select
                value={formData.purchaseFrequency}
                onChange={(e) =>
                  handleInputChange("purchaseFrequency", e.target.value)
                }
                className="form-select"
              >
                <option value="">How often do you buy new tech ?</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="bi-annually">Twice a year</option>
                <option value="annually">Once a year</option>
                <option value="rarely">Rarely</option>
              </select>
              <ArrowDownIcon />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="registration-form">
            <div className="form-field">
              <select
                value={formData.deliverySpeed}
                onChange={(e) =>
                  handleInputChange("deliverySpeed", e.target.value)
                }
                className="form-select"
              >
                <option value="">How fast do you need delivery?*</option>
                <option value="same-day">Same day</option>
                <option value="next-day">Next day</option>
                <option value="2-3-days">2-3 days</option>
                <option value="week">Within a week</option>
                <option value="no-rush">No rush</option>
              </select>
              <ArrowDownIcon />
            </div>
            <div className="form-field">
              <select
                value={formData.refurbishedOpen}
                onChange={(e) =>
                  handleInputChange("refurbishedOpen", e.target.value)
                }
                className="form-select"
              >
                <option value="">
                  Are you open to refurbished / used products?*
                </option>
                <option value="yes">Yes, always</option>
                <option value="sometimes">Sometimes</option>
                <option value="rarely">Rarely</option>
                <option value="never">Never</option>
              </select>
              <ArrowDownIcon />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="success-content">
            <h2 className="success-title">
              Thanks, User! Your Tech Buying Avatar is ready.
            </h2>
            <p className="success-description">
              We'll now personalize your shopping experience based on your
              profile.
            </p>
            <button className="visit-profile-button">
              <span>Visit Profile</span>
              <ArrowForwardIcon />
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="registration-modal-overlay" onClick={handleClose}>
      <div className="registration-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-button"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="registration-modal-content">
          {currentStep < 6 && (
            <div className="registration-left-section">
              <img
                src={process.env.PUBLIC_URL + "/regBg.png"}
                alt="Registration Illustration"
                className="registration-illustration"
              />
              <h2 className="step-title">{getStepTitle()}</h2>
            </div>
          )}

          <div className="registration-right-section">
            {currentStep < 6 && (
              <div className="registration-header">
                <h1 className="registration-title">
                  <span className="title-main">Sign Up for </span>
                  <span className="title-secondary">EffiShop Account</span>
                </h1>
              </div>
            )}

            {currentStep < 6 && (
              <>
                {renderStepContent()}

                <div className="registration-actions">
                  <button
                    className="back-to-login-link"
                    onClick={handleBackToLogin}
                  >
                    Back to Login
                  </button>

                  {currentStep < 5 ? (
                    <button
                      className={`next-button ${
                        !validateStep() ? "disabled" : ""
                      }`}
                      onClick={handleNext}
                      disabled={!validateStep()}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className={`submit-button ${
                        !validateStep() || isLoading ? "disabled" : ""
                      }`}
                      onClick={handleSubmit}
                      disabled={!validateStep() || isLoading}
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                    </button>
                  )}
                </div>
              </>
            )}

            {currentStep === 6 && renderStepContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;

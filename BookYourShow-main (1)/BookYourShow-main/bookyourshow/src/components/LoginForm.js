import React from "react";
import '../style/allcss.css'
const LoginForm = ({ handleClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <h2>Get Started</h2>
        <div className="login-options">
          <button className="login-btn google">
            <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg">
              <title>Google</title>
              <g fill="none">
                <path
                  d="M18.33 9.744c0-.65-.058-1.274-.167-1.874H9.536v3.544h4.93a4.214 4.214 0 0 1-1.828 2.765v2.298h2.96c1.733-1.595 2.732-3.943 2.732-6.733z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M9.536 18.696c2.473 0 4.547-.82 6.062-2.219l-2.96-2.298c-.82.55-1.87.874-3.102.874-2.386 0-4.406-1.611-5.126-3.777H1.35v2.374a9.157 9.157 0 0 0 8.186 5.046z"
                  fill="#34A853"
                ></path>
                <path
                  d="M4.41 11.276a5.507 5.507 0 0 1-.287-1.74c0-.604.104-1.191.287-1.74V5.421H1.35a9.157 9.157 0 0 0-.975 4.114c0 1.478.354 2.877.974 4.114l3.06-2.374z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M9.536 4.018c1.345 0 2.552.463 3.502 1.37l2.627-2.627C14.08 1.283 12.005.375 9.535.375A9.157 9.157 0 0 0 1.35 5.422l3.06 2.373C5.13 5.63 7.15 4.018 9.537 4.018z"
                  fill="#EA4335"
                ></path>
                <path d="M.375.375h18.321v18.321H.375z"></path>
              </g>
            </svg>
            Continue with Google
          </button>
          <button className="login-btn email">
            <svg
              width="19"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="19"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            </svg>
            Continue with Email
          </button>
          <button className="login-btn apple">
            <svg
              width="19"
              xmlns="http://www.w3.org/2000/svg"
              height="19"
              viewBox="0 0 170 170"
              aria-labelledby="apple-label"
              role="img"
            >
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z"></path>
            </svg>
            Continue with Apple
          </button>
        </div>
        <div className="separator">OR</div>
        <div className="mobile-login">
          <img 
            src="https://in.bmscdn.com/webin/common/icons/indianflag.svg"
            alt="India Flag"
          />
          <input type="text" placeholder="+91 Continue with mobile number" />
        </div>
        <p className="terms">
          I agree to the <a href="/">Terms & Conditions</a> &{" "}
          <a href="/">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

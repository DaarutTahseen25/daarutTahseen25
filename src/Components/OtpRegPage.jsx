import "./OtpRegPage.css";
function OtpREgistration() {
    return (
        <div className="container">
            <div className="brand">
                <img src="/logo.png" alt="institute-logo" className="brand-logo" />
                <h2 className="join-us">Join Us now!</h2>
                <p className="text">Becoming part of a growing online community dedicated to preserving and spreading Islamic knowledge with excellence</p>
            </div>
            <div className="verify-tab">
                <h2>OTP VERIFICATION</h2>
                <p>Enter SMS OTP</p>
                <input type="password" maxLength="1" /><input type="password" maxLength="1" /><input type="password" maxLength="1" /><input type="password" maxLength="1" /><input type="password" maxLength="1" /><input type="password" maxLength="1" />
                <p>Enter Email OTP</p>
                <input type="password" maxLength="1" /><input type="password" maxLength="1" /><input type="password" maxLength="1" /><input type="password" maxLength="1" /><input type="password" maxLength="1" /><input type="password" maxLength="1" />
                <br />
                <button>Verify</button>
                <br />
                <small>Already have an account? <a href="#">Login</a></small>
            </div>
        </div>
    );
}
export default OtpREgistration;
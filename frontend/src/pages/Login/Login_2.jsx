import React from "react";

const Login_2 = () => {
  return (
    <>
      <section className="form-main">
        <div className="form-content">
          <div className="box">
            <h3>welcome</h3>
            <form action="">
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  name=""
                  id=""
                  className="input-control"
                />
              </div>
              <div className="input-box">
                <input
                  placeholder="Password"
                  type="text"
                  className="input-control"
                />
                <div className="input-link"><a href="#">Forgot Password?</a></div>
              </div>
            </form>
            <p>Don't have an account? <a href="/register">Sign Up</a></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login_2;

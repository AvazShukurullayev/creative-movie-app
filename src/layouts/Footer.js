import React, { Component } from "react";

class Footer extends Component {
  state = {};

  render() {
    return (
      <footer className="footer p-4 border shadow mt-5" id="footer">
        <div className="container">
          <div className="footer__page text-center">
            <div className="footer__copyright">
              <h3>&copy; {new Date().getFullYear()} CopyRight Reserved</h3>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

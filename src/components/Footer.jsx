import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div>
      <footer className="footer">
        <p>&copy; {currentYear} Destination Wanderlust</p>
      </footer>
    </div>
  );
};

export default Footer;
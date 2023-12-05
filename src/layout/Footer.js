const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <a href="mailto:christian@crod.io">
          <p>E: christian@crod.io</p>
        </a> 
        <a href="tel:+34640577329">      
          <p>T: +34 640 577 329</p>
        </a> 
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.pinterest.com/">
            <span className="icon fab fa-pinterest" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
            <span className="icon fab fa-dribbble" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;

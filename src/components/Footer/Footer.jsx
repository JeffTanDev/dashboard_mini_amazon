import "./Footer.css";
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer() {
  return (
    <>
      <div className="footerBackToTop" onClick={scrollToTop}>
        <span className="footerBackToTopText">Back to top</span>
      </div>
      <footer className="footer">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;

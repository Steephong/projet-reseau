import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title">About</h2>
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Resources</h2>
          <ul>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">eBooks</a>
            </li>
            <li>
              <a href="#">Webinars</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Contact</h2>
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Sales</a>
            </li>
            <li>
              <a href="#">Advertise</a>
            </li>
          </ul>
        </div>

        <div className="ft-main-item"></div>

        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>&copy; 2022 Copyright Undefined Inc.</li>
          </ul>
          <div className="textfooter">
            <p>
              Undefined is an enterprise that sells shirts. Our shirts are made
              <br />
              from high-quality materials and come in a variety of styles and
              <br />
              colors. Whether you're looking for a casual shirt for everyday
              <br />
              wear or something more formal for a special occasion, we have you
              <br />
              covered. Our expert team of designers are constantly working to
              <br />
              bring you the latest trends and styles.
            </p>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;

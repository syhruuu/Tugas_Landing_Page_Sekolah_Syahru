import React from "react";
import logosecondary from "../logosecondary.png";

import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="footer py-4 bg-dark text-white-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="h4 text-white mb-3">Lokasi</h3>
            <p>
              Jl. Raya Cikampak Cicadas RT. 001/RW 001. Kecamatan Ciampea,
              Kabupaten Bogor. Jawa Barat 16620
            </p>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <img
              src={logosecondary}
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <h3 className="h4 text-white mb-3">Kontak Kami</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <p>info@smktibazma.sch.id</p>
              </li>
              <li>
                <p>08 1111 4433 9</p>
              </li>
            </ul>
          </div>
          <div className="singleCol social-media-icons-white d-flex justify-content-center" >
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://youtube.com">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          </div>
        </div>
        <small class="website-rights d-flex justify-content-center">SMKTIBazma © 2021</small>
      </div>
    </footer>
  );
}

export default Footer;
import Rectangleimg from "../imgs/Rectangle.svg";
import Rectangleimg2 from "../imgs/unsplash.svg";
import Img1 from "../imgs/manglasses.png";
import logo from "../imgs/undefined_w.png";
import imgcontainer1 from "../imgs/unsplash_TT-ROxWj9nAimgs.png";
import imgcontainer2 from "../imgs/Rectangle 16imgs.png";
import imgcontainer3 from "../imgs/Rectangle 17imgs.png";
import tshirt from "../imgs/teeshirt1.png";

import "../styles/Main.css";

function Main() {
  return (
    <div className="Main">
      <div className="Flex">
        <div className="Flex-item">
          <h1 className="title">Undefined.</h1>
          <h3 className="sub-title">
            Une qualité irréprochable pour un produit parfait
          </h3>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus.
          </p>
          <button className="btn">Shop Now</button>
        </div>
        <div className="Flex-item">
          <img src={Rectangleimg} alt="image" className="img" id="img1" />
          <img src={Rectangleimg2} alt="image" className="img" id="img2" />
        </div>
      </div>

      <div className="Logo-Interp-p">
        <div className="Logo-Interp">
          <div className="Logo-Interp-Bar"></div>
          <img src={logo} alt="image" className="logoInterp" id="logo1" />
          <img src={logo} alt="image" className="logoInterp" id="logo2" />
        </div>
      </div>

      <div className="Flex" id="Flex2">
        <div className="Flex-item">
          <h2 className="Titre-presentation">t-shirt a l'ere du temps</h2>
          <p className="text-presentaion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="btn">Shop Now</button>
        </div>
        <div className="Flex-item">
          <img src={Img1} alt="image" id="img3" className="img" />
        </div>
      </div>

      <div className="container">
        <div className="img-container">
          <img src={imgcontainer1} alt="image" id="imgC1" />
          <img src={imgcontainer2} alt="image" id="imgC2" />
          <img src={imgcontainer3} alt="image" id="imgC3" />
        </div>

        <div className="text-container">
          <h2 className="Titre-presentation-d">t-shirt a l'ere du temps</h2>
          <p className="text-presentaion-d">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="btn-d">Shop Now</button>
        </div>
      </div>

      <img src={logo} alt="image" className="logoInterp2" />

      <div className="container-tshirt">
        <div className="text-container-tshirt">
          <h2>Produits les plus populaires</h2>
          <p>50 OFF sur notre collection</p>
          <div className="tshirts-card-container">
            <div className="tshirts-card">
              <img src={tshirt} alt="image" />
            </div>
            <div className="tshirts-card">
              <img src={tshirt} alt="image" />
            </div>
            <div className="tshirts-card">
              <img src={tshirt} alt="image" />
            </div>
            <div className="tshirts-card">
              <img src={tshirt} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

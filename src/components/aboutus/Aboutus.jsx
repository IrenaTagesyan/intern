import shop from "./svg/shop.svg";
import icon from "./svg/icon.svg";
import city from "./svg/city.svg";
import globus from "./svg/globus.svg";
import "./about.css";

function aboutUs() {
  return (
    <div className="about_div">
      <div className="main">
        <p className="main_p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maiores
          cupiditate ipsa dolore blanditiis deleniti quo quia soluta!
          Consequuntur rerum nobis quam quis ipsum beatae eos vel nisi
          distinctio. Perspiciatis? Rerum fugiat voluptatum qui, hic quos ab
          impedit. Perferendis ipsa laborum quibusdam eos quaerat laudantium
          assumenda asperiores voluptate est. Vel assumenda laudantium laborum
          architecto qui? Exercitationem dolorum ut quod quisquam. Assumenda sit
          ad quae cum animi nesciunt, nobis, molestiae, saepe fugit laboriosam
          ratione eveniet facere qui veritatis autem iusto neque voluptate quas
          ullam id dicta enim sunt nostrum soluta? Iste. Sit, porro blanditiis?
          Omnis eos quis eum aperiam reiciendis dicta amet nostrum possimus
          laborum? Libero ut unde debitis? Omnis nisi error commodi ex voluptas?
          Id harum aspernatur vero quibusdam voluptate? Officiis, veritatis sed
          molestiae praesentium iste odit. Nihil fugiat porro aliquid magni, aut
          officiis corporis, itaque odit praesentium voluptas qui minus
          provident, temporibus facere voluptatem architecto accusantium dolore
          iste voluptatibus?
        </p>
      </div>
      <div className="container">
        <div className="con_div">
          <div className="con_main">
            <img src={icon} alt="shop" />
            <div>
              <p>Total Gueste</p>
              <p>200,000,000+</p>
            </div>
          </div>
        </div>
        <div className="con_div">
          <div className="con_main">
            <img src={city} alt="shop" />
            <div>
              <p>Cities</p>
              <p>65,000+</p>
            </div>
          </div>
        </div>
        <div className="con_div">
          <div className="con_main">
            <img src={shop} alt="shop" />
            <div>
              <p>Shops</p>
              <p>1,400+</p>
            </div>
          </div>
        </div>
        <div className="con_div">
          <div className="con_main">
            <img src={globus} alt="shop" />
            <div>
              <p>Countries</p>
              <p>191+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default aboutUs;

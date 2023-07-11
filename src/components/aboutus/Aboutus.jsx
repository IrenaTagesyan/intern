import Info from "./info";
import "./about.css";

function AboutUs() {
    return(
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
        {Info.map((values)=>{
const {image,paragraf,number,id}=values
return (
        <div className="con_div" key={id}>
    <div className="con_main">
            <img src={image} alt="shop" />
            <div>
              <p>{paragraf}</p>
              <p>{number}</p>
            </div>
          </div>   
      </div> ) })}
    </div>
    </div>
    )
}
    
  





export default AboutUs;

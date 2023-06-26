import "./home.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import { Link } from "react-router-dom";

function home() {
  return (
    <div>
      <ImageSlider slides={SliderData} />

      <div className="home_main">
        <div className="p_div">
          <h1>Books are Your Best Friend</h1>

          <p>
            One of the great reasons that signify the importance of books in our
            life is that books act as our best friends. Friends are one of the
            most important parts of our life. We can’t imagine our life without
            the companionship of a good friend. Similarly, a book is like a best
            friend that constantly inspires us to become the best versions of
            ourselves. Books enrich our minds with knowledge just like a good
            friend. We can learn a lot from books and they can help us in
            overcoming our failures as well as shape our minds. So if you want
            to find another best friend, find yourself a good book.
          </p>
        </div>
        <div className="goshop">
          <ul className="home_ul">
            <li>
              <Link className="link_home" to="/shop">
                Go to Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default home;

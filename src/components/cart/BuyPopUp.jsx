import "./cart.css";

function BuyPopUp({popActive, setpopActive}) {
  return (
    <div
      className={popActive? "popup active":"popup"}
      onClick={() => setpopActive(false)}
    >
      <div className="popup_content" onClick={e=>e.stopPropagation()}>
       <h2>Some text</h2>
      </div>
    </div>
  );
}
export default BuyPopUp;

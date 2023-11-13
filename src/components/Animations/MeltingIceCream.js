import "../../App.css";

export default function MeltingIceCream() {
  return (
    <div className="icecream ">
      <div className="head">
        <div className="bite bg-base-100"></div>
        <div className="bite bg-base-100"></div>
        <div className="stripContainer">
          <div className="strip"></div>
          <div className="strip"></div>
        </div>
        <div className="eyeContainer">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="mouth">
          <div className="tongue"></div>
        </div>
        <div className="mltContainer">
          <div className="drip"></div>
          <div className="drip"></div>
          <div className="drip"></div>
          <div className="drip"></div>
        </div>
      </div>
      <div className="stick"></div>

      <div className="puddle"></div>
    </div>
  );
}

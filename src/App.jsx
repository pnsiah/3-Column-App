import "./App.css";
import SingleColumn from "./components/single-column";

function App() {
  const columns = [
    {
      colImg: "../images/icon-sedans.svg",
      colTitle: "Sedans",
      text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
      colImg: "../images/icon-suvs.svg",
      colTitle: "SUVs",
      text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    },
    {
      colImg: "../images/icon-luxury.svg",
      colTitle: "Luxury",
      text: "Luxury Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    },
  ];

  return (
    <div className="column-wrapper">
      <SingleColumn columns={columns} />
    </div>
  );
}

export default App;

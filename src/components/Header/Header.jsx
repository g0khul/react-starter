import reactImage from "../../assets/react.svg";
import "./Header.css";

const reactDescription = ["Fundamentals", "Crucial", "Core"];

function genRanInput(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[genRanInput(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;

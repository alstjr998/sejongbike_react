import { Link } from "react-router-dom";

const Buttons = () => (
  <div id="buttons">
    <a href="https://youtu.be/GHsalN2r5D8" target="_blank" rel="noopener noreferrer">
      <img src="/img/button1.png" alt="button1" />
    </a>
    <Link to="/insurance" target="_blank" rel="noopener noreferrer">
      <img src="/img/button2.png" alt="button2" />
    </Link>
  </div>
);

export default Buttons;

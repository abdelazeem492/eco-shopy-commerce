import { useState } from "react";
import { Button } from "react-bootstrap";

const GoUp = () => {
  const [display, setDisplay] = useState("none");

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    scroll >= 500 ? setDisplay("flex") : setDisplay("none");
  });
  return (
    <Button
      variant="dark"
      className="go-up-btn"
      style={{ display }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <i className="bi bi-arrow-up" />
    </Button>
  );
};

export default GoUp;

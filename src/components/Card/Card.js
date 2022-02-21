import { useEffect, useState } from "react";
import "./Card.css";
import img from "./pattern-divider-desktop.svg";

const Card = () => {
  const [isLoading, setLoading] = useState(true);
  const [advice, setAdvice] = useState("");
  const handleChange = () => {
		handleFetch();
	};
  useEffect(() => {
    handleFetch();
  }, []);

	const handleFetch = () => {
		fetch(`https://api.adviceslip.com/advice`)
      .then((res) => res.json())
      .then((result) => {
        setAdvice(result.slip);
				setLoading(false);
      })
      .catch((err) => console.log(err));
	}

  return (
    <div className="card">
      {isLoading === true ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h3>Advice #{advice.id}</h3>
          <p>"{advice.advice}"</p>
          <img src={img} alt="img" />
          <div className="container" onClick={handleChange}>
            <div className="button"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

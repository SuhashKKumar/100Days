import { useState } from "react";
import Rating from "./Components/Rating";
import Message from "./Components/Message";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div className="main-container">
      {rating ? <Message rating={rating} /> : <Rating setRating={setRating} />}
    </div>
  );
}

export default App;

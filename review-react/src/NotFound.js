import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="not-found">
     <Link to="/">  
     <h2> Sorry </h2>
      <p> That page cannot be Found </p>
     Back to the Homepage ...</Link>
    </div>
  );
};

export default Notfound;
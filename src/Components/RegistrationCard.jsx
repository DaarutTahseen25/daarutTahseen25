import Button from "./Button";
import { Link } from "react-router";

const RegistrationCard = ({ title, points, children, directory }) => {
  return (
    <div style={{backgroundColor: "#FFFFFF", padding: "30px 28px", border: "1px solid #A9A9A9", borderRadius: "20px"}}>
      <h2 style={{textAlign: "center", fontFamily: "Montserrat", fontWeight: "700", fontSize: "20px", color: "#000000"}}>{title}</h2>
      <ul style={{ margin: "auto",listStyleType: "disc" }}>
        {points.map((point, index) => (
          <li style={{ marginTop: "20px", fontSize: "18px" }} key={index}>{point}</li>
        ))}
      </ul>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <Link to={directory} className="link">
            <Button
                children={children}
            />
        </Link>
    </div>
    
    </div>
  );
};


export default RegistrationCard
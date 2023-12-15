import male from "../../../images/masculino.png";
import female from "../../../images/femenino.png";
import live from "../../../images/circleGreen.png";
import dead from "../../../images/circleRed.png";
import statusUnknown from "../../../images/pregunta.png";
import "./Characters.css";

export default function Characters({ characters = [] }) {
  return (
    <div className="bodyCharacters ">
      {characters.map((item, index) => (
        <div className="boxCharacters" key={index}>
          <div className="boxImage">
            <img className="imgCharacter" src={item.image} alt="" />
          </div>
          <div className="paddingColor">
            <div className="boxDescription ">
              <h4 className="myColor1">{item.name}</h4>
              <hr className="hr" />
              <h6 className="">
                Species:{" "}
                {item.species === "unknown" ? (
                  <img width="20px" src={statusUnknown} alt="" />
                ) : (
                  item.species
                )}
              </h6>
              <h6 className="">
                Gender:{" "}
                {item.gender === "Male" ? (
                  <img width="20px" src={male} alt="" />
                ) : (
                  <img width="20px" src={female} alt="" />
                )}
              </h6>
              <h6 className="">
                Origin:{" "}
                {item.origin.name === "unknown" ? (
                  <img width="20px" src={statusUnknown} alt="" />
                ) : (
                  item.origin.name
                )}
              </h6>
              <h6 className="">
                Status:{" "}
                {item.status === "Alive" ? (
                  <img width="20px" src={live} alt="" />
                ) : item.status === "Dead" ? (
                  <img width="20px" src={dead} alt="" />
                ) : (
                  <img width="20px" src={statusUnknown} alt="" />
                )}
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

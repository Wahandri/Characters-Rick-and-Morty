import male from "../../../images/masculino.png";
import female from "../../../images/femenino.png";
import live from "../../../images/latido-del-corazon.png";
import dead from "../../../images/craneo.png";
import statusUnknown from "../../../images/pregunta.png";
import "./Characters.css";

export default function Characters({ characters = [] }) {
  return (
    <div className="bodyCharacters">
      {characters.map((item, index) => (
        <div className="boxCharacters" key={index}>
          <div className="cardCharacter ">
            <img className="imgCharacter" src={item.image} alt={item.name} />
            <div className="centerCol">
              <h2 className="">{item.name}</h2>
              <hr className="hr" />
              <h4 className="">
                Species:{" "}
                {item.species === "unknown" ? (
                  <img width="20px" src={statusUnknown} alt="" />
                ) : (
                  item.species
                )}
              </h4>
              <h4 className="">
                Gender:{" "}
                {item.gender === "Male" ? (
                  <img width="20px" src={male} alt="" />
                ) : (
                  <img width="20px" src={female} alt="" />
                )}
              </h4>
              <h4 className="">
                Origin:{" "}
                {item.origin.name === "unknown" ? (
                  <img width="20px" src={statusUnknown} alt="" />
                ) : (
                  item.origin.name
                )}
              </h4>
              <h4 className="">
                Status:{" "}
                {item.status === "Alive" ? (
                  <img width="20px" src={live} alt="" />
                ) : item.status === "Dead" ? (
                  <img width="20px" src={dead} alt="" />
                ) : (
                  <img width="20px" src={statusUnknown} alt="" />
                )}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

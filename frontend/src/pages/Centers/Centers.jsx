// import { ListCenters } from "./ListCenters/ListCenters";
import { TextInicio } from "./TextInicio/TextInicio";
// import { ButtonCenters } from "./ButtonCenters/ButtonCenters";
import styles from "./Centers.module.css";

export function Centers() {
  return (
    <div className={styles.mainContainer}>
    <TextInicio centers={centers} associations={associations}/> 
  </div>
  );
}

const centers = [
  {
    id: 1,
    name: "Centro 1",
    type: "psycology",
    description: "especialista en traumas",
    address: "Calle Ave del Paraiso",
    phone: 53495393409,
    web_url: "www.ayudatumente.com",
    mail: "ayudatumente@gmail.com",
    user_id: "cristina",
  },
  {
    id: 2,
    name: "Centro 2",
    type: "psycology",
    description: "especialista en traumas",
    address: "Calle Ave del Paraiso",
    phone: 53495393409,
    web_url: "www.ayudatumente.com",
    mail: "ayudatumente@gmail.com",
    user_id: "cristina",
  },
  {
    id: 3,
    name: "Centro 3",
    type: "psycology",
    description: "especialista en traumas",
    address: "Calle Ave del Paraiso",
    phone: 53495393409,
    web_url: "www.ayudatumente.com",
    mail: "ayudatumente@gmail.com",
    user_id: "cristina",
  },
  {
    id: 4,
    name: "Centro 4",
    type: "psycology",
    description: "especialista en traumas",
    address: "Calle Ave del Paraiso",
    phone: 53495393409,
    web_url: "www.ayudatumente.com",
    mail: "ayudatumente@gmail.com",
    user_id: "cristina",
  },
];

const associations = [
  {
    id: 1,
    name: "Asociacion 1",
    type: "asociacion",
    description: "especialista en traumas",
    address: "Calle Ave del Paraiso",
    phone: 53495393409,
    web_url: "www.ayudatumente.com",
    mail: "ayudatumente@gmail.com",
    user_id: "cristina",
  },
  {
    id: 2,
    name: "Asociacion 2",
    type: "asociacion",
    description: "especialista en traumas",
    address: "Calle Ave del Paraiso",
    phone: 53495393409,
    web_url: "www.ayudatumente.com",
    mail: "ayudatumente@gmail.com",
    user_id: "cristina",
  },
  {
    id: 3,
    name: "Asociacion 3",
    type: "asociacion",
    description: "especialista en traumas",
    address: "Calle Ave del Paraiso",
    phone: 53495393409,
    web_url: "www.ayudatumente.com",
    mail: "ayudatumente@gmail.com",
    user_id: "cristina",
  },
  {
    id: 4,
    name: "Asociacion 4",
    type: "asociacion",
    description: "especialista en traumas",
    address: "Calle Ave del Paraiso",
    phone: 53495393409,
    web_url: "www.ayudatumente.com",
    mail: "ayudatumente@gmail.com",
    user_id: "cristina",
  },
];

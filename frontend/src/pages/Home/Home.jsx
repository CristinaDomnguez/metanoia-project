import { Carousel } from "./Carousel/Carousel";
import { Slogan } from "./Slogan/Slogan";
import { Sheets } from "./Sheets/Sheets";
import "./Home.css";
import AboutUs from "./AboutUs/AboutUs";

export function Home() {
  return (
    <div>
      <Carousel />
      <div className="home">
        <AboutUs />
        <Slogan />
        <Sheets />
      </div>
    </div>
  );
}

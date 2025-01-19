import { Carousel } from "./Carousel/Carousel";
// import { Slogan } from "./Slogan/Slogan";
import { Sheets } from "./Sheets/Sheets";
import "./Home.css";

export function Home() {
  return (
    <div>
      <Carousel />
      <div className="home">
        {/* <Slogan /> */}
        <Sheets />
      </div>
    </div>
  );
}

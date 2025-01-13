import { Carousel } from "./Carousel/Carousel";
import { Slogan } from "./Slogan/Slogan";
import { Sheets } from "./Sheets/Sheets";
import { Footer } from "./Footer/Footer";
import "./Home.css";


export function Home() {
  return (
    <div className="home">
      <Carousel />
      <Slogan />
      <Sheets />
      <Footer />
    </div>
  );
}

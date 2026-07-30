import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Highlights from "./components/Highlights";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all';
import Features from "./components/Features";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <ProductViewer/>
    <Showcase/>
    <Performance/>
    <Features/>
    <Highlights/>
   </main>
  );
}

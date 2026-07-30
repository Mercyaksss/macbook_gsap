import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <ProductViewer/>
    <Showcase/>
    <Performance/>
   </main>
  );
}

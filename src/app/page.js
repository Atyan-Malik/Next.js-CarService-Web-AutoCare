import Image from "next/image";
import Hero from "./Hero/page.jsx";
import About from "./About/page.jsx";
import Cards from "./Cards/page.jsx";
import Contact from "./Contact/page.jsx";
import Testimonial from "./Testomonial/page.jsx";
import Choose from "./Choose/page.jsx";
import Blogs from "./Blogs/page.jsx";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Cards />
        <About />
        <Choose />
        <Contact />
        <Blogs />
        <Testimonial />
      </div>
    </>
  );
}

import gsap from "gsap";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    const navAween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navAween.fromTo(
      "nav",
      { backgroundColor: "transparent" },//from
      {
        backgroundColor: "#00000050",//to
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power2.out",
      }
    );
  });
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Violet Pour</p>
        </a>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

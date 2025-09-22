import { ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <main className="text-amber-500 font-extrabold">COCKTAIL PAGE</main>
    </>
  );
}

export default App;

import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);
// import './index.css';

function App() {
  return (
    <>
      <main className="text-amber-500 text-5xl h-[100vh]">
        COCKTAIL PAGE
      </main>
    </>
  );
}

export default App;

import { Suspense, lazy, useEffect, useRef } from "react";
import type { Application } from "@splinetool/runtime";

// Lazy-load the Spline runtime so it never blocks first paint.
const Spline = lazy(() => import("@splinetool/react-spline"));

/**
 * The hero robot. A Spline scene (keeps its glossy black + chrome materials and
 * built-in cursor head-follow). We force the baked background to transparent so
 * it floats on the dark page. To swap the robot, export a new scene from Spline
 * and replace this .splinecode URL.
 */
const SPLINE_URL =
  "https://prod.spline.design/X6Hjty5sexmVvxDD/scene.splinecode";

const CharacterModel = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  const handleLoad = (app: Application) => {
    try {
      app.setBackgroundColor("transparent");
    } catch {
      /* older runtime: ignore */
    }

    // Perf: the Spline render loop is expensive (chrome reflections re-render
    // every frame). Once the robot has scrolled off-screen — i.e. the Career
    // section (which comes after the robot's exit) reaches the viewport — pause
    // rendering so heavy sections like Projects stay smooth. Resume on scroll up.
    const marker = document.querySelector(".career-section");
    if (marker && "IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            app.stop();
          } else if (entry.boundingClientRect.top > 0) {
            // Career is below the viewport again → we're back near the hero.
            app.play();
          }
        },
        { threshold: 0, rootMargin: "-10% 0px 0px 0px" }
      );
      obs.observe(marker);
      observerRef.current = obs;
    }
  };

  return (
    <div className="character-container">
      <div className="character-model">
        <div className="character-rim"></div>
        <Suspense fallback={null}>
          <Spline scene={SPLINE_URL} onLoad={handleLoad} />
        </Suspense>
        {/* Covers the "Built with Spline" badge, which the runtime paints
            INTO the canvas (not a DOM node), so CSS/DOM removal can't hide it.
            Matches the page background. Removing it officially needs Spline Pro. */}
        <div className="spline-watermark-cover"></div>
        <div className="character-hover"></div>
      </div>
    </div>
  );
};

export default CharacterModel;

import { Suspense, lazy } from "react";
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
  return (
    <div className="character-container">
      <div className="character-model">
        <div className="character-rim"></div>
        <Suspense fallback={null}>
          <Spline
            scene={SPLINE_URL}
            onLoad={(app: Application) => {
              try {
                app.setBackgroundColor("transparent");
              } catch {
                /* older runtime: ignore */
              }
            }}
          />
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

"use client";

import { Suspense, lazy } from "react";
import { heroSplineUrl } from "@/lib/content";

// Lazy-load the (heavy) Spline runtime so it never blocks first paint.
const Spline = lazy(() => import("@splinetool/react-spline"));

function Placeholder() {
  // Shown while Spline loads, or if no scene URL is configured.
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="absolute h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative h-56 w-56 animate-float">
        <div className="absolute inset-0 animate-spin-slow rounded-[42%_58%_63%_37%/44%_38%_62%_56%] bg-gradient-to-br from-accent/70 to-accent/10 accent-glow" />
        <div className="absolute inset-6 rounded-[58%_42%_37%_63%/56%_62%_38%_44%] border border-accent/40 bg-bg/40 backdrop-blur-sm" />
      </div>
    </div>
  );
}

export default function SplineScene() {
  if (!heroSplineUrl) return <Placeholder />;

  return (
    <Suspense fallback={<Placeholder />}>
      <Spline
        scene={heroSplineUrl}
        // Let it fill the container; the wrapper controls sizing.
        style={{ width: "100%", height: "100%" }}
      />
    </Suspense>
  );
}

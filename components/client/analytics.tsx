"use client";

import { useEffect } from "react";
import * as Fathom from "fathom-client";

const Analytics = () => {
  useEffect(() => {
    Fathom.load("YEEJGEZX", {
      url: "https://thorn-side-proud.operand.ai/script.js",
    });

    const onRouteChange = () => Fathom.trackPageview();

    window.addEventListener("routeChange", onRouteChange);
    return () => window.removeEventListener("routeChange", onRouteChange);
  }, []);

  return null;
};

export default Analytics;

"use client";

import * as React from "react";

// Server components shouldn't use redirect() from next/navigation, rather, they
// should return this client side component instead. It's hacky, but it works.
// See https://github.com/vercel/next.js/issues/43605#issuecomment-1342410758.
export default function Redirect({ location }: { location: string }) {
  React.useEffect(() => {
    window.location.replace(location);
  }, [location]);
  return null;
}

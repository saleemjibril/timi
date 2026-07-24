"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHash } from "@/lib/scrollToSection";

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    // Wait a tick so section content (and late layout) is in the DOM
    const frame = requestAnimationFrame(() => {
      scrollToHash({ behavior: "smooth" });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GeoCoreTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Rastrear visita da página no GeoCore Central
    const sendVisit = () => {
      try {
        const domain = window.location.hostname.replace(/^www\./, "");
        const referrer = document.referrer || null;
        
        fetch("https://seo.empresarialweb.site/api/geocore/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ domain, path: pathname, referrer }),
          keepalive: true,
        }).catch(() => null);
      } catch {}
    };

    sendVisit();

    // 2. Rastrear cliques no WhatsApp
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as Element;
      const anchor = target.closest("a");

      if (anchor) {
        const href = anchor.getAttribute("href") || "";
        if (
          href.includes("wa.me") ||
          href.includes("whatsapp.com") ||
          href.includes("api.whatsapp.com")
        ) {
          const domain = window.location.hostname.replace(/^www\./, "");
          const currentPath = window.location.pathname;

          fetch("https://seo.empresarialweb.site/api/geocore/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              domain,
              path: "/whatsapp-click",
              referrer: currentPath,
            }),
            keepalive: true,
          }).catch(() => null);
        }
      }
    };

    window.addEventListener("click", handleGlobalClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, [pathname]);

  return null;
}

import { useEffect } from "react";

// Fades in elements with the "reveal" class as they scroll into view.
// Elements are only hidden once this runs (html.reveal-ready), so content
// always shows if JavaScript or IntersectionObserver isn't available.
// deps: re-scan when new .reveal elements may have appeared (e.g. a filter).
const useReveal = (deps = []) => {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document
      .querySelectorAll(".reveal:not(.is-visible)")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useReveal;

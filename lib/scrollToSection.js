const SECTION_OFFSET = 24;

let scrollGeneration = 0;
let scrollFrameId = 0;
let scrollTimeoutId = 0;

function getSectionTop(el, offset = SECTION_OFFSET) {
  return Math.max(
    0,
    el.getBoundingClientRect().top + window.scrollY - offset
  );
}

function cancelActiveScroll() {
  cancelAnimationFrame(scrollFrameId);
  window.clearTimeout(scrollTimeoutId);
  scrollFrameId = 0;
  scrollTimeoutId = 0;
}

export function scrollToSection(
  id,
  { behavior = "smooth", offset = SECTION_OFFSET } = {}
) {
  if (!id || typeof document === "undefined") return false;

  const el = document.getElementById(id);
  if (!el) return false;

  cancelActiveScroll();
  const generation = ++scrollGeneration;

  const end = getSectionTop(el, offset);

  if (behavior !== "smooth") {
    window.scrollTo(0, end);
    return true;
  }

  const start = window.scrollY;
  const distance = end - start;
  const duration = Math.min(900, Math.max(350, Math.abs(distance) * 0.35));
  let startTime = null;

  const finish = () => {
    if (generation !== scrollGeneration) return;
    // Re-measure — layout can shift during long scrolls
    window.scrollTo(0, getSectionTop(el, offset));
  };

  const step = (timestamp) => {
    if (generation !== scrollGeneration) return;

    if (startTime === null) startTime = timestamp;
    const t = Math.min(1, (timestamp - startTime) / duration);
    const eased = t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
    window.scrollTo(0, start + distance * eased);

    if (t < 1) {
      scrollFrameId = requestAnimationFrame(step);
      return;
    }

    finish();
  };

  scrollFrameId = requestAnimationFrame(step);
  scrollTimeoutId = window.setTimeout(finish, duration + 80);

  return true;
}

export function scrollToHash({ behavior = "smooth", retries = 30 } = {}) {
  if (typeof window === "undefined") return;

  const id = window.location.hash.replace("#", "");
  if (!id) return;

  let attempts = 0;

  const tryScroll = () => {
    if (scrollToSection(id, { behavior })) {
      // Correct again after late images/layout
      window.setTimeout(() => {
        if (window.location.hash.replace("#", "") === id) {
          scrollToSection(id, { behavior: "auto" });
        }
      }, 400);
      return;
    }

    attempts += 1;
    if (attempts < retries) {
      requestAnimationFrame(tryScroll);
    }
  };

  window.setTimeout(tryScroll, 50);
}

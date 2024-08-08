gsap.registerPlugin(CSSPlugin, ScrollTrigger);

// Lenis setting
let lenis;

const initLenis = () => {
  lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  lenis.scrollTo(0, { immediate: true });
};

// GSAP 초기 설정
gsap.defaults({
  overwrite: "auto",
});

// 상하 회전
gsap.fromTo(
  ".pic",
  { y: -25 },
  {
    duration: 1,
    y: 25,
    ease: "sine.inOut",
    stagger: { each: 0.1, yoyo: true, repeat: -1 },
  }
);

// 좌우 회전
gsap.fromTo(
  ".pic",
  { rotationY: -90 },
  {
    scrollTrigger: {
      trigger: ".pic",
      scrub: true,
      start: "top bottom",
      end: "bottom top",
      // markers: true,
    },
    rotationY: 90,
    ease: "none",
    stagger: 0.03,
  }
);

// 투명도 설정
gsap.fromTo(
  ".pic",
  { opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".pic",
      scrub: true,
      start: "top bottom",
      end: "bottom center",
      // markers: true,
    },
    opacity: 1,
    ease: "none",
    stagger: 0.03,
  }
);

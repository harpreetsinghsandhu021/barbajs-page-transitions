const wrapper = document.querySelector(".wrapper");

function animatePage() {
  const heading = document.querySelector(".first--h1");
  const links = document.querySelector(".links--1");

  gsap.to(heading, 1, { y: 0, opacity: 1, delay: 0.5 });
  gsap.to(links, 1, { y: 0, opacity: 1, delay: 0.5 });
}

function animatePage2() {
  const heading = document.querySelector(".second--h1");
  const links = document.querySelector(".links--2");

  gsap.to(heading, 1, { y: 0, opacity: 1, delay: 0.5 });
  gsap.to(links, 1, { y: 0, opacity: 1, delay: 0.5 });
}

function animatePage3() {
  const heading = document.querySelector(".third--h1");
  const links = document.querySelector(".links--3");

  gsap.to(heading, 1, { y: 0, opacity: 1, delay: 0.5 });
  gsap.to(links, 1, { y: 0, opacity: 1, delay: 0.5 });
}
barba.init({
  views: [
    {
      namespace: "first",
      afterEnter() {
        animatePage();
      },
    },
    {
      namespace: "second",
      afterEnter() {
        animatePage2();
      },
    },
    {
      namespace: "third",
      afterEnter() {
        animatePage3();
      },
    },
  ],
  transitions: [
    {
      leave({ current, next }) {
        const done = this.async();

        const tl = new gsap.timeline();

        tl.fromTo(
          current.container,
          { opacity: 1 },
          { opacity: 1, onComplete: done }
        );
      },
      enter({ current, next }) {
        const done = this.async();

        const tl = new gsap.timeline();

        tl.fromTo(
          next.container,
          2.2,
          { y: "100%" },
          { y: 0, ease: "Expo.easeIn", onComplete: done }
        );
      },
    },
  ],
});

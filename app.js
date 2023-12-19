const tl = gsap.timeline();
function page1() {
  tl.from(".img1", {
    y: -500,
    scale: 0.5,
    opacity: 0,
  });
  tl.from(".img2", {
    y: 500,
    scale: 0.5,
    opacity: 0,
  });
  gsap.from(".p1", {
    scale: 0.5,
    opacity: 0,
  });
}
page1();
function page2() {
  tl.from(".img4,.img3", {
    opacity: 0,
    scale: 0.5,
    ease: "slow(0.7,0.7,false)",
    scrollTrigger: {
      trigger: ".page2",
      scrub: 0.2,
      start: "0% 10%",
      end: "0% 10%",
    },
  });
}
page2();
function page3() {
  tl.from(".img6,.img5", {
    opacity: 0,
    scale: 0.5,
    ease: "slow(0.7,0.7,false)",
    scrollTrigger: {
      trigger: ".page3",
      scrub: 0.2,
      pin: true,
      start: "0% 10%",
      end: "0% 10%",
    },
  });
}
page3();
function page4() {
  tl.from(".img41,.bread2", {
    y: -100,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".page4",
      pin: true,
      scrub: 2,
      start: "0% 10%",
      end: "0% 10%",
    },
  });
  tl.from(".bread1", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page4",
      pin: true,
      scrub: 2,
      start: "0% 10%",
      end: "0% 10%",
    },
  });
  tl.from(".mob-pizza", {
    y: -500,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page4",
      pin: true,
      scrub: 2,
      start: "0% 10%",
      end: "0% 10%",
    },
  });
  tl.from(".pizza", {
    y: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page4",
      pin: true,
      scrub: 2,
      start: "0% 10%",
      end: "0% 10%",
    },
  });
}
page4();

function page5() {
  tl.from(".img71,.img72,.img73", {
    y: -500,
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
      trigger: ".page5",
      scrub: 1,
      pin: true,
      start: "0% 10%",
      end: "0% 10%",
    },
  });
  tl.from(".img74,.img75", {
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
      trigger: ".page5",
      scrub: 1,
      pin: true,
      start: "0% 10%",
      end: "0% 10%",
    },
  });
}
page5();
function page6() {
  tl.from(".img8", {
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
      trigger: ".page6",
      scrub: 1,
      pin: true,
      start: "0% 10%",
      end: "0% 10%",
    },
  });
}
page6();

function page7() {
  tl.from(".img91,.img92", {
    y: 500,
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
      trigger: ".page7",
      scrub: 1,
      pin: true,
      start: "0% 10%",
      end: "0% 10%",
    },
  });
}
page7();

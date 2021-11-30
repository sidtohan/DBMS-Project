const animationHandler = (() => {
  const divs = document.querySelectorAll(".animate");
  const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    });
  };
  const observerGenerator = () => {
    const obs = new IntersectionObserver(inViewport);
    const obsOption = {
      rootMargin: '0px',
      threshold: 1.0
    }
    divs.forEach(div => {
      obs.observe(div, obsOption);
    })
  }
  return {
    observerGenerator
  };
})();

animationHandler.observerGenerator();



document.addEventListener("DOMContentLoaded", function () {
  // Scroll effect
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.9;
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < triggerBottom) sec.classList.add("visible");
    });
  });

  // Partner carousel trượt 5 logo mỗi 5s
  const partnerTrack = document.getElementById("partnerTrack");
  const partnerLogos = partnerTrack.querySelectorAll(".partner-logo");
  const visibleCount = 5;
  let partnerIndex = 0;

  function slidePartners() {
    const total = partnerLogos.length;
    partnerIndex = (partnerIndex + visibleCount) % total;
    const offset = (partnerIndex * 100) / visibleCount;
    partnerTrack.style.transform = `translateX(-${offset}%)`;
  }

  setInterval(slidePartners, 5000);
});


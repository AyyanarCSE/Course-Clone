// togglePlans.js
document.addEventListener("DOMContentLoaded", () => {
  const teamBtn = document.getElementById("secondbtn");
  const individualBtn = document.getElementById("firstbtn");
  const teamSection = document.getElementById("teamSection");
  const individualSection = document.getElementById("individualSection");

  teamBtn.addEventListener("click", () => {
    teamSection.style.display = "block";
    individualSection.style.display = "none";
    teamBtn.classList.add("bg-blue-600", "text-white");
    teamBtn.classList.remove("bg-white", "text-black");
    individualBtn.classList.remove("bg-blue-600", "text-white");
    individualBtn.classList.add("bg-white", "text-black");
  });

  individualBtn.addEventListener("click", () => {
    individualSection.style.display = "block";
    teamSection.style.display = "none";
    individualBtn.classList.add("bg-blue-600", "text-white");
    individualBtn.classList.remove("bg-white", "text-black");
    teamBtn.classList.remove("bg-blue-600", "text-white");
    teamBtn.classList.add("bg-white", "text-black");
  });
});

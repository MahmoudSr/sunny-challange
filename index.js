const navigation = document.getElementById("navigation");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");

  console.log(visibility);

  if (visibility == "false") {
    navigation.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else if (visibility == "true") {
    navigation.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

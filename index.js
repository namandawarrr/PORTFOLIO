const sidebar = document.getElementById("sidebar");
sidebar.addEventListener("click", (event) => {
  const target = event.target.getAttribute("data-target");
  console.log("Navigating to:", target);
});

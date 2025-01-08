document.addEventListener("DOMContentLoaded", function () {
  let navItems = document.querySelectorAll(".nav-bar ul li");

  navItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      navItems.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");
      event.preventDefault();
    });
  });
});

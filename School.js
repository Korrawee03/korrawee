const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");       // เปลี่ยน hamburger เป็น X
  dropdownMenu.classList.toggle("active");  // เปิด/ปิด dropdown
});

document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    menuBtn.classList.remove("active");
    dropdownMenu.classList.remove("active");
  }
});

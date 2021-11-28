(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-hover]");

  menuBtnRef.addEventListener("hover", () => { mobileMenuRef.classList.toggle("is-open"); });
  
  mobileBtnClose.addEventListener("hover", () => { mobileMenuRef.classList.toggle("is-open"); });
})();
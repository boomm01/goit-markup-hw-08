(() => {
    const menuBtnRef = document.querySelector("[data-menu-buttom]");
    const mobilMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("clsck" , () => {
    const expanded = 
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    
    mobilMenuRef.toggle("is-open");
});
})();
initTab();
function initTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const classActive = "ativo";

  //navegação por tab

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(classActive);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(classActive);
      });

      tabContent[index].classList.add(classActive);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

acordion();
function acordion() {
  const listaAccordion = document.querySelectorAll(".js-accordion dt");
  const classActive = "ativo";

  if (listaAccordion.length) {
    listaAccordion[0].classList.add(classActive);
    listaAccordion[0].nextElementSibling.classList.add(classActive);

    function activeAccordion() {
      this.classList.toggle(classActive);
      this.nextElementSibling.classList.toggle(classActive);
    }

    listaAccordion.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

scrollSuave();
function scrollSuave() {
  const Linkmenu = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");

    const section = document.querySelector(href);

    const top = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // window.scrollTo({
    //     top: top,
    //     behavior: "smooth"
    // })

    console.log(top);
  }

  Linkmenu.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

animationScroll();
function animationScroll() {

  const sections = document.querySelectorAll(".js-scroll");

  const windowMetade = window.innerHeight * 0.6;

  function animar() {
    sections.forEach((e) => {
      const topSection = e.getBoundingClientRect().top;

      const sectionVisible = topSection - windowMetade < 0;

      sectionVisible ? e.classList.add("ativo") : e.classList.remove("ativo");

      // console.log(topSection)
    });
  }

  animar();

  window.addEventListener("scroll", animar);
}

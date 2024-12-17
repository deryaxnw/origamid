function initTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const classActive = 'ativo'
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
  };
};

initTab();

function acordion() {

  const listaAccordion = document.querySelectorAll(".js-accordion dt");
  const classActive = 'ativo'


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
  };
};

acordion();

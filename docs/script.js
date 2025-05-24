// Inicializa el Swiper principal
const mainSwiper = new Swiper(".main-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Modal y Swiper en el modal
const modal = document.getElementById("imageModal");
const closeBtn = document.querySelector(".modal-close");
const modalWrapper = modal.querySelector(".modal-swiper .swiper-wrapper");
let modalSwiper;

const productImages = document.querySelectorAll(".product-image");
const imageSources = Array.from(productImages).map((img) => img.src);

productImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    // Vaciar e insertar imágenes
    modalWrapper.innerHTML = "";
    imageSources.forEach((src) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.innerHTML = `<img src="${src}" />`;
      modalWrapper.appendChild(slide);
    });

    modal.style.display = "flex";

    // Iniciar Swiper del modal
    modalSwiper = new Swiper(".modal-swiper", {
      initialSlide: index,
      loop: true,
      navigation: {
        nextEl: ".modal-swiper .swiper-button-next",
        prevEl: ".modal-swiper .swiper-button-prev",
      },
      pagination: {
        el: ".modal-swiper .swiper-pagination",
        clickable: true,
      },
    });
  });
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  if (modalSwiper) modalSwiper.destroy(true, true);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    if (modalSwiper) modalSwiper.destroy(true, true);
  }
});

// TABS
function showTab(tabId, event) {
  const isMobile = window.innerWidth <= 768;

  // Obtiene todos los botones y contenidos
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  if (isMobile) {
    // Si ya está visible, ocúltalo
    const target = document.getElementById(tabId);
    const isOpen = target.classList.contains("active");

    contents.forEach((c) => c.classList.remove("active"));
    if (!isOpen) {
      target.classList.add("active");
    }
  } else {
    tabs.forEach((tab) => tab.classList.remove("active"));
    event.currentTarget.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    const target = document.getElementById(tabId);
    target.classList.add("active");
  }
}

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const isActive = item.classList.contains("active");

    // Cerrar todas las secciones
    document.querySelectorAll(".accordion-item").forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".accordion-header").setAttribute(
        "aria-expanded",
        "false"
      );
    });

    // Si la sección no estaba activa, abrirla
    if (!isActive) {
      item.classList.add("active");
      header.setAttribute("aria-expanded", "true");
    }
  });
});

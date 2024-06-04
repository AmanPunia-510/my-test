$(".slider").slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  pauseOnHover: true,
  cssEase: "linear",
});

// ===================================== navbar ========================================//

const item = document.querySelector(".navbar-items");
const menu = document.querySelector(".toggle");

menu.addEventListener("click", () => {
  item.classList.toggle("show");
  let contain = document.querySelector("body");
  let container = document.querySelector(".my-container");

  if (item.classList.contains("show")) {
    contain.style.position = "fixed";
    contain.style.top = "0";
    contain.style.left = "0";
    contain.style.width = "100%";
    index.classList.add("z-3");
    container.classList.add("position-u");
  } else {
    contain.style.position = "unset";
  }
});

// accrodian

let accordian_items = document.querySelectorAll(".accordian-box");

accordian_items.forEach((items) => {
  let paragraph = items.querySelector(".accordian-p");
  let heading = items.querySelector(".accordian-txt-or-svg");
  let svg = items.querySelector(".accordian-svg");

  heading.style.cursor = "pointer";
  heading.addEventListener("click", () => {
    accordian_items.forEach((other) => {
      if (other !== items) {
        let paragraph = other.querySelector(".accordian-p");
        let svg = other.querySelector(".accordian-svg");
        paragraph.classList.add("d-none");
        svg.style.transform = "rotate(180deg)";
      }
    });

    if (paragraph.classList.contains("d-none")) {
      paragraph.classList.remove("d-none");
      paragraph.classList.add("d-block");
      svg.style.transform = "rotate(0deg)";
    } else {
      paragraph.classList.remove("d-block");
      paragraph.classList.add("d-none");
      svg.style.transform = "rotate(180deg)";
    }
  });
});

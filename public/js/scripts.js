function accordion(event) {
  if (event.target.classList.contains("close")) {
    event.target.classList.remove("close");
    //Arrow Direction Change
    event.target.children[0].children[1].children[0].classList.add(
      "fa-rotate-270"
    );
    // DeleteBorder
    event.target.classList.remove("btn-gradient-border");
    //open text
    event.target.children[1].style.display = "block";
  } else {
    event.target.classList.add("close");
    //Arrow Direction Change
    event.target.children[0].children[1].children[0].classList.remove(
      "fa-rotate-270"
    );
    // AddBorder
    event.target.classList.add("btn-gradient-border");
    //close text
    event.target.children[1].style.display = "none";
  }
}


function reportWindowSize() {
  if (window.innerWidth > 768) {
    document
      .getElementById("carouselExampleControls")
      .classList.remove("carousel");
    document
      .getElementById("carouselExampleControls")
      .classList.remove("slide");
    document
      .querySelector(".inner")
      .classList.remove("carousel-inner");
    document
      .querySelectorAll(".item")
      .forEach((item) => item.classList.remove("carousel-item"));
    document
      .querySelectorAll(".carousel_button")
      .forEach((item) => item.style.display = "none");
    
  } else {
    document
      .getElementById("carouselExampleControls")
      .classList.add("carousel");
    document
      .getElementById("carouselExampleControls")
      .classList.add("slide");
    document
      .querySelector(".inner")
      .classList.add("carousel-inner");
    document
      .querySelectorAll(".item")
      .forEach((item) => item.classList.add("carousel-item"));
      document
      .querySelectorAll(".carousel_button")
      .forEach((item) => item.style.display = "block");
  }
}

window.addEventListener("resize", reportWindowSize);



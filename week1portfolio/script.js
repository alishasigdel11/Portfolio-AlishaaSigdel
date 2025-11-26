//Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorBox = document.getElementById("error");

    //checks validation if every field is filled
    if (name === "" || email === "" || message === "") {
        errorBox.textContent = "All fields are required.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        errorBox.textContent = "Please enter a valid email.";
        return;
    }

    //clear errorif validate is ok
    errorBox.textContent = "";

    //this stores data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);

    //this helps to redirect it in another page 
    window.location.href = "form-details.html";
});

//smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

//project card click handling
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-link');
        if (url && url !== '#') {
            window.location.href = url;
        } else {
            console.log('Project URL not set.');
        }
    });
});

let slideIndex = 1;
showSlides(slideIndex);

//next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


document.getElementById("themeToggle").addEventListener("click", function () {
document.body.classList.toggle("dark-mode")

  if (document.body.classList.contains("dark-mode")) {

    this.textContent = "☀️ Light Mode";
  } 
  else 
    {
    this.textContent = "🌙 Dark Mode";
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 200));

  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});





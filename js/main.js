// import { trades } from "./data/trades.js";

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
// FAQs accordion
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});

// FAQs accordion
accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("include/fetch_counts.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log("THE DATA IS", data);
      const visitElem = document.getElementById("visitCount");
      const userElem = document.getElementById("userCount");

      if (visitElem) visitElem.textContent = data.visits;
      if (userElem) userElem.textContent = data.users;

      console.log(data.visits);
    })
    .catch((error) => {
      console.error("Error fetching counts:", error);
    });
});

/*

// Trade options
const trades = [
  { value: "carpentry", label: "Carpentry" },
  { value: "plumbing", label: "Plumbing" },
  { value: "electrical", label: "Electrical" },
  { value: "masonry", label: "Masonry" },
  { value: "welding", label: "Welding" },
];

// County options
const counties = [
  { value: "nairobi", label: "Nairobi" },
  { value: "mombasa", label: "Mombasa" },
  { value: "kisumu", label: "Kisumu" },
  { value: "kiambu", label: "Kiambu" },
  { value: "nakuru", label: "Nakuru" },
];

// Subcounty options
const subcounties = [
  { value: "langata", label: "Lang'ata" },
  { value: "westlands", label: "Westlands" },
  { value: "likoni", label: "Likoni" },
  { value: "embu-west", label: "Embu West" },
  { value: "nakuru-town", label: "Nakuru Town" },
];

// Wards
const wards = [
  { value: "south-c", label: "South C" },
  { value: "githurai", label: "Githurai" },
  { value: "mtwapa", label: "Mtwapa" },
  { value: "nanyuki-central", label: "Nanyuki Central" },
  { value: "rukanga", label: "Rukanga" },
];

// Helper function to populate any select
function populateSelect(selectId, options, placeholder = "Select an option") {
  const select = document.getElementById(selectId);
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = placeholder;
  select.appendChild(defaultOption);

  options.forEach((option) => {
    const el = document.createElement("option");
    el.value = option.value;
    el.textContent = option.label;
    select.appendChild(el);
  });
}

// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {
  populateSelect("trade", trades, "Select a trade");
  populateSelect("county", counties, "Select a county");
  populateSelect("subcounty", subcounties, "Select a subcounty");
  populateSelect("ward", wards, "Select a ward");
});
*/

function populateSelect(selectId, options, placeholder = "Select an option") {
  const select = document.getElementById(selectId);
  if (!select) return;

  select.innerHTML = ""; // clear previous
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = placeholder;
  select.appendChild(defaultOption);

  options.forEach((option) => {
    const el = document.createElement("option");
    el.value = option.value;
    el.textContent = option.label;
    select.appendChild(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("include/fetch_data.php")
    .then((res) => res.json())
    .then((data) => {
      populateSelect("trade", data.trades, "Select a trade");
      populateSelect("county", data.counties, "Select a county");
      populateSelect("subcounty", data.subcounties, "Select a subcounty");
      populateSelect("ward", data.wards, "Select a ward");
    })
    .catch((err) => {
      console.error("Failed to fetch data:", err);
    });
});

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

/*ScrollReveal().reveal(".header__image img", {
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
}); */

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

// Trade options
const trades = [
  { value: "beauty-therapy", label: "Beauty Therapy" },
  { value: "cabinet-maker", label: "Cabinet Maker" },
  { value: "carpenter-joiner", label: "Carpenter/Joiner" },
  { value: "computer-operator", label: "Computer Operator" },
  { value: "dressmaker", label: "Dress Maker" },
  { value: "electrical-fitter", label: "Electrical Fitter" },
  { value: "electrical-wireman", label: "Electrical Wireman" },
  { value: "electronic-mechanic", label: "Electronic Mechanic" },
  { value: "floor-tiler", label: "Floor Tiler" },
  { value: "food-beverage-production", label: "Food and Beverage Production" },
  { value: "food-beverage-services", label: "Food and Beverage Services" },
  { value: "general-fitter", label: "General Fitter" },
  { value: "hair-dressing", label: "Hair Dressing" },
  { value: "leather-work", label: "Leather Work" },
  { value: "machine-knitter", label: "Machine Knitter" },
  { value: "mason", label: "Mason" },
  { value: "motor-cycle-mechanic", label: "Motor Cycle Mechanic" },
  { value: "motor-vehicle-electrician", label: "Motor Vehicle Electrician" },
  { value: "motor-vehicle-mechanic", label: "Motor Vehicle Mechanic" },
  { value: "moulder", label: "Moulder" },
  { value: "painter-decorator", label: "Painter/Decorator" },
  { value: "panel-beater", label: "Panel Beater" },
  { value: "plant-mechanic", label: "Plant Mechanic" },
  { value: "plumber-pipe-fitter", label: "Plumber/Pipe Fitter" },
  { value: "polisher", label: "Polisher" },
  {
    value: "refrigeration-air-conditioning",
    label: "Refrigeration and Air Conditioning",
  },
  { value: "sheet-metal-work", label: "Sheet Metal Work" },
  { value: "shoe-maker", label: "Shoe Maker" },
  { value: "sign-writer", label: "Sign Writer" },
  { value: "solar-photovoltaic", label: "Solar Photovoltaic" },
  { value: "spray-painter", label: "Spray Painter" },
  { value: "tailoring", label: "Tailoring" },
  { value: "turner", label: "Turner" },
  { value: "upholsterer", label: "Upholsterer" },
  { value: "welder-electric", label: "Welder (Electric)" },
  { value: "welder-gas", label: "Welder (Gas)" },
  { value: "wood-carver", label: "Wood Carver" },
  { value: "wood-machinist", label: "Wood Machinist" },
  { value: "barbering", label: "Barbering" },
  { value: "baking-pastry", label: "Baking and Pastry" },
];

// County options
const counties = [
  { value: "mombasa", label: "Mombasa" },
  { value: "kwale", label: "Kwale" },
  { value: "kilifi", label: "Kilifi" },
  { value: "tana_river", label: "Tana River" },
  { value: "lamu", label: "Lamu" },
  { value: "taita_taveta", label: "Taita Taveta" },
  { value: "garissa", label: "Garissa" },
  { value: "wajir", label: "Wajir" },
  { value: "mandera", label: "Mandera" },
  { value: "marsabit", label: "Marsabit" },
  { value: "isiolo", label: "Isiolo" },
  { value: "meru", label: "Meru" },
  { value: "tharaka_nithi", label: "Tharaka Nithi" },
  { value: "embu", label: "Embu" },
  { value: "kitui", label: "Kitui" },
  { value: "machakos", label: "Machakos" },
  { value: "makueni", label: "Makueni" },
  { value: "nyandarua", label: "Nyandarua" },
  { value: "nyeri", label: "Nyeri" },
  { value: "kirinyaga", label: "Kirinyaga" },
  { value: "muranga", label: "Murang'a" },
  { value: "kiambu", label: "Kiambu" },
  { value: "turkana", label: "Turkana" },
  { value: "west_pokot", label: "West Pokot" },
  { value: "samburu", label: "Samburu" },
  { value: "trans_nzoia", label: "Trans Nzoia" },
  { value: "uasin_gishu", label: "Uasin Gishu" },
  { value: "elgeyo_marakwet", label: "Elgeyo Marakwet" },
  { value: "nandi", label: "Nandi" },
  { value: "baringo", label: "Baringo" },
  { value: "laikipia", label: "Laikipia" },
  { value: "nakuru", label: "Nakuru" },
  { value: "narok", label: "Narok" },
  { value: "kajiado", label: "Kajiado" },
  { value: "kericho", label: "Kericho" },
  { value: "bomet", label: "Bomet" },
  { value: "kakamega", label: "Kakamega" },
  { value: "vihiga", label: "Vihiga" },
  { value: "bungoma", label: "Bungoma" },
  { value: "busia", label: "Busia" },
  { value: "siaya", label: "Siaya" },
  { value: "kisumu", label: "Kisumu" },
  { value: "homa_bay", label: "Homa Bay" },
  { value: "migori", label: "Migori" },
  { value: "kisii", label: "Kisii" },
  { value: "nyamira", label: "Nyamira" },
  { value: "nairobi", label: "Nairobi" },
];

// Subcounty options
// const subcounties = [
//   { value: "langata", label: "Lang'ata" },
//   { value: "westlands", label: "Westlands" },
//   { value: "likoni", label: "Likoni" },
//   { value: "embu-west", label: "Embu West" },
//   { value: "nakuru-town", label: "Nakuru Town" },
// ];

// // Wards
// const wards = [
//   { value: "south-c", label: "South C" },
//   { value: "githurai", label: "Githurai" },
//   { value: "mtwapa", label: "Mtwapa" },
//   { value: "nanyuki-central", label: "Nanyuki Central" },
//   { value: "rukanga", label: "Rukanga" },
// ];

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

// function populateSelect(selectId, options, placeholder = "Select an option") {
//   const select = document.getElementById(selectId);
//   if (!select) return;

//   select.innerHTML = ""; // clear previous
//   const defaultOption = document.createElement("option");
//   defaultOption.value = "";
//   defaultOption.disabled = true;
//   defaultOption.selected = true;
//   defaultOption.textContent = placeholder;
//   select.appendChild(defaultOption);

//   options.forEach((option) => {
//     const el = document.createElement("option");
//     el.value = option.value;
//     el.textContent = option.label;
//     select.appendChild(el);
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   fetch("include/fetch_data.php")
//     .then((res) => res.json())
//     .then((data) => {
//       populateSelect("trade", data.trades, "Select a trade");
//       populateSelect("county", data.counties, "Select a county");
//       populateSelect("subcounty", data.subcounties, "Select a subcounty");
//       populateSelect("ward", data.wards, "Select a ward");
//     })
//     .catch((err) => {
//       console.error("Failed to fetch data:", err);
//     });
// });

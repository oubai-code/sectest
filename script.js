/* DUMMY DATABASE FOR ANIMALS AND PET PRODUCTS */
const dogsData = [
  {
    id: "ice",
    name: "",
    gender: "male",
    status: "available",
    desc: "Playful, people-oriented, and loves outdoor walks.",
    image: "images/1.JPG" 
 },
   {
    id: "ice",
    name: "",
    gender: "male",
    status: "available",
    desc: "Playful, people-oriented, and loves outdoor walks.",
    image: "images/4.JPG" 
 },
   {
    id: "ice",
    name: "",
    gender: "male",
    status: "available",
    desc: "Playful, people-oriented, and loves outdoor walks.",
    image: "images/5.JPG" 
 },
   {
    id: "ice",
    name: "",
    gender: "male",
    status: "available",
    desc: "Playful, people-oriented, and loves outdoor walks.",
    image: "images/6.JPG" 
 },
  {
    id: "emma",
    name: "",
    gender: "female",
    status: "available",
    desc: "Gentle and affectionate young cat looking for a cozy home.",
    image: "images/2.JPG" 
  },
  {
    id: "hank",
    name: "",
    gender: "male",
    status: "available",
    desc: "A sweet tripod pup who is full of energy and cuddles.",
    image: "images/3.JPG" 
  },
    {
    id: "ice",
    name: "",
    gender: "male",
    status: "available",
    desc: "Playful, people-oriented, and loves outdoor walks.",
    image: "images/7.JPG" 
 },
   {
    id: "ice",
    name: "",
    gender: "male",
    status: "available",
    desc: "Playful, people-oriented, and loves outdoor walks.",
    image: "images/8.JPG" 
 },
];

const productsData = [
  {
    id: "chain-1",
    name: "Heavy Duty Lead & Collar Set",
    price: "$18.00 MXN",
    image: "images/11.jpeg"
  },
  {
    id: "toy-1",
    name: "Interactive Pet Play Toy",
    price: "$12.00 MXN",
    image: "images/22.jpeg"
  },
  {
    id: "collar-1",
    name: "Adjustable Padded Harness",
    price: "$15.00 MXN",
    image: "images/33.jpeg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderAnimals(dogsData);
  renderProducts(productsData);

  const yearEl = document.getElementById("copyright-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.getElementById("searchInput")?.addEventListener("input", filterAnimals);
  document.getElementById("genderFilter")?.addEventListener("change", filterAnimals);
  document.getElementById("statusFilter")?.addEventListener("change", filterAnimals);
});

function renderAnimals(animals) {
  const grid = document.getElementById("dogsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  animals.forEach(animal => {
    const card = document.createElement("div");
    card.className = "dog-card";
    card.innerHTML = `
      <img src="${animal.image}" alt="${animal.name}" class="dog-thumb">
      <div class="dog-name">${animal.name}</div>
      <p class="dog-desc">${animal.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function renderProducts(products) {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-img">
      <div class="product-title">${product.name}</div>
      <div class="product-price">${product.price}</div>
    `;
    grid.appendChild(card);
  });
}

function filterAnimals() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const gender = document.getElementById("genderFilter").value;
  const status = document.getElementById("statusFilter").value;

  const filtered = dogsData.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(query) || a.desc.toLowerCase().includes(query);
    const matchesGender = gender === "all" || a.gender === gender;
    const matchesStatus = status === "all" || a.status === status;
    return matchesSearch && matchesGender && matchesStatus;
  });

  renderAnimals(filtered);
}

/* INTERACTIVE GALLERY SWITCHER */
function switchGalleryImg(imgSrc, captionText, thumbElement) {
  const mainImg = document.getElementById("liveGalleryImg");
  const caption = document.getElementById("liveGalleryCaption");

  if (mainImg) mainImg.src = imgSrc;
  if (caption) caption.textContent = captionText;

  document.querySelectorAll(".thumb-item").forEach(item => item.classList.remove("active"));
  if (thumbElement) thumbElement.classList.add("active");
}
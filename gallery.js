const products = [
  {
    name: "Wooden Block Toys",
    price: 29.99,
    description: "Classic handcrafted blocks to build anything your imagination desires.",
    details: "Made from 100% natural maple wood, these blocks are sanded smooth and finished with non-toxic paint for safe, creative fun.",
    images: ["imgs/block1.jpg", "imgs/block2.jpg", "imgs/block3.jpg", "imgs/block4.jpg", "imgs/block5.jpg"]
  },
  {
    name: "Wooden Boats Collection",
    price: 24.99,
    description: "Sail the Seven Seas With Our Handcrafted Wooden Boats!",
    details: "Perfect for bath time or pretend play, our boats float and are crafted from waterproof-sealed pine wood.",
    images: ["imgs/Firefly_toy wooden boat 969826.jpg", "imgs/Firefly_toy wooden boat 913470.jpg", "imgs/Firefly_toy wooden boat 892828.jpg", "imgs/Firefly_toy wooden boat 76385.jpg", "imgs/Firefly_five seperate images of different abgles of a toy wooden boat i want each image to be 689341.jpg"]
  },
  {
    name: "Wooden Cars Collection",
    price: 59.99,
    description: "Rule the Roads With Our Handcrafted Wooden Cars!",
    details: "Includes a variety of designs with working wheels. Built to last using oak wood and polished with beeswax.",
    images: ["imgs/car1.jpg", "imgs/car2.jpg", "imgs/car3.jpg", "imgs/car4.jpg", "imgs/car5.jpg"]
  },
  {
    name: "Wooden Planes Collection",
    price: 39.99,
    description: "Soar high with our handcrafted planes!",
    details: "Aviation enthusiasts will love these detailed models with movable propellers. Sanded and sealed for durability.",
    images: ["imgs/plane1.jpg", "imgs/plane2.jpg", "imgs/plane3.jpg", "imgs/plane4.jpg", "imgs/plane5.jpg"]
  },
  {
    name: "Woodland Animal Friends",
    price: 79.99,
    description: "Explore your wild side with our handcrafted animal toys!",
    details: "This collection features 10 different animals carved from walnut wood. Great for pretend play and storytime.",
    images: ["imgs/animal1.jpg", "imgs/animal2.jpg", "imgs/animal3.jpg", "imgs/animal4.jpg", "imgs/animal5.jpg"]
  },
  {
    name: "Wooden Train",
    price: 24.99,
    description: "Handcrafted birch train with wheels.",
    details: "This miniature engine features interlocking magnetic pieces and smoothly gliding wheels.",
    images: ["imgs/train2.jpg", "imgs/train3.jpg", "imgs/train5.jpg", "imgs/train7.jpg"]
  }
];

// Generate Product Cards
const gallery = document.getElementById("product-gallery");

products.forEach((product, index) => {
  const carouselId = `carousel${index}`;

  const carouselItems = product.images.map((imgSrc, i) => `
    <div class="carousel-item ${i === 0 ? "active" : ""}">
      <img src="${imgSrc}" class="d-block w-100" alt="${product.name} image ${i + 1}">
    </div>
  `).join("");

  const card = `
    <div class="col-md-4 mb-4">
      <div class="card shadow">
        <div class="card-header bg-warning text-dark text-center fw-bold">
          ${product.name}
        </div>
        <div class="card-body p-0">
          <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${carouselItems}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
        <div class="card-footer text-center bg-light">
          ${product.description} <br> $${product.price.toFixed(2)} <br>
          <button class="btn btn-sm btn-primary mt-2" data-index="${index}" data-bs-toggle="modal" data-bs-target="#detailsModal">Learn More</button>
          <button class="btn btn-sm btn-success mt-2" onclick="addItem()">Add to Cart</button>
        </div>
      </div>
    </div>
  `;

  gallery.innerHTML += card;
});

// Handle Modal Population
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

document.addEventListener("click", (e) => {
  if (e.target.matches('[data-bs-target="#detailsModal"]')) {
    const index = e.target.getAttribute("data-index");
    const product = products[index];
    modalTitle.textContent = product.name;
    modalBody.textContent = product.details;
  }
});

// Customer reviews data
// Customer reviews data
const customerReviews = [
  {
    productIndex: 0,
    reviewer: "Frank C.",
    rating: 5,
    comment: "The wooden blocks are perfect! Great quality and my kids love them."
  },
  {
    productIndex: 1,
    reviewer: "Jason B.",
    rating: 4,
    comment: "Boats float well and look great. My toddler plays with them all the time."
  },
  {
    productIndex: 2,
    reviewer: "Tony S.",
    rating: 5,
    comment: "The wooden cars are beautifully crafted and durable."
  },
  {
    productIndex: 3,
    reviewer: "Peter P.",
    rating: 4,
    comment: "Planes look fantastic and my son loves the movable propellers!"
  },
  {
    productIndex: 4,
    reviewer: "Sarah C.",
    rating: 5,
    comment: "The Woodland Animal Friends are so cute and well detailed."
  },
  {
    productIndex: 5,
    reviewer: "Bruce W.",
    rating: 5,
    comment: "The wooden train is adorable and well made. Highly recommend!"
  }
];


// Function to create stars for rating
function generateStars(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

// Generate and append customer reviews under each product card
products.forEach((product, index) => {
  const card = gallery.querySelectorAll(".col-md-4")[index];
  if (!card) return;

  const reviewsForProduct = customerReviews.filter(r => r.productIndex === index);
  if (reviewsForProduct.length === 0) return;

  const reviewsHtml = reviewsForProduct.map(r => `
    <div class="border-top mt-3 pt-2 text-start">
      <strong>${r.reviewer}</strong> <br>
      <span style="color: gold;">${generateStars(r.rating)}</span> <br>
      <p>${r.comment}</p>
    </div>
  `).join("");

  const cardFooter = card.querySelector(".card-footer");
  cardFooter.insertAdjacentHTML("beforeend", reviewsHtml);
});

let itemAmount = 0;

function addItem() {
  itemAmount++;
  document.getElementById('itemCart').innerHTML = `Items in Cart: ${itemAmount}`;
}

function completeOrder() {
  alert("Order Completed!");
  location.reload();
  let itemAmount = 0;
}
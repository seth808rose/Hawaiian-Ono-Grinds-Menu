const menu = [
  {
    id: 1,
    title: "shrimp poke",
    category: "appetizer",
    price: 13.99,
    img: "./images/shrimp-poke-plate.jpg",
    desc: `Shrimp diced fresh with greens and rice, Oh so yummy! `,
  },
  {
    id: 2,
    title: "classic mixed plate",
    category: "lunch",
    price: 14,
    img: "./images/mixed-plate.jpg",
    desc: `Short ribs with Hawaiian mac saled and steamed rice `,
  },
  {
    id: 3,
    title: "haupia stuffed malasada",
    category: "deserts",
    price: 6.99,
    img: "./images/malasada's.png",
    desc: `Fresh hot Haupia coconut cream stuffed Portugese donut.`,
  },
  {
    id: 4,
    title: "locos mocos",
    category: "lunch",
    price: 13.99,
    img: "./images/locos-mocos-plate.png",
    desc: `Steak under 2 fried eggs Hawaiian style with mac saled and steamed rice, `,
  },
  {
    id: 5,
    title: "kalua pig",
    category: "lunch",
    price: 16.99,
    img: "./images/kalua-pig-plate.jpg",
    desc: `Traditional kalua shredded pig with mac saled and steamed rice. The best! `,
  },
  {
    id: 6,
    title: "classic hawaiian plate",
    category: "dinner",
    price: 18.99,
    img: "./images/classic-hawaiian-plate.jpg",
    desc: `All the traditional food like the old Hawaiians enjoyed back in the day`,
  },
  {
    id: 7,
    title: "pineapple caramel ice cream",
    category: "desert",
    price: 4.99,
    img: "./images/hawaiian-pineapple-ice-cream.jpg",
    desc: `Sweet and savory Pineapple ice cream topped with honey glazed caramel sauce topped with coconut shavings`,
  },
  {
    id: 8,
    title: "island fruit",
    category: "appetizer",
    price: 3.99,
    img: "./images/island-papaya-appetizer.jfif",
    desc: `Fresh off the tree Hawaii's very own papaya fruit`,
  },
  {
    id: 9,
    title: "hawaiian shave ice",
    category: "desert",
    price: 6.99,
    img: "./images/hawaiian-shave-ice.jpg",
    desc: `Inspired by the North Shore Oahu tradition, have your way with this sweet fulfilling icey treat with a the colors of the rainbow`,
  },
  {
    id: 10,
    title: "panipopo (sweet roll in coconut milk sauce)",
    category: "appetizer",
    price: 18.99,
    img: "./images/hawaiian-sweet-rolls-taro.jpg",
    desc: `Sink your teeth in Samoa's most favoured desert. Soaked in fresh coconut milk steamed into a creay sauce. `,
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  showMenuItems();
});

function showMenuItems() {
  displayMenu = menu.map(function (item) {
    return `<article class="menu-item">
          <img
            src=${item.img}
            class="photo"
            alt=${item.title}
          />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <div class="thin-underline"></div>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

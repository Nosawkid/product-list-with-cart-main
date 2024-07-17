export const desserts = [
  {
    id: 1,
    dessertName: "Waffle",
    dessertDesc: "Waffle with Berries",
    dessertPrice: 6.5,
    dessertImg: "./assets/images/image-waffle-desktop.jpg",
  },
  {
    id: 2,
    dessertName: "Crème Brûlée",
    dessertDesc: "Vanilla Bean Crème Brûlée",
    dessertPrice: 7.0,
    dessertImg: "./assets/images/image-creme-brulee-desktop.jpg",
  },
  {
    id: 3,
    dessertName: "Macaron",
    dessertDesc: "Macaron Mix of Five",
    dessertPrice: 8.0,
    dessertImg: "./assets/images/image-macaron-desktop.jpg",
  },
  {
    id: 4,
    dessertName: "Tiramisu",
    dessertDesc: "Classic Tiramisu",
    dessertPrice: 5.5,
    dessertImg: "./assets/images/image-tiramisu-desktop.jpg",
  },
  {
    id: 5,
    dessertName: "Baklava",
    dessertDesc: "Pistachio Baklava",
    dessertPrice: 4.0,
    dessertImg: "./assets/images/image-baklava-desktop.jpg",
  },
  {
    id: 6,
    dessertName: "Pie",
    dessertDesc: "Lemon Meringue Pie",
    dessertPrice: 5.0,
    dessertImg: "./assets/images/image-meringue-desktop.jpg",
  },
  {
    id: 7,
    dessertName: "Cake",
    dessertDesc: "Strawberry Shortcake",
    dessertPrice: 6.0,
    dessertImg: "./assets/images/image-cake-desktop.jpg",
  },
  {
    id: 8,
    dessertName: "Brownie",
    dessertDesc: "Chocolate Brownie",
    dessertPrice: 4.5,
    dessertImg: "./assets/images/image-brownie-desktop.jpg",
  },
  {
    id: 9,
    dessertName: "Panna Cotta",
    dessertDesc: "Vanilla Panna Cotta",
    dessertPrice: 6.5,
    dessertImg: "./assets/images/image-panna-cotta-desktop.jpg",
  },
];

export const dessertHtml = (
  dessert
) => `<div id="dessert-container" data-dessert="${
  dessert.id
}" class="mt-3 flex flex-col space-y-6">
  <div id="img-add" class="relative">
    <img
      id="item-image"
      src="${dessert.dessertImg}"
      class="rounded-lg"
    />
    <div
      data-id = ${dessert.id}
      id="cart-btn-cover"
      class="cursor-pointer w-auto h-8 -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white py-5 px-6 absolute flex items-center justify-center text-sm gap-2 text-nowrap border-2 border-customRose-300 transition hover:scale-90"
    >
      <img src="./assets/images/icon-add-to-cart.svg" alt="" />
      <span>Add to cart</span>
    </div>
  </div>
  <div id="details">
    <p id="item-name" class="text-gray-500">
      ${dessert.dessertName}
    </p>
    <p id="item-desc" class="text-base font-bold">
      ${dessert.dessertDesc}
    </p>
    <p id="item-price" class="text-customRed font-bold text-lg">
      $${dessert.dessertPrice.toFixed(2)}
    </p>
  </div>
</div>`;

export const cartHtml = (item) => `
      <div class="flex flex-col space-y-3">
        <p class="text-sm font-bold">${item.dessertName}</p>
        <div id="cart-price-details" class="flex gap-3">
          <p id="item-count-in-cart" class="text-sm font-bold text-customRed">${
            item.count
          }x</p>
          <div class="flex gap-2">
            <p id="item-single-price" class="text-sm font-thin text-gray-400">$${item.dessertPrice.toFixed(
              2
            )}</p>
            <p id="item-total-price" class="text-sm font-bold">$${(
              item.count * item.dessertPrice
            ).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <img
          data-close="${item.id}"
          class="border-2 rounded-full border-customRose-400 cursor-pointer"
          src="./assets/images/icon-remove-item.svg"
          alt=""
        />
        <p id="decrement" class="text-2lg text-red-700 font-bold cursor-pointer">-</p>
      </div>
    `;

export const confirmationHtml = (el) => `   <div
          class="flex items-center justify-between px-5 py-3 border-b-2 pb-5 bg-customRose-50 rounded-sm"
        >
          <div id="image-name-price">
            <img
              width="100"
              src="${el.dessertImg}"
              alt=""
            />
            <div>
              <p class="text-sm font-bold">${el.dessertName}</p>
              <div>
                <p
                  id="item-count-in-cart"
                  class="text-sm font-bold text-customRed"
                >
                  ${el.count}x
                </p>
                <p
                  id="item-single-price"
                  class="text-sm font-thin text-gray-400"
                >
                  $${el.dessertPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p id="item-total-price" class="text-sm font-bold">
              $${(el.count * el.dessertPrice).toFixed(2)}
            </p>
          </div>
        </div>`;

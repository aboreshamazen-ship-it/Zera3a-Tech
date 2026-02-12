function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  const productIds = [
    "animal-feed",
    "corn-feed",
    "hay",
    "barley-feed",
    "pellets",
    "mineral-mix",
    "soy-feed",
    "wheat-bran",
    "vet-medicine",
    "vitamins",
    "antibiotic",
    "vaccine",
    "dewormer",
    "disinfectant",
    "thermometer",
    "first-aid",
    "Vitamin A",
    "Vitamin D",
    "Vitamin E",
    "Multivitamins",
    "Vitamin C",
    "Mineral Mix",
    "Omega 3",
    "Probiotic Vitamins",
    "product-cow",
    "product-chicken",
    "product-buffalo",
    "product-sheep",
    "product-goat",
    "product-duck",
    "product-rabbit",
    "product-turkey"
  ];

  productIds.forEach(id => {
    const product = document.getElementById(id);
    const text = product.innerText.toLowerCase();

    if (text.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
    
const STORAGE_KEYS = {
  products: "vardha_products",
  cart: "vardha_cart",
  addresses: "vardha_addresses",
  selectedAddress: "vardha_selected_address",
  bulkUploads: "vardha_bulk_uploads",
  paymentSettings: "vardha_payment_settings"
};

const WHATSAPP_NUMBER = "919600029246";
const CATEGORY_OPTIONS = [
  "Avals",
  "Dry Fruits",
  "Fruits",
  "Greens",
  "Vegetables",
  "Flours",
  "Pulses",
  "Wheat",
  "Snacks",
  "Personal Care",
  "Home Care",
  "Sides"
];

const DEFAULT_PRODUCTS = [
  {
    id: "p1",
    sku: "VRD-AVALS",
    name: "Avals",
    price: 80,
    unit: "pack",
    stock: 24,
    category: "Avals",
    status: "available",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p2",
    sku: "VRD-DRY-FRUITS",
    name: "Dry Fruits",
    price: 220,
    unit: "box",
    stock: 18,
    category: "Dry Fruits",
    status: "available",
    image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p3",
    sku: "VRD-FRUITS",
    name: "Fruits",
    price: 120,
    unit: "kg",
    stock: 32,
    category: "Fruits",
    status: "available",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p4",
    sku: "VRD-GREENS",
    name: "Greens",
    price: 40,
    unit: "bunch",
    stock: 28,
    category: "Greens",
    status: "available",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p5",
    sku: "VRD-VEGETABLES",
    name: "Vegetables",
    price: 55,
    unit: "kg",
    stock: 44,
    category: "Vegetables",
    status: "available",
    image: "https://images.unsplash.com/photo-1467453678174-768ec283a940?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p6",
    sku: "VRD-FLOURS",
    name: "Flours",
    price: 70,
    unit: "pack",
    stock: 26,
    category: "Flours",
    status: "available",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p7",
    sku: "VRD-PULSES",
    name: "Pulses",
    price: 95,
    unit: "kg",
    stock: 35,
    category: "Pulses",
    status: "available",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p8",
    sku: "VRD-WHEAT",
    name: "Wheat",
    price: 60,
    unit: "kg",
    stock: 30,
    category: "Wheat",
    status: "available",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p9",
    sku: "VRD-SNACKS",
    name: "Snacks",
    price: 35,
    unit: "pack",
    stock: 40,
    category: "Snacks",
    status: "available",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p10",
    sku: "VRD-PERSONAL-CARE",
    name: "Personal Care",
    price: 110,
    unit: "item",
    stock: 16,
    category: "Personal Care",
    status: "available",
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p11",
    sku: "VRD-HOME-CARE",
    name: "Home Care",
    price: 95,
    unit: "item",
    stock: 20,
    category: "Home Care",
    status: "available",
    image: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p12",
    sku: "VRD-SIDES",
    name: "Sides",
    price: 45,
    unit: "pack",
    stock: 34,
    category: "Sides",
    status: "available",
    image: "https://images.unsplash.com/photo-1514517220031-b1fbf66bdf9b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p13",
    sku: "VRD-MANGO",
    name: "Mango",
    price: 200,
    unit: "kg",
    stock: 50,
    category: "Fruits",
    status: "available",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p14",
    sku: "VRD-POTATO",
    name: "Potato",
    price: 100,
    unit: "kg",
    stock: 80,
    category: "Vegetables",
    status: "available",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p15",
    sku: "VRD-TOMATO",
    name: "Tomato",
    price: 60,
    unit: "kg",
    stock: 75,
    category: "Vegetables",
    status: "available",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p16",
    sku: "VRD-APPLE",
    name: "Apple",
    price: 180,
    unit: "kg",
    stock: 0,
    category: "Fruits",
    status: "coming-soon",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p17",
    sku: "VRD-CARROT",
    name: "Carrot",
    price: 70,
    unit: "kg",
    stock: 0,
    category: "Vegetables",
    status: "coming-soon",
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=900&q=80"
  }
];

function loadProducts() {
  const storedProducts = localStorage.getItem(STORAGE_KEYS.products);

  if (!storedProducts) {
    localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(DEFAULT_PRODUCTS));
    return [...DEFAULT_PRODUCTS];
  }

  try {
    const parsedProducts = JSON.parse(storedProducts);
    if (!Array.isArray(parsedProducts) || parsedProducts.length === 0) {
      return [...DEFAULT_PRODUCTS];
    }

    const normalizedProducts = normalizeProducts(parsedProducts);
    saveProducts(normalizedProducts);
    return normalizedProducts;
  } catch (error) {
    localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(DEFAULT_PRODUCTS));
    return [...DEFAULT_PRODUCTS];
  }
}

function normalizeProducts(products) {
  const byId = new Map(products.map((product) => [product.id, product]));
  const normalized = products.map((product) => {
    const fallback = DEFAULT_PRODUCTS.find((entry) => entry.id === product.id) || {};

    return {
      ...fallback,
      ...product,
      sku: product.sku || fallback.sku || product.id,
      unit: product.unit || fallback.unit || "item",
      status: product.status || fallback.status || "available"
    };
  });

  DEFAULT_PRODUCTS.forEach((defaultProduct) => {
    if (!byId.has(defaultProduct.id)) {
      normalized.push(defaultProduct);
    }
  });

  return normalized;
}

function saveProducts(products) {
  localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(products));
}

function loadJsonList(key) {
  const storedValue = localStorage.getItem(key);

  if (!storedValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch (error) {
    return [];
  }
}

function loadCart() {
  const storedCart = localStorage.getItem(STORAGE_KEYS.cart);

  if (!storedCart) {
    return [];
  }

  try {
    const parsedCart = JSON.parse(storedCart);
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}

function loadAddresses() {
  return loadJsonList(STORAGE_KEYS.addresses);
}

function saveAddresses(addresses) {
  localStorage.setItem(STORAGE_KEYS.addresses, JSON.stringify(addresses));
}

function loadBulkUploads() {
  return loadJsonList(STORAGE_KEYS.bulkUploads);
}

function saveBulkUploads(history) {
  localStorage.setItem(STORAGE_KEYS.bulkUploads, JSON.stringify(history));
}

function loadPaymentSettings() {
  const storedSettings = localStorage.getItem(STORAGE_KEYS.paymentSettings);

  if (!storedSettings) {
    return {
      qrImage: "",
      payeeName: "Vardha",
      paymentNote: "Scan and pay using any UPI or banking app."
    };
  }

  try {
    const parsedSettings = JSON.parse(storedSettings);
    return {
      qrImage: parsedSettings.qrImage || "",
      payeeName: parsedSettings.payeeName || "Vardha",
      paymentNote: parsedSettings.paymentNote || "Scan and pay using any UPI or banking app."
    };
  } catch (error) {
    return {
      qrImage: "",
      payeeName: "Vardha",
      paymentNote: "Scan and pay using any UPI or banking app."
    };
  }
}

function savePaymentSettings(settings) {
  localStorage.setItem(STORAGE_KEYS.paymentSettings, JSON.stringify(settings));
}

function getCategories(products) {
  return ["All", ...new Set([...CATEGORY_OPTIONS, ...products.map((product) => product.category)])];
}

function formatCurrency(value) {
  return `Rs. ${Number(value || 0)}`;
}

function formatProductPrice(product) {
  return `${formatCurrency(product.price)}/${product.unit || "item"}`;
}

function isComingSoon(product) {
  return product.status === "coming-soon";
}

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildSingleProductMessage(product, quantity, address) {
  const total = product.price * quantity;
  return (
    `Hello, I want to order:\n` +
    `- ${product.name} x ${quantity} ${product.unit || "item"} = ${formatCurrency(total)}\n` +
    `Total: ${formatCurrency(total)}${formatAddressForMessage(address)}`
  );
}

function formatAddressForMessage(address) {
  if (!address) {
    return "";
  }

  return (
    `\n\nDelivery Details:\n` +
    `Name: ${address.customerName}\n` +
    `Mobile: ${address.mobile}\n` +
    `Address: ${address.deliveryAddress}\n` +
    `Landmark: ${address.landmark || "-"}\n` +
    `Pincode: ${address.pincode}\n` +
    `GPS: ${address.latitude}, ${address.longitude}\n` +
    `Map: https://www.google.com/maps?q=${address.latitude},${address.longitude}`
  );
}

function buildCartMessage(products, cart, address) {
  const availableCartItems = cart
    .map((item) => ({
      item,
      product: products.find((entry) => entry.id === item.id)
    }))
    .filter((entry) => entry.product);

  const lines = availableCartItems.map(({ item, product }) => {
    const lineTotal = product.price * item.quantity;
    return `- ${product.name} x ${item.quantity} ${product.unit || "item"} = ${formatCurrency(lineTotal)}`;
  });

  const total = availableCartItems.reduce((sum, { item, product }) => {
    return sum + product.price * item.quantity;
  }, 0);

  return `Hello, I want to order:\n${lines.join("\n")}\nTotal: ${formatCurrency(total)}${formatAddressForMessage(address)}`;
}

function setupSharedUi() {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  const navLinks = document.querySelectorAll(".site-nav a");
  const revealItems = document.querySelectorAll(".reveal");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      siteNav.classList.toggle("show");
      document.body.classList.toggle("nav-open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("show");
        document.body.classList.remove("nav-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if ("IntersectionObserver" in window && revealItems.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}

function setupStorePage() {
  const productGrid = document.getElementById("productGrid");
  const categoryFilters = document.getElementById("categoryFilters");
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const cartItemTotal = document.getElementById("cartItemTotal");
  const cartGrandTotal = document.getElementById("cartGrandTotal");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartTrigger = document.getElementById("cartTrigger");
  const heroCartButton = document.getElementById("heroCartButton");
  const cartClose = document.getElementById("cartClose");
  const clearCartButton = document.getElementById("clearCartButton");
  const orderAllButton = document.getElementById("orderAllButton");
  const addressForm = document.getElementById("addressForm");
  const savedAddressList = document.getElementById("savedAddressList");
  const useCurrentLocationButton = document.getElementById("useCurrentLocationButton");
  const openMapsButton = document.getElementById("openMapsButton");
  const addressMessage = document.getElementById("addressMessage");
  const paymentQrWrap = document.getElementById("paymentQrWrap");
  const paymentQrImage = document.getElementById("paymentQrImage");
  const paymentQrName = document.getElementById("paymentQrName");
  const paymentQrNote = document.getElementById("paymentQrNote");

  let products = loadProducts();
  let cart = loadCart();
  let addresses = loadAddresses();
  let paymentSettings = loadPaymentSettings();
  let activeCategory = "All";
  let selectedAddressId = localStorage.getItem(STORAGE_KEYS.selectedAddress);

  function syncState() {
    saveCart(cart);
    saveProducts(products);
    renderCategories();
    renderProducts();
    renderCart();
  }

  function getCartQuantity(productId) {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  }

  function updateCart(productId, nextQuantity) {
    const product = products.find((item) => item.id === productId);

    if (!product || isComingSoon(product)) {
      return;
    }

    const boundedQuantity = Math.min(Math.max(nextQuantity, 0), product.stock);
    const existingIndex = cart.findIndex((item) => item.id === productId);

    if (boundedQuantity === 0) {
      if (existingIndex >= 0) {
        cart.splice(existingIndex, 1);
      }
    } else if (existingIndex >= 0) {
      cart[existingIndex].quantity = boundedQuantity;
    } else {
      cart.push({ id: productId, quantity: boundedQuantity });
    }

    syncState();
  }

  function renderCategories() {
    const categories = getCategories(products);
    categoryFilters.innerHTML = categories
      .map(
        (category) => `
          <button
            type="button"
            class="category-filter-button ${activeCategory === category ? "is-active" : ""}"
            data-category="${category}"
          >
            ${category}
          </button>
        `
      )
      .join("");

    categoryFilters.querySelectorAll(".category-filter-button").forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.category;
        renderCategories();
        renderProducts();
      });
    });
  }

  function renderProducts() {
    const visibleProducts = products.filter((product) => {
      return activeCategory === "All" || product.category === activeCategory;
    });

    productGrid.innerHTML = visibleProducts
      .map((product) => {
        const quantity = getCartQuantity(product.id);
        const itemTotal = product.price * quantity;
        const productStatus = isComingSoon(product) ? "Coming Soon" : `Stock: ${product.stock}`;
        const disableOrdering = isComingSoon(product) ? "disabled" : "";

        return `
          <article class="catalog-card reveal is-visible">
            <div class="product-image-frame">
              <img src="${product.image}" alt="${product.name}">
              ${isComingSoon(product) ? `<span class="status-ribbon">Coming Soon</span>` : ""}
            </div>
            <div class="card-content">
              <div class="product-meta">
                <button type="button" class="category-filter-button">${product.category}</button>
                <span class="product-stock">${productStatus}</span>
              </div>
              <h3>${product.name}</h3>
              <p>Fresh, premium-quality ${product.name.toLowerCase()} for retail and wholesale buyers.</p>
              <div class="product-card-footer">
                <span class="price-label">${formatProductPrice(product)}</span>
                <div class="quantity-selector" aria-label="${product.name} quantity selector">
                  <button type="button" class="qty-button" data-action="decrease" data-id="${product.id}" aria-label="Decrease ${product.name} quantity" ${disableOrdering}>-</button>
                  <span class="qty-value">${quantity}</span>
                  <button type="button" class="qty-button" data-action="increase" data-id="${product.id}" aria-label="Increase ${product.name} quantity" ${disableOrdering}>+</button>
                </div>
              </div>
              <div class="product-card-footer">
                <span class="price-label">Line Total: ${formatCurrency(itemTotal)}</span>
              </div>
              <div class="product-actions">
                <button type="button" class="btn btn-primary add-to-cart-button" data-id="${product.id}" ${disableOrdering}>
                  ${isComingSoon(product) ? "Coming Soon" : quantity > 0 ? "Update Cart" : "Add to Cart"}
                </button>
                <a
                  class="btn btn-whatsapp order-single-button ${isComingSoon(product) ? "is-disabled" : ""}"
                  href="${buildWhatsAppLink(buildSingleProductMessage(product, Math.max(quantity, 1)))}"
                  data-id="${product.id}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled="${isComingSoon(product)}"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    productGrid.querySelectorAll(".qty-button:not(:disabled)").forEach((button) => {
      button.addEventListener("click", () => {
        const productId = button.dataset.id;
        const currentQuantity = getCartQuantity(productId);
        const nextQuantity =
          button.dataset.action === "increase"
            ? currentQuantity + 1
            : Math.max(0, currentQuantity - 1);

        updateCart(productId, nextQuantity);
      });
    });

    productGrid.querySelectorAll(".add-to-cart-button:not(:disabled)").forEach((button) => {
      button.addEventListener("click", () => {
        const productId = button.dataset.id;
        const quantity = Math.max(getCartQuantity(productId), 1);
        updateCart(productId, quantity);
        openCart();
      });
    });

    productGrid.querySelectorAll(".order-single-button:not(.is-disabled)").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const product = products.find((entry) => entry.id === link.dataset.id);
        if (!product) {
          return;
        }

        const orderAddress = getOrderAddress();
        if (!orderAddress) {
          openCart();
          return;
        }

        const quantity = Math.max(getCartQuantity(product.id), 1);
        window.open(buildWhatsAppLink(buildSingleProductMessage(product, quantity, orderAddress)), "_blank", "noopener");
      });
    });
  }

  function renderCart() {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const grandTotal = cart.reduce((sum, item) => {
      const product = products.find((entry) => entry.id === item.id);
      return product ? sum + product.price * item.quantity : sum;
    }, 0);

    cartCount.textContent = String(itemCount);
    cartItemTotal.textContent = String(itemCount);
    cartGrandTotal.textContent = formatCurrency(grandTotal);

    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="empty-state">
          <h3>Your cart is empty</h3>
          <p>Add products from the catalogue to build your grocery order.</p>
        </div>
      `;
      return;
    }

    cartItems.innerHTML = cart
      .map((item) => {
        const product = products.find((entry) => entry.id === item.id);
        if (!product) {
          return "";
        }
        const lineTotal = product.price * item.quantity;

        return `
          <article class="cart-item">
            <div class="cart-item-header">
              <div>
                <p class="cart-item-name">${product.name}</p>
                <span>${product.category} - ${product.unit || "item"}</span>
              </div>
              <span class="cart-item-price">${formatCurrency(lineTotal)}</span>
            </div>
            <div class="cart-item-actions">
              <div class="quantity-selector">
                <button type="button" class="qty-button" data-cart-action="decrease" data-id="${product.id}" aria-label="Decrease ${product.name} quantity">-</button>
                <span class="qty-value">${item.quantity}</span>
                <button type="button" class="qty-button" data-cart-action="increase" data-id="${product.id}" aria-label="Increase ${product.name} quantity">+</button>
              </div>
              <button type="button" class="remove-link" data-remove-id="${product.id}">Remove</button>
            </div>
          </article>
        `;
      })
      .join("");

    cartItems.querySelectorAll("[data-cart-action]").forEach((button) => {
      button.addEventListener("click", () => {
        const productId = button.dataset.id;
        const currentQuantity = getCartQuantity(productId);
        const nextQuantity =
          button.dataset.cartAction === "increase"
            ? currentQuantity + 1
            : Math.max(0, currentQuantity - 1);

        updateCart(productId, nextQuantity);
      });
    });

    cartItems.querySelectorAll("[data-remove-id]").forEach((button) => {
      button.addEventListener("click", () => {
        updateCart(button.dataset.removeId, 0);
      });
    });
  }

  function openCart() {
    document.body.classList.add("cart-open");
    cartDrawer.setAttribute("aria-hidden", "false");
  }

  function closeCart() {
    document.body.classList.remove("cart-open");
    cartDrawer.setAttribute("aria-hidden", "true");
  }

  cartTrigger.addEventListener("click", openCart);
  heroCartButton.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);

  clearCartButton.addEventListener("click", () => {
    cart = [];
    syncState();
  });

  function getSelectedAddress() {
    return addresses.find((address) => address.id === selectedAddressId) || addresses[0] || null;
  }

  function readAddressFormPayload() {
    if (!addressForm) {
      return null;
    }

    const formData = new FormData(addressForm);
    return {
      id: `addr${Date.now()}`,
      customerName: String(formData.get("customerName") || "").trim(),
      mobile: String(formData.get("mobile") || "").replace(/\D/g, ""),
      deliveryAddress: String(formData.get("deliveryAddress") || "").trim(),
      landmark: String(formData.get("landmark") || "").trim(),
      pincode: String(formData.get("pincode") || "").replace(/\D/g, ""),
      latitude: String(formData.get("latitude") || "").trim(),
      longitude: String(formData.get("longitude") || "").trim()
    };
  }

  function validateAddressPayload(payload) {
    if (!payload || !payload.customerName) {
      return "Please enter customer name.";
    }

    if (!/^[0-9]{10,15}$/.test(payload.mobile)) {
      return "Please enter a valid mobile number.";
    }

    if (!payload.deliveryAddress) {
      return "Please enter delivery address.";
    }

    if (!/^[0-9]{6}$/.test(payload.pincode)) {
      return "Please enter a valid 6-digit pincode.";
    }

    if (!Number.isFinite(Number(payload.latitude)) || !Number.isFinite(Number(payload.longitude))) {
      return "Please enter valid latitude and longitude.";
    }

    return "";
  }

  function saveAddressPayload(payload, clearForm = false) {
    const existingAddress = addresses.find((address) => {
      return (
        address.mobile === payload.mobile &&
        address.deliveryAddress.toLowerCase() === payload.deliveryAddress.toLowerCase() &&
        address.pincode === payload.pincode
      );
    });

    if (existingAddress) {
      selectedAddressId = existingAddress.id;
    } else {
      addresses = [payload, ...addresses];
      selectedAddressId = payload.id;
      saveAddresses(addresses);
    }

    localStorage.setItem(STORAGE_KEYS.selectedAddress, selectedAddressId);
    renderSavedAddresses();

    if (clearForm) {
      addressForm.reset();
    }

    return addresses.find((address) => address.id === selectedAddressId) || payload;
  }

  function getOrderAddress() {
    const selectedAddress = getSelectedAddress();
    const formAddress = readAddressFormPayload();
    const hasFormAddress = formAddress && (
      formAddress.customerName ||
      formAddress.mobile ||
      formAddress.deliveryAddress ||
      formAddress.pincode ||
      formAddress.latitude ||
      formAddress.longitude
    );

    if (hasFormAddress) {
      const validationError = validateAddressPayload(formAddress);

      if (validationError) {
        setAddressMessage(validationError);
        return null;
      }

      setAddressMessage("Delivery details added to WhatsApp order.");
      return saveAddressPayload(formAddress);
    }

    if (selectedAddress) {
      return selectedAddress;
    }

    setAddressMessage("Enter customer name, phone number, address, and GPS location before placing the order.");
    return null;
  }

  function renderSavedAddresses() {
    if (!savedAddressList) {
      return;
    }

    if (addresses.length === 0) {
      savedAddressList.innerHTML = `<p class="help-text">No saved delivery addresses yet.</p>`;
      return;
    }

    savedAddressList.innerHTML = addresses
      .map((address) => {
        const mapLink = `https://www.google.com/maps?q=${address.latitude},${address.longitude}`;
        return `
          <label class="saved-address-card">
            <input type="radio" name="savedAddress" value="${address.id}" ${address.id === selectedAddressId ? "checked" : ""}>
            <span>
              <strong>${address.customerName}</strong>
              <small>${address.deliveryAddress}, ${address.pincode}</small>
              <a href="${mapLink}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </span>
          </label>
        `;
      })
      .join("");

    savedAddressList.querySelectorAll("[name='savedAddress']").forEach((field) => {
      field.addEventListener("change", () => {
        selectedAddressId = field.value;
        localStorage.setItem(STORAGE_KEYS.selectedAddress, selectedAddressId);
      });
    });
  }

  function renderPaymentQr() {
    if (!paymentQrWrap || !paymentQrImage || !paymentQrName || !paymentQrNote) {
      return;
    }

    paymentQrName.textContent = paymentSettings.payeeName;
    paymentQrNote.textContent = paymentSettings.qrImage
      ? paymentSettings.paymentNote
      : "Add your bank payment QR from the Admin Panel.";

    if (paymentSettings.qrImage) {
      paymentQrImage.src = paymentSettings.qrImage;
      paymentQrImage.alt = `${paymentSettings.payeeName} payment QR code`;
      paymentQrWrap.classList.add("has-qr");
    } else {
      paymentQrImage.removeAttribute("src");
      paymentQrImage.alt = "";
      paymentQrWrap.classList.remove("has-qr");
    }
  }

  function setAddressMessage(message) {
    if (addressMessage) {
      addressMessage.textContent = message;
    }
  }

  if (addressForm) {
    addressForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const payload = readAddressFormPayload();
      const validationError = validateAddressPayload(payload);

      if (validationError) {
        setAddressMessage(validationError);
        return;
      }

      saveAddressPayload(payload, true);
      setAddressMessage("Delivery address saved.");
    });
  }

  if (useCurrentLocationButton && addressForm) {
    useCurrentLocationButton.addEventListener("click", () => {
      if (!navigator.geolocation) {
        setAddressMessage("GPS location is not available in this browser.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          addressForm.elements.latitude.value = position.coords.latitude.toFixed(6);
          addressForm.elements.longitude.value = position.coords.longitude.toFixed(6);
          setAddressMessage("GPS location added. Adjust the values if needed.");
        },
        () => {
          setAddressMessage("Could not access GPS location. Please enter latitude and longitude manually.");
        }
      );
    });
  }

  if (openMapsButton && addressForm) {
    openMapsButton.addEventListener("click", () => {
      const latitude = addressForm.elements.latitude.value;
      const longitude = addressForm.elements.longitude.value;
      const query = latitude && longitude ? `${latitude},${longitude}` : "";
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, "_blank", "noopener");
    });
  }

  orderAllButton.addEventListener("click", () => {
    if (cart.length === 0) {
      return;
    }

    const orderAddress = getOrderAddress();
    if (!orderAddress) {
      return;
    }

    window.open(buildWhatsAppLink(buildCartMessage(products, cart, orderAddress)), "_blank", "noopener");
  });

  window.addEventListener("storage", () => {
    products = loadProducts();
    cart = loadCart();
    addresses = loadAddresses();
    paymentSettings = loadPaymentSettings();
    syncState();
    renderSavedAddresses();
    renderPaymentQr();
  });

  syncState();
  renderSavedAddresses();
  renderPaymentQr();
}

function setupAdminPage() {
  const productForm = document.getElementById("productForm");
  const productId = document.getElementById("productId");
  const productSku = document.getElementById("productSku");
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productUnit = document.getElementById("productUnit");
  const productStock = document.getElementById("productStock");
  const productCategory = document.getElementById("productCategory");
  const productStatus = document.getElementById("productStatus");
  const productImage = document.getElementById("productImage");
  const adminMessage = document.getElementById("adminMessage");
  const adminTableBody = document.getElementById("adminTableBody");
  const resetFormButton = document.getElementById("resetFormButton");
  const formTitle = document.getElementById("formTitle");
  const bulkUploadFile = document.getElementById("bulkUploadFile");
  const downloadBulkTemplateButton = document.getElementById("downloadBulkTemplateButton");
  const applyBulkUploadButton = document.getElementById("applyBulkUploadButton");
  const downloadErrorReportButton = document.getElementById("downloadErrorReportButton");
  const bulkUploadMessage = document.getElementById("bulkUploadMessage");
  const bulkSuccessBody = document.getElementById("bulkSuccessBody");
  const bulkFailedBody = document.getElementById("bulkFailedBody");
  const bulkHistoryBody = document.getElementById("bulkHistoryBody");
  const paymentQrForm = document.getElementById("paymentQrForm");
  const paymentPayeeName = document.getElementById("paymentPayeeName");
  const paymentNote = document.getElementById("paymentNote");
  const paymentQrFile = document.getElementById("paymentQrFile");
  const paymentQrPreview = document.getElementById("paymentQrPreview");
  const paymentQrMessage = document.getElementById("paymentQrMessage");
  const clearPaymentQrButton = document.getElementById("clearPaymentQrButton");

  let products = loadProducts();
  let bulkPreview = { valid: [], invalid: [], fileName: "" };
  let paymentSettings = loadPaymentSettings();

  function resetForm(clearMessage = true) {
    productForm.reset();
    productId.value = "";
    formTitle.textContent = "Add New Product";
    if (clearMessage) {
      adminMessage.textContent = "";
    }
    renderCategoryOptions();
  }

  function renderCategoryOptions() {
    const categories = [...new Set([...CATEGORY_OPTIONS, ...products.map((product) => product.category)])];
    productCategory.innerHTML = categories
      .map((category) => `<option value="${category}">${category}</option>`)
      .join("");
  }

  function renderAdminTable() {
    adminTableBody.innerHTML = products
      .map((product) => {
        return `
          <tr>
            <td>
              <div class="admin-row-actions">
                <img class="admin-thumb" src="${product.image}" alt="${product.name}">
                <div>
                  <strong>${product.name}</strong><br>
                  <small>${product.id}</small>
                </div>
              </div>
            </td>
            <td>${product.sku}</td>
            <td>${product.category}</td>
            <td>
              <input
                type="number"
                class="admin-inline-field"
                data-field="price"
                data-id="${product.id}"
                value="${product.price}"
                min="1"
              >
            </td>
            <td>${product.unit || "item"}</td>
            <td>
              <input
                type="number"
                class="admin-inline-field"
                data-field="stock"
                data-id="${product.id}"
                value="${product.stock}"
                min="0"
              >
            </td>
            <td>${isComingSoon(product) ? "Coming Soon" : "Available"}</td>
            <td>
              <div class="admin-row-actions">
                <button type="button" class="small-button" data-edit-id="${product.id}">Edit</button>
                <button type="button" class="small-button" data-save-id="${product.id}">Save</button>
                <button type="button" class="small-button delete-button" data-delete-id="${product.id}">Delete</button>
              </div>
            </td>
          </tr>
        `;
      })
      .join("");

    adminTableBody.querySelectorAll("[data-edit-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const product = products.find((entry) => entry.id === button.dataset.editId);

        productId.value = product.id;
        productSku.value = product.sku;
        productName.value = product.name;
        productPrice.value = product.price;
        productUnit.value = product.unit || "item";
        productStock.value = product.stock;
        productCategory.value = product.category;
        productStatus.value = product.status || "available";
        productImage.value = product.image;
        formTitle.textContent = "Edit Product";
        adminMessage.textContent = `Editing ${product.name}`;
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    adminTableBody.querySelectorAll("[data-save-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const currentId = button.dataset.saveId;
        const priceField = adminTableBody.querySelector(`[data-field="price"][data-id="${currentId}"]`);
        const stockField = adminTableBody.querySelector(`[data-field="stock"][data-id="${currentId}"]`);

        products = products.map((product) => {
          if (product.id !== currentId) {
            return product;
          }

          return {
            ...product,
            price: Number(priceField.value),
            stock: Number(stockField.value)
          };
        });

        saveProducts(products);
        adminMessage.textContent = "Price and stock updated successfully.";
        renderAdminTable();
      });
    });

    adminTableBody.querySelectorAll("[data-delete-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const currentId = button.dataset.deleteId;
        products = products.filter((product) => product.id !== currentId);
        saveProducts(products);
        adminMessage.textContent = "Product deleted successfully.";
        renderCategoryOptions();
        renderAdminTable();
      });
    });
  }

  productForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const productPayload = {
      id: productId.value || `p${Date.now()}`,
      sku: productSku.value.trim(),
      name: productName.value.trim(),
      price: Number(productPrice.value),
      unit: productUnit.value.trim(),
      stock: Number(productStock.value),
      category: productCategory.value,
      status: productStatus.value,
      image: productImage.value.trim()
    };

    const duplicateProduct = products.find((product) => {
      return product.id !== productPayload.id && product.sku.toLowerCase() === productPayload.sku.toLowerCase();
    });

    if (duplicateProduct) {
      adminMessage.textContent = "SKU already exists. Please use a unique SKU.";
      return;
    }

    if (productId.value) {
      products = products.map((product) => {
        return product.id === productPayload.id ? productPayload : product;
      });
      adminMessage.textContent = "Product updated successfully.";
    } else {
      products.push(productPayload);
      adminMessage.textContent = "Product added successfully.";
    }

    saveProducts(products);
    renderCategoryOptions();
    renderAdminTable();
    resetForm(false);
  });

  resetFormButton.addEventListener("click", resetForm);

  function renderPaymentSettings() {
    if (!paymentQrForm) {
      return;
    }

    paymentPayeeName.value = paymentSettings.payeeName;
    paymentNote.value = paymentSettings.paymentNote;

    if (paymentSettings.qrImage) {
      paymentQrPreview.src = paymentSettings.qrImage;
      paymentQrPreview.alt = `${paymentSettings.payeeName} payment QR code`;
      paymentQrPreview.classList.add("is-visible");
    } else {
      paymentQrPreview.removeAttribute("src");
      paymentQrPreview.alt = "";
      paymentQrPreview.classList.remove("is-visible");
    }
  }

  if (paymentQrForm) {
    paymentQrForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const saveSettings = (qrImage) => {
        paymentSettings = {
          qrImage: qrImage || paymentSettings.qrImage,
          payeeName: paymentPayeeName.value.trim() || "Vardha",
          paymentNote: paymentNote.value.trim() || "Scan and pay using any UPI or banking app."
        };
        savePaymentSettings(paymentSettings);
        renderPaymentSettings();
        paymentQrMessage.textContent = "Payment QR settings saved.";
      };

      const file = paymentQrFile.files[0];
      if (!file) {
        saveSettings("");
        return;
      }

      if (!file.type.startsWith("image/")) {
        paymentQrMessage.textContent = "Please upload a valid QR image.";
        return;
      }

      const reader = new FileReader();
      reader.onload = () => saveSettings(String(reader.result || ""));
      reader.onerror = () => {
        paymentQrMessage.textContent = "Could not read the QR image. Please try again.";
      };
      reader.readAsDataURL(file);
    });
  }

  if (clearPaymentQrButton) {
    clearPaymentQrButton.addEventListener("click", () => {
      paymentSettings = {
        ...paymentSettings,
        qrImage: ""
      };
      savePaymentSettings(paymentSettings);
      renderPaymentSettings();
      paymentQrMessage.textContent = "Payment QR image removed.";
    });
  }

  function parseCsv(text) {
    const rows = [];
    let current = "";
    let row = [];
    let inQuotes = false;

    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      const nextChar = text[index + 1];

      if (char === '"' && nextChar === '"') {
        current += '"';
        index += 1;
      } else if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        row.push(current.trim());
        current = "";
      } else if ((char === "\n" || char === "\r") && !inQuotes) {
        if (current || row.length > 0) {
          row.push(current.trim());
          rows.push(row);
          row = [];
          current = "";
        }
      } else {
        current += char;
      }
    }

    if (current || row.length > 0) {
      row.push(current.trim());
      rows.push(row);
    }

    return rows;
  }

  function rowsToObjects(rows) {
    const headers = rows[0].map((header) => String(header).trim().toLowerCase());

    return rows.slice(1).map((row) => {
      return headers.reduce((record, header, index) => {
        record[header] = row[index] || "";
        return record;
      }, {});
    });
  }

  function normalizeBulkRecord(record) {
    return {
      sku: record.sku || "",
      id: record.id || record.productid || record.product_id || "",
      name: record.name || record.productname || record.product_name || "",
      price: record.price || record.sellingprice || record.selling_price || "",
      unit: record.unit || ""
    };
  }

  function findBulkMatch(record) {
    const sku = record.sku.trim().toLowerCase();
    const id = record.id.trim().toLowerCase();
    const name = record.name.trim().toLowerCase();

    return products.find((product) => {
      return (
        (sku && String(product.sku).toLowerCase() === sku) ||
        (id && String(product.id).toLowerCase() === id) ||
        (name && String(product.name).toLowerCase() === name)
      );
    });
  }

  function validateBulkRows(records) {
    const valid = [];
    const invalid = [];

    records.forEach((rawRecord, index) => {
      const record = normalizeBulkRecord(rawRecord);
      const rowNumber = index + 2;
      const match = findBulkMatch(record);
      const nextPrice = Number(record.price);

      if (!record.sku && !record.id && !record.name) {
        invalid.push({ rowNumber, identifier: "-", error: "Missing SKU, Product ID, or Product Name." });
        return;
      }

      if (!match) {
        invalid.push({ rowNumber, identifier: record.sku || record.id || record.name, error: "No existing product matched." });
        return;
      }

      if (!Number.isFinite(nextPrice) || nextPrice <= 0) {
        invalid.push({ rowNumber, identifier: record.sku || record.id || record.name, error: "Price must be greater than zero." });
        return;
      }

      valid.push({
        rowNumber,
        matchId: match.id,
        matchName: match.name,
        oldPrice: match.price,
        newPrice: nextPrice,
        unit: record.unit || match.unit || "item",
        identifier: record.sku || record.id || record.name
      });
    });

    return { valid, invalid };
  }

  function renderBulkPreview() {
    bulkSuccessBody.innerHTML = bulkPreview.valid
      .map((record) => `
        <tr>
          <td>${record.identifier}</td>
          <td>${record.matchName}</td>
          <td>${formatCurrency(record.oldPrice)}</td>
          <td>${formatCurrency(record.newPrice)}</td>
          <td>${record.unit}</td>
        </tr>
      `)
      .join("");

    bulkFailedBody.innerHTML = bulkPreview.invalid
      .map((record) => `
        <tr>
          <td>${record.rowNumber}</td>
          <td>${record.identifier}</td>
          <td>${record.error}</td>
        </tr>
      `)
      .join("");

    applyBulkUploadButton.disabled = bulkPreview.valid.length === 0;
    downloadErrorReportButton.disabled = bulkPreview.invalid.length === 0;
    bulkUploadMessage.textContent = `${bulkPreview.valid.length} valid records and ${bulkPreview.invalid.length} failed records ready for review.`;
  }

  function renderBulkHistory() {
    const history = loadBulkUploads();

    bulkHistoryBody.innerHTML = history.length
      ? history
          .map((entry) => `
            <tr>
              <td>${entry.date}</td>
              <td>${entry.fileName}</td>
              <td>${entry.updated}</td>
              <td>${entry.failed}</td>
            </tr>
          `)
          .join("")
      : `<tr><td colspan="4">No bulk uploads yet.</td></tr>`;
  }

  function downloadTextFile(fileName, content) {
    const blob = new Blob([content], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }

  if (downloadBulkTemplateButton) {
    downloadBulkTemplateButton.addEventListener("click", () => {
      downloadTextFile("vardha-bulk-price-template.csv", "sku,id,name,price,unit\nVRD-MANGO,p13,Mango,200,kg\n");
    });
  }

  if (bulkUploadFile) {
    bulkUploadFile.addEventListener("change", async () => {
      const file = bulkUploadFile.files[0];

      if (!file) {
        return;
      }

      try {
        let rows = [];
        const extension = file.name.split(".").pop().toLowerCase();

        if (extension === "csv") {
          rows = parseCsv(await file.text());
        } else if (extension === "xlsx") {
          if (!window.XLSX) {
            bulkUploadMessage.textContent = "Excel parser is unavailable. Please check internet access or upload CSV.";
            return;
          }

          const workbook = window.XLSX.read(await file.arrayBuffer(), { type: "array" });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          rows = window.XLSX.utils.sheet_to_json(firstSheet, { header: 1, defval: "" });
        } else {
          bulkUploadMessage.textContent = "Please upload a CSV or XLSX file.";
          return;
        }

        if (rows.length < 2) {
          bulkUploadMessage.textContent = "Upload file must include a header row and at least one data row.";
          return;
        }

        bulkPreview = { ...validateBulkRows(rowsToObjects(rows)), fileName: file.name };
        renderBulkPreview();
      } catch (error) {
        bulkUploadMessage.textContent = "Could not read the uploaded file. Please check the format and try again.";
      }
    });
  }

  if (applyBulkUploadButton) {
    applyBulkUploadButton.addEventListener("click", () => {
      if (bulkPreview.valid.length === 0) {
        return;
      }

      products = products.map((product) => {
        const update = bulkPreview.valid.find((record) => record.matchId === product.id);

        if (!update) {
          return product;
        }

        return {
          ...product,
          price: update.newPrice,
          unit: update.unit
        };
      });

      saveProducts(products);
      saveBulkUploads([
        {
          date: new Date().toLocaleString(),
          fileName: bulkPreview.fileName || "Bulk upload",
          updated: bulkPreview.valid.length,
          failed: bulkPreview.invalid.length
        },
        ...loadBulkUploads()
      ]);
      bulkUploadMessage.textContent = "Bulk price update applied successfully.";
      renderAdminTable();
      renderBulkHistory();
      renderCategoryOptions();
      applyBulkUploadButton.disabled = true;
    });
  }

  if (downloadErrorReportButton) {
    downloadErrorReportButton.addEventListener("click", () => {
      const lines = ["row,identifier,error", ...bulkPreview.invalid.map((record) => `${record.rowNumber},"${record.identifier}","${record.error}"`)];
      downloadTextFile("vardha-bulk-upload-errors.csv", lines.join("\n"));
    });
  }

  renderCategoryOptions();
  renderAdminTable();
  renderBulkHistory();
  renderPaymentSettings();
}

function setupProductsPage() {
  const allProductsGrid = document.getElementById("allProductsGrid");

  if (!allProductsGrid) {
    return;
  }

  const products = loadProducts();
  allProductsGrid.innerHTML = products
    .map((product) => `
      <article class="catalog-card reveal is-visible">
        <div class="product-image-frame">
          <img src="${product.image}" alt="${product.name}">
          ${isComingSoon(product) ? `<span class="status-ribbon">Coming Soon</span>` : ""}
        </div>
        <div class="card-content">
          <div class="product-meta">
            <button type="button" class="category-button">${product.category}</button>
            <span class="product-stock">${isComingSoon(product) ? "Coming Soon" : `Stock: ${product.stock}`}</span>
          </div>
          <h3>${product.name}</h3>
          <p>Fresh, premium-quality ${product.name.toLowerCase()} for retail and wholesale buyers.</p>
          <div class="product-card-footer">
            <span class="price-label">${formatProductPrice(product)}</span>
            <span class="product-stock">Unit: ${product.unit || "item"}</span>
          </div>
        </div>
      </article>
    `)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  setupSharedUi();

  const page = document.body.dataset.page;

  if (page === "store") {
    setupStorePage();
  }

  if (page === "admin") {
    setupAdminPage();
  }

  if (page === "products") {
    setupProductsPage();
  }
});

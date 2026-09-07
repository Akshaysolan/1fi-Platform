// -----------------------------------------------------------------------
// Mock data source for the 1Fi Marketplace.
//
// In a real integration this file would be replaced by calls to 1Fi's
// backend. It exists to satisfy the assignment's requirement that
// product/EMI data is never hardcoded directly into UI components —
// everything below is consumed only through `src/api/productApi.js`.
// -----------------------------------------------------------------------

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "phones", label: "Phones" },
  { id: "laptops", label: "Laptops" },
  { id: "audio", label: "Audio" },
  { id: "wearables", label: "Wearables" },
  { id: "home", label: "Home" }
];

export const PRODUCTS = [
  {
    id: "p1",
    name: "Pixel 9 Pro",
    brand: "Google",
    category: "phones",
    rating: 4.6,
    ratingCount: 2148,
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
      "https://images.unsplash.com/photo-1592286927505-1def25115481?w=800&q=80"
    ],
    description:
      "Google's flagship with the Tensor G4 chip, a 50MP main camera and the cleanest build of Android yet. Built for people who want great photos without thinking about settings.",
    specs: [
      { label: "Display", value: "6.3\" LTPO OLED, 120Hz" },
      { label: "Chip", value: "Google Tensor G4" },
      { label: "Camera", value: "50MP + 48MP + 48MP" },
      { label: "Battery", value: "4700mAh" }
    ],
    variants: [
      { id: "128gb", label: "128GB", priceDelta: 0, stock: 12 },
      { id: "256gb", label: "256GB", priceDelta: 8000, stock: 9 },
      { id: "512gb", label: "512GB", priceDelta: 18000, stock: 0 }
    ],
    basePrice: 99999,
    mrp: 109999
  },
  {
    id: "p2",
    name: "MacBook Air 15\"",
    brand: "Apple",
    category: "laptops",
    rating: 4.8,
    ratingCount: 3624,
    images: [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80"
    ],
    description:
      "The M-series Air in a bigger 15-inch canvas — fanless, all-day battery, and enough power for editing, coding and everything between. Best paired with an EMI plan if you're buying alongside a new setup.",
    specs: [
      { label: "Display", value: "15.3\" Liquid Retina" },
      { label: "Chip", value: "Apple M3" },
      { label: "RAM", value: "8GB unified" },
      { label: "Battery life", value: "Up to 18 hours" }
    ],
    variants: [
      { id: "256gb", label: "256GB SSD", priceDelta: 0, stock: 6 },
      { id: "512gb", label: "512GB SSD", priceDelta: 20000, stock: 4 }
    ],
    basePrice: 134900,
    mrp: 144900
  },
  {
    id: "p3",
    name: "WH-1000XM5",
    brand: "Sony",
    category: "audio",
    rating: 4.7,
    ratingCount: 8921,
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"
    ],
    description:
      "Industry-leading noise cancellation with a softer, more comfortable fit than the previous generation. 30-hour battery life means it survives long flights and longer workdays.",
    specs: [
      { label: "Type", value: "Over-ear, wireless" },
      { label: "Noise cancellation", value: "Adaptive ANC" },
      { label: "Battery", value: "30 hours" },
      { label: "Charging", value: "USB-C, quick charge" }
    ],
    variants: [
      { id: "black", label: "Black", priceDelta: 0, stock: 20 },
      { id: "silver", label: "Silver", priceDelta: 0, stock: 15 },
      { id: "blue", label: "Midnight Blue", priceDelta: 1000, stock: 3 }
    ],
    basePrice: 29990,
    mrp: 34990
  },
  {
    id: "p4",
    name: "Galaxy Watch 7",
    brand: "Samsung",
    category: "wearables",
    rating: 4.4,
    ratingCount: 1532,
    images: [
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80"
    ],
    description:
      "Round-the-clock health tracking with sleep apnea detection, an always-on display and two-day battery life. Pairs with any Android phone.",
    specs: [
      { label: "Case size", value: "44mm" },
      { label: "Display", value: "Sapphire crystal AMOLED" },
      { label: "Battery", value: "Up to 2 days" },
      { label: "Water resistance", value: "5ATM + IP68" }
    ],
    variants: [
      { id: "40mm", label: "40mm", priceDelta: -3000, stock: 10 },
      { id: "44mm", label: "44mm", priceDelta: 0, stock: 14 }
    ],
    basePrice: 29999,
    mrp: 32999
  },
  {
    id: "p5",
    name: "Dyson V15 Detect",
    brand: "Dyson",
    category: "home",
    rating: 4.5,
    ratingCount: 964,
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1591192398764-a3c8db5f1c11?w=800&q=80",
      "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80"
    ],
    description:
      "A laser reveals microscopic dust so you know exactly where to clean. Up to 60 minutes of run time and an LCD screen that shows particle counts in real time.",
    specs: [
      { label: "Run time", value: "Up to 60 minutes" },
      { label: "Bin capacity", value: "0.76L" },
      { label: "Filtration", value: "Whole-machine HEPA" },
      { label: "Weight", value: "3.1kg" }
    ],
    variants: [
      { id: "standard", label: "Standard", priceDelta: 0, stock: 8 },
      { id: "extra-battery", label: "With extra battery", priceDelta: 6500, stock: 5 }
    ],
    basePrice: 62900,
    mrp: 69900
  },
  {
    id: "p6",
    name: "iPad Air",
    brand: "Apple",
    category: "laptops",
    rating: 4.7,
    ratingCount: 2765,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80",
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&q=80"
    ],
    description:
      "Thin, fast and versatile — the M2 iPad Air handles everything from note-taking to light editing, and works with the Apple Pencil Pro for anyone who sketches or annotates.",
    specs: [
      { label: "Display", value: "10.9\" Liquid Retina" },
      { label: "Chip", value: "Apple M2" },
      { label: "Camera", value: "12MP wide" },
      { label: "Connectivity", value: "Wi-Fi / Wi-Fi + Cellular" }
    ],
    variants: [
      { id: "wifi", label: "Wi-Fi", priceDelta: 0, stock: 18 },
      { id: "cellular", label: "Wi-Fi + Cellular", priceDelta: 12000, stock: 7 }
    ],
    basePrice: 59900,
    mrp: 64900
  },
  {
    id: "p7",
    name: "Bose QuietComfort Ultra",
    brand: "Bose",
    category: "audio",
    rating: 4.6,
    ratingCount: 1287,
    images: [
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80"
    ],
    description:
      "Bose's most immersive noise cancellation yet, with a spatial audio mode that stays locked to your head movements. Built for daily commutes and long calls alike.",
    specs: [
      { label: "Type", value: "Over-ear, wireless" },
      { label: "Noise cancellation", value: "World-class ANC" },
      { label: "Battery", value: "24 hours" },
      { label: "Special feature", value: "Immersive Audio" }
    ],
    variants: [
      { id: "black", label: "Black", priceDelta: 0, stock: 11 },
      { id: "white", label: "White Smoke", priceDelta: 0, stock: 6 }
    ],
    basePrice: 34900,
    mrp: 39900
  },
  {
    id: "p8",
    name: "Instant Pot Duo",
    brand: "Instant",
    category: "home",
    rating: 4.5,
    ratingCount: 5321,
    images: [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80"
    ],
    description:
      "Seven appliances in one: pressure cooker, slow cooker, rice cooker, steamer, saute pan, yoghurt maker and warmer. The everyday kitchen upgrade that pays for itself in takeout saved.",
    specs: [
      { label: "Capacity", value: "6 quarts" },
      { label: "Programs", value: "13 one-touch" },
      { label: "Material", value: "Stainless steel inner pot" },
      { label: "Warranty", value: "1 year" }
    ],
    variants: [
      { id: "6qt", label: "6 Quart", priceDelta: 0, stock: 25 },
      { id: "8qt", label: "8 Quart", priceDelta: 2500, stock: 13 }
    ],
    basePrice: 8999,
    mrp: 11499
  }
];

/**
 * EMI tenure options used to generate plans for any given price.
 * Longer tenures carry a slightly higher effective interest rate,
 * mirroring how real EMI issuers price risk over time.
 */
export const EMI_TENURES = [
  { months: 3, interestRate: 0 },
  { months: 6, interestRate: 0.08 },
  { months: 9, interestRate: 0.11 },
  { months: 12, interestRate: 0.14 }
];

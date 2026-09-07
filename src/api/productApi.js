// -----------------------------------------------------------------------
// API / service layer.
//
// UI components never import `data/products.js` directly — everything
// goes through the functions below. That keeps the door open to swap
// this file for real `fetch()` calls to a 1Fi backend later without
// touching a single page or component.
// -----------------------------------------------------------------------

import { PRODUCTS, CATEGORIES, EMI_TENURES } from "../data/products";

const NETWORK_DELAY_MS = 550;

// Flip this on to see the error state without editing components.
const SIMULATE_ERROR_RATE = 0; // e.g. 0.15 for occasional failures

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function maybeFail() {
  if (SIMULATE_ERROR_RATE > 0 && Math.random() < SIMULATE_ERROR_RATE) {
    throw new Error("We couldn't reach the marketplace. Please try again.");
  }
}

/** Returns the list of category filters shown on the marketplace page. */
export async function getCategories() {
  await delay(150);
  return CATEGORIES;
}

/**
 * Returns products, optionally filtered by category id ("all" or omitted
 * returns everything).
 */
export async function getProducts({ category } = {}) {
  await delay(NETWORK_DELAY_MS);
  maybeFail();

  const list =
    !category || category === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === category);

  return list.map(toProductSummary);
}

/** Returns full detail for a single product, including computed EMI plans. */
export async function getProductById(id) {
  await delay(NETWORK_DELAY_MS);
  maybeFail();

  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    throw new Error("This product is no longer available.");
  }
  return toProductDetail(product);
}

/**
 * Computes EMI plans for a given principal amount. Kept as a pure function
 * so both the API layer and any future backend-driven version can reuse
 * the same math.
 */
export function computeEmiPlans(principal) {
  return EMI_TENURES.map(({ months, interestRate }) => {
    const totalPayable = principal * (1 + interestRate);
    const monthlyAmount = Math.round(totalPayable / months);
    return {
      id: `emi-${months}`,
      months,
      monthlyAmount,
      totalPayable: Math.round(totalPayable),
      interestRate,
      isNoCost: interestRate === 0
    };
  });
}

// ---------------------------- helpers ----------------------------

function cheapestVariantPrice(product) {
  const deltas = product.variants.map((v) => v.priceDelta);
  return product.basePrice + Math.min(...deltas);
}

function toProductSummary(product) {
  const price = cheapestVariantPrice(product);
  const plans = computeEmiPlans(price);
  const lowestMonthly = plans.reduce((min, p) => Math.min(min, p.monthlyAmount), Infinity);
  return {
    id: product.id,
    name: product.name,
    brand: product.brand,
    category: product.category,
    image: product.images[0],
    price,
    mrp: product.mrp,
    fromEmi: lowestMonthly
  };
}

function toProductDetail(product) {
  return {
    ...product,
    variants: product.variants.map((v) => ({
      ...v,
      price: product.basePrice + v.priceDelta
    }))
  };
}

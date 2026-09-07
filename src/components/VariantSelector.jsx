/** Pill-style selector for a product's variants (storage, size, color...). */
export default function VariantSelector({ variants, selectedId, onSelect }) {
  return (
    <div className="variant-group" role="radiogroup" aria-label="Select variant">
      {variants.map((variant) => {
        const outOfStock = variant.stock === 0;
        const active = variant.id === selectedId;
        return (
          <button
            key={variant.id}
            className={`variant-pill${active ? " variant-pill--active" : ""}${
              outOfStock ? " variant-pill--disabled" : ""
            }`}
            onClick={() => !outOfStock && onSelect(variant.id)}
            disabled={outOfStock}
            role="radio"
            aria-checked={active}
          >
            {variant.label}
          </button>
        );
      })}
    </div>
  );
}

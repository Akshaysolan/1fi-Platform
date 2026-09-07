import { Routes, Route, Navigate } from "react-router-dom";
import Shop from "./pages/Shop";
import TopBrands from "./pages/TopBrands";
import NearbyStores from "./pages/NearbyStores";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Navigate to="/shop" replace />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/top-brands" element={<TopBrands />} />
        <Route path="/shop/nearby-stores" element={<NearbyStores />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/shop" replace />} />
      </Routes>
    </div>
  );
}

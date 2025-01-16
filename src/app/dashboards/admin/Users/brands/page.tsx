import React from "react";
import UploadBrandLogo from "./components/UploadBrandLogo";
import BrandProfiles from "./components/BrandProfiles";

const BrandsPage = () => {
  return (
    <div>
      <h1>Brand Management</h1>
      <UploadBrandLogo brandId={1} /> {/* Replace with dynamic brand ID */}
      <BrandProfiles />
    </div>
  );
};

export default BrandsPage;

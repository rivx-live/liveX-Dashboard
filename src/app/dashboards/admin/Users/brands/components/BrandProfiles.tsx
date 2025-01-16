import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../../../utils/supabaseClient";

const BrandProfiles = () => {
  interface Brand {
    id: number;
    company_name: string;
    logo_url: string | null;
  }

  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const loadBrands = async () => {
      const { data, error } = await supabase
        .from("brand_profiles")
        .select("id, company_name, logo_url");

      if (error) {
        console.error("Error fetching brands:", error.message);
      } else {
        setBrands(data || []);
      }
    };

    loadBrands();
  }, []);

  return (
    <div>
      {brands.map((brand) => (
        <div key={brand.id}>
          <h3>{brand.company_name}</h3>
          <Image
            src={brand.logo_url || "/default-logo.png"}
            alt={brand.company_name}
            width={100}
            height={100}
          />
          <Image
            src={brand.logo_url || "/default-logo.png"}
            alt={brand.company_name}
            width={100}
            height={100}
          />
          <p>No logo uploaded</p>
        </div>
      ))}
    </div>
  );
};

export default BrandProfiles;

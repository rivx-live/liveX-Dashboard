import React, { useEffect, useState } from "react";
import RIVXTierTable from "./RIVXTierTable"; // Update this path if needed
import { fetchTierData } from "@/utils/fetchTierData"; // Update this path if needed

const TiersPage = () => {
  interface TierData {
    tier: any;
    influencerCount: any;
    averageRIVXScore: number;
  }

  const [tierData, setTierData] = useState<TierData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTierData();
      const formattedData = data.map((item: any) => ({
        ...item,
        averageRIVXScore: Number(item.averageRIVXScore),
      }));
      setTierData(formattedData);
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <RIVXTierTable data={tierData} />
    </div>
  );
};

export default TiersPage;

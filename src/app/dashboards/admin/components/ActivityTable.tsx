import React from "react";
import BlankCard from "@/app/components/shared/BlankCard";
import { supabase } from "@/utils/supabaseClient";

const ActivityTable = async () => {
  const { data: sessions } = await supabase.from("sessions").select("*");

  return (
    <BlankCard title="Activity Log">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2 text-left">Session</th>
            <th className="border-b p-2 text-left">Host</th>
            <th className="border-b p-2 text-left">Brand</th>
          </tr>
        </thead>
        <tbody>
          {sessions?.map((session) => (
            <tr key={session.id}>
              <td className="p-2">{session.name}</td>
              <td className="p-2">{session.host}</td>
              <td className="p-2">{session.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </BlankCard>
  );
};

export default ActivityTable;

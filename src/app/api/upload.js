import { supabase } from "@/utils/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { data } = req.body; // Expecting JSON data in the request body

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ error: "Invalid data format" });
    }

    // Insert the raw data into the helper table
    const { error } = await supabase.from("influencer_helper").insert(data);

    if (error) {
      throw error;
    }

    res.status(200).json({ message: "Data uploaded successfully" });
  } catch (error) {
    console.error("Error uploading data:", error.message);
    res.status(500).json({ error: error.message });
  }
}

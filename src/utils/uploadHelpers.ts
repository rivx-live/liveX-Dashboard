import { supabase } from "./supabaseClient";

export const uploadBrandLogo = async (brandId: number, file: File) => {
  try {
    // Generate a unique filename using the brand ID and file name
    const fileName = `brandID-${brandId}-${Date.now()}-${file.name}`;

    // Upload the file to the 'brand-logos' bucket
    const { error: storageError } = await supabase.storage
      .from("brand-logos")
      .upload(fileName, file);

    if (storageError) {
      console.error("Error uploading logo:", storageError.message);
      return null;
    }

    // Generate the public URL of the uploaded file
    const {
      data: { publicUrl },
    } = supabase.storage.from("brand-logos").getPublicUrl(fileName);

    if (publicUrl) {
      // Save the public URL to the brand_profiles table
      const { error: updateError } = await supabase
        .from("brand_profiles")
        .update({ logo_url: publicUrl }) // Update the logo_url column
        .eq("id", brandId);

      if (updateError) {
        console.error(
          "Error saving logo URL to database:",
          updateError.message,
        );
        return null;
      }

      console.log("Logo URL saved successfully:", publicUrl);
      return publicUrl;
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
};

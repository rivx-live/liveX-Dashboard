import React, { useState } from "react";
import { uploadBrandLogo } from "../../../../../../../utils/uploadHelpers";

const UploadBrandLogo = ({ brandId }: { brandId: number }) => {
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!logoFile) return;

    const logoUrl = await uploadBrandLogo(brandId, logoFile);
    if (logoUrl) {
      setUploadedUrl(logoUrl);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload}>Upload Logo</button>
      {uploadedUrl && (
        <div>
          <p>Uploaded Logo:</p>
          <a href={uploadedUrl} target="_blank" rel="noreferrer">
            {uploadedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadBrandLogo;

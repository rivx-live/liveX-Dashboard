import React from "react";
import { useDropzone } from "react-dropzone";

export const FileUploadModal = () => {
  const onDrop = (acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{ border: "2px dashed #BC9A2D", padding: "1rem", borderRadius: "8px" }}>
      <input {...getInputProps()} />
      <p>Drag & drop files here, or click to select files</p>
    </div>
  );
};

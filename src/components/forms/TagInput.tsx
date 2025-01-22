import React, { useState } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

export const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <ReactTagInput
      tags={tags}
      onChange={(newTags) => setTags(newTags)}
      placeholder="Add tags"
    />
  );
};

import { useState } from "react";

export const useJobDetails = () => {
  const [selectedTile, setSelectedTile] = useState("Assigned Jobs");

  return {
    selectedTile,
    setSelectedTile,
  };
};

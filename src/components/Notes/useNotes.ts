import { useState } from "react";

export const useNotes = () => {
  const [selectedTile, setSelectedTile] = useState("All");

  return {
    selectedTile,
    setSelectedTile,
  };
};

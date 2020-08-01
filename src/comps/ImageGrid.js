import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <img src={doc.url} key={doc.id} alt="uploaded pic" />
        ))}
    </div>
  );
};

export default ImageGrid;

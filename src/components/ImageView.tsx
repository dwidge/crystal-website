import React, { useState, useEffect } from "react";
import { State } from "../types/State.js";

export const ImageView: React.FC<{
  value: State<Promise<Blob | undefined>>;
}> = ({ value: [imagePromise, setImagePromise] }) => {
  const [selectedImage, setSelectedImage] = useState<Blob | undefined>(
    undefined
  );

  useEffect(() => {
    imagePromise.then((blob) => {
      setSelectedImage(blob);
    });
  }, [imagePromise]);

  return (
    <div className="upload-image">
      {setImagePromise ? (
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) setImagePromise(Promise.resolve(file));
          }}
        />
      ) : null}
      {selectedImage ? (
        <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
      ) : null}
    </div>
  );
};

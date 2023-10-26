import { useState } from "react";
import "./styles.css";

export default function App() {
  const [imageFile, setImageFile] = useState(null);
  function handleImageUpload(e) {
    e.preventDefault();
    var files = e.target.children[0].files;
    if (files.length > 0) {
      setImageFile(files[0]);
    }
  }
  function handleImageInstrustions(e) {
    e.preventDefault();
  }
  return (
    <div className="App">
      <div className="image">
        <img
          id="main-image"
          src={
            imageFile
              ? URL.createObjectURL(imageFile)
              : "https://picsum.photos/1000"
          }
        />
      </div>
      <div className="upload">
        <form id="upload-image-form" onSubmit={handleImageUpload}>
          <input type="file" />
          <input type="submit" />
        </form>
      </div>
      <div className="instructions">
        <form>
          <input
            type="text"
            id="image-instructions-form"
            onSubmit={handleImageInstrustions}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

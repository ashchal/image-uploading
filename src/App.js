import "./App.css";
import { useState } from "react";
import ImageUpload from "./imageUpload";

function App() {
  const [image, setImage] = useState([]);
  const changeImage = (data) => {
    setImage(data);
  };
  return (
    <div>
      <ImageUpload
        onChange={changeImage}
        buttonStyle={{ background: "red", display: "inline-block" }}
        multiple
        title="upload image"
      >
        {({ imageData, onRemove, deleteAllHandler }) => (
          <div>
            <div>
              {imageData.length > 0 && (
                <button onClick={deleteAllHandler}>delete all</button>
              )}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat( 4, minmax(250px, 1fr) )",
                rowGap: 30,
              }}
            >
              {imageData &&
                imageData.map((item, index) => (
                  <div key={index}>
                    <div
                      style={{
                        position: "relative",
                        width: 200,
                        overflow: "hidden",
                        objectFit: "fill",
                        boxShadow: "0px 2px 10px 0px #888888",
                      }}
                    >
                      <img height="100" src={item.url} />

                      <button
                        style={{
                          color: "red",
                          position: "absolute",
                          top: 5,
                          right: 5,
                          cursor: "pointer",
                        }}
                        onClick={() => onRemove(index)}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </ImageUpload>
    </div>
  );
}

export default App;

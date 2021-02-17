import { useEffect, useState } from "react";

export function ImageUpload(props) {
  const {
    onChange,
    children,
    multiple,
    buttonStyle,
    title,
    buttonclick,
  } = props;

  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    onChange(imageData);
  }, [imageData]);
  const onUploadImage = (e) => {
    let { files } = e.target;

    let data = [];
    for (let i = 0; i < files.length; i++) {
      let impath = URL.createObjectURL(files[i]);
      data.push({ url: impath, file: files[i] });
    }
    setFunction(data);
  };

  const setFunction = (data) => {
    setImageData([...imageData, ...data]);
  };

  const onRemove = (i) => {
    let data = [...imageData];
    data.splice(i, 1);
    setImageData(data);
  };

  const deleteAllHandler = () => {
    setImageData([]);
  };
  return (
    <>
      {children({ imageData, onUploadImage, onRemove, deleteAllHandler })}
      <input
        id="click"
        style={{ display: "none" }}
        type="file"
        multiple={multiple}
        name="files"
        onChange={(e) => onUploadImage(e)}
      />
      <label htmlFor="click">{buttonclick}</label>
    </>
  );
}

import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const [error, setError] = useState(null);
  const onChangeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a valid file");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={onChangeHandler}></input>
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile}></ProgressBar>}
      </div>
    </form>
  );
};

export default UploadForm;

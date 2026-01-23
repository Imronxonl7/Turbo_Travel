import React, { useState } from "react";

import MovieOpenModal from "../OpenModal/MovieOpenModal";
import { Button } from "antd";
const MovieAddModal = ({ getData }) => {
  const [open, setOpen] = useState(false);
    const showModal = () => {
    setOpen(true);
  };

 
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <Button
        style={{ marginBottom: "20px" }}
        type="primary"
        onClick={showModal}
      >
        Add movie
      </Button>
      <MovieOpenModal setOpen={setOpen} open={open} getData={getData}/>
    </div>
  );
};
export default MovieAddModal;

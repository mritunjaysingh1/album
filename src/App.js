// import "./App.css";
import Album from "./Album/Album";
import CustomItemContext from "./action/itemContext";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import Modal from "./Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <CustomItemContext>
        {showModal ? (
          <Modal setShowModal={setShowModal} />
        ) : (
          <>
            <Navbar setShowModal={setShowModal} />

            <Album />
          </>
        )}
      </CustomItemContext>
    </>
  );
}

export default App;

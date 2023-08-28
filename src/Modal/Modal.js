import "./Modal.css";
import { useValue } from "../action/itemContext";

export default function Modal({ setShowModal }) {
  const { setId, setTitle, setUserId, addAlbum } = useValue();
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">
            <h1>Add Album</h1>
          </div>
          <div className="body">
            <div class="form-group">
              <label for="id">ID : </label>
              <input
                type="number"
                class="form-control"
                id="id"
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="title">USERID :</label>
              <input
                type="text"
                class="form-control"
                id="title"
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="title">TITLE :</label>
              <input
                type="text"
                class="form-control"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setShowModal(false);
                addAlbum();
              }}
            >
              SAVE
            </button>
            <button onClick={() => setShowModal(false)}>CANCEL</button>
          </div>
        </div>
      </div>
    </>
  );
}

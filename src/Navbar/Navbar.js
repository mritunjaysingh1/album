export default function Navbar({ setShowModal }) {
  return (
    <>
      <nav class="navbar navbar-dark bg-primary justify-content-between ">
        <h2 style={{ color: "white", marginLeft: "30%" }}>ALBUM</h2>

        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => setShowModal(true)}
        >
          ADD ALBUM
        </button>
      </nav>
    </>
  );
}

import { useValue } from "../action/itemContext";

export default function Album() {
  const { list, setList, removeAlbum, updateAlbum } = useValue();

  return (
    <>
      <div class="main">
        {list.map((value, i) => (
          <>
            <div class="card">
              <img
                src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{value.title}</h5>
                <h5 class="card-text">UserId : {value.userId}</h5>
                {value.isEditing ? (
                  <>
                    <input
                      type="text"
                      value={value.title}
                      onChange={(e) => {
                        const updatedTitle = e.target.value;
                        updateAlbum(value.id, updatedTitle);
                      }}
                    />
                    <button
                      onClick={() => {
                        setList((prevList) =>
                          prevList.map((item) =>
                            item.id === value.id
                              ? { ...item, isEditing: false }
                              : item
                          )
                        );
                      }}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      href="#"
                      class="btn btn-primary"
                      onClick={() => {
                        setList((prevlist) =>
                          prevlist.map((item) =>
                            item.id === value.id
                              ? { ...item, isEditing: true }
                              : item
                          )
                        );
                      }}
                    >
                      Update
                    </button>
                  </>
                )}

                <button
                  href="#"
                  class="btn btn-danger"
                  onClick={() => {
                    removeAlbum(value.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

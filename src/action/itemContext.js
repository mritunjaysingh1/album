import { createContext, useContext, useState, useEffect } from "react";

const itemContext = createContext();
const useValue = () => {
  return useContext(itemContext);
};

export default function CustomItemContext({ children }) {
  const [list, setList] = useState([]);
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        setList(json);
      });
  }, []);

  function addAlbum() {
    if (id && userId && title) {
      const newAlbum = {
        id,
        userId,
        title,
      };

      setList([newAlbum, ...list]);
    } else {
      window.alert("Provide all three inputs");
    }
    setId();
    setUserId("");
    setTitle("");
  }

  function removeAlbum(i) {
    fetch(`https://jsonplaceholder.typicode.com/posts/{i}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
    setList(list.filter((y) => i !== y.id));
  }

  function updateAlbum(index, updatedTitle) {
    fetch(`https://jsonplaceholder.typicode.com/posts/{i}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: "foo",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setList((prevList) =>
      prevList.map((item) =>
        item.id === index ? { ...item, title: updatedTitle } : item
      )
    );
  }
  return (
    <>
      <itemContext.Provider
        value={{
          list,
          setList,
          removeAlbum,
          updateAlbum,
          id,
          setId,
          title,
          setTitle,
          userId,
          setUserId,
          addAlbum,
        }}
      >
        {children}
      </itemContext.Provider>
    </>
  );
}

export { itemContext, useValue };

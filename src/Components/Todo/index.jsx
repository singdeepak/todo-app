import { React, useState, useRef } from "react";
import "./style.css";

const Todo = () => {
  // Todo Actual Logic Start

  const [userInput, setUserInput] = useState("");
  const [listData, setListData] = useState([]);
  const refer = useRef();

  const handleAddBtn = () => {
    setListData((listData) => {
      const updatedList = [...listData, userInput];
      setUserInput("");
      refer.current.focus();
      return updatedList;
    });
  };

  const handleRemoveItem = (ind) => {
    const filteredList = listData.filter((item, i) => ind !== i);
    setListData(filteredList);
  };


  const handleRemoveAllItems = () => {
    setListData([]);
  }


  // Todo Actual Logic End
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center bg-primary py-3">
            <h1 className="h1 text-light">Todo App</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 my-2">
            <div className="input-group my-3">
              <input
                type="text"
                className="form-control py-3"
                placeholder="Add Items ..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                ref={refer}
              />

              <button
                className="input-group-text btn btn-primary text-light"
                id="basic-addon2"
                onClick={handleAddBtn}
                type="button"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 my-3">
            {listData !== [] &&
              listData.map((item, ind) => {
                return (
                  <>
                    <div className="wrapper p-3 bg-danger m-3 text-light">
                      <span key={ind}>{item}</span>
                      <button
                        type="button"
                        className="btn-close float-end btn btn-primary"
                        aria-label="Close"
                        onClick={() => handleRemoveItem(ind)}
                      ></button>
                    </div>
                  </>
                );
              })}
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            {listData.length >= 1 && 
              <button
                className="btn btn-danger text-light"
                onClick={handleRemoveAllItems}
                type="button"
              >
                Remove All
              </button>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

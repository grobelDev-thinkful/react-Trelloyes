import React from "react";
import "./App.css";

import STORE from "./store";
import List from "./composition/List";

function App() {
  // console.log(STORE);
  return (
    <main className="App">
      <div className="App-header">
        <h1>Trelloyes!</h1>
      </div>
      <div className="App-list">
        {STORE.lists.map(list => (
          <List
            id={list.id}
            header={list.header}
            cards={list.cardIds.map(id => STORE.allCards[id])}
          />
        ))}
      </div>

      {/* {testList} */}
      {/* {testCard} */}
      {/* content goes here */}
      {/* <p>Hello World!!</p> */}
    </main>
  );
}

export default App;

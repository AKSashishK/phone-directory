import React from "react";

function App() {
  return (
    <div>
      {/* <div className='header'>
        Phone Directory
      </div>
      <button> Add </button>
      <div>
        <span>Name</span><br />
        <span>Phone</span>
      </div> */}
      <label htmlFor="name">Name</label>
      <input id="name" type="text" placeholder="Type here" defaultValue="Ashish" />
    </div>
  );
}

export default App;

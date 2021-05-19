import React, { useState } from "react";

export const AddDiscussion = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Create backend Meteor methods to save created discussions
    alert("Will be Saved in a little bit :)");
    setTitle("");
    setDescription("");
  };
  return (
    <div className="mt-4">
      <div className="jumbotron" style={{ margin: "0 500px", backgroundColor:"#000000" }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label style={{ color:"#FFFFFF" }}>Title:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter discussion title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ color:"#FFFFFF" }}>Description:</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Enter discussion"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Disqus
          </button>
        </form>
      </div>
    </div>
  );
};


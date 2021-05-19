import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Discussions } from "../api/discussions";
import { AddDiscussion } from "./components/AddDiscussion";
import { Navbar } from "./components/Navbar";

const DiscussionApp = () => {
  return (
    <div>
      <Navbar />
      <AddDiscussion />
      <pre style={{ color:"#FFFFFF" }}>DB Stuff: {JSON.stringify(this.props, null, ' ')} </pre>
    </div>
  );
};

export const App = withTracker(() => {
  return {
    events: Discussions.find({}).fetch(),
  };
})(DiscussionApp);

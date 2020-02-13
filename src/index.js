import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>WARNING!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Filip"
          timeAgo="Today at 4:45PM"
          commentText="5/7 comment"
          imageSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          commentText="Potatoes are good shiit"
          imageSrc={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 3:00PM"
          commentText="I don't want to see you naked"
          imageSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

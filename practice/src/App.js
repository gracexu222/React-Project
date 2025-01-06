import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello React</h1>;
      <CommentList />
    </div>
  );
}

const CommentList = () => {
  const comments = [
    {
      id: 1,
      text: "This is the first comment",
      replies: [
        { id: 11, text: "Reply to first comment" },
        { id: 12, text: "Another reply to first comment" },
      ],
    },
    {
      id: 2,
      text: "This is the second comment",
      replies: [],
    },
  ];
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.text}
          {comment.replies.length > 0 && (
            <ul>
              {comment.replies.map((reply) => (
                <li key={reply.id}>{reply.text}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default App;

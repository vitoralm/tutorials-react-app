export function Comments(comments) {
  return (
    comments.length > 0 &&
    comments.map(function (comment, index) {
      <div>
        <ul key={`c${index || ""}`}>
          <li className="list-group-item">
            <p>Nome: {comment.name}</p>
          </li>
          <li className="list-group-item">
            <p>Comentário: {comment.text}</p>
          </li>
        </ul>
      </div>;
    }) 
  );
}

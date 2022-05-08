const NoMatch = () => {
  return (
    <div className="card boarder-warning mb-3 no-match-container">
      <div className="card-body">
        <h2 className="card-title">No Routes Match</h2>
        <p className="card-text">
          {" "}
          The current route doesn't match to any configured routes
        </p>
      </div>
    </div>
  );
};

export default NoMatch;

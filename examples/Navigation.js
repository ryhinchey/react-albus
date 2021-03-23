import React from "react";
import { useWizard } from "react-albus";

const Navigation = () => {
  const { next, previous, hasNext, hasPrevious } = useWizard();
  return (
    <div className="example-buttons">
      {hasNext && (
        <button type="button" className="btn-fluid margin-1-b" onClick={next}>
          Next
        </button>
      )}
      {hasPrevious && (
        <button
          type="button"
          className="btn-fluid btn-secondary"
          onClick={previous}
        >
          Back
        </button>
      )}
    </div>
  );
};

export default Navigation;

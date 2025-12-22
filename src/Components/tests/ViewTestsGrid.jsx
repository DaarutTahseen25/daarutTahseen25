import React from "react";
import TestCard from "../TestCard";

const ViewTestsGrid = ({
  tests = [],
  onView = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">
      {tests.map((test) => (
        <TestCard
          key={test.id}
          title={test.title}
          tags={test.tags}
          stats={test.stats}
          onView={() => onView(test)}
          onEdit={() => onEdit(test)}
          onDelete={() => onDelete(test)}
        />
      ))}
    </div>
  );
};

export default ViewTestsGrid;

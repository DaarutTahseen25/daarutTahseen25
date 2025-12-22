import React from "react";
import { usePageTitle } from "../../hooks/usePageTitle";
import ResultsTable from "../../Components/ResultsTable";
import { useStudentResults } from "../../hooks/useStudentResults";

const Results = () => {
  usePageTitle("Results");
  const { resultsData, getGradeColor, getScoreColor } = useStudentResults();

  return (
    <section className="max-w-6xl mx-auto font-clash">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-clash text-gray-900">Results</h1>
      </div>
      <div className="space-y-8">
        {resultsData.map((classData, index) => (
          <ResultsTable
            key={index}
            className={classData.className}
            courses={classData.courses}
            getGradeColor={getGradeColor}
            getScoreColor={getScoreColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Results;

import React from "react";
import TimelineEntry from "./TimelineEntry";

export default function Timeline() {
  return (
    <ol className="mt-16 flex flex-col sm:flex-row">
      <TimelineEntry
        place={"Carlos Amarante Secondary School"}
        dateInitial={"September 2016"}
        dateFinal={"June 2019"}
        description={"Sciences and Technologies"}
      />
      <TimelineEntry
        place={"IPCA"}
        dateInitial={"October 2020"}
        dateFinal={"July 2023"}
        description={"Bachelor's Degree in Computer Systems Engineering"}
      />
      <TimelineEntry
        place={"Uapgo"}
        dateInitial={"February 2023"}
        dateFinal={"today"}
        description={"Software Development"}
      />
      <TimelineEntry
        place={"IPCA"}
        dateInitial={"October 2024"}
        dateFinal={"July 2026"}
        description={"Master's Degree in Computer Systems Engineering"}
      />
    </ol>
  );
}

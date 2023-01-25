import * as React from "react";

import ComponentHeader from "./ComponentHeader";
import NutritionAnalysis from "./AnalysisComponents/NutritionAnalysis";
import MovementAnalysis from "./AnalysisComponents/MovementAnalysis";
import ActivityAnalysis from "./AnalysisComponents/ActivityAnalysis";
const FeaturesComponent = () => {
  return (
    <>
      <ComponentHeader value={"Features"} />
      <MovementAnalysis />

      <NutritionAnalysis />

      <ActivityAnalysis />
    </>
  );
};
export default FeaturesComponent;

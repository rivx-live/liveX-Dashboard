"use client";

import React from "react";
import OnboardingLayout from "src/app/onboarding/OnboardingLayout";
import Niches from "src/app/onboarding/components/Niches";
import { useOnboardingData } from "src/app/onboarding/hooks/useOnboardingData";

export default function Step3NichesPage() {
  const { updateData } = useOnboardingData();

  const handleNext = (niches: string[]) => {
    updateData("primaryNiche", niches[0]);
    updateData("secondaryNiches", niches.slice(1));
    window.location.href = "/onboarding/step4-agency-affiliation";
  };

  return (
    <OnboardingLayout currentStep={3} totalSteps={5}>
      <Niches onSelect={handleNext} />
    </OnboardingLayout>
  );
}

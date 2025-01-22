"use client";

import React from "react";
import OnboardingLayout from "src/app/onboarding/OnboardingLayout";
import NextButton from "src/app/onboarding/components/NextButton";
import { useOnboardingData } from "src/app/onboarding/hooks/useOnboardingData";

export default function Step1WelcomePage() {
  const { updateData } = useOnboardingData();

  const handleNext = () => {
    updateData("onboardingComplete", false);
    window.location.href = "/onboarding/Step2Persona";
  };

  return (
    <OnboardingLayout currentStep={1} totalSteps={5}>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Welcome to LiveX!</h1>
        <p className="text-lg text-muted mb-6">
          Let&apos;s build your profile and unlock amazing opportunities.
        </p>
        <NextButton onClick={handleNext} />
      </div>
    </OnboardingLayout>
  );
}

"use client";

import React, { useState } from "react";
import OnboardingLayout from "src/app/onboarding/OnboardingLayout";
import NextButton from "src/app/onboarding/components/NextButton";
import CustomTextField from "@/app/components/CustomTextField/page";
import { useOnboardingData } from "src/app/onboarding/hooks/useOnboardingData";

export default function Step4AgencyAffiliationPage() {
  const { updateData } = useOnboardingData();
  const [agencyName, setAgencyName] = useState("");

  const handleNext = () => {
    updateData("agencyName", agencyName);
    window.location.href = "/onboarding/step5-review";
  };

  return (
    <OnboardingLayout currentStep={4} totalSteps={5}>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Are You Signed to an Agency?
        </h1>
        <p className="text-lg text-muted mb-6">
          Let us know if you are working with an agency or managing independently.
        </p>
        <CustomTextField
          value={agencyName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAgencyName(e.target.value)
          }
          placeholder="Enter agency name (if applicable)"
          variant="outlined"
          fullWidth
          sx={{ mb: 6 }}
        />
        <NextButton onClick={handleNext} />
      </div>
    </OnboardingLayout>
  );
}

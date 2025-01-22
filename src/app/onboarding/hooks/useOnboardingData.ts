import { useContext } from "react";
import { OnboardingContext } from "@/app/onboarding/OnboardingContext";

// Custom hook for onboarding data
export const useOnboardingData = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error(
      "useOnboardingData must be used within an OnboardingProvider"
    );
  }
  return context;
};

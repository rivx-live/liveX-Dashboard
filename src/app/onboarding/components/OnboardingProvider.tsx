"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface OnboardingData {
  persona: string | null;
  primaryNiche: string | null;
  secondaryNiches: string[];
  agencyName: string | null;
  onboardingComplete: boolean;
}

interface OnboardingContextType {
  data: OnboardingData;
  updateData: (key: keyof OnboardingData, value: any) => void;
  resetData: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export const OnboardingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<OnboardingData>({
    persona: null,
    primaryNiche: null,
    secondaryNiches: [],
    agencyName: null,
    onboardingComplete: false,
  });

  const updateData = (key: keyof OnboardingData, value: any) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const resetData = () => {
    setData({
      persona: null,
      primaryNiche: null,
      secondaryNiches: [],
      agencyName: null,
      onboardingComplete: false,
    });
  };

  return (
    <OnboardingContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingData = (): OnboardingContextType => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error(
      "useOnboardingData must be used within an OnboardingProvider"
    );
  }
  return context;
};

"use client";

import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
  };

  const goToOnboarding = () => {
    goTo("/dashboards/influencer/onboarding/step1-welcome");
  };

  const goToDashboard = () => {
    goTo("/dashboards/influencer");
  };

  return { goTo, goToOnboarding, goToDashboard };
};

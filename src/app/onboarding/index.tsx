"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/onboarding/step1-welcome");
  }, [router]);

  return null;
}

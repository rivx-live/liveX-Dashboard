"use client";

import React from "react";
import WelcomeBanner from "src/app/dashboards/influencer/components/welcome-banner/WelcomeBanner";
import InteractiveChecklist from "src/app/dashboards/influencer/components/InteractiveChecklist";
import Announcements from "src/app/dashboards/influencer/components/announcements";
import QuickLinks from "src/app/dashboards/influencer/components/QuickLinks";

export default function InfluencerDashboard() {
  const tasks = [
    { id: 1, title: "Complete your profile", completed: false },
    { id: 2, title: "Take the Persona Quiz", completed: true },
    { id: 3, title: "Sign up for a live session", completed: false },
  ];

  const progress = (tasks.filter((t) => t.completed).length / tasks.length) * 100;

  const announcements = [
    {
      id: 1,
      title: "Golden Ticket Offer",
      content:
        "Be among the Top 100 to secure a Golden Ticket for exclusive perks!",
    },
    {
      id: 2,
      title: "New LiveX Sessions Available",
      content: "Sign up for upcoming live sessions and grow your audience.",
    },
    {
      id: 3,
      title: "Update Your Profile",
      content: "Complete your profile to unlock premium opportunities.",
    },
  ];

  return (
    <div className="dashboard-container bg-gradient-dark text-platinum min-h-screen p-4 lg:p-6 flex flex-col gap-6">
      {/* Welcome Banner */}
      <div className="flex justify-center items-center w-full">
        <WelcomeBanner name="Alex" />
      </div>

      {/* Interactive Checklist */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 rounded-xl bg-gradient-light p-6 shadow-elevated">
          <InteractiveChecklist tasks={tasks} progress={progress} />
        </div>

        {/* Announcements Section */}
        <div className="flex-1 rounded-xl bg-gradient-light p-6 shadow-elevated">
          <Announcements announcements={announcements} />
        </div>
      </div>

      {/* Quick Links */}
      <div className="rounded-xl bg-gradient-light p-6 shadow-elevated">
        <QuickLinks />
      </div>
    </div>
  );
}

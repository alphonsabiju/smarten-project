import { useState } from "react";
import { Button } from "@/components/ui/button";

interface VillainSelectorProps {
  onContinue: (villain: "ebola" | "covid" | "hiv") => void;
}

export default function VillainSelector({ onContinue }: VillainSelectorProps) {
  const [selectedVillain, setSelectedVillain] = useState<
    "ebola" | "covid" | "hiv" | null
  >(null);

  const villains = [
    {
      id: "ebola",
      name: "Ebola",
      icon: "🐍",
      description: "Ebola virus",
    },
    {
      id: "covid",
      name: "COVID",
      icon: "🦠",
      description: "SARS-CoV-2",
    },
    {
      id: "hiv",
      name: "HIV",
      icon: "🦾",
      description: "HIV virus",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-blue-600 font-bold text-sm">
          UB
        </div>
        <span className="text-xl font-semibold">CSE SMARTen</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Welcome Section */}
          <div className="mb-12 text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧬</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome to SMARTen
                </h1>
                <p className="text-sm text-gray-500">
                  Select Your Villain and Create a Test
                </p>
              </div>
            </div>
          </div>

          {/* Villain Selection */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Select Your Villain
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Choose a virus to proceed.
            </p>

            {/* Villain Cards */}
            <div className="space-y-4 mb-8">
              {villains.map((villain) => (
                <button
                  key={villain.id}
                  onClick={() =>
                    setSelectedVillain(villain.id as "ebola" | "covid" | "hiv")
                  }
                  className={`w-full p-6 border-2 rounded-lg transition-all ${
                    selectedVillain === villain.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-6xl">{villain.icon}</span>
                    <span className="font-semibold text-gray-900">
                      {villain.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <Button
            onClick={() => {
              if (selectedVillain) {
                onContinue(selectedVillain);
              }
            }}
            disabled={!selectedVillain}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface TestFormProps {
  selectedVillain: "ebola" | "covid" | "hiv";
  testName: string;
  dnaFragment: string;
  onTestNameChange: (value: string) => void;
  onDnaFragmentChange: (value: string) => void;
  onReset: () => void;
  onBack: () => void;
}

const villainInfo: Record<
  string,
  { name: string; icon: string; description: string }
> = {
  ebola: {
    name: "Ebola",
    icon: "🐍",
    description: "Edit the DNA fragment and name your test.",
  },
  covid: {
    name: "COVID",
    icon: "🦠",
    description: "Edit the DNA fragment and name your test.",
  },
  hiv: {
    name: "HIV",
    icon: "🦾",
    description: "Edit the DNA fragment and name your test.",
  },
};

const defaultFragments: Record<string, string> = {
  ebola: "aatcgagtcaa...",
  covid: "aatcgagtcaa...",
  hiv: "aatcgagtcaa...",
};

export default function TestForm({
  selectedVillain,
  testName,
  dnaFragment,
  onTestNameChange,
  onDnaFragmentChange,
  onReset,
  onBack,
}: TestFormProps) {
  const villain = villainInfo[selectedVillain];
  const defaultFragment = defaultFragments[selectedVillain];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-blue-600 font-bold text-sm">
          UB
        </div>
        <span className="text-xl font-semibold">CSE SMARTen</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-medium"
          >
            <ChevronLeft size={20} />
            UB CSE SMARTen
          </button>

          {/* Title */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{villain.icon}</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Selected Villain: {villain.name}
                </h1>
                <p className="text-sm text-gray-500">
                  {villain.description}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Test Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Name Your Test
              </label>
              <input
                type="text"
                value={testName}
                onChange={(e) => onTestNameChange(e.target.value)}
                placeholder="Enter test name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Default: {villain.name} Test
              </p>
            </div>

            {/* DNA Fragment Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                DNA Fragment (80 characters)
              </label>
              <textarea
                value={dnaFragment}
                onChange={(e) => onDnaFragmentChange(e.target.value.slice(0, 80))}
                placeholder={defaultFragment}
                maxLength={80}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-mono text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                You can edit this fragment as needed.
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-4">
              <Button
                onClick={onReset}
                variant="outline"
                className="w-full py-3 text-base font-semibold border-2 border-gray-300 hover:bg-gray-100"
              >
                Reset
              </Button>
              <Button
                variant="outline"
                className="w-full py-3 text-base font-semibold border-2 border-gray-300 hover:bg-gray-100"
              >
                Save Draft
              </Button>
              <Button className="w-full bg-black hover:bg-gray-900 text-white py-3 text-base font-semibold rounded-lg">
                Run Test
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

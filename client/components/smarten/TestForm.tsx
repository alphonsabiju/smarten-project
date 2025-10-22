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
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-medium text-sm"
          >
            <ChevronLeft size={18} />
            UB CSE SMARTen
          </button>

          {/* Title */}
          <div className="mb-8">
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{villain.icon}</span>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">
                  Selected Villain: {villain.name}
                </h1>
                <p className="text-sm text-gray-500 mt-1">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
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
                onChange={(e) =>
                  onDnaFragmentChange(e.target.value.slice(0, 80))
                }
                placeholder={defaultFragment}
                maxLength={80}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-mono text-sm resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                You can edit this fragment as needed.
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={onReset}
                className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg text-gray-900 font-semibold hover:bg-gray-50 transition-all text-sm"
              >
                Reset
              </button>
              <button className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg text-gray-900 font-semibold hover:bg-gray-50 transition-all text-sm">
                Save Draft
              </button>
              <button className="w-full bg-black hover:bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold transition-all text-sm">
                Run Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

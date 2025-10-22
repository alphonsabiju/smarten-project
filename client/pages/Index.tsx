import { useState } from "react";
import VillainSelector from "@/components/smarten/VillainSelector";
import TestForm from "@/components/smarten/TestForm";

type Villain = "ebola" | "covid" | "hiv" | null;

export default function Index() {
  const [selectedVillain, setSelectedVillain] = useState<Villain>(null);
  const [testName, setTestName] = useState("");
  const [dnaFragment, setDnaFragment] = useState("");

  const handleContinue = (villain: Villain) => {
    setSelectedVillain(villain);
  };

  const handleBack = () => {
    setSelectedVillain(null);
    setTestName("");
    setDnaFragment("");
  };

  const handleReset = () => {
    setTestName("");
    setDnaFragment("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedVillain === null ? (
        <VillainSelector onContinue={handleContinue} />
      ) : (
        <TestForm
          selectedVillain={selectedVillain}
          testName={testName}
          dnaFragment={dnaFragment}
          onTestNameChange={setTestName}
          onDnaFragmentChange={setDnaFragment}
          onReset={handleReset}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

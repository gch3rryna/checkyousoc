import { useState } from "react";

export const AttackSimulation = () => {
  const stages = ["button", "computer", "siem", "operator"];
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStart = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => setCurrentStageIndex(1), 1000);
    setTimeout(() => setCurrentStageIndex(2), 6000);
    setTimeout(() => setCurrentStageIndex(3), 10500);

    setTimeout(() => setIsAnimating(false), 15500);
  };

  const renderStage = () => {
    const stage = stages[currentStageIndex];
    switch (stage) {
      case "button":
        return <Button onClick={handleStart} isAnimating={isAnimating} />;
      case "computer":
        return <ComputerScreen />;
      case "siem":
        return <SIEMSystem />;
      case "operator":
        return <Operator />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {renderStage()}
      </div>
    </div>
  );
};

const Button = ({
  onClick,
  isAnimating,
}: {
  onClick: () => void;
  isAnimating: boolean;
}) => (
  <div className={isAnimating ? "animate-button-left" : ""}>
    <button
      onClick={onClick}
      className={`py-4 px-8 rounded-full transform transition-all duration-1000 ${
        isAnimating ? "bg-red-500" : "bg-blue-500"
      } hover:animate-shake`}
    >
      Trigger Attack
    </button>
  </div>
);

const ComputerScreen = () => (
  <div className="bg-red-500 text-white font-mono p-6 rounded-lg shadow-lg animate-carousel">
    <p>
      System breach detected...
      <br />
      Unauthorized access...
      <br />
      Initiating response...
    </p>
  </div>
);

const SIEMSystem = () => (
  <div className="text-white text-center animate-carousel">
    <h2 className="text-3xl font-bold">SIEM</h2>
    <div className="bg-gray-800 mt-4 p-4 rounded shadow-lg">
      <p className="font-mono text-sm">
        [ALERT] System breach detected.
        <br />
        [INFO] Logs sent to SIEM...
      </p>
    </div>
  </div>
);

const Operator = () => (
  <div className="text-center text-white animate-final-stage relative">
    <div className="bg-blue-800 rounded-full w-20 h-20 mx-auto shadow-neon"></div>
    <p className="text-3xl mt-4 absolute inset-0 flex items-center justify-center font-bold">
      DETECTED
    </p>
  </div>
);

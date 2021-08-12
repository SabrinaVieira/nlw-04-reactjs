import { createContext, ReactNode, useState } from "react";
import challanges from "../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  //   children: ReactNode;
  level: number;
  currentExpirience: number;
  challengesCompleted: number;
  actitiveChallenge: Challenge;
  expirienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProvidersProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProviders({ children }: ChallengesProvidersProps) {
  const [level, setLevel] = useState(1);
  const [currentExpirience, setCurrentExpirience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  const [actitiveChallenge, setActitiveChallenge] = useState(null);

  const expirienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challanges.length);
    const challenge = challanges[randomChallengeIndex];

    setActitiveChallenge(challenge);
  }

  function resetChallenge() {
    return setActitiveChallenge(null);
  }

  function completeChallenge() {
    if (!actitiveChallenge) {
      return;
    }
    const { amount } = actitiveChallenge;
    let a = null;
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExpirience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        actitiveChallenge,
        resetChallenge,
        expirienceToNextLevel,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

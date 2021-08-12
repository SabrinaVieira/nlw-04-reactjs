import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { actitiveChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {actitiveChallenge ? (
        <div className={styles.challengetActive}>
          <header>Ganhe {actitiveChallenge.amount}XP</header>
          <main>
            <img
              src={`icons/${actitiveChallenge.type}.svg`}
              alt="Novo Desafio"
            />
            <strong>Novo desafio</strong>
            <p>{actitiveChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengetFailButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengetSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}

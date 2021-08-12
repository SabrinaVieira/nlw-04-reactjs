import { useState } from "react";
import { ChallengesProviders } from "../contexts/ChallengesContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProviders>
      <Component {...pageProps} />
    </ChallengesProviders>
  );
}

export default MyApp;

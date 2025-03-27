import { useEffect, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen/";
import { PageContent } from "../components/PageContent/";
import s from "./App.module.scss";
import { useOrientation } from "../hooks/useOrientation.jsx";
import { RotateToPortrait } from "../components/RotateToPortrait/index.jsx";
import { useIsMobile } from "../hooks/useIsMobile.jsx";

function App() {
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    const timer1 = setTimeout(() => setLoading(2), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const isPortrait = useOrientation()
  const isMobile = useIsMobile()
  console.log('isMobile', isMobile);
  console.log('isPortrait', isPortrait);
  return (
    <>
      {/* <RotateToPortrait /> */}
      {loading === 1 && <LoadingScreen />}
      {loading === 2 && <PageContent />}
    </>
  );
}

export default App;

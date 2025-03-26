import { useEffect, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen/";
import { PageContent } from "../components/PageContent/";
import s from "./App.module.scss";

function App() {
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    const timer1 = setTimeout(() => setLoading(2), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {loading === 1 && <LoadingScreen />}
      {loading === 2 && <PageContent />}
    </>
  );
}

export default App;

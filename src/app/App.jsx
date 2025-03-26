import { useEffect, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen/";
import { PageContent } from "../components/PageContent/";
import s from "./App.module.scss";

function App() {
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    const timer1 = setTimeout(() => setLoading(2), 2000);
    const timer2 = setTimeout(() => setLoading(3), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {loading === 1 && <LoadingScreen />}
      {loading === 2 && <div className={s.App}>
        <span className={s.loader}></span>
      </div>}
      {loading === 3 && <PageContent />}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen/";
import { PageContent } from "../components/PageContent/";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <PageContent />
      )}
    </>
  );
}

export default App;

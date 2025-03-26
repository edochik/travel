import { LoadingScreen } from "../components/LoadingScreen/index.jsx";
import { PageContent } from "../components/PageContent/index.jsx";

function App() {
  const loading = true;
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

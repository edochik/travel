import { LoadingScreen } from "../components/LoadingScreen/";
import { PageContent } from "../components/PageContent/";

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

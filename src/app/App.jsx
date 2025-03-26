import classNames from "classnames";
import { BookLink } from "../components/BookLink/";
import { LoadingScreen } from "../components/LoadingScreen/index.jsx";
import { Location } from "../components/Location/";
import { Route } from "../components/Route/";
import { Tools } from "../components/Tools/";
import s from "./App.module.scss";

function App() {
  const loading = false;
  return (
    <div
      className={classNames({
        [s.App]: true,
        [s.loading]: loading,
      })}
    >
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Location />
          <Route />
          <Tools />
          <BookLink />
        </>
      )}
    </div>
  );
}

export default App;

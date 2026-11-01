import { useEffect, useState } from "react";
import "./App.css";
import { JobRunsScreen } from "./screens/JobRunsScreen";
import { JsonScreen } from "./screens/JsonScreen";
import { NewTargetScreen } from "./screens/NewTargetScreen";
import { ReadingsScreen } from "./screens/ReadingsScreen";
import { TargetsScreen } from "./screens/TargetsScreen";

function screenFor(path) {
  switch (path) {
    case "/":
      return <TargetsScreen />;
    case "/new-target":
      return <NewTargetScreen />;
    case "/readings":
      return <ReadingsScreen />;
    case "/job-runs":
      return <JobRunsScreen />;
    case "/json":
      return <JsonScreen />;
    default:
      return <h1>Page not found.</h1>;
  }
}
function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    function handleAddressChange() {
      // TODO(you): update the state to the address the browser now shows
    }
    window.addEventListener("popstate", handleAddressChange);
    return () => window.removeEventListener("popstate", handleAddressChange);
  }, []);

  return screenFor(path);
}

export default App;

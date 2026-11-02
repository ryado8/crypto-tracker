import { useEffect, useState } from "react";
import "./App.css";
import { JobRunsScreen } from "./screens/JobRunsScreen";
import { JsonScreen } from "./screens/JsonScreen";
import { NewTargetScreen } from "./screens/NewTargetScreen";
import { ReadingsScreen } from "./screens/ReadingsScreen";
import { TargetsScreen } from "./screens/TargetsScreen";
import { TopBar } from "./components/TopBar";

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
// Which nav item counts as current for a path. New target isn't in the nav,
// so Targets (where you came from) stays marked there.
function navPathFor(path) {
  if (path === "/new-target") {
    return "/";
  }
  return path;
}

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    function handleAddressChange() {
      setPath(window.location.pathname);
    }
    window.addEventListener("popstate", handleAddressChange);
    return () => window.removeEventListener("popstate", handleAddressChange);
  }, []);

  return (
    <>
      <TopBar currentPath={navPathFor(path)} />
      {screenFor(path)}
    </>
  );
}

export default App;

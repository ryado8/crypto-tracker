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
      return <RedirectHome />;
  }
}

// For an address with no screen: swaps it for "/" without adding a history
// entry, so Back still works, then tells App the address changed.
function RedirectHome() {
  useEffect(() => {
    history.replaceState(null, "", "/");
    window.dispatchEvent(new Event("popstate"));
  }, []);
  return null;
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
    // Catch up on any address change made before App was listening.
    handleAddressChange();
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

// The top bar every screen shares: brand, navigation and job status.
import { followLink } from "../router";

function NavLink({ to, label, currentPath }) {
  return (
    <a
      href={to}
      aria-current={to === currentPath ? "page" : undefined}
      onClick={followLink}
    >
      {label}
    </a>
  );
}

export function TopBar({ currentPath }) {
  return (
    <header className="topbar">
      <div>Tripwire</div>
      <nav className="nav">
        <NavLink to="/" label="Targets" currentPath={currentPath} />
        <NavLink to="/readings" label="Readings" currentPath={currentPath} />
        <NavLink to="/job-runs" label="Job runs" currentPath={currentPath} />
        <NavLink to="/json" label="JSON" currentPath={currentPath} />
      </nav>
      <div className="placeholder">Job status</div>
    </header>
  );
}

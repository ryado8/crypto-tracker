import { navigate } from "../router";

export function TargetsScreen() {
  function handleNewTarget() {
    navigate("/new-target");
  }

  return (
    <>
      <div className="layout">
        <main className="targets">
          <h1>Targets</h1>
          <div className="placeholder">Waiting and hit summary</div>
          <button onClick={handleNewTarget}>New Target</button>
          <div className="placeholder">All / waiting / hit filter</div>
          <div className="placeholder">Closest to hitting sort note</div>

          <section>
            <h2>Waiting</h2>
            <div className="placeholder">
              Target row: coin, direction, target
            </div>
            <div className="placeholder">Gap rail: percent to go</div>
            <div className="placeholder">Status chip</div>
          </section>

          <section>
            <h2>Hit</h2>
            <div className="placeholder">
              Hit time and price, crossed amount
            </div>
          </section>

          <div className="placeholder">Job strip: last and next run</div>
        </main>
        <aside className="panel">
          <h2>Selected target</h2>
          <div className="placeholder">Latest price and gap to target</div>
          <div className="placeholder">
            Readings chart with dashed target line
          </div>
          <div className="placeholder">Recent readings list</div>
          <div className="placeholder">All coin readings button</div>
        </aside>
      </div>

      <div className="placeholder">Target hit toast</div>
      <div className="placeholder">Target saved toast</div>
    </>
  );
}

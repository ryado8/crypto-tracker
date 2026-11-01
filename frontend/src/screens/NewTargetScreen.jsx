import { navigate } from "../router";

export function NewTargetScreen() {
  function handleBack() {
    // TODO(you): go back to the Targets screen
  }

  return (
    <>
      <h1>New Target</h1>
      <button onClick={handleBack}>Back to Targets</button>
      <div className="placeholder">Page title and next-check note</div>
      <div className="placeholder">
        New target form card
        <div className="placeholder">
          Coin picker with latest 2:50pm reading per coin
        </div>
        <div className="placeholder">Above or below toggle</div>
        <div className="placeholder">
          Target price input with current price hint
        </div>
        <div className="placeholder">Wrong-side price error</div>
        <div className="placeholder">
          Live gap preview with rail and percent to go (empty prompt when blank)
        </div>
        <div className="placeholder">Cancel action</div>
        <div className="placeholder">
          Save target button, disabled until price is valid
        </div>
      </div>
    </>
  );
}

export function navigate(to) {
  history.pushState(null, "", to);
  window.dispatchEvent(new Event("popstate"));
}

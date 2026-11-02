export function navigate(to) {
  history.pushState(null, "", to);
  window.dispatchEvent(new Event("popstate"));
}

// Click handler for in-app links: stops the browser's full page load
// and moves to the link's own href with navigate() instead.
export function followLink(event) {
  event.preventDefault();
  navigate(event.currentTarget.getAttribute("href"));
}

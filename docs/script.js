function showTab(tabId, event) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => (tab.style.display = "none"));

  document.getElementById(tabId).style.display = "block";

  document
    .querySelectorAll(".tab")
    .forEach((button) => button.classList.remove("active"));

  // ✅ Esta línea es segura y consistente
  event.currentTarget.classList.add("active");
}

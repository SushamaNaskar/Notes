(()=>{document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("changeColorButton");

  if (!btn) {
    console.error("Button not found");
    return;
  }

  btn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          document.body.style.backgroundColor = "lightblue";
           const elements = document.querySelectorAll(
    "body, div, section, main, article, header, footer, h2"
  );

  elements.forEach(el => {
    el.style.color = "green";
  });
        },

      });
    });
  });
})})();

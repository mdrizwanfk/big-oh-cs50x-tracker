chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      alert("Big Oh - A Timer/Stopwatch for CS50");
    },
  });
});

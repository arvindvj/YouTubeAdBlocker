chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const url = details.url;
      if (
        url.includes("doubleclick.net") ||
        url.includes("googleadservices.com") ||
        url.includes("googlesyndication.com") ||
        url.includes("ads.youtube.com")
      ) {
        return { cancel: true };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  
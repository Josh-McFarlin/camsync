import * as browser from "webextension-polyfill";

/* eslint-disable no-undef */
console.log("Background.js file loaded");

/* const defaultUninstallURL = () => {
  return process.env.NODE_ENV === 'production'
    ? 'https://wwww.github.com/kryptokinght'
    : '';
}; */

browser.runtime.onMessage.addListener((message) => {
  console.log(message);

  switch (message.type) {
    case "newCall": {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, message, (response) => {});
      });

      break;
    }
    default: {
      console.log(message);
    }
  }
});

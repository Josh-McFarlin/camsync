/* eslint-disable no-undef */
console.log("Background.js file loaded");

/* const defaultUninstallURL = () => {
  return process.env.NODE_ENV === 'production'
    ? 'https://wwww.github.com/kryptokinght'
    : '';
}; */

browser.runtime.onMessage.addListener((message) => {
  console.log(message);
});

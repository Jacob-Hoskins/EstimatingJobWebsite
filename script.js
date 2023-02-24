const price_card = document
  .getElementById("price-card")
  .addEventListener("click", displayPriceInfo);

const wiki_card = document
  .getElementById("wiki-card")
  .addEventListener("click", displayWikiInfo);

const install_card = document
  .getElementById("install-card")
  .addEventListener("click", displayInstallInfo);

const use_card = document
  .getElementById("use-card")
  .addEventListener("click", displayUseInfo);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const div = document.getElementById("info-section");

function displayPriceInfo() {
  const price_text =
    "This software aims to be one of the best estimating tools in the construction market. And till this software is up to par it will stay free of charge!";
  const price_header = "Pricing";

  const p_tag = document.createElement("p");
  const h_tag = document.createElement("h2");

  removeAllChildNodes(div);

  p_tag.innerText = price_text;
  h_tag.innerText = price_header;

  div.appendChild(h_tag);
  div.appendChild(p_tag);
}

function displayInstallInfo() {
  const h_tag = "How To Install";
  const h_stepOne_tag = "Step 1";
  const h_stepTwo_tag = "Step 2";
  const h_stepThree_tag = "Step 3";

  const p_stepOne =
    "Installation is easy and only takes a couple steps. The first step is to click the download button at the top of the page and download the app itself.";

  const p_stepTwo =
    "Sense this app uses google chrome to search the web, you'll need to make sure you have chrome downloaded and check the version of chrome.";

  const p_stepThree =
    "The next step is to go to chromedrivers website.\nhttps://chromedriver.chromium.org/downloads\nMake sure you download the version that matches the version of chrome you have.";

  const p_lastMessage =
    "That's it! Now all you have to do is start searching and doing your client's estimates";

  removeAllChildNodes(div);

  const img_one = document.createElement("img");
  const img_two = document.createElement("img");
  img_one.src = "./images/chrome version.png";
  img_one.src = "./images/chromedriver download.png";

  div.appendChild(img_one);
}

function displayWikiInfo() {
  const h_text = "What's it do";
  const p_text_one =
    "When you estimate a job and figure out all the material you need, all you have to do is type in the name of the item. Let it search and then adjust for quantity. It's as simple as that";
  const p_text_two =
    "Thanks to automation tools this application can search the web for you and return the price of whatever item you're searching.";
  const p_text_three =
    "Once you've gotten the price of everything, just click save and it'll save your estimate so you can print it out and give it to the client";

  removeAllChildNodes(div);
  const p_tag_one = document.createElement("p");
  const p_tag_two = document.createElement("p");
  const p_tag_three = document.createElement("p");

  const h_tag = document.createElement("h2");

  h_tag.innerText = h_text;
  p_tag_one.innerText = p_text_one;
  p_tag_two.innerText = p_text_two;
  p_tag_three.innerText = p_text_three;

  div.appendChild(h_tag);
  div.appendChild(p_tag_one);
  div.appendChild(p_tag_two);
  div.appendChild(p_tag_three);
}

function displayUseInfo() {}

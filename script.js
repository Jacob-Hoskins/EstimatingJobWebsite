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
  document.getElementById("price-card").style.backgroundColor = "#023844";
  document.getElementById("wiki-card").style.backgroundColor = "#077F99";
  document.getElementById("install-card").style.backgroundColor = "#077F99";
  document.getElementById("use-card").style.backgroundColor = "#077F99";

  const price_text =
    "This software aims to be one of the best estimating tools in the construction market. And till this software is up to par it will stay free of charge!";
  const price_header = "Pricing";

  const p_tag = document.createElement("p");
  const h_tag = document.createElement("h2");

  removeAllChildNodes(div);

  p_tag.innerText = price_text;
  h_tag.innerText = price_header;

  h_tag.classList.add("my-header");
  p_tag.classList.add("price-text");

  div.appendChild(h_tag);
  div.appendChild(p_tag);
}

function displayInstallInfo() {
  document.getElementById("price-card").style.backgroundColor = "#077F99";
  document.getElementById("wiki-card").style.backgroundColor = "#077F99";
  document.getElementById("install-card").style.backgroundColor = "#023844";
  document.getElementById("use-card").style.backgroundColor = "#077F99";

  const h_text = "How To Install";
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
    "That's it! Now all you have to do is start searching and doing your client's estimates **WINDOWS ONLY";

  removeAllChildNodes(div);

  const img_one = document.createElement("img");
  const img_two = document.createElement("img");
  img_one.src = "./images/chrome version.png";
  img_two.src = "./images/chromedriver download.png";

  const h_tag = document.createElement("h2");
  const p_tag_one = document.createElement("p");
  const p_tag_two = document.createElement("p");
  const p_tag_three = document.createElement("p");
  const p_tag_last = document.createElement("p");

  h_tag.innerText = h_text;
  p_tag_one.innerText = p_stepOne;
  p_tag_two.innerText = p_stepTwo;
  p_tag_three.innerText = p_stepThree;
  p_tag_last.innerText = p_lastMessage;

  h_tag.classList.add("my-header");
  p_tag_one.classList.add("price-text");
  p_tag_two.classList.add("price-text");
  p_tag_three.classList.add("price-text");
  p_tag_last.classList.add("price-text");
  img_one.classList.add("img");
  img_two.classList.add("img");

  div.appendChild(h_tag);
  div.appendChild(p_tag_one);
  div.appendChild(p_tag_two);
  div.appendChild(img_one);
  div.appendChild(p_tag_three);
  div.appendChild(img_two);
  div.appendChild(p_tag_last);
}

function displayWikiInfo() {
  document.getElementById("price-card").style.backgroundColor = "#077F99";
  document.getElementById("wiki-card").style.backgroundColor = "#023844";
  document.getElementById("install-card").style.backgroundColor = "#077F99";
  document.getElementById("use-card").style.backgroundColor = "#077F99";

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

  h_tag.classList.add("my-header");
  p_tag_one.classList.add("price-text");
  p_tag_two.classList.add("price-text");
  p_tag_three.classList.add("price-text");

  div.appendChild(h_tag);
  div.appendChild(p_tag_one);
  div.appendChild(p_tag_two);
  div.appendChild(p_tag_three);
}

function displayUseInfo() {
  document.getElementById("price-card").style.backgroundColor = "#077F99";
  document.getElementById("wiki-card").style.backgroundColor = "#077F99";
  document.getElementById("install-card").style.backgroundColor = "#077F99";
  document.getElementById("use-card").style.backgroundColor = "#023844";

  const header = "How To Use";
  const text_one =
    "For the time being there is a few steps to follow when you're using this app.";
  const step_one_h = "Step 1:";
  const step_one_p =
    "Type in the item you want. then click add. Repeat this step until all material you need for the job is added to the list";
  const step_one_p_two =
    "Click add, this might take a minute or two to get the complete total of everything depending on the amount of items you're searching";
  const step_two_h = "Step 2:";
  const step_two_p =
    "Once you get the total price for everything and everything has a price, you can add quantity. All you do is click the item you want to add a units too, enter the number of units in the quantity box, and click the quantity button";
  const step_two_p_two =
    "Doing this will still give you the price of a singal price of a item, along with the total price with the units of the item.";

  const step_three_h = "Step 3:";
  const step_three_p =
    "Click file, save, and youre done! Now you can print this out and email to your client and give them the most accurate itemized estimate while doing the least amount of work!";

  const h_tag_one = document.createElement("h2");
  const h_tag_two = document.createElement("h2");
  const h_tag_three = document.createElement("h2");
  const h_tag_four = document.createElement("h2");
  const p_tag_one = document.createElement("p");
  const p_tag_two = document.createElement("p");
  const p_tag_three = document.createElement("p");
  const p_tag_four = document.createElement("p");
  const p_tag_five = document.createElement("p");
  const p_tag_six = document.createElement("p");

  const img_one = document.createElement("img");
  const img_two = document.createElement("img");
  const img_three = document.createElement("img");
  img_one.src = "./images/estimating-tool-how-to-add-items.png";
  img_two.src = "./images/estimating-tool-quantity.png";
  img_three.src = "./images/save-img.png";

  h_tag_one.innerText = header;
  p_tag_one.innerText = text_one;
  h_tag_two.innerText = step_one_h;
  p_tag_two.innerText = step_one_p;
  p_tag_three.innerText = step_one_p_two;
  h_tag_three.innerText = step_two_h;
  p_tag_four.innerText = step_two_p;
  p_tag_five.innerText = step_two_p_two;
  h_tag_four.innerText = step_three_h;
  p_tag_six.innerText = step_three_p;

  h_tag_one.classList.add("my-header");
  h_tag_two.classList.add("my-header");
  h_tag_three.classList.add("my-header");
  h_tag_four.classList.add("my-header");
  p_tag_one.classList.add("price-text");
  p_tag_two.classList.add("price-text");
  p_tag_three.classList.add("price-text");
  p_tag_four.classList.add("price-text");
  p_tag_five.classList.add("price-text");
  p_tag_six.classList.add("price-text");
  img_one.classList.add("img");
  img_two.classList.add("img");
  img_three.classList.add("img");

  removeAllChildNodes(div);

  div.appendChild(h_tag_one);
  div.appendChild(p_tag_one);
  div.appendChild(h_tag_two);
  div.appendChild(p_tag_two);
  div.appendChild(img_one);
  div.appendChild(p_tag_three);
  div.appendChild(h_tag_three);
  div.appendChild(p_tag_four);
  div.appendChild(img_two);
  div.appendChild(p_tag_five);
  div.appendChild(h_tag_four);
  div.appendChild(p_tag_six);
  div.appendChild(img_three);
}

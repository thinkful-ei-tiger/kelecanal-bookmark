//Import JQuery module
import $ from "jquery";

import "normalize.css";
import "./index.css";

import api from "./api";
import func from "./func";
import store from "./store";

const main = function () {
  api
    .retrieveBookmark()
    .then((res) => res.json)
    .then((res) => {
      res.forEach((element) => store.addBookmark(element));
      func.render();
      func.bindEventListeners();
    });
};

$(main);

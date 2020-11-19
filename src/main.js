//Import JQuery module
import $ from "jquery";
import api from "./api";
import "normalize.css";
import "./index.css";
import func from "./func";
import store from "./store";

//wireframe
//render page
//create bookmark
//get bookmark when clicked
//render bookmarks collapsed on initial page opening
//be able to delete bookmarks
//throw errors when required fields are not input
//be able to filter bookmarks by star rating drop down menu

//use fetch for ajax calls and jquery for dom manipulation
//use namespacing (min global variables, mods in sep files, group functions)
//no dom manipulations in event handlers, change state/re-render component
//semantic html
//mobile first design, responsive
//a11y best practices

const main = function () {
    api
        .retrieveBookmark()
        .then((res) => res.json)
        .then((res) => {
            res.forEach((element => store.addBookmark(element));
            func.render();
        });
    func.bindEventListeners();
}

$(main);

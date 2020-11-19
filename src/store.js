import func from "./func";

let bookmarks = [];
let adding = false;
let error = null;
let filter = false;
let filteredBookmarks = [];

const addBookmark = function (obj) {
  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i]) {
      bookmarks[i].expand = false;
    }
  }
  //add bmark to store
  bookmarks.push(obj);
  //be able to toggle adding t/f
  this.adding = false;
};

const expandBookmark = function () {};

const deleteBookmark = function () {};

const filterBookmarks = function () {};

const setFilter = function () {};

const err = function () {};

export default {
  store,
};

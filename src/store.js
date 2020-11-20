let bookmarks = [];
let adding = false;
let error = null;
let filter = false;
let filteredBookmarks = [];

const addBookmark = function (obj) {
  //create for loop
  for (let i = 0; i < bookmarks.length; i++) {
    //when looping thru bookmarks array, if value of bookmar
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
  bookmarks,
  adding,
  error,
  filter,
  filteredBookmarks,
  addBookmark,
  expandBookmark,
  deleteBookmark,
  filterBookmarks,
  setFilter,
  err,
};

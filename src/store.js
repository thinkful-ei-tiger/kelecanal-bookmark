let bookmarks = [];
let adding = false;
let error = null;
let filter = false;
let filteredBookmarks = [];

const addBookmark = function (obj) {
  //create for loop
  for (let i = 0; i < bookmarks.length; i++) {
    //when looping thru bookmarks array, if value of bookmark
    if (bookmarks[i]) {
      bookmarks[i].expand = false;
    }
  }
  //add bmark to store
  bookmarks.push(obj);
  //be able to toggle adding t/f
  this.adding = false;
};

const expandBookmark = (obj) => {
  //return val that passes
  let exBm = bookmarks.find((bookmark) => bookmark.obj === obj);
  if (exBm.expand) {
    exBm.expand = false;
  } else {
    exBm.expand = true;
  }
};

const deleteBookmark = (obj) => {
  this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.obj !== obj);
};

const filterBookmarks = (strValue) => {
  this.filter = true;
  this.bookmarks.forEach((bookmark) => {
    if (bookmark.rating >= strValue) {
      this.filteredBookmarks.push(bookmark);
    }
  });
};

const setAdding = (inp) => {
  this.adding = inp;
};

const setFilter = function (inp) {
  this.filter = inp;
};

const setErr = (inp) => {
  this.error = inp;
};

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
  setAdding,
  setFilter,
  setErr,
};

import $ from "jquery";
import api from ".api";
import store from "./store";


import $ from "jquery";
import "normalize.css";
import "./style.css";
import api from "./api";
import store from "./store";

//things to do
//render page with inactive bookmarks, add new bookmark button, view bookmarks button
//PAGE RENDER INITIAL: (TITLE, ADD/VIEW BUTTONS (fields appear when clicked), MOST RECENTLY SUBMITTED BOOKMARKS)

function renderBookmarkApp(event) {
  //render title (in html), add & view buttons, and recently submitted bookmarks
  event.preventDefault();
  return ` <div class="renderedPage">
    <h2>Bookmarks</h2>
    <section class="buttons">
        <div class="newButton">
            <button id="new">+ New Bookmark</button>
            <button id="view">View Bookmarks</button>
        </div>
    </section>
    <section class="collapsedBookmarks">
        <div class="bookmarkInitial">
            <p>something</p>
        </div>
        <div class="bookmarkInitial">
            <p>something</p>
        </div>
        <div class="bookmarkInitial">
            <p>something</p>
        </div>
    </section>
    </div>`;
}

//render
//title, add button, view button, bookmarks recently added

function handleAddBookmark() {
  //function to add new bookmarks to the list
  $(".newbookmark").on("click", "#", function (evt) {
    evt.preventDefault();
    renderBookmarkApp();
  });
}

function handleBookmarkToggle() {
  //function to toggle the open and closing of bookmark add button/views button
  $(".newButton")
    .on("click", () => {
      $("#bookmark-form").show();
    })
    .on("click", () => {
      $("#bookmark-form").hide();
    });
  $();
}

function handleNewBookmarkSubmit() {
  $("#newUserBookmark").on("submit", function (event) {
    event.preventDefault;
    const newBookmarkName = $(".userBookmark").val();
  });
}

let newButton = function buttonActive() {
  $(".newButtons").on("click", () => {
    console.log("newThingsComingSoon");
  });
};

function bookmarkFunctionality() {
  renderBookmarkApp(),
    addBookmarkToList(),
    handleBookmarkToggle(),
    handleNewBookmarkSubmit();
}
//submit new bookmark (text box, submit button, star rating) mouseover toggle
//NEW BOOKMARK PAGE: (URL FORM, SUBMIT BUTTON, DESCRIPTION FIELD, STAR RATING (DROP DOWN??))
// handleNewBookmarkSubmit (new bookmark submission)
// addBookmark (add bookmark to list of bookmarks)
//
//when submitting bookmark, fields may not be blank for star rating OR description
//may add "Favorite has been added" page
//view bookmarks (search bar, enter, filter by dropdown), mouseover toggle
//VIEW BOOKMARKS PAGE: (SEARCH BAR, SUBMIT BUTTON, DROPDOWN FILTER BY RATING, SUBMIT)
//view bookmarks (no filtering) MUST CONTAIN: URL (may be link), star rating, and detailed description
//DETAILED BOOKMARKS (ON CLICK) PAGE: (URL LINK, STAR RATING, DETAILED DESCRIPTION)

export default {
  thing,
};


//templates


//render page
function initialPage() {
  return $('#main').html(
    ``);
}

//generate new bookmark submit form
function generateForm () {

};

//
function addNewBookmark () {

};

function 


export default {
  initialPage,
};

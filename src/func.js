import $ from "jquery";

import "normalize.css";
import "./style.css";

import api from "./api";
import store from "./store";

/* 

TEMPLATES

*/

//int view of page
const initialBookmarkPage = () => {
  return $("#main").html(`
    <header>
      <h1>Store Your Bookmarks!</h1>
    </header>
    <div class="first-container">
      <div class="bookmark-container">
         <section class="bookmark-controls">
             <button class="add-button jq-add-button">+ Add New!</button>
             <div class="filter-container">
                 <label for="star-rating-filter">Filter by:</label>
                 <select name="star-filter" id="filter">
                     <option value="5">5 Stars</option>
                     <option value="4">4 Stars</option>
                     <option value="3">3 Stars</option>
                     <option value="2">2 Stars</option>
                     <option value="1">1 Star</option>
                 </select>
             </div>
         </section>
         <section class="bm-container jq-bm-container">
         </section>
      </div>
    </div>
    `);
};

//form that shows bookmarks are toggled
const handleBookmarkToggleForm = () => {
  return `
        <div class ="add-bookmark-container">
            <form class="add-bookmark-form">
                <fieldset role="group">
                <legend class ="form"><h3>Add Bookmark</h3></legend>
                <label class ="form" for="title">Bookmark Title:</label>
                <input type="text" id="title" name="title" required>
                <div class="hide-bookmark-display">
                    <label for="rating-title" class="form">Rating</label><br>
                    <label for="star-rating" class="hide-bookmark-display" id="rating5">5*</label>
                    <input type="radio" name="rating" id="rating5"  value="5">
                    <label for="star-rating" class="hide-bookmark-display" id="rating4">4*</label>
                    <input type="radio" name="rating" id="rating4"  value="4">
                    <label for="star-rating" class="hide-bookmark-display" id="rating3">3*</label>
                    <input type="radio" name="rating" id="rating3"  value="3">
                    <label for="star-rating" class="hide-bookmark-display" id="rating2">2*</label>
                    <input type="radio" name="rating" id="rating2"  value="2">
                    <label for="star-rating" class="hide-bookmark-display" id="rating1">1*</label>
                    <input type="radio" name="rating" id="rating1"  value="1">
                </div>
                <label for="description" class="form">Description:<br>
                <textarea name="description" id="" cols="70" rows="5"></textarea>
                </label><br>
                <label for="URL" class="form">URL:<br></label>
                <input type="text" name="URL" id="url-input" required>
                <div class="required-message">
                    <p class="url-requirements">URLs <i>must</i> contain HTTP/HTTPS</p>
                </div>
                <div class="action-buttons">
                    <input type="submit" value="Submit">
                    <input type="button" value="Cancel" class="jq-cancel-bm">
                </div>
            </fieldset>
            </form>        
        </div>
   `;
};

//bookmark view when rendered
const bookmarkHTML = (bookmark) => {
  return `
    <div class = "collapsed-bm-container">
      <button class = "expnd-bm-button jq-bm-expand">See Details</button>
      <h3 class = "bm-title jq-bm-title">${bookmark.title}</h3>
      <div class = "jq-bm-rating">${starRating}</div>
      <div class = "expnd-bm-container jq-ex-bm-container">
        <p>Description: ${bookmark.description}</p>
      </div>
      <div class = "extLink-delete">
        <a class = "jq-bm-url" href=${bookmark.url} target="_blank">Click to visit</a>
        <button class = "jq-bm-delete">Delete</button>
      </div>
    </div>
  `;
};

/* 

EVENT LISTENERS

*/

//add new bookmark to list
const handleAddNewBookmark = function () {
  $("#main").on("click", ".jq-add-button", () => {
    if (!store.adding) {
      store.adding = true;
    }
    render();
  });
};

//submitting new bookmarks
const handleNewBookmarkSubmit = function () {
  $(".add-bookmark-form").on("submit", (event) => {
    event.preventDefault();
    $(".jq-bm-container").toggleClass("hidden");
    api.saveBookmark().then(() => {
      $(".first-container").toggleClass("hidden");
      store.adding = false;
      render();
    });
  });
};

//deleting bookmarks
const handleBookmarkDelete = function () {
  $(".jq-bm-delete").on("click", (event) => {
    let idDelete = $(event.currentTarget)
      .closest(".jq-bm-container")
      .attr("idDelete");
    api.deleteBookmark(idDelete).then(() => {
      store.deleteBookmark(idDelete);
      render();
    });
  });
};

/* 

BOOKMARK DISPLAY

*/

const displaySorted = function (marks) {
  let list = marks;
  let html = "";
  for (let i = 0; i < list.length; i++) {
    html += `
    <div id = ${list[i].id} class "bmList">
    
    `;
  }
};

/* 

RATING

*/

/* 

RENDERING

*/

function render() {
  //if adding bookmark, render add bookmark page

  if (store.adding) {
    $(".bookmark-controls").toggleClass(".hide-bookmark-display");
    $(".jq-bookmark-container").html(handleBookmarkToggleForm());

    //if there are previous bookmarks, render those
  } else {
    initialBookmarkPage();
    bookmarkHTML();
    $("#filter").prop("selectedIndex", 5);
  }

  if (store.bookmarks.length > 0) {
    $(".add-bookmark-container").addClass("hidden");
  } else {
    $(".add-bookmark-container").removeClass("hidden");
  }
}

/* 

BINDING EVENT LISTENERS

*/

const bindEventListeners = function () {
  initialBookmarkPage();
  handleBookmarkToggleForm();
  handleAddNewBookmark();
};

/* 

EXPORT DEFAULT

*/

export default {
  bindEventListeners,
};

//things to do
//render page with inactive bookmarks, add new bookmark button, view bookmarks button
//PAGE RENDER INITIAL: (TITLE, ADD/VIEW BUTTONS (fields appear when clicked), MOST RECENTLY SUBMITTED BOOKMARKS)
// function renderBookmarkApp(event) {
//   //render title (in html), add & view buttons, and recently submitted bookmarks
//   event.preventDefault();
//   return ` <div class="renderedPage">
//     <h2>Bookmarks</h2>
//     <section class="buttons">
//         <div class="newButton">
//             <button id="new">+ New Bookmark</button>
//             <button id="view">View Bookmarks</button>
//         </div>
//     </section>
//     <section class="collapsedBookmarks">
//         <div class="bookmarkInitial">
//             <p>something</p>
//         </div>
//         <div class="bookmarkInitial">
//             <p>something</p>
//         </div>
//         <div class="bookmarkInitial">
//             <p>something</p>
//         </div>
//     </section>
//     </div>`;
// }
// //render
// //title, add button, view button, bookmarks recently added

// function handleAddBookmark() {
//   //function to add new bookmarks to the list
//   $(".newbookmark").on("click", "#", function (evt) {
//     evt.preventDefault();
//     renderBookmarkApp();
//   });
// }

// function handleBookmarkToggle() {
//   //function to toggle the open and closing of bookmark add button/views button
//   $(".newButton")
//     .on("click", () => {
//       $("#bookmark-form").show();
//     })
//     .on("click", () => {
//       $("#bookmark-form").hide();
//     });
//   $();
// }

// function handleNewBookmarkSubmit() {
//   $("#newUserBookmark").on("submit", function (event) {
//     event.preventDefault;
//     const newBookmarkName = $(".userBookmark").val();
//   });
// }

// let newButton = function buttonActive() {
//   $(".newButtons").on("click", () => {
//     console.log("newThingsComingSoon");
//   });
// };

// const bindEventListeners = function () {
//   renderBookmarkApp();
//   addBookmarkToList();
//   handleBookmarkToggle();
//   handleNewBookmarkSubmit();
// };
// //submit new bookmark (text box, submit button, star rating) mouseover toggle
// //NEW BOOKMARK PAGE: (URL FORM, SUBMIT BUTTON, DESCRIPTION FIELD, STAR RATING (DROP DOWN??))
// // handleNewBookmarkSubmit (new bookmark submission)
// // addBookmark (add bookmark to list of bookmarks)
// //
// //when submitting bookmark, fields may not be blank for star rating OR description
// //may add "Favorite has been added" page
// //view bookmarks (search bar, enter, filter by dropdown), mouseover toggle
// //VIEW BOOKMARKS PAGE: (SEARCH BAR, SUBMIT BUTTON, DROPDOWN FILTER BY RATING, SUBMIT)
// //view bookmarks (no filtering) MUST CONTAIN: URL (may be link), star rating, and detailed description
// //DETAILED BOOKMARKS (ON CLICK) PAGE: (URL LINK, STAR RATING, DETAILED DESCRIPTION)

// export default {
//   thing,
// };

import store from "./store";

let BASE_URL = "https://thinkful-list-api.herokuapp.com/kelecanal";

const fetchAPI = function (...objs) {
  return fetch(...objs)
    .then((res) => res.json())
    .then((getJSON) => (store.STORE.bookmarks = getJSON));
};

//GET (retrieve bookmark)

const retrieveBookmark = function () {
  return fetch(`${BASE_URL} + "/bookmarks"`);
};

//DELETE (delete bookmark)

const deleteBookmark = function (obj) {
  const option = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  };
  return fetchAPI(BASE_URL + "/bookmarks" + obj, option);
};

//POST (save bookmark)

const saveBookmark = function (newInput) {
  const newBmark = newInput;
  console.log(newBmark);
  const option = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: newBmark,
  };
  console.log(option);
  return fetchAPI(BASE_URL + "/bookmarks", option);
};

//export

export default {
  retrieveBookmark,
  deleteBookmark,
  saveBookmark,
};

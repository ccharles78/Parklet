import axios from "axios";
//import { stringify } from "querystring";

export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  // deleteGuest: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveGuest: function(guestData) {
    return axios.post("/api/routes/guest", guestData);
  },
  saveOwner: function(ownerData) {
    return axios.post("/api/routes/mgmt", ownerData);
  }
};

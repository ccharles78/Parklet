import axios from "axios";
//import { stringify } from "querystring";

export default {
  
  saveGuest: function(guestData) {
    console.log(guestData)
    return axios.post("/api/routes/guest", guestData);
  
  },
  saveOwner: function(ownerData) {
    return axios.post("/api/routes/mgmt", ownerData);
  },
  getOwners: function(userId){
    return axios.get("/api/routes/owner/" + userId);
  },

  homeLogin: function(userLogin){
    return axios.post("/api/routes/login/", userLogin);
  }
};

import axios from "axios";
//import { stringify } from "querystring";

export default {
  
  saveGuest: function(guestData) {
    console.log(guestData)
    return axios.post("/api/routes/guest", guestData);

  },

  triggerSMS: function(triggerSMS) {
   return axios.post("/api/routes/triggerSMS", triggerSMS);
  },

  saveOwner: function(ownerData) {
    return axios.post("/api/routes/mgmt", ownerData);
  },
  getOwners: function(userId){
    return axios.get("/api/routes/owner/" + userId);
  },

  getAllGuests: function(){
    return axios.get("/api/routes/guest/" );
  },

  updateGuest: function(guestData){
    return axios.put("/api/routes/guest/" + guestData.id, guestData );
  },

  homeLogin: function(userLogin){
    return axios.post("/api/routes/login/", userLogin);
  }
};

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorServices } from './doctorServices';

$(document).ready(function() {
  $("#getDoctors").click(function() {
    const userInput = $("#userInput").val();
    $("#userInput").val("");
    $(".showDoctors").empty();
    $(".showErrors").empty();

    (async () => {
      let doctorsIndex = new DoctorServices();
      const response = await doctorsIndex.getDoctors(userInput);

      if (!response.data) {
        $(".showErrors").append("<ul>" + response.status + "<br>" + response.statusText + "</ul>");
      } else if (response.data.length == 0) {
        $(".showErrors").append("Sorry! There are no matches that fit your search.");
      } else {
        getElements(response);
      }
      
  })();
    
    function getElements(response) {
      for (let i = 0; i < response.data.length; i++) {
        $(".showDoctors").append(response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "<br>");
        $(".showDoctors").append(response.data[i].practices[0].visit_address.street + "<br>");
        $(".showDoctors").append(response.data[i].practices[0].visit_address.city + ", " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip + "<br>");
        $(".showDoctors").append(response.data[i].practices[0].phones[0].number + "<br>");
        if (response.data[i].practices[0].website === undefined) {
          $(".showDoctors").append("There is no website available." + "<br>");
        } else {
          $(".showDoctors").append(response.data[i].practices[0].website + "<br>");
        }
        if (response.data[i].practices[0].accepts_new_patients === false) {
          $(".showDoctors").append("This doctor is not currently accepting new patients." + "<br>");
        } else {
          $(".showDoctors").append("This doctor is currently accepting new patients." + "<br>");
        }
      }
    }
  });
});
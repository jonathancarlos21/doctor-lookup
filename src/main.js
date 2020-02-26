import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorServices } from './doctorServices';

$(document).ready(function() {
  $('#getDoctors').click(function() {
    const userInput = $('#userInput').val();
    $('#userInput').val("");
    $(".showDoctors").empty();

    (async () => {
      let doctorsIndex = new DoctorServices();
      const response = await doctorsIndex.getDoctors(userInput);
      getElements(response);
    })();
    
    function getElements(response) {
      for (let i = 0; i < response.data.length; i++) {
        $('.showDoctors').append("<ul>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</ul>");
        $('.showDoctors').append("<ul>" + response.data[i].practices[0].visit_address.street + "</ul>");
        $('.showDoctors').append("<ul>" + response.data[i].practices[0].visit_address.city + ", " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip + "</ul>");
        $('.showDoctors').append("<ul>" + response.data[i].practices[0].website + "</ul>");
        $('.showDoctors').append("<ul>" + response.data[i].practices[0].accepts_new_patients + "</ul>");
      }
    }
  });
});
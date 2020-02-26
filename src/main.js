import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorServices } from './doctorServices';

$(document).ready(function() {
  $('#doctorByName').click(function() {
    const name = $('#name').val();
    $('#name').val("");

    (async () => {
      let doctorsIndex = new DoctorServices();
      const response = await doctorsIndex.getDoctorsByName(name);
      getElements(response);
      console.log(response);
    })();
    
    function getElements(response) {
      for (let i = 0; i < response.data.length; i++) {
        $('.showDoctors').append("<li>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</li>");
        $('.showDoctors').append("<li>" + response.data[i].practices[0].visit_address.street + "</li>");
        $('.showDoctors').append("<li>" + response.data[i].practices[0].visit_address.city + "</li>");
        $('.showDoctors').append("<li>" + response.data[i].practices[0].visit_address.state + "</li>");
        $('.showDoctors').append("<li>" + response.data[i].practices[0].visit_address.zip + "</li>");
        $('.showDoctors').append("<li>" + response.data[i].practices[0].website + "</li>");
        $('.showDoctors').append("<li>" + response.data[i].practices[0].accepts_new_patients + "</li>");
      }
    }
  });
});
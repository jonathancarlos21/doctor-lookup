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
    })();
    
    function getElements(response) {
      for (let i = 0; i < response.length; i++) {
        if (response) {
          $('.showDoctors').append(response.data[i].practices[i].name);
        } else {
          $('.showErrors').text(`There was an error handling your request.`);
        }
      }
    }
  });
});
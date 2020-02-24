import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorsIndex } from './../src/logic';

$(document).ready(function() {
  $('#doctorName').click(function() {
    const name = $('#name').val();
    $('#name').val("");

    (async () => {
      let doctorsIndex = new DoctorsIndex();
      const response = await doctorsIndex.getDoctorsByName(name);
      getElements(response);
    })();
    
    const getElements = function(response) {
      if (response) {
        $('.showDoctors').text("");
      } else {
        $('.showErrors').text(`There was an error handling your request.`);
      }
    } 
  });
});
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorService } from './../src/logic';

$(document).ready(function() {
  $('#doctorByName').click(function() {
    const name = $('#name').val();
    $('#name').val("");

    (async () => {
      let doctorsIndex = new DoctorService();
      const response = await doctorsIndex.getDoctorsByName(name);
      getElements(response);
    })();
    
    function getElements(response) {
      if (response) {
        $('.showDoctors').text("");
      } else {
        $('.showErrors').text(`There was an error handling your request.`);
      }
    }
  });
});
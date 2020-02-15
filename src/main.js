import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorsIndex } from './logic';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    getDoctors();
    
    const getElements = function(response) {
      if (response) {
        $('.name').text("");
      } else {
        $('.name').text(`There was an error handling your request.`);
      }
    } 
  });
});
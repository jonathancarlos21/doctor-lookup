export class DoctorServices {
  async getDoctors(userInput) {   
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=or-portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;

      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = response;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}
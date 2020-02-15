export class DoctorsIndex {
  async getDoctors() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      getElements(jsonifiedResponse);
    } catch {
      getElements(false);
    }
  }
}
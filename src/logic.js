export class DoctorsIndex {
  async asyncApiCall() {
    try {
      let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[API-KEY-GOES-HERE]`);
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
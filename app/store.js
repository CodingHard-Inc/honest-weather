import getWeatherInfo from './weatherApi'

// Test for storage availability
function isStorageAvailable(type) {
  try {
    var storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return false;
  }
}


export default function storeWeatherInfo(city, handler) {
  if (isStorageAvailable('localStorage')) {

      getWeatherInfo(city)
        .then(function (res) {

          localStorage.temp = res.data.main.temp;
          localStorage.descID = res.data.weather[0].id;
          handler();

        }.bind(this))
        .catch(function (res) {
          console.log(res);
        });
  }
  else {
    console.log('localStorage is NOT available!')
  }
}
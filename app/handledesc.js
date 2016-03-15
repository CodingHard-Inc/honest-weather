


export default function handleDesc (desc) {
  switch(true) {
    // Group 2xx: Thunderstorm
    case (desc>=200 && desc<=299):
      return "If you are going out, make sure that you have your fuckin' umbrella."
      break;

    // Group 3xx: Drizzle
    case (desc>=300 && desc<=399):
      return "If you are going out, make sure that you have your fuckin' umbrella."
      break;

    // Group 5xx: Rain
    case (desc>=500 && desc<=599):
      return "Make sure that you have your fuckin' umbrella."
      break;

    // Group 6xx: Snow
    case (desc>=600 && desc<=699):
      return "It's fuckin' snowing outside."
      break;

    // Group 7xx: Atmosphere
    case (desc>=700 && desc<=799):
      return "It might rain shit today."
      break;

    // Group 800: Clear
    case 800:
      return "The sky is fuckin' clear."
      break;


    // Group 80x: Clouds
    case (desc>=801 && desc<=899):
      return "There are few fuckin' clouds."
      break;
    // case 802:
    //   return "There are few fuckin' clouds."
    //   break;
    // case 803:
    //   return "Yeah! It's a fuckin' cloudy day."
    //   break;
    // case 804:
    //   return "Yeah! It's a fuckin' cloudy day."
    //   break;

    // Group 90x: Extreme
    case (desc>=900 && desc<=909):
      return "Hey! There could be a fuckin' tornado outside!"
      break;

    // Group 9xx: Additional
    case (desc>=910 && desc<=999):
      return "If you are going out, make sure that you have your fuckin' umbrella."
      break;

    default:
      return desc
  }
}
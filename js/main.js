
var city;
var country;
var tempKelv
var tempCel;
var tempFahr;
var unitTempKelv = "K";
var unitTempCel = "C";
var unitTempFahr ="F";
var weather;
var weatherCode;
var weatherIconCode;
var weatherIconUrl;
var unixTimestamp;
var myDate;
var windspeed;
var windspeedUnit = "meter/sec";
var iconAndImageCode;
var backgroundAttribute = "style";
var counter = 0;
var latitude;
var longitude;

generateWeather();

function generateWeather() {
  /*
  $.ajax({
    url: 'https://ip-api.com/json',
    type: 'GET',
    data: {},
    dataType: 'json',
    async: false,
    success: function (ipData) {
      latitude = ipData.lat;
      longitude = ipData.lon;
    }
    
  });
  */
    $.ajax({
    url: 'http://freegeoip.net/json/',
    type: 'GET',
    data: {},
    dataType: 'json',
    async: false,
    success: function (ipData) {
      latitude = ipData.latitude;
      longitude = ipData.longitude;
    }
    
  });
  $.ajax({
    //url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=1701667&APPID=33b180cdb0c4881d20a3b846ae576bfb',
    url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=33b180cdb0c4881d20a3b846ae576bfb',
    type: 'GET',
    data: {},
    dataType: 'json',
    async: false,
    success: function (data) {
      city = data.name;
      country = data.sys.country;
      tempKelv = data.main.temp.toFixed(2);
      tempCel = (tempKelv - 273.15).toFixed(2);
      tempFahr = (((tempKelv * 9)/5)-459.67).toFixed(2);
      weather = data.weather[0].description;
      weatherCode = data.weather[0].id;
      weatherIconCode = data.weather[0].icon;      
      weatherIconUrl = "https://openweathermap.org/img/w/" + weatherIconCode + ".png";
      windspeed = data.wind.speed;
      unixTimestamp = data.dt;
      myDate = new Date( unixTimestamp *1000);
      date = myDate.toGMTString();       
    },
    
    //error: function(err) {alert(err);},
  
  });
  
  
}






//insert visibility code for weather image  

function setWeatherImage(iconAndImageCode) {

  switch(iconAndImageCode) {
    case 200: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //thunderstorm with light rain
      break;
    case 201: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //thunderstorm with rain
      break;
    case 202: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //thunderstorm with heavy rain
      break;
    case 210: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //light thunderstorm
      break;
    case 211: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //thunderstorm
      break;
    case 212: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //heavy thunderstorm
      break;
    case 221: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //ragged thunderstorm
      break;
    case 230: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //thunderstorm with light drizzle
      break;
    case 231: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //thunderstorm with drizzle
      break;
    case 232: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //thunderstorm with heavy drizzle
      break;
    case 300: var image  = "background-image:url(https://66.media.tumblr.com/b99f582a41ea8d21527672e2201d37bc/tumblr_o42pyjDNN91vo6n8lo3_500.gif)"; //light intensity drizzle
      break;
    case 301: var image  = "background-image:url(https://66.media.tumblr.com/b99f582a41ea8d21527672e2201d37bc/tumblr_o42pyjDNN91vo6n8lo3_500.gif)"; //drizzle
      break;
    case 302: var image  = "background-image:url(https://66.media.tumblr.com/b99f582a41ea8d21527672e2201d37bc/tumblr_o42pyjDNN91vo6n8lo3_500.gif)"; //heavy intensity drizzle
      break;
    case 310: var image  = "background-image:url(https://66.media.tumblr.com/b99f582a41ea8d21527672e2201d37bc/tumblr_o42pyjDNN91vo6n8lo3_500.gif)"; //light intensity drizzle rain
      break;
    case 311: var image  = "background-image:url(https://66.media.tumblr.com/b99f582a41ea8d21527672e2201d37bc/tumblr_o42pyjDNN91vo6n8lo3_500.gif)"; //drizzle rain
      break;
    case 312: var image  = "background-image:url(https://66.media.tumblr.com/b99f582a41ea8d21527672e2201d37bc/tumblr_o42pyjDNN91vo6n8lo3_500.gif)"; //heavy intensity drizzle rain
      break;
    case 313: var image  = "background-image:url(https://66.media.tumblr.com/b99f582a41ea8d21527672e2201d37bc/tumblr_o42pyjDNN91vo6n8lo3_500.gif)"; //shower rain and drizzle
      break;
    case 314: var image  = "background-image:url(https://66.media.tumblr.com/b99f582a41ea8d21527672e2201d37bc/tumblr_o42pyjDNN91vo6n8lo3_500.gif)"; //heavy shower rain and drizzle
      break;
    case 321: var image  = "background-image:url(https://66.media.tumblr.com/b99f582a41ea8d21527672e2201d37bc/tumblr_o42pyjDNN91vo6n8lo3_500.gif)"; //shower drizzle
      break;
    case 500: var image  = "background-image:url(https://66.media.tumblr.com/5a49546c22cc7dc5eeda64f34c8ee16b/tumblr_o42pyjDNN91vo6n8lo2_500.gif)"; //light rain
      break;
    case 501: var image  = "background-image:url(https://66.media.tumblr.com/5a49546c22cc7dc5eeda64f34c8ee16b/tumblr_o42pyjDNN91vo6n8lo2_500.gif)"; //moderate rain
      break;
    case 502: var image  = "background-image:url(https://66.media.tumblr.com/5a49546c22cc7dc5eeda64f34c8ee16b/tumblr_o42pyjDNN91vo6n8lo2_500.gif)"; //heavy intensity rain
      break;
    case 503: var image  = "background-image:url(https://66.media.tumblr.com/5a49546c22cc7dc5eeda64f34c8ee16b/tumblr_o42pyjDNN91vo6n8lo2_500.gif)"; //very heavy rain
      break;
    case 504: var image  = "background-image:url(https://66.media.tumblr.com/5a49546c22cc7dc5eeda64f34c8ee16b/tumblr_o42pyjDNN91vo6n8lo2_500.gif)"; //extreme rain
      break;
    case 511: var image  = "background-image:url(https://66.media.tumblr.com/5a49546c22cc7dc5eeda64f34c8ee16b/tumblr_o42pyjDNN91vo6n8lo2_500.gif)"; //freezing rain
      break;
    case 520: var image  = "background-image:url(https://66.media.tumblr.com/5a49546c22cc7dc5eeda64f34c8ee16b/tumblr_o42pyjDNN91vo6n8lo2_500.gif)"; //light intensity shower rain
      break;
    case 521: var image  = "background-image:url(https://66.media.tumblr.com/5a49546c22cc7dc5eeda64f34c8ee16b/tumblr_o42pyjDNN91vo6n8lo2_500.gif)"; //shower rain
      break;
    case 522: var image  = "background-image:url(https://66.media.tumblr.com/5a49546c22cc7dc5eeda64f34c8ee16b/tumblr_o42pyjDNN91vo6n8lo2_500.gif)"; //heavy intensity shower rain
      break;
    case 531: var image  = "background-image:url(https://66.media.tumblr.com/5a49546c22cc7dc5eeda64f34c8ee16b/tumblr_o42pyjDNN91vo6n8lo2_500.gif)"; //ragged shower rain
      break;
    case 600: var image  = "background-image:url(http://data.whicdn.com/images/208794542/large.gif)"; //light snow
      break;
    case 601: var image  = "background-image:url(http://data.whicdn.com/images/208794542/large.gif)"; //snow
      break;
    case 602: var image  = "background-image:url(http://data.whicdn.com/images/208794542/large.gif)"; //heavy snow
      break;
    case 611: var image  = "background-image:url(http://data.whicdn.com/images/208794542/large.gif)"; //sleet
      break;
    case 612: var image  = "background-image:url(http://data.whicdn.com/images/208794542/large.gif)"; //shower sleet
      break;
    case 615: var image  = "background-image:url(http://data.whicdn.com/images/208794542/large.gif)"; //light rain and snow
      break;
    case 616: var image  = "background-image:url(http://data.whicdn.com/images/208794542/large.gif)"; //rain and snow
      break;
    case 620: var image  = "background-image:url(http://data.whicdn.com/images/208794542/large.gif)"; //light shower snow
      break;
    case 621: var image  = "background-image:url(http://data.whicdn.com/images/208794542/large.gif)"; //shower snow
      break;
    case 622: var image  = "background-image:url(http://data.whicdn.com/images/208794542/large.gif)"; //heavy shower snow
      break;
    case 701: var image  = "background-image:url(https://67.media.tumblr.com/e8057b7dd2af18fb25ec24016e7bd4b6/tumblr_nijo7fZHBz1qg20oho1_500.gif)"; //mist
      break;
    case 711: var image  = "background-image:url(http://a57.foxnews.com/images.foxnews.com/content/fox-news/us/2016/02/12/smoke-from-massive-warehouse-fire-detected-by-weather-radar/_jcr_content/par/featured-media/media-0.img.jpg/876/493/1455310794084.jpg?ve=1&tl=1)"; //smoke
      break;
    case 721: var image  = "background-image:url(http://p1.img.cctvpic.com/program/china24/20131023/images/1382489769520_1382489769520_r.jpg)"; //haze
      break;
    case 731: var image  = "background-image:url(https://s-media-cache-ak0.pinimg.com/564x/ae/db/64/aedb64786888b2a126d3b7a38509696b.jpg)"; //sand, dust whirls
      break;
    case 741: var image  = "background-image:url(https://67.media.tumblr.com/e8057b7dd2af18fb25ec24016e7bd4b6/tumblr_nijo7fZHBz1qg20oho1_500.gif)"; //fog
      break;
    case 751: var image  = "background-image:url(https://s-media-cache-ak0.pinimg.com/564x/ae/db/64/aedb64786888b2a126d3b7a38509696b.jpg)"; //sand
      break;
    case 761: var image  = "background-image:url(http://www.thenational.ae/storyimage/AB/20150402/ARTICLE/150409846/EP/1/1/EP-150409846.jpg&MaxW=640&imageVersion=default&NCS_modified=20150402211228)"; //dust
      break;
    case 762: var image  = "background-image:url(https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1440/DCTM_Penguin_UK_DK_AL455711_xenewk.jpg)"; //volcanic ash
      break;
    case 771: var image  = "background-image:url(http://cdn.sailingscuttlebutt.com/wp-content/uploads/2015/08/2015-08-12_14-41-14.jpg)"; //squalls
      break;
    case 781: var image  = "background-image:url(http://f.tqn.com/y/weather/1/S/e/P/-/-/Tornado-Campo-CO.jpg)"; //tornado
      break;
    case 800: var image  = "background-image:url(https://news.bbcimg.co.uk/media/images/66231000/jpg/_66231244_brianbarnes.jpg)"; //clear sky
      break;
    case 801: var image  = "background-image:url(http://74211.com/wallpaper/picture_big/Blue-and-Cloudy-Sky-Yet-Sunlight-is-Breaking-in-You-Can-Expect-Fine-Weather-Soon-Enough-HD-Natural-Scenery-Wallpaper.jpg)"; //few clouds
      break;
    case 802: var image  = "background-image:url(https://mgtvwjhl.files.wordpress.com/2015/06/scot3.jpg)"; //scattered clouds
      break;
    case 803: var image  = "background-image:url(https://mgtvwjhl.files.wordpress.com/2015/06/scot3.jpg)"; //broken clouds
      break;
    case 804: var image  = "background-image:url(https://mgtvwjhl.files.wordpress.com/2015/06/scot3.jpg)"; //overcast clouds
      break;
    case 900: var image  = "background-image:url(http://f.tqn.com/y/weather/1/S/e/P/-/-/Tornado-Campo-CO.jpg)"; //tornado
      break;
    case 901: var image  = "background-image:url(https://i.ytimg.com/vi/GsTKqcTdpVs/maxresdefault.jpg)"; //tropical storm
      break;
    case 902: var image  = "background-image:url(http://www.retailsolutionsadvisors.com/wp-content/uploads/2015/10/Hurricane-Tropical-Storm-GENERIC-Graphic-HD-4-8-09-19129234.jpg)"; //hurricane
      break;
    case 903: var image  = "background-image:url(http://home.trainingpeaks.com/TrainingPeaks/media/Images/Resource%20Articles/Creative%20Finished/2-ways-to-layer-for-the-cold-02041-700x394.jpg?width=700&height=394&ext=.jpg)"; //cold
      break;
    case 904: var image  = "background-image:url(http://crazy-frankenstein.com/free-wallpapers-files/seasonal-wallpapers/hot-summer-wallpapers/hot-summer-weather-wallpapers-1920x1200.jpg)"; //hot
      break;
    case 905: var image  = "background-image:url(https://i.telegraph.co.uk/multimedia/archive/03388/Windy_2_3388356b.jpg)"; //windy
      break;
    case 906: var image  = "background-image:url(https://i.ytimg.com/vi/Im5uizDM6B0/maxresdefault.jpg)"; //hail
      break;
    case 951: var image  = "background-image:url(http://www.cubatiempo.com/images/photos-lrg/Clouds-sun-noon-east-Matanzas-city-Cuba-20160711-hd.jpg)"; //calm
      break;
    case 952: var image  = "background-image:url(http://il9.picdn.net/shutterstock/videos/2056994/thumb/1.jpg)"; //light breeze
      break;
    case 953: var image  = "background-image:url(http://il9.picdn.net/shutterstock/videos/2056994/thumb/1.jpg)"; //gentle breeze
      break;
    case 954: var image  = "background-image:url(http://il9.picdn.net/shutterstock/videos/2056994/thumb/1.jpg)"; //moderate breeze
      break;
    case 955: var image  = "background-image:url(http://il9.picdn.net/shutterstock/videos/2056994/thumb/1.jpg)"; //fresh breeze
      break;     
    case 956: var image  = "background-image:url(http://cronullanews.sydney/wp-content/uploads/2015/10/Heading-around-Cronulla-Point-into-the-strong-breeze.-1024x576.jpg)"; //strong breeze
      break;
    case 957: var image  = "background-image:url(http://cronullanews.sydney/wp-content/uploads/2015/10/Heading-around-Cronulla-Point-into-the-strong-breeze.-1024x576.jpg)"; //high wind, near gale
      break;
    case 958: var image  = "background-image:url(https://i2.mirror.co.uk/incoming/article4034126.ece/ALTERNATES/s1023/Millennium-Bridge.jpg)"; //gale
      break;
    case 959: var image  = "background-image:url(https://i.telegraph.co.uk/multimedia/archive/02756/weather-woman-spla_2756411k.jpg)"; //severe gale
      break;     
     case 960: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //storm
      break;
    case 961: var image  = "background-image:url(https://67.media.tumblr.com/e99d71571f25b150106d8ff84d0404f7/tumblr_o2h1sb1L1s1t2ostso1_500.gif)"; //violent storm
      break;
    case 962: var image  = "background-image:url(http://www.retailsolutionsadvisors.com/wp-content/uploads/2015/10/Hurricane-Tropical-Storm-GENERIC-Graphic-HD-4-8-09-19129234.jpg)"; //hurricane
      break;
    default: var image  =  "background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg)";
      break;
  }

  return image;
} 

      //change temp upon click
      $("#button").click(function() {
        var iconPlusTempArray = [
          "<span class='tempText'>" + tempCel + " " + unitTempCel + "</span>",
          "<span class='tempText'>" + tempFahr + " " + unitTempFahr + "</span>",
          "<span class='tempText'>" + tempKelv + " " + unitTempKelv + "</span>"
        ];
        
        var unitTempArray = [
          unitTempFahr = "Fahrenheit",
          unitTempKelv = "Kelvin",
          unitTempCel = "Celsius"
        ];

        counter++;

        $(".main h3").html("<img src='" + weatherIconUrl  + "'>" + iconPlusTempArray[counter]);
        $(".btn").text(unitTempArray[counter]);
        $(".tempText").fadeOut(500); 
        $(".tempText").fadeIn(500);
        
        //console.log(counter);
        //reset counter
        if(counter === 2) {
          counter = -1;
        } 
      });
        

      //background
      iconAndImageCode = weatherCode;
      $("body").attr(backgroundAttribute, setWeatherImage(iconAndImageCode));
      //icon
      $(".main h3").html("<span class='icon'><img src='" + weatherIconUrl  + "'></span>" + tempCel + " " + unitTempCel);
      //date
      $(".header h2").text(date);
      //city
      $("#details1").append("<p>" + city + ", " +  country + "</p>")
      //description of sky
      $("#details2").append("<p>" + weather + "</p>")
      //wind speed
      $("#details3").append("<p>" + windspeed + " " + windspeedUnit + "</p>")






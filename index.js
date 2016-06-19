var twitchStreamers = (function functionName() {
  var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404", "brunofin", "motar2k", "Stewie2K", "steel_tv", "Arteezy"];
  var url = "https://api.twitch.tv/kraken/streams/";
  var streamers = [];

  function fetchStreamers() {
    $.each(streams, function(key, value) {
      $.ajax({
        url: url + value,
        dataType: "jsonp",
        success: function(data) {
          streamers.push(data);
          if (streamers.length === streams.length) {
            fetchChannels(streamers);
          }
        }
      });
    });
  }

  function fetchChannels(streamers) {
    streamers.forEach(function(stream) {
      console.log(stream);
      var template = $("#streamer-box");
      console.log(typeof(template));
      // if (stream.stream) {
      //   template.replace("{{logo}}", stream.stream.channel.logo);
      // }
      // console.log(stream);
      // if (stream.stream !== null && stream.stream !== undefined) {
      //   $template.addClass("online");
      //   $template.find(".title a").attr("href", stream.stream.channel.url);
      //   $template.find(".title p").text(stream.stream.channel.display_name);
      //   if (stream.stream.channel.logo !== null) {
      //     $template.find(".streamer-logo img").attr("src", stream.stream.channel.logo);
      //   } else {
      //     $template.find(".streamer-logo img").attr("src", "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png");
      //   }
      //   $template.find(".description p").text(stream.stream.channel.status);
      //   $(".content").append($template);
      // } else if (stream.stream === null) {
      //   $.ajax({
      //     url: stream._links.channel,
      //     success: function(data) {
      //       // console.log(data);
      //       $template.addClass("offline");
      //       $template.find(".title a").attr("href", data.url);
      //       $template.find(".title p").text(data.display_name);
      //       if (data.logo !== null) {
      //         $template.find(".streamer-logo img").attr("src", data.logo);
      //       } else {
      //         $template.find(".streamer-logo img").attr("src", "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png");
      //       }
      //       $template.find(".description p").text("Offline");
      //       $(".content").append($template);
      //     }
      //   });
      // } else {
      //   $template.addClass("offline");
      //   var user = stream.message.match(/'(.*?)'/g)[0].replace(/'/g, "");
      //   $template.find(".title a").attr("href", "https://www.twitch.tv/" + user);
      //   $template.find(".title p").text(user);
      //   $template.find(".description p").text("Account Closed.");
      //   $template.find(".streamer-logo img").attr("src", "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png");
      //   $(".content").append($template);
      // }
    });
  }

  return {
    init: function() {
      fetchStreamers();
    }
  };
}());

$(document).ready(function() {
  twitchStreamers.init();
});

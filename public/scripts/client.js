/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's
 * document ready function
 */



// on doc load
$('document').ready(() => {
  const data = [
    // {
    //   "user": {
    //     "name": "Newton",
    //     "avatars": "https://i.imgur.com/73hZDYK.png",
    //     "handle": "@SirIsaac"
    //   },
    //   "content": {
    //     "text": "If I have seen further it is by standing on the shoulders of giants"
    //   },
    //   "created_at": 1461116232227
    // },
    // {
    //   "user": {
    //     "name": "Descartes",
    //     "avatars": "https://i.imgur.com/nlhLi3I.png",
    //     "handle": "@rd" },
    //   "content": {
    //     "text": "Je pense , donc je suis"
    //   },
    //   "created_at": 1461113959088
    // },
  ];
  
  // const $tweet = $(`<article class="tweet">Hello world</article>`);
  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let elem of tweets) {
      let currTweet = createTweetElement(elem);
      $('.maintweets').prepend(currTweet);
    }
  };
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    // let $tweet = /* Your code for creating the tweet element */
    // ...
    // return $tweet;
    const {user, content, created_at} = tweet;
    const {name, avatars, handle} = user;
    const {text} = content;

    let time = timeago.format(created_at);

    let tweetTempl = `
    <article class = 'tweet'>
      <header>
        <div>
        <img src=${escape(avatars)}>
        ${escape(name)}
      </div>
      <div>
        ${escape(handle)}
      </div></header>
      <div>
        ${escape(text)}
      </div>
      <footer>
        <div>
          ${escape(time)}
        </div>
        <div>
          <!-- buttons -->
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-thumbs-up"></i>
          <i class="fa-solid fa-retweet"></i>
        </div>
    </footer>
    </article>
    `;
    return tweetTempl;
  };

  $('.new-tweet form').submit(function(event) {
    // console.log('here is button');
    event.preventDefault();
    $('.tweeterr').css('display', 'none');
    // alert('button pressed');
    const currReq = $(this).serialize();
    const currLen = $('#tweet-text').val();
    // console.log('currlen len', currLen.length);
    if (currLen.length < 1) {
      // alert('tweet too short');
      $('.tweeterr').text('tweet too short').slideDown('slow');
      return;
    }
    if (currLen.length > 140) {
      $('.tweeterr').text('tweet too long').slideDown('slow');
      return;
    }
    $.ajax({
      url: '/tweets/',
      method: 'POST',
      data: currReq,
      success: (input) => {
        console.log('successfully made a new tweet');
        
      },
      error: (err) => {
        console.log('dere was err in post', err);
      }
    }).then(
      (input) => {
        $.ajax({
          url: '/tweets/',
          method: 'GET',
          dataType: 'json',
          success: (input) => {
            // console.log('heres twt data', input);
            renderTweets([input[input.length - 1]]);
          },
          error: (err) => {
            console.log('dere was err in loadTwt');
          }
        });
      }
    );
    return;
  });

  const loadTweets = () => {
    $.ajax({
      url: '/tweets/',
      method: 'GET',
      dataType: 'json',
      success: (input) => {
        // console.log('heres twt data', input);
        renderTweets(input);
      },
      error: (err) => {
        console.log('dere was err in loadTwt');
      }
    });
  };
  loadTweets();
  // renderTweets(data);
});
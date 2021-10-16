/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's
 * document ready function
 */
// on doc load
$('document').ready(() => {
  const renderTweets = function(tweets, last = false) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    let tempTweets = tweets;
    if (last) {
      tempTweets = [tempTweets[tempTweets.length - 1]];
    }
    for (let elem of tempTweets) {
      let currTweet = createTweetElement(elem);
      $('.maintweets').prepend(currTweet);
    }
  };

  const loadTweets = (last = false) => {
    return $.ajax({
      url: '/tweets/',
      method: 'GET',
      dataType: 'json',
      success: (input) => {
        console.log('loading tweets');
        renderTweets(input, last);
      },
      error: (err) => {
        console.log('dere was err in loadTwt');
      }
    });
  };

  const submitTweets = (inDat) => {
    return $.ajax({
      url: '/tweets/',
      method: 'POST',
      data: inDat,
      success: (input) => {
        console.log('successfully made a new tweet');
        return;
      },
      error: (err) => {
        console.log('dere was err in submit tweets', err);
      }
    });
  };

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
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
    event.preventDefault();
    $('.tweeterr').css('display', 'none');
    const currReq = $(this).serialize();
    const currLen = $('#tweet-text').val();
    if (currLen.length < 1) {
      $('.tweeterr').text('tweet too short').slideDown('slow');
      return;
    }
    if (currLen.length > 140) {
      $('.tweeterr').text('tweet too long').slideDown('slow');
      return;
    }
    // Empty tweet box
    $('#tweet-text').val('');
    let counter = $(this).children('.undertweet').children('.counter');
    counter.text(140);
    // Submit
    return submitTweets(currReq).then(() => loadTweets(true));
  });

  loadTweets();
});
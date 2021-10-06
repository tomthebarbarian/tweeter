/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's
 * document ready function
 */



// on doc load
$(() => {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
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
        <img src=${avatars}>
        ${name}
      </div>
      <div>
        ${handle}
      </div></header>
      <div>
        ${text}
      </div>
      <footer>
        <div>
          ${time}
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
  // use YYYY-MM-DD when saving date

  // console.log(timeago.format('2021-10-01'));
  // console.log($tweet); // to see what it looks like
  // $tweet.timeago.format(new Date());
  renderTweets(data);
}

);
var quotes = [{
    quote: "At any rate, that is happiness; to be dissolved into something completely and great.",
    author: "Willa Cather",
  },
  {
    quote: "In our village, folks say God crumbles up the old moon into stars.",
    author: "Alexander Solzhenitsyn",
  },
  {
    quote: "She wasn’t doing a thing that I could see, except standing there leaning on the balcony railing, holding the universe together.",
    author: "J. D. Salinger",
  },
  {
    quote: "I took a deep breath and listened to the old brag of my heart; I am, I am, I am.",
    author: "Sylvia Plath",
  },
  {
    quote: "Isn’t it pretty to think so?",
    author: "Ernest Hemingway",
  },
  {
    quote: "Beauty is an enormous, unmerited gift given randomly, stupidly.",
    author: "Khaled Hosseini",
  },
  {
    quote: "Sometimes I can feel my bones straining under the weight of all the lives I’m not living.",
    author: "Jonathan Safran Foer",
  },
  {
    quote: "What are men to rocks and mountains?",
    author: "Jane Austen",
  },
  {
    quote: "Everything was beautiful and nothing hurt.",
    author: "Kurt Vonnegut",
  },
  {
    quote: "One must be careful of books, and what is inside them, for words have the power to change us.",
    author: "Cassandra Clare",
  },
]

var quote = document.createElement("p");
var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = `${randomQuote.quote} - ${randomQuote.author}`;
quote.style.fontSize = "36px";
quote.style.paddingLeft = "50px";

document.body.appendChild(quote);

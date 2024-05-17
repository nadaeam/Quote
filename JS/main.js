let products=
[
    {  
      name: "― Oscar Wilde",
      quote: "“Be yourself; everyone else is already taken.”",
    },
    {
      
      name: "― Marilyn Monroe",
      quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    },
    {
      
      name: "― Albert Einstein",
      quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    },
    {
      
      name: "― Marcus Tullius Cicero",
      quote: "“A room without books is like a body without a soul.”",
    },
    { 
      name: "― Bernard M. Baruch",
      quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
    },
    {
      
      name: "― Dr. Seuss",
      quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    },
    {
      
      name: "― Mae West",
      quote: "“You only live once, but if you do it right, once is enough.”",
    },
    {
      
      name: "― Mahatma Gandhi",
      quote: "“Be the change that you wish to see in the world.”",
      
    },
    {
      
      name: "― Robert Frost",
      quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
    },
    {
      name: "― Mark Twain",
      quote: "“If you tell the truth, you don't have to remember anything.”",
    },
    {
      
      name: "― Oscar Wilde",
      quote: "“Always forgive your enemies; nothing annoys them so much.”",
    },
    {
      name: "― Mahatma Gandhi",
      quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    },
    {
      name: "― Stephen Chbosky, The Perks of Being a Wallflower",
      quote: "“We accept the love we think we deserve.”",
    },
    {
      
      name: "― Ralph Waldo Emerson",
      quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",

    },]
  let x=0   
function displayFunction(){ 
    let repeated=x;
    x = Math.floor((Math.random() * products.length-1) + 1)
 if(x==repeated)
{
    x=x+1
}
const currentQuote=products[x]
document.getElementById('demo').innerHTML=
`<h4>${currentQuote.quote}</h4>
    <h6>${currentQuote.name}</h6>  `
}
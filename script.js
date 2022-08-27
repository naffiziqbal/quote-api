function loadQuote(){
    const url = 'https://api.kanye.rest'
    fetch(url)
    .then( res => res.json())
    .then(res => displayQuote(res))
}

function displayQuote(quote){
    const display = document.getElementById('display');
    // const quote = text
    display.innerText = quote.quote;
    // display.classList.add('display')
    console.log(text);
}


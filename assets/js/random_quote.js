const quotes = [
    "“The more I learn, the less I know.”",
    "“Hell is other people.” — Jean-Paul Sartre",
    "“I think, therefore I am.” — René Descarte",
    "“The fear has gripped me but here I go” — ∆"
];

const quoteEl = document.getElementById("quote");
quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
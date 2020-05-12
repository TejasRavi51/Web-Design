const stocks = [
    {
        symbol: 'SBIN',
        buy_value: 176,
        volume: 100
    },
    {
        symbol: 'TATAMOTORS',
        buy_value: 75,
        volume: 200
    },
    {
        symbol: 'PVR',
        buy_value: 970,
        volume: 20
    }
];

const stockJSON =JSON.stringify(stocks);

const myForm = document.querySelector('#my-form');
const symbolInput = document.querySelector('#symbol');
const valueInput = document.querySelector('#buy_value');
const volumeInput = document.querySelector('#volume');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    fetch('https://d54eb915.ngrok.io/stock-calls',{
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:stockJSON
    })
    // .then((res) => res.json())
    .then((data) => console.log(data))
    // alert(420)
}

console.log(stockJSON)
// const stocks = [
//     {
//         symbol: 'SBIN',
//         buy_price: 176,
//         volume: 100
//     },
//     {
//         symbol: 'TATAMOTORS',
//         buy_price: 75,
//         volume: 200
//     },
//     {
//         symbol: 'PVR',
//         buy_price: 970,
//         volume: 20
//     }
// ];

const stocks = [];

const myForm = document.getElementById('my-form');

const symbolInput = document.getElementById('symbol');
const valueInput = document.getElementById('buy_value');
const volumeInput = document.getElementById('volume');
const mailInput = document.getElementById('mailID');

const nextStockButton = document.getElementById('nextStock');
const sendMailButton = document.getElementById('sendMail');

nextStockButton.addEventListener('click', () => {
    alert('hello');
});

sendMailButton.addEventListener('click',() => {
    stocks.push({symbol:symbolInput.value, buy_price: valueInput.value, volume: volumeInput.value});
    console.log(stocks)
    fetch('https://c4b1b0cf.ngrok.io/stock-calls',{
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({stocks: stocks, email:[mailInput.value]})
    })
    // .then((res) => res.json())
    .then((data) => console.log(data))
    alert("Mail submit")
});
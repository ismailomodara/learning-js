const coins = [1, 3, 5, 7];

const getCoin = (change, coins) => {

    if (change <= 0) {
        return []
    }

    const coin = coins[0];
    const coinCount = Math.floor(change / coin)

    const newChange = change - (coinCount * coin);
    const newCoins = coins.slice(1);

    const coinList = coinCount === 0 ? [] : Array(coinCount).fill(coin);
    return coinList.concat(...getCoin(newChange, newCoins))
}

const getChange = (change, coins) => {
    return [].concat(...getCoin(change, coins))
}

const inputs = getChange(18, coins.reverse())
console.log(inputs)

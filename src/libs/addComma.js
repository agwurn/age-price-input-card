function addComma(price) {
    const rule = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
    console.log(price)
    const priceWithComma = price.toString().replace(rule, ',')
    return priceWithComma
}

function removeComma(priceWithComma) {
    const price = priceWithComma.toString().replaceAll(',','')
    return price
}

export { addComma, removeComma }
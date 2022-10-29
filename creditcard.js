const obscureCreditCard = (creditCardNumber) => {
    let creditCardString = creditCardNumber.toString();
    if (creditCardString.length >= 12 && creditCardString.length <= 16) {
        let lastFourDigits = creditCardString.slice(creditCardString.length - 4);
        let asterisks = '*'.repeat(creditCardString.length - 4);
        return asterisks + lastFourDigits;
    } else {
        return 'Please enter a valid credit card number';
    }
}

module.exports = obscureCreditCard;
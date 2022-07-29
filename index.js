class Validator {
    cpf (cpf) {
        if (typeof cpf !== 'string') return false
        const cleanCpf = cpf.replace(/\D+/g, '')
        if (cleanCpf.length !== 11) return false
        if (cleanCpf.charAt(0).repeat(11) === cleanCpf) return false
        let compare = cleanCpf.slice(0, -2)
        let control = compare.length + 1
        let counter = 0
        for (let item of compare) {
            counter += control * Number(item)
            control--
        }
        let firstDigit = 11 - (counter % 11)
        firstDigit <= 9 ? firstDigit = String(firstDigit) : firstDigit = '0'
        compare = compare + firstDigit
        control = compare.length + 1
        counter = 0
        for (let item of compare) {
            counter += control * Number(item)
            control--
        }
        let secondDigit = 11 - (counter % 11)
        firstDigit <= 9 ? secondDigit = String(secondDigit) : secondDigit = '0'
        compare = compare + secondDigit
        return cleanCpf === compare

    }
}

const validator = new Validator()

console.log(validator.cpf('843.607.042-91')) //true
console.log(validator.cpf('843.607.042-92')) //false
console.log(validator.cpf('843.607.042-9')) //false
console.log(validator.cpf('111.111.111-11')) //false
console.log(validator.cpf('82992401234')) //true
console.log(validator.cpf(84360704291)) //false
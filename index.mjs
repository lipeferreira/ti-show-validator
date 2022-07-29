class Validator {
    cpf (cpf) {
        cpf = String(cpf)
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

    email (email) {
        email = String(email)
        const regex = /\S+@\S+\.\S+/
        return regex.test(email)
    }
}

const validator = new Validator()

module.exports = validator
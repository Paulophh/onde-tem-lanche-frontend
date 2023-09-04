export class WrongAddressError extends Error {
    message = 'Endereço inválido'

    constructor() {
        super();
    }
}
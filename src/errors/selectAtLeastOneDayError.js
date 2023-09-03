export class SelectAtLeastOneDayError extends Error {
    message = 'Selecione ao menos um dia e horário de funcionamento';

    constructor() {
        super();
    }
}
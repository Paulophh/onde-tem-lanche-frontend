export class InvalidOperationHoursError extends Error {
    message = 'Certifique-se de que informou um horário válido para todos os dias selecionados e de que o horário de fechamento é maior que o de abertura';

    constructor() {
        super();
    }
}
export class ImageTooBigError extends Error {
    message = 'Selecione uma imagem com menos de 5 MB';

    constructor() {
        super();
    }
}
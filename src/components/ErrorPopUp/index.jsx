import { ErrorPopUpContainer } from "./styles";

const ErrorPopUp = ({ message }) => {
    message = message ?? 'Algo deu errado, tente novamente mais tarde';

    return (
        <ErrorPopUpContainer>
            {message}
        </ErrorPopUpContainer>
    )
}

export default ErrorPopUp;
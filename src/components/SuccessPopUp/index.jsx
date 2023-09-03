import { SuccessPopUpContainer } from "./styles";

const SuccessPopUp = ({ message }) => {
    message = message ?? 'Operação realizada com sucesso!';

    return (
        <SuccessPopUpContainer>
            {message}
        </SuccessPopUpContainer>
    )
}

export default SuccessPopUp;
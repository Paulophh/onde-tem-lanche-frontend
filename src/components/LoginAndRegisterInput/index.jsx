import { AiFillLock } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';

import { InputContainer, InputErrorContainer, LoginAndRegisterInputContainer } from './styles';

const INPUT_OPTIONS = {
    name: {
        placeholder: 'Nome',
        icon: FaUserAlt
    },
    email: {
        placeholder: 'E-mail',
        icon: IoMdMail
    },
    password: {
        placeholder: 'Senha',
        icon: AiFillLock
    },
    confirmPassword: {
        placeholder: 'Confirme sua senha',
        icon: AiFillLock
    }
}

const LoginAndRegisterInput = ({ input, type = 'text', register, errorMessage }) => {
    const inputType = INPUT_OPTIONS[input];
    const placeholder = inputType.placeholder;
    const Icon = inputType.icon;

    return (
        <LoginAndRegisterInputContainer>
            <InputContainer>
                <span>
                    <Icon />
                </span>
                <input
                    placeholder={placeholder}
                    type={type}
                    {...register(input)}
                />
            </InputContainer>

            {
                errorMessage &&
                <InputErrorContainer>
                    {errorMessage}
                </InputErrorContainer>
            }
        </LoginAndRegisterInputContainer>
    )
}

export default LoginAndRegisterInput;
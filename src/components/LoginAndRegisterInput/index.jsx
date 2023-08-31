import { AiFillLock } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';

import { InputContainer, LoginAndRegisterInputContainer } from './styles';

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

const LoginAndRegisterInput = ({ input }) => {
    const inputType = INPUT_OPTIONS[input];
    const placeholder = inputType.placeholder;
    const Icon = inputType.icon;

    return (
        <LoginAndRegisterInputContainer>
            <InputContainer>
                <span>
                    <Icon />
                </span>
                <input placeholder={placeholder} />
            </InputContainer>

        </LoginAndRegisterInputContainer>
    )
}

export default LoginAndRegisterInput;
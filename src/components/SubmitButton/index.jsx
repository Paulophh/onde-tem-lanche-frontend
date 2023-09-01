import ReactLoading from 'react-loading';

import { SubmitButtonsContainer } from './styles';

const SubmitButton = ({ title, isLoading = false }) => {
    return (
        <SubmitButtonsContainer disabled={isLoading}>
            {
                isLoading ?
                    <span>
                        <ReactLoading
                            width={20}
                            height={20}
                            color='#7f7777'
                            type='spin'
                        />
                    </span>
                    :
                    <span>
                        {title}
                    </span>
            }
        </SubmitButtonsContainer>
    )
}

export default SubmitButton;
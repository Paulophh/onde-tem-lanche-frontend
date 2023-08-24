import React from 'react';
import { HighlightsLinhas, DestaquesParagrafo } from "./styles";


const Highlights = ({ textPlacement = 'left', text }) => {
    return (
        <>
            <HighlightsLinhas />
            <DestaquesParagrafo placement={textPlacement}>
                {text}
            </DestaquesParagrafo>
        </>
    );
}

export default Highlights;

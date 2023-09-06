import {  ControlEstablishment, ImgEstablishment } from "./style"
import Imagem from "../../assets/restaurant-images/pizza-fresca.png"


export const Establishment = () => {
    return (
        <ControlEstablishment>
            <ImgEstablishment>
            <img src={Imagem} alt="imagem do restaurante"/>
            </ImgEstablishment>
        </ControlEstablishment>
    )

}

export default Establishment;
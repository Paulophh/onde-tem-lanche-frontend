import React from 'react';
import { EstilizarFooter, ParagrafosEstilizados, Paragrafos, Icons, Grupo, ParagrafoFooter } from './style';
import {FaFacebook} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineCopyrightCircle} from 'react-icons/ai'


const Footer = () => {
return (
   <EstilizarFooter>
   <Icons>
   <BsWhatsapp size={35}  color="orange"/>
   <AiOutlineInstagram size={35}  color="orange"/>
   <FaFacebook size={35} color="orange"/>
   </Icons>
   <Paragrafos>
   <ParagrafosEstilizados>Privacides</ParagrafosEstilizados>
   <ParagrafosEstilizados>Termos de Uso</ParagrafosEstilizados>
   <ParagrafosEstilizados>Trabalhe Conosco</ParagrafosEstilizados>
   </Paragrafos>
   <Grupo>
    <AiOutlineCopyrightCircle size={8}/>
   <ParagrafoFooter>2023 Grupo dos Travessos </ParagrafoFooter>
   </Grupo>
   </EstilizarFooter>
);
}

export default Footer;
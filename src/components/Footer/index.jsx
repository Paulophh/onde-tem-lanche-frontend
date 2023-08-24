import React from 'react';
import { EstilizarFooter, ParagrafosEstilizados, Paragrafos, Icons, Grupo, ParagrafoFooter } from './style';
import { FaFacebook } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'


const Footer = () => {
   return (
      <EstilizarFooter>
         <Icons>
            <BsWhatsapp />
            <AiOutlineInstagram />
            <FaFacebook />
         </Icons>

         <Paragrafos>
            <ParagrafosEstilizados>
               Privacides
            </ParagrafosEstilizados>
            <ParagrafosEstilizados>
               Termos de Uso
            </ParagrafosEstilizados>
            <ParagrafosEstilizados>
               Trabalhe Conosco
            </ParagrafosEstilizados>
         </Paragrafos>

         <Grupo>
            <AiOutlineCopyrightCircle />
            <p>
               2023 Grupo dos Travessos
            </p>
         </Grupo>
      </EstilizarFooter>
   );
}

export default Footer;
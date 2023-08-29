import React from 'react';
import { EstilizarFooter, ParagrafosEstilizados, Paragrafos, Icons, Grupo } from './style';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'


const Footer = () => {
   return (
      <EstilizarFooter>
         <Icons>
            <BsWhatsapp />
            <AiOutlineInstagram />
            <RiFacebookCircleLine />
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
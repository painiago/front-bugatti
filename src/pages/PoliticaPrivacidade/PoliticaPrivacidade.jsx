import React from 'react';

import Footer from '/src/components/layout/Footer/Footer';

// Estilização SCSS
import './PoliticaPrivacidade.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLink, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
// LOGO 
import logoBugatti from '../../assets/logo.svg';


function PoliticaPrivacidade() {
  return (
    <div className=''>
      <div className="container mt-pv">
        <h1 className='text-center xx-h1 '> POLÍTICA DE PRIVACIDADE E
          DE PROTEÇÃO DE DADOS PESSOAIS </h1>
        <div className="row mt-5 ">
          <div className="col-md-6">
            <p className='xx-1'>Nesta Política de Privacidade, explicaremos aos visitantes e
              aos proprietários das imagens contidas neste site como coletamos
              dados dos visitantes, mas não usamos conteúdo de terceiros para obter
              lucros. O site foi desenvolvido para fins de estudo.
            </p>
            <p>Para exercer os seus direitos, basta entrar em contato diretamente
              com o responsável pela aba de contato.</p>
            <p>Esclareceremos como é feita a coleta de dados pessoais.</p>
            <h5 className='xx-1 icon-user' >
              <i className="fa-solid fa-user"></i> Dados de visitantes </h5>
            <p> &bull; Não coletamos dados de contato. Nome, sobrenome,
              número de telefone, cidade, estado, endereço de e-mail.</p>
            <h5 className='xx-1'><FontAwesomeIcon icon={faGlobe} /> Navegação geral no site </h5>
            <p>&bull; Coletamos os dados sobre o navegador visando melhorar o desempenho do site.</p>
            <h5 className='xx-1'><FontAwesomeIcon icon={faCircleInfo} /> Sobre o site</h5>
            <p>&bull; O site Bugatti pode apresentar, textos, imagens, vídeos,
              e outras informações, que visa compartilhar um pouco sobre a marca Bugatti,
              que não está somente na área automobilística. </p>
            <h5 className='xx-1'><FontAwesomeIcon icon={faLink} /> Links externos</h5>
            <p>&bull; Para melhorar a experiência e compreensão das informações, você
              encontrara links para outros websites com intuito de complementar
              as informações. </p>
          </div>
          <div className="col">
            <h5 className='xx-1'><FontAwesomeIcon icon={faAddressCard} /> Cookies</h5>
            <p>&bull;	O site utiliza cookies para armazenar preferências de navegação.
              Essa tecnologia é comum em sites, que consiste em um pequeno arquivo de
              texto, colocado em seu dispositivo ou navegador, que permite a
              identificação do dispositivo. </p>
            <p>&bull;	Utilizamos o cookie de desemprenho neste site. É coletado
              informações de como você utiliza o site, ajuda a melhorar a navegação
              e melhorar a experiência. </p>
            <p>&bull;	Seus dados não são usados, nem compartilhados com terceiros
              para fins lucrativos.</p>
            <p>&bull;	Não incrementamos nenhuma atividade de marketing ao site.</p>
            <p>&bull; Cookies podem ser desativados pelo usuário </p>
            <div className="d-flex justify-content-center mt-5">
              <div className="card-logo">
                <div className="ref">
                  <img src={logoBugatti} alt="" className='lg-bugatti'/>
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default PoliticaPrivacidade;
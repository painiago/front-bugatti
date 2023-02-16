// CSS
import './Cookie.css';
import CookieConsent from 'react-cookie-consent';

function Cookie (){
  return(
    <>
    <CookieConsent debug="true"
    cookieName='performancecookie'
    expires={365}
    location='bottom'
    buttonText ="Concordo"
    buttonStyle = { {  color : "#000000" ,  fontSize : "13px", border:"none"  } }
    style= {{background : "rgba(67, 65, 65, 0.8)"}}>
    Nós fazemos uso de cookies em nosso site para melhorar a sua experiência.
    Para mais informações leia nossa
    <a href='\PoliticaPrivacidade' className='cookie-link'> política de privacidade</a>.
    </CookieConsent>
  

      {/* <div className="cookie-container">
        <div className="cookie-items">
        <p className='cookies-txt text-center'>Nós fazemos uso de cookies em nosso site para melhorar a sua experiência.
        Para mais informações leia nossa
          <a href='\PoliticaPrivacidade' className='cookie-link'> política de privacidade</a>.
        </p>
        <button className='cookie-save'>Concordo</button>
        </div>
      </div> */}
    </>
  );
}
export default Cookie;

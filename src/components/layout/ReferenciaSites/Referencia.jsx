// CSS
import '/src/components/layout/ReferenciaSites/Referencia.css'

// FontAwesomeIcon

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Referencia(){
  return(
<section id='marg-mb'>
        <div className="col d-flex justify-content-start">
                <div className="card-referencia">
                <>
                  <button class="accordioon">
                  <div id='accordioon-items'>
                    <div className='col'>
                    <FontAwesomeIcon icon={faGlobe} /> Referência
                    </div>
                    <div className="col" id='caretleft'>
                    <FontAwesomeIcon icon={faCaretDown} /></div>
                    </div>
                  </button>
                  </>
                  <div class="panel-x">
                       <p><span className='ppv-molsheim'> CHIRON MODELOS,</span> 
                       <a href="https://www.bugatti.com/models/chiron-models/" className='ref-no-none' target="_blank"> https://www.bugatti.com/models/chiron-models/
                       </a>
                       </p>
                  </div>
                </div>
            </div>
        </section>
  )
}

var acc = document.getElementsByClassName("accordioon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activee");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


export default Referencia;
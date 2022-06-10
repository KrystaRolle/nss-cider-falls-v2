//import all necessary functions from other modules and invoke
import { footer } from "./footer.js"
import { sectionsAndServicesList } from "./sectionServicesJoin.js"
//import { currentGuestSection } from "./guestSectionJoin.js"
import { sectionServicesOffered } from './parkServicesList.js'
import {currentSectionGuests} from './guests.js'
import { sectionsHTML }from './sectionServicesJoin.js'
//put parks as a header for each section and then subsection the activites/services



// parks main section
let applicationsHTML = ` 
<h1 class='title'>Cider Falls</h1>
<h2 class=parkServices>Park Services Offered</h2>
 <article class=servicesOffered> ${sectionServicesOffered()} </article>
    <h2 class='sectionsAndServicesTitle'>Park Sections & Services</h2>
    <div class=sectionAndGuests>
    <section class= 'sectionsAndServicesList'>
    ${sectionsHTML()}
   ${sectionsAndServicesList()}
    </section>
    <div class = guestAlign>
    <h2 class= guestsTitle>Current Guests</h2>
    <section>
    ${currentSectionGuests()}
    </section>
    </div>
    </div>
    <h2 class='footerTitle>Contact Infomation'</h2>
    <footer class="footer">
    ${footer()}
    </footer>
    `
const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationsHTML

//querySelectors
//{/* <h2>${serviceparkjoin()}</h2>generate parks and their offered services



//innerhtml linked to classes

//only need 1 queryselector/innerhtml
// const mainContainerParkServcies = document.querySelector(".park-services")
// const mainContainerGuests = document.querySelector(".guests")
// const mainContainerFooter = document.querySelector(".footer")
// mainContainerParkServices.innerHTML = applicationHTML
// mainContainerGuests.innerHTML = applicationHTML
// mainContainerFooter.innerHTML = applicationHTML







// const applicationHTML = `
// <h1>Brewed Awakenings</h1>
// <article class="details">
//     <section class="detail--column list details__employees">
//         <h2>Employees</h2>
//         ${Employees()}
//     </section>
//     <section class="detail--column list details__products">
//         <h2>Products</h2>
//         ${Products()}
//     </section>
// </article>

// <article class="orders">
//     <h2>Orders</h2>
//     ${Order()}
// </article>
// `


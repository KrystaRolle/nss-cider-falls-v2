//import getservices()
//import getparks()
import { getSections, getServices, getSectionServicesJoin, getGuests } from "./Database.js";

//save functions to variable
const services = getServices();
const sections = getSections();
const serviceSection = getSectionServicesJoin() //rename to section
const guests = getGuests()

//function that will return services object
const matchingServices = (serviceJoinId) => {
    //loop  services()
    for (const service of services) {
        //assignment conditional
        if (service.id === serviceJoinId) {
            //returns service objects only
            return service
        }
    }
}

// need to match join data with service and section
//if statement for assigning number with park name

//function that will return mathcing sections obj
const matchingSections = (sectionJoinId) => {
    //loop  services()
    for (const section of sections) {
        //assignment conditional
        if (section.id === sectionJoinId) {
            //returns section objects only
            return section
        }
    }
}

//section title html
export const sectionsHTML = () => {
   for (const section of sections) {
    let sectionHTML = section.name
    return sectionHTML
}
}

//function that makes html
//function that invokes previous 3 funcitons
const servicesHTML = (serviceObj, sectionObj) => {
    if (serviceObj.id === joinServiceSection.serviceId) {
        if (sectionObj.id === joinServiceSection.sectionId) {
            return html += //`${sectionObj.name}
                `${serviceObj.name}`
        }
    }

}
export const sectionsAndServicesList = () => {
    for (const joinServiceSection of serviceSection) {
        const sect = matchingSections(joinServiceSection.sectionId)
        const serve = matchingServices(joinServiceSection.serviceId)







        const result = sectionsAndServicesHTML(serve, sect)
        return result
    }
}

//return html

// const match = (serveSect) => {
//     for (const service of services) {
//         if (1 === servSect.sectionId) {
//             if (service.id === servSect.serviceId) {
//                return html += `${section.name}
//                 ${service.name}`
//             }
//         } else if (2 === servSect.sectionId) {
//             if (service.id === servSect.serviceId) {
//               return  html += `${section.name}
//                   ${service.name}`
//             }

//         } else if (3 === servSect.sectionId) {
//             if (service.id === servSect.serviceId) {
//               return  html += `${section.name}
//                   ${service.name}`
//             }

//         } else if (4 === servSect.sectionId) {
//             if (service.id === servSect.serviceId) {
//                return html += `${section.name}
//                   ${service.name}`
//             }

//         } else if (5 === servSect.sectionId) {
//             if (service.id === servSect.serviceId) {
//                return html += `${section.name}
//                   ${service.name}`
//             }

//         } else if (6 === servSect.sectionId) {
//             if (service.id === servSect.serviceId) {
//                 return html += `${section.name}
//                   ${service.name}`
//             }
//         }
// }

// //function that will match sections to serviceSectionid
// export const matchingSections = () => {
//     let html = ' '
//     //loop sections section and join?
//     for (const servSect of serviceSection) {
//         for (const section of sections) {
//            match(serviceSection)
//             }
//         }
//     }
//     //conditionals if section id 1 === join id
//     return html
// }


//if (${service})

//loop through the sections
//conditional if statement to check if the section.id === jointable.sectionId
//conditional if jointable.serviceId === service.id display all

//HTML list
// export const sectionsAndServicesList = () => {
//     let sectionsAndServicesHTML = '<ul>'
//     // display sections
//     //get sections
//     //get name of sections
//     // <li>${matchedServices.name}</li>`
//     const matched = matchingSections(sections)

//     for (const service of services) {
//         //const matchedServices = matchingServices(serveSect.serviceId)
//         sectionsAndServicesHTML += `
//         <p id=section--${matchedSections.id}>${matchedSections.name}</p>`
//     }
//     sectionsAndServicesHTML += `
//     </ul>
//     `
//     return sectionsAndServicesHTML
// }

//click event for when someone clicks on section gives number of guests
//need to match guest section id to section.id 
//add the params 
//loop guests
//if sectionsServices.id === activity id
// interpolate ${} activity.name
//alert message: 'there are (this number of guests) in this area" area being section clicked on
//visitorTotal(guests, sections)

export const guestsCounter = (sectionsArr, guest) => {
    // guest counter function with 2 params
    let guestCount = []
    //loop sections
    for (const section of sectionsArr) {
        //conditional - if guest.sectionId === sectionId
        if (section.id === guest.sectionId) {
            //if true, push obj into arr, 
            guestCount.push(guest)
        }
    }
    //const visitorTotal = arr.length
    const guestCountNumber = guestCount.length
    //return visitorTotal
    return guestCountNumber
}

//module functions counts number of guests. when service.id === sectionService.id display alert message
// one param?? and just put function result into problem
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        //id starts with section
        if (itemClicked.id.startsWith("section")) {
            //section id split
            const [, sectionId] = itemClicked.id.split("--")
            //loop guests()
            for (const guest of guests) {
                if (guest.sectionId === parseInt(sectionId)) {
                    //section and guest param
                    const number = guestsCounter(sections, guest)
                    //there are __ guests in this area
                    window.alert(`there are ${number} in this area`)
                }
            }
        }
    }
)


//name func sectionsAndServicesList()
//matching ids to connects servicepark to parks
//empty array
//loop parks
//if parkId === parks.id 


//function for listHTML 
//loop getServicePparkJoin
//const serviceSection = matchingSections()
//${serviceSection.name}
//{services.name}
//html <ul></ul><li></li>
//return HTML


//return service

//function that will match parks to parkId
//loop parks()
//assignment conditional
//return park


//parksAndServices
//export this func to render html
//function serviceParksList that will match
//invoke functions above here with no params
//define variable will empty ''

//loop serviceParkJoin array
//return list/string
//return 

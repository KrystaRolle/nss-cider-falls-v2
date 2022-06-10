//import guests data
import { getGuests, getSections } from "./Database.js"
//export function to display current park guests
const guests = getGuests()
const sections = getSections()

export const currentSectionGuests = () => {
    let currentGuests = `<ul>`
    for (const guest of guests) {
    currentGuests += `<p class='guest--'${guest.firstName}> ${guest.lastName}</p>`
    }
    currentGuests += `</ul>`
    return currentGuests
    //return htmlstring
}






//function to match activity name to section
// const serviceWithSection = (serviceSectionJoinId) => {
//     let sectionArr = []
//     // 
//     for (const section of sections) {
//         if (section.id === serviceSectionJoinId) {
//             sectionArr.push(section)
//         }
//     }
//     return sectionArr
// }

// //function to match service to serviceSectionJoinId 
// const serviceMatch = (serviceSectionJoinId) => {
   
//     for (const service of sectionServices) {
//         if (service.id === serviceSectionJoinId) {
//             return service
//         }
//     }
   
// }

// //click event will display activity area saying "hiking is available in __ and __"
// //${activity.name} is available in ${park.name} list

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("service")) {
// //turns string into a list of stings in an array. split is at --, skips first value 
//             const [, serviceId] = itemClicked.id.split("--")
//             //looping the join table to match section ids and service ids
//             for (const area of serviceSectionJoin) {
//                 //parse int turns string into integer === and checking if section integer matches list of serviceids
// // conditional should be area.id === parseInt(service.id)?? 2 conditionals? area.id === parseInt sectionId
// //take serviceId get section
// //tell what activity and need to get section its in
//                 if (area.serviceId === parseInt(serviceId)){
//                     //invoke sections/services to get objs
//                     //im getting arrs
                    
//                     const sectionName = serviceWithSection(area.sectionId)
//                     const serviceName = serviceMatch(area.serviceId)
//                     //use dot notation to access key/value pairs
//                     for (const sect of sectionName) {
//                     window.alert(`${serviceName.name} is avilable in ${sect.name}`)
//                     }
//                 }
//             }
//         }
//     }
// )
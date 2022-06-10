//import 
import { getSections, getGuests } from "./Database.js";
//save func to variable

const guests = getGuests()
const sections = getSections()
//const getGuestSectionJoined = getGuestSectionJoin()

//module functions counts number of guests. when service.id === sectionService.id display alert message

export const guestsCounter = (sections, guests) => {
// guest counter function with 2 params
let guestCount = []
//loop sections
for (const section of sections) {
    //conditional - if guest.sectionId === sectionId
    if (guest.sectionId === sectionId) {
        //if true, push obj into arr, 
        guestCount.push(guest)
    }
}
//const visitorTotal = arr.length
const guestCountNumber = guestCount.length
//return visitorTotal
return guestCountNumber
}


//click event for when someone clicks on section gives number of guests
//need to match guest to section id with if statement
//add the params 
//loop guests
//if sectionsServices.id === activity id
// interpolate ${} activity.name
//alert message: 'there are (this number of guests) in this area" area being section clicked on
//visitorTotal(guests, sections)

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("section")) {
            const [, sectionId] = itemClicked.id.split("--")

            for (const section of sections) {
                if (section.id === parseInt(sectionId)) {
                    //just need code to figure out order number
                    const number = guests(guest, section)
                    window.alert(`there are ${number} in this area`)
                }
            }
        }
    }
)









//function that adds up number of items
//const itemsSold = (obj, arr) => {
// let itemArr = []
// for (const order of arr) {
//     if (order.employeeId === obj.id){
//         itemArr.push(obj)
//     }
// }
// const itemSoldNumber = itemArr.length
// return itemSoldNumber
// }

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("employee")) {
//             const [, employeeId] = itemClicked.id.split("--")

//             for (const employee of employees) {
//                 if (employee.id === parseInt(employeeId)) {
//                     //just need code to figure out order number
//                     const number = itemsSold(employee, orders)
//                     window.alert(`${employee.name} sold ${number} items`)
//                 }
//             }
//         }
//     }
// )


// export const Employees = () => {
//     let html = "<ul>"

//     for (const employee of employees) {
//         html += `<li id="employee--${employee.id}">${employee.name}</li>`
//     }

//     html += "</ul>"

//     return html
// }














//function that will match guestsId to guestParksJoinId
// const matchingGuests = (guestJoinId) => {
//     //loop  guests()
//     for (const guest of guests) {
//         //assignment conditional
//         if (guest.id === guestJoinId.guestId) {
//             //returns guest objects only
//             return guest
//         }
//     }
// }





// //function that will match sections to sericesSectionid
// const matchingSections = (sectionJoinId) => {
//     //loop sections
//     for (const section of sections) {
//         //conditional
//         if (section.id === sectionJoinId.sectionId) {
//             //return park section obj only
//             return section
//         }
//     }
// }


// export const currentGuestSection = () => {
//     let guestsAndSectionsHTML = '<ul>'
//     for (const guestSect of getGuestSectionJoined) {
//         const matchedSection = matchingSections(guestSect)
//         const matchedGuest = matchingGuests(guestSect) //number of guests doesn't align?

//         guestsAndSectionsHTML += `
//         <div class = 'guest-name'>${matchedGuest.firstName} ${matchedGuest.lastName}</div>
//         <li>${matchedSection.name}</li>
//         `
//     }
//     guestsAndSectionsHTML += `
//     </ul>
//     `
//     return guestsAndSectionsHTML
// }
//loop guestid
//conditional
//return guest obj

//function that will match parksId to guestParksJoinsid
//loop and conditional
//return parks obj

//export const guestParkString() that will create string/list of guest
//loop guestparksjoinid
//html creation
//interpolate 
//`{$guest.firstName}${guest.lastName}
// {parks.name}`
//and what park they are in

//name func currentGuestSection
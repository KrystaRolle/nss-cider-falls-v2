import { getSectionServicesJoin, getServices, getSections } from './Database.js'
//import hiking data from database
const serviceSectionJoin = getSectionServicesJoin()
const sectionServices = getServices()
const sections = getSections()
//module contains click event for the sectionServicesOfferedList and list park sectionServices and what area its in


//create click events for every activity?
//loop hiking
//if hiking id === serviceAreasId 


//renderHTML of sectionServicesOfferedList 

// funciton that lists park sectionServices HTML
export const sectionServicesOffered = () => {
    let servicesOfferedHTML = 'Park Services: '
    for (const service of sectionServices) {
        servicesOfferedHTML += `<p id="service--${service.id}">${service.name}</p>`
    }
    return servicesOfferedHTML
    //loop serviceAreasJoin
    //render HTML
    //     for (const serviceArea of serviceAreas) {
    //         html += `<li id="product--${serviceArea.id}">${serviceArea.name}</li>`//not accurate yet
    //     }
    //     html += "</ul>"
    //return string
}

//function to match activity name to section
const serviceWithSection = (serviceSectionJoinId) => {
    let sectionArr = []
    // 
    for (const section of sections) {
        if (section.id === serviceSectionJoinId) {
            sectionArr.push(section)
        }
    }
    return sectionArr
}

//function to match service to serviceSectionJoinId 
const serviceMatch = () => {
    for (const service of sectionServices) {
        for (const servesectjoinid of serviceSectionJoin)
        if (service.id === servesectjoinid.serviceId) {
            return service
        }
    }
   
}

//click event will display activity area saying "hiking is available in __ and __"
//${activity.name} is available in ${park.name} list

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
//turns string into a list of stings in an array. split is at --, skips first value 
            const [, serviceId] = itemClicked.id.split("--")
            //looping the join table to match section ids and service ids
            const serviced = serviceMatch()
            let serviceAlert = `${serviced.name} is available in `
            for (const area of serviceSectionJoin) {
                //parse int turns string into integer === and checking if section integer matches list of serviceids
// conditional should be area.id === parseInt(service.id)?? 2 conditionals? area.id === parseInt sectionId
//take serviceId get section
//tell what activity and need to get section its in
                if (area.serviceId === parseInt(serviceId)){
                    //invoke sections/services to get objs
                    //im getting arrs
                    
                    const sectionList = serviceWithSection(area.sectionId)
                    //use dot notation to access key/value pairs
                    for (const sect of sectionList) {
                        serviceAlert += sect.name + ' '  
                    }
                }
            }
            //
            window.alert(serviceAlert)
        }
    }
)






//code for click event
// const productss = getProducts()

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("product")) {
//             const [,productId] = itemClicked.id.split("--")

//             for (const product of productss) {
//                 if (product.id === parseInt(productId)) {
//                     window.alert(`${product.name} costs ${product.price} `)
//                 }
//             }
//         }
//     }
// )

// export const Products = () => {
//     let html = "<ul>"
//     for (const product of productss) {
//         html += `<li id="product--${product.id}">${product.name}</li>`
//     }
//     html += "</ul>"

//     return html
// }

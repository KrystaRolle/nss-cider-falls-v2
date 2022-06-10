const database = {
    guests: [{
        id: 1,
        firstName: 'Yogi',
        lastName: 'Bear',
        sectionId: 2
    },
    {
        id: 2,
        firstName: 'Peter',
        lastName: 'Griffin',
        sectionId: 5
    },
    {
        id: 3,
        firstName: 'Bugz',
        lastName: 'Bunny',
        sectionId: 6
    },
    {
        id: 4,
        firstName: 'Bob',
        lastName: 'Burger',
        sectionId: 6
    },
    {
        id: 5,
        firstName: 'Jill',
        lastName: 'J.',
        sectionId: 4
    }
        // },
        // {
        //     id: 6,
        //     firstName: 'JJ',
        //     lastName: 'J.'
        // }
    ],
    services: [
        {
            id: 1,
            name: 'rafting',

        },
        {
            id: 2,
            name: 'canoeing',

        }, {
            id: 3,
            name: 'fishing',

        }, {
            id: 4,
            name: 'hiking',

        }, {
            id: 5,
            name: 'picniking',

        }, {
            id: 6,
            name: 'rock climbing',

        }, {
            id: 7,
            name: 'hotel',

        }, {
            id: 8,
            name: 'restaurant',

        }, {
            id: 9,
            name: 'parking',

        }, {
            id: 10,
            name: 'information',

        }, {
            id: 11,
            name: 'office park',

        }, {
            id: 12,
            name: "chidren's play area",

        }, {
            id: 13,
            name: 'lodging',

        }, {
            id: 14,
            name: 'Ziplining',

        }, {
            id: 15,
            name: 'food vendor',

        }
    ],
    sections: [
        {
            id: 1,
            name: 'Chamfort River',
        },
        {
            id: 2,
            name: 'Lost Wolf Hiking Trail',
        },
        {
            id: 3,
            name: 'Lodge',
        },
        {
            id: 4,
            name: 'Gander River',
        },
        {
            id: 5,
            name: 'Pine Bluffs Trails',
        }
        ,
        {
            id: 6,
            name: 'Campgrounds',
        }

    ],
    sectionServicesJoin: [
        {
            id: 1,
            sectionId: 1, //chamfort hills
            serviceId: 1 //rafting
        },
        {
            id: 2,
            sectionId: 1, //chamfort hills
            serviceId: 2 //canoeing
        },
        {
            id: 3,
            sectionId: 1, //chamfort hills
            serviceId: 3 //fishing
        }, {
            id: 4,
            sectionId: 2,
            serviceId: 4//hiking
        }, {
            id: 5,
            sectionId: 4,
            serviceId: 4
        }, {
            id: 6,
            sectionId: 5,
            serviceId: 4
        },
        {
            id: 7,
            sectionId: 2,
            serviceId: 5 //picniking
        }, {
            id: 8,
            sectionId: 3,
            serviceId: 5
        },
        {
            id: 9,
            sectionId: 2,
            serviceId: 6 //rock climbing
        },

        {
            id: 10,
            sectionId: 3,
            serviceId: 7 //hotel
        }, {
            id: 11,
            sectionId: 3,
            serviceId: 8 //restaurant
        }, {
            id: 12,
            sectionId: 3,
            serviceId: 9 //parking
        }, {
            id: 13,
            sectionId: 6,
            serviceId: 9
        }, {
            id: 14,
            sectionId: 3,
            serviceId: 10 //information
        }, {
            id: 15,
            sectionId: 6,
            serviceId: 10 //
        }, {
            id: 16,
            sectionId: 6,
            serviceId: 11 //office park
        },
        {
            id: 17,
            sectionId: 6,
            serviceId: 12  //childrens play area
        }, {
            id: 18,
            sectionId: 6,
            serviceId: 13 //lodging
        },
        {
            id: 19,
            sectionId: 5,
            serviceId: 14 //ziplining
        }, {
            id: 20,
            sectionId: 5,
            serviceId: 15 //food vendor
        },
    ]
}


//5 map/getter functions getguests getparks getservices get parkservices getguestsparks
export const getGuests = () => {
    return database.guests.map(information => ({ ...information }))
}
export const getServices = () => {
    return database.services.map(information => ({ ...information }))
}
export const getSections = () => {
    return database.sections.map(information => ({ ...information }))
}
export const getSectionServicesJoin = () => {
    return database.sectionServicesJoin.map(information => ({ ...information }))
}
module.exports = {
    search
}

function search(state) {
    const results = [];
    parkData.data.forEach((park) => {
        if(state.toUpperCase() === park.states) {
            results.push(park);
        }
    })
    return results;
}


const parkData = {
    "total": "497",
    "data": [
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "2024266841",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "national_mall@nps.gov"
                    }
                ]
            },
            "states": "DC",
            "longitude": "-77.025977",
            "activities": [],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "No Entrance Fee to enter park site.",
                    "title": "No Entrance Fee"
                }
            ],
            "directionsInfo": "The memorial is located at the corner of Vermont Avenue, 10th St, and U Street NW, near the U Street/African-American Civil War Memorial/Cardozo Metro Station.",
            "entrancePasses": [
                {
                    "cost": "0.0000",
                    "description": "No Passes",
                    "title": "No Passes"
                }
            ],
            "directionsUrl": "http://www.nps.gov/afam/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/afam/index.htm",
            "weatherInfo": "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter.\n\nSpring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees\n\nSummer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees\n\nFall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees\n\nWinter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees\n\n(Source: www.usclimatedata.com)",
            "name": "African American Civil War Memorial",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The African American Civil War Memorial is always open to the public.  There are no Rangers on duty at this site (except for special events). The United States Park Police are on duty 24 hours a day.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Always Open"
                }
            ],
            "topics": [
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                }
            ],
            "latLong": "lat:38.916554, long:-77.025977",
            "description": "Over 200,000 African-American soldiers and sailors served in the U.S. Army and Navy during the Civil War. Their service helped to end the war and free over four million slaves. The African American Civil War Memorial honors their service and sacrifice.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "Site Statue",
                    "title": "African American Civil War Statue",
                    "caption": "A poignant reminder of our nations past",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C816B50-1DD8-B71B-0BF380049FB6B6A2.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "African American Sailor Close up",
                    "title": "African American Sailor",
                    "caption": "African American Civil War Sailor",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C816C97-1DD8-B71B-0B7B2A0DD09C870A.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "African American Soldier Close up",
                    "title": "African American Soldier",
                    "caption": "African American Civil War Soldier",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C816DF6-1DD8-B71B-0B5D792777650EA4.jpg"
                }
            ],
            "designation": "",
            "parkCode": "afam",
            "addresses": [
                {
                    "postalCode": "20001",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "1925 Vermont Avenue Northwest",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "20024",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "900 Ohio Drive SW",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "1A47416F-DAA3-4137-9F30-14AF86B4E547",
            "fullName": "African American Civil War Memorial",
            "latitude": "38.916554"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "706-823-0440 / 1-888-659-8926",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "706-823-1045",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "mharrison@augustacanal.com"
                    }
                ]
            },
            "states": "GA",
            "longitude": "-82.0053787231445",
            "activities": [
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "A510F02B-8938-4679-A4F9-76580BCAE9C7",
                    "name": "Boat Tour"
                },
                {
                    "id": "5A241412-0CFB-497A-9B5F-0AB8C03CDE72",
                    "name": "Boat Tour"
                },
                {
                    "id": "071BA73C-1D3C-46D4-A53C-00D5602F7F0E",
                    "name": "Boating"
                },
                {
                    "id": "21DB3AFC-8AAC-4665-BC1F-7198C0685983",
                    "name": "Canoeing"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "25FB188F-5AAD-459A-9092-28A9801709FF",
                    "name": "Freshwater Fishing"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "F353A9ED-4A08-456E-8DEC-E61974D0FEB6",
                    "name": "Kayaking"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "4D224BCA-C127-408B-AC75-A51563C42411",
                    "name": "Paddling"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "8D778629-F603-4C50-A121-6F4BB2FE2C4B",
                    "name": "Road Biking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "B3EF12AF-D951-419E-BD3C-6B36CBCC1E16",
                    "name": "Stand Up Paddleboarding"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "While there is no cost to the Augusta Canal National Heritage Area, there are fees for the Discovery Center and Canal Boat Tours.",
                    "title": "Free Entry"
                }
            ],
            "directionsInfo": "To Augusta Canal Discovery Center (1450 Greene Street, Augusta, GA  30901):\nFrom I-20 Exit 200, turn left onto GA-104/Riverwatch Parkway (signs for Downtown Augusta). In approximately 4.5 miles, use the right lane to take the ramp to Downtown Augusta/Medical District. Continue straight onto Greene Street. Continue for approximately 0.4 miles. Enterprise Mill and the Discovery Center will be on your right.",
            "entrancePasses": [],
            "directionsUrl": "http://augustacanal.com/directions.php",
            "url": "https://www.nps.gov/auca/index.htm",
            "weatherInfo": "The weather varies throughout the year and even throughout the day. Please check the National Weather Service information at http://www.weather.gov for forecast information.",
            "name": "Augusta Canal",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "9:30AM - 5:00PM",
                                "monday": "Closed",
                                "thursday": "9:30AM - 5:00PM",
                                "sunday": "Closed",
                                "tuesday": "9:30AM - 5:00PM",
                                "friday": "9:30AM - 5:00PM",
                                "saturday": "9:30AM - 5:00PM"
                            },
                            "startDate": "2017-07-01",
                            "name": "Summer Hours",
                            "endDate": "2017-08-31"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "9:30AM - 5:00PM",
                                "monday": "Closed",
                                "thursday": "9:30AM - 5:00PM",
                                "sunday": "Closed",
                                "tuesday": "9:30AM - 5:00PM",
                                "friday": "9:30AM - 5:00PM",
                                "saturday": "9:30AM - 5:00PM"
                            },
                            "startDate": "2017-12-01",
                            "name": "Winter Hours",
                            "endDate": "2017-03-31"
                        }
                    ],
                    "description": "1450 Greene Street \nAugusta, GA  30901",
                    "standardHours": {
                        "wednesday": "9:30AM - 5:00PM",
                        "monday": "9:30AM - 5:00PM",
                        "thursday": "9:30AM - 5:00PM",
                        "sunday": "1:00PM - 5:00PM",
                        "tuesday": "9:30AM - 5:00PM",
                        "friday": "9:30AM - 5:00PM",
                        "saturday": "9:30AM - 5:00PM"
                    },
                    "name": "Augusta Canal Discovery Center"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "9749E14B-ED9A-4E86-BAEA-CAC7B718F266",
                    "name": "Canals"
                },
                {
                    "id": "DAAD7F5E-9112-45F2-9A27-DA51B639F27E",
                    "name": "Dams"
                },
                {
                    "id": "FE005582-12C5-472C-8229-3CB004DB050E",
                    "name": "Engineering"
                },
                {
                    "id": "AAF8795A-231B-4DA4-B564-AA51C95E72BD",
                    "name": "Factories"
                },
                {
                    "id": "1608649A-E7D7-4529-BD83-074C90F9FB68",
                    "name": "Fish"
                },
                {
                    "id": "0B575E33-B68F-4F3D-998E-B03284606CF3",
                    "name": "Industry"
                },
                {
                    "id": "BD81BF37-14B1-408A-903F-2BF52C8C7927",
                    "name": "Mills"
                },
                {
                    "id": "A155238F-0DD2-4610-9B87-05FCE1C59283",
                    "name": "River and Riparian"
                },
                {
                    "id": "D1CF31DE-AFED-412B-9425-DD1FD4CBB5C7",
                    "name": "Science, Technology and Innovation"
                },
                {
                    "id": "FE2C2613-B41E-4531-BC43-03EB6E45CBCF",
                    "name": "Transportation"
                },
                {
                    "id": "846E5C56-E5AC-489C-B3BF-11F4C73F12C2",
                    "name": "Urban America"
                }
            ],
            "latLong": "lat:33.5099067687988, long:-82.0053787231445",
            "description": "The Augusta Canal helped usher the Industrial Revolution into the American South. Built in 1845 as a source of power, water, and transportation, the canal today is the only fully intact American industrial canal in continuous operation. By 1847 the first mills opened, followed by the massive Civil War era Confederate Powder Works and many more industries in the later decades of the 19th century.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "Petersburg Boat passes Sibley Mill and the chimney of Confederate States Powder Works along the Augu",
                    "title": "Petersburg Boat",
                    "caption": "Petersburg Boat passes Sibley Mill and the chimney of Confederate States Powder Works along the Augusta Canal National Heritage Area",
                    "url": "https://www.nps.gov/common/uploads/structured_data/17CB88D7-1DD8-B71B-0B176D86D21968E8.png"
                }
            ],
            "designation": "National Heritage Area",
            "parkCode": "auca",
            "addresses": [
                {
                    "postalCode": "30901",
                    "city": "Augusta",
                    "stateCode": "GA",
                    "line1": "Augusta Canal National Heritage Area",
                    "type": "Physical",
                    "line3": "",
                    "line2": "1450 Greene Street, Suite 400"
                },
                {
                    "postalCode": "30901",
                    "city": "Augusta",
                    "stateCode": "GA",
                    "line1": "Augusta Canal National Heritage Area",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "1450 Greene Street, Suite 400"
                }
            ],
            "id": "813548D1-F8EA-4C07-8878-17FB3C385378",
            "fullName": "Augusta Canal National Heritage Area",
            "latitude": "33.5099067687988"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "(202) 543-2240",
                        "description": "General visitor inquiries. This phone number is not accessed when the park is closed.",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "General vistor inquiries",
                        "emailAddress": "bepa_info@nps.gov"
                    }
                ]
            },
            "states": "DC",
            "longitude": "-77.00381882",
            "activities": [
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "43800AD1-D439-40F3-AAB3-9FB651FE45BB",
                    "name": "Gift Shop and Souvenirs"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no Entrance Fee to enter this Park.",
                    "title": "No Entrance Fee"
                }
            ],
            "directionsInfo": "The Belmont-Paul Women's Equality NM is located on Capitol Hill at the corner of Constitution Avenue and 2nd Street, NE, next to the Hart Senate Office building. It is a free-standing, federal style brick house surrounded by a black cast-iron fence.\nThe entrance for museum tours and the museum shop is located on 2nd Street with the lift accessible entrance located to the side of the museum next to the Hart Senate Office Building. The doors facing Constitution Avenue are not entrances.",
            "entrancePasses": [
                {
                    "cost": "0.0000",
                    "description": "Passes are not required to enter this Park. \n\nFor groups of 10 people or more, please contact us at 202-543-2240 to schedule your visit.",
                    "title": "No Passes Required"
                }
            ],
            "directionsUrl": "http://www.nps.gov/bepa/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/bepa/index.htm",
            "weatherInfo": "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
            "name": "Belmont-Paul Women's Equality",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2020-03-14",
                            "name": "Closed Due to COVID-19",
                            "endDate": "2020-05-31"
                        }
                    ],
                    "description": "Tours of the museum are available Wednesday - Sunday at 11:00 AM and 2:00 PM Programs are about one hour in duration. No reservations are required for individuals or groups of fewer than 10 people. \n\nTo schedule a visit for a group of 10 or more, please contact us at 202-543-2240 or bepa_info@nps.gov",
                    "standardHours": {
                        "wednesday": "9:00AM - 5:00PM",
                        "monday": "Closed",
                        "thursday": "9:00AM - 5:00PM",
                        "sunday": "9:00AM - 5:00PM",
                        "tuesday": "Closed",
                        "friday": "9:00AM - 5:00PM",
                        "saturday": "9:00AM - 5:00PM"
                    },
                    "name": "Guided Tours"
                },
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2020-03-14",
                            "name": "Closed Due to COVID-19",
                            "endDate": "2020-05-31"
                        }
                    ],
                    "description": "Self-guided tours of the museum are available Wednesday - Sunday from 9:00 am to 5:00 pm. Ranger-led tours of the exhibits are offered at 11:00 am and 2:00 pm. No reservations required for groups of less than 10 people. For groups of 10 or more, please contact us at (202) 543-2240 or bepa_info@nps.gov",
                    "standardHours": {
                        "wednesday": "9:00AM - 5:00PM",
                        "monday": "Closed",
                        "thursday": "9:00AM - 5:00PM",
                        "sunday": "9:00AM - 5:00PM",
                        "tuesday": "Closed",
                        "friday": "9:00AM - 5:00PM",
                        "saturday": "9:00AM - 5:00PM"
                    },
                    "name": "Belmont Paul Women's Equality National Monument"
                }
            ],
            "topics": [
                {
                    "id": "8F34C3EC-7B8E-4F28-8114-B8DFE4F300DF",
                    "name": "Civil Rights"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                },
                {
                    "id": "DA1E6678-D60D-4E66-96A5-78183342673B",
                    "name": "Voting Rights and Suffrage"
                },
                {
                    "id": "7DA81DAB-5045-4953-9C20-36590AD9FA95",
                    "name": "Women's History"
                }
            ],
            "latLong": "lat:38.89231541, long:-77.00381882",
            "description": "Home to the National Woman's Party for nearly 90 years, this was the epicenter of the struggle for women's rights. From this house in the shadow of the U.S. Capitol and Supreme Court, Alice Paul and the NWP developed innovative strategies and tactics to advocate for the Equal Rights Amendment and equality for women. President Barack Obama designated the national monument on April 12, 2016.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "Belmont-Paul Women's Equality NM House",
                    "title": "Belmont-Paul Women's Equality NM House",
                    "caption": "411th Unit of the National Park Service",
                    "url": "https://www.nps.gov/common/uploads/structured_data/6E4F7F3F-1DD8-B71B-0BBDE514BEF76FDF.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Suffrage Banner",
                    "title": "Suffrage Banner",
                    "caption": "Calling out for Women Suffrage",
                    "url": "https://www.nps.gov/common/uploads/structured_data/9D4A4DD0-1DD8-B71B-0BF6DF9405E5BC27.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Stained Glass Entrance",
                    "title": "Stained Glass Entrance",
                    "caption": "Entry way beauty",
                    "url": "https://www.nps.gov/common/uploads/structured_data/9D5C0E5A-1DD8-B71B-0BBDD767A7BEE294.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Thinking Woman Statue",
                    "title": "Thinking Woman Statue",
                    "caption": "A moment of repose",
                    "url": "https://www.nps.gov/common/uploads/structured_data/9D7C5824-1DD8-B71B-0B25227D25F19408.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Susan B. Anthony's Desk",
                    "title": "Susan B. Anthony's Desk",
                    "caption": "To write a letter...",
                    "url": "https://www.nps.gov/common/uploads/structured_data/9D84D528-1DD8-B71B-0B6E904FFF508773.jpg"
                }
            ],
            "designation": "National Monument",
            "parkCode": "bepa",
            "addresses": [
                {
                    "postalCode": "20002",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "144 Constitution Ave NE",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "20024",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "900 Ohio Drive SW",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "E7E4E103-5FA9-45AC-8843-05DE554CDBB7",
            "fullName": "Belmont-Paul Women's Equality National Monument",
            "latitude": "38.89231541"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "2396952000",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "2396953901",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "bicy_information@nps.gov"
                    }
                ]
            },
            "states": "FL",
            "longitude": "-81.08120629",
            "activities": [
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
                    "name": "Astronomy"
                },
                {
                    "id": "BBC79C28-EBA7-4CE9-8614-02D00AA21558",
                    "name": "ATV Off-Roading"
                },
                {
                    "id": "5F723BAD-7359-48FC-98FA-631592256E35",
                    "name": "Auto and ATV"
                },
                {
                    "id": "4A58AF13-E8FB-4530-B41A-97DF0B0C77B7",
                    "name": "Backcountry Camping"
                },
                {
                    "id": "7C37B79B-D02D-49EB-9020-3DB8299B748A",
                    "name": "Backcountry Hiking"
                },
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "5A241412-0CFB-497A-9B5F-0AB8C03CDE72",
                    "name": "Boat Tour"
                },
                {
                    "id": "A510F02B-8938-4679-A4F9-76580BCAE9C7",
                    "name": "Boat Tour"
                },
                {
                    "id": "071BA73C-1D3C-46D4-A53C-00D5602F7F0E",
                    "name": "Boating"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "21DB3AFC-8AAC-4665-BC1F-7198C0685983",
                    "name": "Canoeing"
                },
                {
                    "id": "9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA",
                    "name": "Car or Front Country Camping"
                },
                {
                    "id": "FAED7F97-3474-4C21-AB42-FB0768A2F826",
                    "name": "Cultural Demonstrations"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "25FB188F-5AAD-459A-9092-28A9801709FF",
                    "name": "Freshwater Fishing"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "8286295F-0932-4491-9350-280C9848E6AB",
                    "name": "Gathering and Foraging"
                },
                {
                    "id": "7CFF5F03-5ECC-4F5A-8572-75D1F0976C0C",
                    "name": "Group Camping"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "25559F45-F162-4B8B-BEC2-B341034A2AF4",
                    "name": "Hunting"
                },
                {
                    "id": "8386EEAF-985F-4DE8-9037-CCF91975AC94",
                    "name": "Hunting and Gathering"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "F353A9ED-4A08-456E-8DEC-E61974D0FEB6",
                    "name": "Kayaking"
                },
                {
                    "id": "299CB934-88DC-474F-A33D-E43E29A149C2",
                    "name": "Mountain Biking"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "4D224BCA-C127-408B-AC75-A51563C42411",
                    "name": "Paddling"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "C5C5971C-E325-4CEB-8C81-EE49A881DF17",
                    "name": "RV Camping"
                },
                {
                    "id": "0B4A5320-216D-451A-9990-626E1D5ACE28",
                    "name": "Scenic Driving"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "D37A0003-8317-4F04-8FB0-4CF0A272E195",
                    "name": "Stargazing"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no entrance fee for Big Cypress National Preserve",
                    "title": "Entrance Fee"
                }
            ],
            "directionsInfo": "Big Cypress is located along the Tamiami Trail East and I-75 in southern Florida.  The preserve can be accessed by driving from Miami and Naples. The preserves two visitor centers are located along Tamiami Trail East.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/bicy/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/bicy/index.htm",
            "weatherInfo": "Big Cypress National Preserve experiences two predominant seasons- wet and dry.\n\nRAINY SEASON\n(May through October)\nWhile visiting during this season you may find daily afternoon thunderstorms, high humidity, temperatures in the mid - to - high 80s and a multitude of mosquitoes. \n\nDRY SEASON\n(November through April)\nFalling water levels within the Big Cypress make this a pleasant time to hike, camp, and watch wildlife.\n\nFor more information visit http://www.nps.gov/bicy/planyourvisit/weather.htm",
            "name": "Big Cypress",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {},
                            "startDate": "2020-04-03",
                            "name": "Closed Due to COVID-19",
                            "endDate": "2020-04-30"
                        },
                        {
                            "exceptionHours": {},
                            "startDate": "2020-03-17",
                            "name": "Closed Due to COVID-19",
                            "endDate": "2020-04-30"
                        }
                    ],
                    "description": "The preserve is open 24 hours a day 365 days a year.  The Oasis Visitor Center and the Welcome Center are closed on December 25th. No fee is charged for access to the preserve.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Big Cypress National Preserve"
                },
                {
                    "exceptions": [],
                    "description": "The Preserve has closed all campgrounds and associated restrooms in alignment with the Governor's safer at home executive order. All visitor centers are also closed and ranger programs cancelled until further notice.",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "Big Cypress National Preserve COVID-19 Closures and Restrictions"
                }
            ],
            "topics": [
                {
                    "id": "921D1471-5F6B-47D5-918D-389E7106083A",
                    "name": "Alligators or Crocodiles"
                },
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
                    "name": "Arts"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "2539614A-9646-446E-8251-34D3AAE068FA",
                    "name": "Cats (wild)"
                },
                {
                    "id": "489D6333-FD72-44DF-83B0-3D4412DD0A75",
                    "name": "Endangered"
                },
                {
                    "id": "F79C1242-80FF-40F0-A0C1-5FFCBA172EC0",
                    "name": "Estuaries and Mangroves"
                },
                {
                    "id": "04A39AB8-DD02-432F-AE5F-BA1267D41A0D",
                    "name": "Fire"
                },
                {
                    "id": "41B1A0A3-11FF-4F55-9CB9-034A7E28B087",
                    "name": "Forests and Woodlands"
                },
                {
                    "id": "4BE01DC5-52E6-4F18-8C9A-B22D65965F6D",
                    "name": "Groundwater"
                },
                {
                    "id": "A7359FC4-DAD8-45F5-AF15-7FF62F816ED3",
                    "name": "Night Sky"
                },
                {
                    "id": "A155238F-0DD2-4610-9B87-05FCE1C59283",
                    "name": "River and Riparian"
                },
                {
                    "id": "78E4F4AC-AF97-435A-8C2C-7FB8D67516ED",
                    "name": "Unique Species"
                },
                {
                    "id": "BA12B386-49EA-46B0-9121-FCACACC47538",
                    "name": "Watersheds"
                }
            ],
            "latLong": "lat:25.97079602, long:-81.08120629",
            "description": "The freshwaters of the Big Cypress Swamp, essential to the health of the neighboring Everglades, support the rich marine estuaries along Florida's southwest coast. Protecting over 729,000 acres of this vast swamp, Big Cypress National Preserve contains a mixture of tropical and temperate plant communities that are home to a diversity of wildlife, including the elusive Florida panther.",
            "images": [
                {
                    "credit": "John Kellam",
                    "altText": "a Florida Panther sits in a tree",
                    "title": "Florida Panther",
                    "caption": "The Florida Panther is one of the most iconic animals of Big Cypress",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C87C79D-1DD8-B71B-0BB51B9A589AEC2D.jpg"
                },
                {
                    "credit": "Al Sunshine",
                    "altText": "Two Alligators rest on a river bank",
                    "title": "Alligators of Big Cypress",
                    "caption": "Two Alligators rest on a river bank",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C87C8DD-1DD8-B71B-0B0027F88F090A39.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "two visitors in a canoe go through mangrove tunnels on the Turner River",
                    "title": "Canoeing through mangrove tunnels",
                    "caption": "Canoeing is one of the many activities you can enjoy in Big Cypress",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C87CBC3-1DD8-B71B-0B1A0639FD11D95E.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "A prairie foreground with tall pine trees in the background. A large blue sky with white cloud",
                    "title": "Prairies and Pine Lands in Big Cypress",
                    "caption": "large open expanses of prairie bordered by pine lands create stunning landscapes",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C87CCCC-1DD8-B71B-0B54E8FBA86B93C2.jpg"
                },
                {
                    "credit": "Richard Eskin",
                    "altText": "palm trees emerge out of the fog in an orange sunrise",
                    "title": "Sunrise in Big Cypress",
                    "caption": "palm trees emerge out of the fog as an orange sunrise dots the landscape",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C87CDFC-1DD8-B71B-0B810266A3A23068.jpg"
                }
            ],
            "designation": "National Preserve",
            "parkCode": "bicy",
            "addresses": [
                {
                    "postalCode": "34141",
                    "city": "Ochopee",
                    "stateCode": "FL",
                    "line1": "33100 Tamiami Trail East",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "34141",
                    "city": "Ochopee",
                    "stateCode": "FL",
                    "line1": "33000 Tamiami Trail East",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "34141",
                    "city": "Ochopee",
                    "stateCode": "FL",
                    "line1": "33100 Tamiami Trail East",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "E0F4D5E3-3E4A-4345-B86A-1B0CAD7461F1",
            "fullName": "Big Cypress National Preserve",
            "latitude": "25.97079602"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "4358345322",
                        "description": "Phones are answered and messages returned as soon as possible as staffing allows.",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "4358344703",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "brca_information@nps.gov"
                    }
                ]
            },
            "states": "UT",
            "longitude": "-112.1826689",
            "activities": [
                {
                    "id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
                    "name": "Astronomy"
                },
                {
                    "id": "7C37B79B-D02D-49EB-9020-3DB8299B748A",
                    "name": "Backcountry Hiking"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "EAB1EBDE-5B72-493F-8F8F-0EE5B1724436",
                    "name": "Cross-Country Skiing"
                },
                {
                    "id": "E53E1320-9B17-41DC-86A5-37EB7D622572",
                    "name": "Dining"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "0307955A-B65C-4CE4-A780-EB36BAAADF0B",
                    "name": "Horse Trekking"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "F9B1D433-6B86-4804-AED7-B50A519A3B7C",
                    "name": "Skiing"
                },
                {
                    "id": "01D717BC-18BB-4FE4-95BA-6B13AD702038",
                    "name": "Snowshoeing"
                },
                {
                    "id": "D37A0003-8317-4F04-8FB0-4CF0A272E195",
                    "name": "Stargazing"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "35.0000",
                    "description": "Admits private, non-commercial vehicle (15 passenger capacity or less) and all occupants to Bryce Canyon National Park. Includes unlimited use of the Shuttle during its operating season.",
                    "title": "Private Vehicle - Valid for 7 days"
                },
                {
                    "cost": "20.0000",
                    "description": "Admits one individual with no car to Bryce Canyon National Park. Typically used for bicyclists, hikers and pedestrians. Youth 15 and under are admitted free. Includes unlimited use of the Shuttle during its operating season.",
                    "title": "Per Person - Valid for 7 days"
                },
                {
                    "cost": "30.0000",
                    "description": "Admits one non-commercial motorcycle to Bryce Canyon National Park. Includes unlimited use of the Shuttle during its operating season.",
                    "title": "Motorcycle - Valid for 7 days"
                },
                {
                    "cost": "30.0000",
                    "description": "Vehicle fee of $30 plus a per-person fee of $20 for those 16 years of age and older, not-to-exceed $50.",
                    "title": "Road-based Commercial Tour (vehicle up to six seats)"
                },
                {
                    "cost": "50.0000",
                    "description": "Flat fee.",
                    "title": "Road-based Commercial Tour (vehicle 7-15 seats, regardless of occupancy)"
                },
                {
                    "cost": "60.0000",
                    "description": "Flat fee.",
                    "title": "Road-based Commercial Tour (vehicle 16-25 seats, regardless of occupancy)"
                },
                {
                    "cost": "150.0000",
                    "description": "Flat fee.",
                    "title": "Road-based Commercial Tour (vehicle 26 or more seats, regardless of occupancy)"
                }
            ],
            "directionsInfo": "From the North:\nTake I-15 south to UT-20 (exit 95). Travel east on UT-20 to US-89. Follow US-89 south to UT-12. Travel east on UT-12 to UT-63. Take UT-63 south to Bryce Canyon National Park.\n\nFrom the South through Zion National Park:\nTake I-15 north to UT-9 (exit 16). Follow UT-9 east through Zion National Park to US-89. Travel north on US-89 to UT-12. Go east on UT-12 to UT-63. Take UT-63 south to Bryce Canyon National Park.",
            "entrancePasses": [
                {
                    "cost": "40.0000",
                    "description": "Valid for twelve months from the date of purchase, for unlimited visits to Bryce Canyon National Park. It admits the purchaser and any accompanying persons in a single, private, non-commercial vehicle, or the purchaser and accompanying immediate family (spouse, children, parents) when entry is by other means (shuttle, bicycle, and foot). This pass covers entrance fees only and is not refundable and/or transferable.",
                    "title": "Bryce Canyon Annual Pass"
                },
                {
                    "cost": "80.0000",
                    "description": "Annual pass covering entrance and standard amenity fees for national parks and other federal fee areas, valid for 12 months from date of purchase. This replaces the National Parks Pass and Golden Eagle Pass.",
                    "title": "America the Beautiful—National Parks and Federal Recreational Lands Annual Pass"
                },
                {
                    "cost": "80.0000",
                    "description": "Lifetime pass covering entrance and standard amenity fees for national parks and other federal fee areas for US citizens or permanent residents who are age 62 or older.",
                    "title": "Senior Lifetime Pass"
                },
                {
                    "cost": "20.0000",
                    "description": "Annual pass covering entrance and standard amenity fees for national parks and other federal fee areas for US citizens or permanent residents who are age 62 or older. Valid for 12 months from date of purchase.",
                    "title": "Senior Annual Pass"
                },
                {
                    "cost": "0.0000",
                    "description": "Lifetime admission and discount pass for US citizens or permanent residents with permanent disabilities.",
                    "title": "Access Pass"
                },
                {
                    "cost": "0.0000",
                    "description": "Annual pass covering entrance and standard amenity fees for all active US military personnel and their dependents, valid for 12 months from date of issuance. (For active duty military personnel and dependents with proper identification (CAC Card or DD Form 1173).)",
                    "title": "Annual Pass for US Military"
                },
                {
                    "cost": "0.0000",
                    "description": "Annual pass covering entrance fees for 4th grade students for the school year.",
                    "title": "Annual 4th Grade Pass"
                }
            ],
            "directionsUrl": "http://www.nps.gov/brca/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/brca/index.htm",
            "weatherInfo": "Due of its high elevation climate, weather at Bryce Canyon through autumn, winter, and spring can be highly variable. From October to May temperatures fall below freezing nearly every night. The park typically experiences its coldest and snowiest periods from December through February. Spring storms in March and April can still produce heavy snowfall that may impact travel in the region. Summer highs are typically in the 70s-80s F and afternoon thunderstorms are common in July and August.",
            "name": "Bryce Canyon",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Visitor Center and Fee Booths are closed on Thanksgiving and Christmas Day.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Park is Open 24-7"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "E06F3C94-AC8A-4B1C-A247-8EBA8910D5EE",
                    "name": "Astronomy"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "2539614A-9646-446E-8251-34D3AAE068FA",
                    "name": "Cats (wild)"
                },
                {
                    "id": "F0F97E32-2F29-41B4-AF98-9FBE8DAB36B1",
                    "name": "Geology"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "A7359FC4-DAD8-45F5-AF15-7FF62F816ED3",
                    "name": "Night Sky"
                },
                {
                    "id": "4244F489-6813-4B7A-9D0C-20CE098C8FFF",
                    "name": "Rock Landscapes and Features"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                }
            ],
            "latLong": "lat:37.58399144, long:-112.1826689",
            "description": "Hoodoos (irregular columns of rock) exist on every continent, but here is the largest concentration found anywhere on Earth. Situated along a high plateau at the top of the Grand Staircase, the park's high elevations include numerous life communities, fantastic dark skies, and geological wonders that defy description.",
            "images": [
                {
                    "credit": "NPS Photo / Brian B. Roanhorse February 24, 2015",
                    "altText": "Bryce Canyon Visitor Center Toll booths in winter.",
                    "title": "Bryce Canyon Visitor Center Toll Booths",
                    "caption": "Opening the gates at Bryce Canyon National Park under snow.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F8B29-1DD8-B71B-0B5EA38E8C5E5606.jpg"
                },
                {
                    "credit": "NPS Photo / Brian B. Roanhorse February 28, 2015",
                    "altText": "Snow on the Queens Garden Trail.",
                    "title": "Snow blanket On Queens Garden",
                    "caption": "Trail to Queens Garden is exceptional any day of the year.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F8EAD-1DD8-B71B-0B080143E3A4984D.jpg"
                },
                {
                    "credit": "Brian B. Roanhorse March 4, 2015",
                    "altText": "Orange Hoodoos under snow cover.",
                    "title": "Mossy Cave in Winter",
                    "caption": "Orange is the new look at Bryce.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F9378-1DD8-B71B-0B4B29598AA967F4.jpg"
                },
                {
                    "credit": "NPS Photo / Brian B. Roanhorse March 13, 2015",
                    "altText": "Early morning snow at Thor' Hammer.",
                    "title": "Thor's Hammer in Winter",
                    "caption": "Clear skys and snow drifts at Thor's Hammer.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F9538-1DD8-B71B-0BA12D1447D43CE4.jpg"
                },
                {
                    "credit": "Photographed by Brian B. Roanhorse NPS",
                    "altText": "Paria View Point at Sunrise",
                    "title": "Paria View Point at Sunrise",
                    "caption": "Paria View at sunrise.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C83D7D0-1DD8-B71B-0B799F6F8D0902D8.jpg"
                }
            ],
            "designation": "National Park",
            "parkCode": "brca",
            "addresses": [
                {
                    "postalCode": "84764",
                    "city": "Bryce",
                    "stateCode": "UT",
                    "line1": "P.O Box 640201",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "84764",
                    "city": "Bryce",
                    "stateCode": "UT",
                    "line1": "Highway 63",
                    "type": "Physical",
                    "line3": "",
                    "line2": "Bryce Canyon National Park"
                }
            ],
            "id": "6B1D053D-714F-46D1-B410-04BE868F14C1",
            "fullName": "Bryce Canyon National Park",
            "latitude": "37.58399144"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "(859) 881-5716",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "cane_information@nps.gov"
                    }
                ]
            },
            "states": "KY",
            "longitude": "-84.5981683059999",
            "activities": [
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "No entrance fee is charged to visit the park.",
                    "title": "Camp Nelson National Monument"
                }
            ],
            "directionsInfo": "Camp Nelson National Monument is located along US 27 about 20 miles south of Lexington, Kentucky, 6 miles south of Nicholasville on US 27, and 7.5 miles southeast of Wilmore along US 1268. The Park entrance is on the original Danville Pike, adjacent to US 27, one mile north of the Camp Nelson National Cemetery.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/cane/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/cane/index.htm",
            "weatherInfo": "Kentucky has a moderate climate, characterized by warm, yet moist conditions. Summers are usually warm, and winters cool. Kentucky's weather patterns are influenced by the Gulf of Mexico, especially during summer. Spring and summer are the rainiest seasons, though storms occur year-round. Most storms occur between March and September.",
            "name": "Camp Nelson",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "thursday": "Closed"
                            },
                            "startDate": "2018-11-22",
                            "name": "Thanksgiving",
                            "endDate": "2018-11-22"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-12-25",
                            "name": "Christmas",
                            "endDate": "2018-12-25"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-05-28",
                            "name": "Memorial Day",
                            "endDate": "2018-05-28"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-01-01",
                            "name": "New Year's Day",
                            "endDate": "2018-01-01"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-09-03",
                            "name": "Labor Day",
                            "endDate": "2018-09-03"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-02-18",
                            "name": "Presidents Day",
                            "endDate": "2018-02-18"
                        }
                    ],
                    "description": "Camp Nelson Interpretive Center is open Tuesday through Saturday from 9:00 AM to 5:00 PM EST. The grounds, including nearly 4 miles of unpaved trails and dozens of wayside exhibits explaining the significance of Camp Nelson, are open seven days a week from dawn to dusk. The national monument is closed for most major holidays. Please call in advance to confirm hours of operation.",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "Camp Nelson National Monument"
                }
            ],
            "topics": [
                {
                    "id": "5CCB14BC-2AC4-45CE-B786-54A065DA1B60",
                    "name": "Abolition Movement"
                },
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "607D41B0-F830-4C07-A557-BCEF880A3929",
                    "name": "Burial, Cemetery and Gravesite"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "D9FC6D14-F8C7-4EBA-86EA-DFD99B6BB4F5",
                    "name": "Enslavement"
                },
                {
                    "id": "E411F474-A530-4804-9D23-1D94C78B41E4",
                    "name": "Infantry and Militia"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "570E8E93-3A49-45FB-B11A-F2F984EAC862",
                    "name": "National Cemetery"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                }
            ],
            "latLong": "lat:37.7970179912726, long:-84.5981683059999",
            "description": "Established as a Union supply depot and hospital during the Civil War, Camp Nelson became a recruitment and training center for African American soldiers, and a refugee camp for their wives and children. Thousands of slaves risked their lives escaping to this site with the hope of securing their freedom and, ultimately, controlling their futures by aiding in the destruction of slavery.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "The visitor center building",
                    "title": "Camp Nelson Civil War Heritage Park Visitor Center",
                    "caption": "The Camp Nelson Civil War Heritage Park Visitor Center",
                    "url": "https://www.nps.gov/common/uploads/structured_data/AA1FDA35-B4C4-E3B1-0ACCD6ABAD52B620.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "A row of rough, wooden bunk beds in the soldiers' barrack house.",
                    "title": "Interior of Soldiers' Barrack Building",
                    "caption": "Visit the barracks to imagine life at Camp Nelson during the Civil War.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/AA4128C7-0BE7-FF64-77C780E3D922AF62.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "A white, 2 story farm house with a Civil War cannon sitting in front of it",
                    "title": "Perry House",
                    "caption": "The Perry House at Camp Nelson",
                    "url": "https://www.nps.gov/common/uploads/structured_data/AA6B7615-AE22-7890-A0DD3E829F771918.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "African American Civil War soldiers stand at attention outside their barracks.",
                    "title": "United States Colored Troops at Camp Nelson, KY during the Civil War",
                    "caption": "African American Civil War soldiers fighting for the Union stand at attention outside their barracks at Camp Nelson, KY.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/7E9967CB-F590-F434-375F758A63F9A9E8.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Open fields and earth works at Camp Nelson",
                    "title": "Open fields and earth works at Camp Nelson National Monument in Kentucky.",
                    "caption": "Open fields and earth works at Camp Nelson National Monument in Kentucky.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/7EBA8763-F7B5-5B84-1C9DB354CF30C795.jpg"
                }
            ],
            "designation": "National Monument",
            "parkCode": "cane",
            "addresses": [
                {
                    "postalCode": "40356",
                    "city": "Nicholasville",
                    "stateCode": "KY",
                    "line1": "6614 Old Danville Road",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "Loop 2"
                },
                {
                    "postalCode": "40356",
                    "city": "Nicholasville",
                    "stateCode": "KY",
                    "line1": "6614 Danville Road",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "2FB7A664-0F66-49A3-9460-194F4073BA3F",
            "fullName": "Camp Nelson National Monument",
            "latitude": "37.7970179912726"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "5082553421",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "caco_superintendent@nps.gov"
                    }
                ]
            },
            "states": "MA",
            "longitude": "-70.04319832",
            "activities": [
                {
                    "id": "BBC79C28-EBA7-4CE9-8614-02D00AA21558",
                    "name": "ATV Off-Roading"
                },
                {
                    "id": "5F723BAD-7359-48FC-98FA-631592256E35",
                    "name": "Auto and ATV"
                },
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "3DE599E2-22ED-40BF-B383-EDA073563C1E",
                    "name": "Bus/Shuttle Guided Tour"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "256543C7-4322-48B3-8978-765E89AA9431",
                    "name": "Canoe or Kayak Camping"
                },
                {
                    "id": "21DB3AFC-8AAC-4665-BC1F-7198C0685983",
                    "name": "Canoeing"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "3F3ABD16-2C52-4EAA-A1F6-4235DE5686F0",
                    "name": "Golfing"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "237A1662-6018-4115-ABD1-B8CCF827E703",
                    "name": "Historic Weapons Demonstration"
                },
                {
                    "id": "25559F45-F162-4B8B-BEC2-B341034A2AF4",
                    "name": "Hunting"
                },
                {
                    "id": "8386EEAF-985F-4DE8-9037-CCF91975AC94",
                    "name": "Hunting and Gathering"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "F353A9ED-4A08-456E-8DEC-E61974D0FEB6",
                    "name": "Kayaking"
                },
                {
                    "id": "B204DE60-5A24-43DD-8902-C81625A09A74",
                    "name": "Living History"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "4D224BCA-C127-408B-AC75-A51563C42411",
                    "name": "Paddling"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "C5C5971C-E325-4CEB-8C81-EE49A881DF17",
                    "name": "RV Camping"
                },
                {
                    "id": "17411C8D-5769-4D0F-ABD1-52ED03840C18",
                    "name": "Saltwater Fishing"
                },
                {
                    "id": "C2801992-F34D-4974-A0F2-80FF04309EE4",
                    "name": "Saltwater Swimming"
                },
                {
                    "id": "3EBF7EAC-68FC-4754-B6A4-0C38A1583D45",
                    "name": "Snorkeling"
                },
                {
                    "id": "01D717BC-18BB-4FE4-95BA-6B13AD702038",
                    "name": "Snowshoeing"
                },
                {
                    "id": "B3EF12AF-D951-419E-BD3C-6B36CBCC1E16",
                    "name": "Stand Up Paddleboarding"
                },
                {
                    "id": "AE3C95F5-E05B-4A28-81DD-1C5FD4BE88E2",
                    "name": "Surfing"
                },
                {
                    "id": "587BB2D3-EC35-41B2-B3F7-A39E2B088AEE",
                    "name": "Swimming"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "20.0000",
                    "description": "Fees are collected at six beaches from late spring through the end of September. Daily fees: vehicles, $20; motorcycles, $15; walk-in, $10. Annual national seashore pass is $60.",
                    "title": "Beach Entrance Fee"
                }
            ],
            "directionsInfo": "The national seashore is located in eastern Massachusetts and is accessed via Rt. 6. The park is 20 miles east of Hyannis, MA.",
            "entrancePasses": [
                {
                    "cost": "60.0000",
                    "description": "Pass entitles free entry into the six national seashore beaches for the season. The pass is assigned to a single vehicle, and may not be transferred to another vehicle.",
                    "title": "Annual Entrance Pass to Cape Cod National Seashore"
                },
                {
                    "cost": "20.0000",
                    "description": "Pass provides entrance into six beaches for one day. Multiple beaches managed by the national seashore can be visited in one day using the same pass. Passes may not be transferred to other vehicles.",
                    "title": "Daily Entrance Fee for Cape Cod National Seashore"
                }
            ],
            "directionsUrl": "http://www.nps.gov/caco/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/caco/index.htm",
            "weatherInfo": "Cape Cod's weather is generally moderated by its proximity to the ocean. Winter is typically cold with some snow. Spring is often rainy. Summer is usually warm and humid. Fall is generally dry and clear.",
            "name": "Cape Cod",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Beaches, parking areas, and trails are open year-round between 6:00 am and midnight.",
                    "standardHours": {
                        "wednesday": "Opens at 6:00AM",
                        "monday": "Opens at 6:00AM",
                        "thursday": "Opens at 6:00AM",
                        "sunday": "Opens at 6:00AM",
                        "tuesday": "Opens at 6:00AM",
                        "friday": "Opens at 6:00AM",
                        "saturday": "Opens at 6:00AM"
                    },
                    "name": "Cape Cod National Seashore"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
                    "name": "Arts"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "4DC11D06-00F1-4A01-81D0-89CCCCE4FF50",
                    "name": "Climate Change"
                },
                {
                    "id": "46FC5CBD-9AD5-48F1-B4DA-1357031B1D2E",
                    "name": "Coasts, Islands and Atolls"
                },
                {
                    "id": "7F12224B-217A-4B07-A4A2-636B1CE7F221",
                    "name": "Colonization and Settlement"
                },
                {
                    "id": "CDD8F34E-3BD4-425A-8264-4F0BA0DFBA38",
                    "name": "Dunes"
                },
                {
                    "id": "F79C1242-80FF-40F0-A0C1-5FFCBA172EC0",
                    "name": "Estuaries and Mangroves"
                },
                {
                    "id": "1608649A-E7D7-4529-BD83-074C90F9FB68",
                    "name": "Fish"
                },
                {
                    "id": "4BE01DC5-52E6-4F18-8C9A-B22D65965F6D",
                    "name": "Groundwater"
                },
                {
                    "id": "263BAC6E-4DEC-47E4-909D-DA8AD351E06E",
                    "name": "Lighthouses"
                },
                {
                    "id": "4C9D4777-A9DA-47D1-A0B9-F4A3C98BC1B3",
                    "name": "Maritime"
                },
                {
                    "id": "FD0BA21A-5F69-4688-9D4B-856DA242DC78",
                    "name": "Marshes"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "F8C2FE93-DEB3-4B12-9A87-913E3E6B448D",
                    "name": "Natural Sounds"
                },
                {
                    "id": "0E6D8503-CB65-467F-BCD6-C6D9E28A4E0B",
                    "name": "Oceans"
                },
                {
                    "id": "05B7868A-3F3C-433D-876E-A886C4BE7A12",
                    "name": "Painting"
                },
                {
                    "id": "156AD9B6-B377-418C-BC9A-F6E682D4BAF7",
                    "name": "Poetry and Literature"
                },
                {
                    "id": "D1CF31DE-AFED-412B-9425-DD1FD4CBB5C7",
                    "name": "Science, Technology and Innovation"
                },
                {
                    "id": "A079385C-3E71-4E18-9E42-B046BC22EA95",
                    "name": "Ships and Shipwrecks"
                },
                {
                    "id": "393F60FB-80D6-46F7-B0FB-BBF3C90F59FD",
                    "name": "Tortoises and Turtles"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "D164D82F-4031-4BCB-90A8-B388502CA308",
                    "name": "US Coast Guard"
                },
                {
                    "id": "1365C347-952C-475A-B755-731DD523C195",
                    "name": "Wetlands"
                },
                {
                    "id": "980D1693-65BF-4F29-8182-7BAC9796E605",
                    "name": "Whales"
                }
            ],
            "latLong": "lat:41.92381465, long:-70.04319832",
            "description": "The great Outer Beach described by Thoreau in the 1800s is protected within the national seashore. Forty miles of pristine sandy beach, marshes, ponds, and uplands support diverse species. Lighthouses, cultural landscapes, and wild cranberry bogs offer a glimpse of Cape Cod's past and continuing ways of life. Swimming beaches and walking and biking trails beckon today's visitors.",
            "images": [
                {
                    "credit": "NPS image",
                    "altText": "Pink surise and waves",
                    "title": "Outer beach",
                    "caption": "Many visitors rise early to watch the sun rise over the Atlantic.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C853027-1DD8-B71B-0B7E332E35FF7626.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "Water makes an impression in the sand",
                    "title": "Sand and Water",
                    "caption": "A walk on a Cape Cod beach is never the same twice.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C8531C0-1DD8-B71B-0BE3CAF8B7CFED72.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "The front of a red kayak floating on a pond points towards a forest with red and orange leaves",
                    "title": "Exploring the Park by Water",
                    "caption": "Exploring the park by water provides a different perspective on the land.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C853320-1DD8-B71B-0B079D55D788EEAD.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "A flock of bird flies by a beach with waves",
                    "title": "Birds and Beach",
                    "caption": "The national seashore is known for its species diversity, including threatened and endangered birds.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85349E-1DD8-B71B-0B20658295A3DE59.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "A park ranger with a bucket and net walks on a sandy path with a boy and a man.",
                    "title": "Fish, Snails, and Horseshoe Crab Tales",
                    "caption": "Rangers and visitors explore the park together during dozens of programs every week during the summer.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85363D-1DD8-B71B-0B947E86974A478B.jpg"
                }
            ],
            "designation": "National Seashore",
            "parkCode": "caco",
            "addresses": [
                {
                    "postalCode": "02667",
                    "city": "Wellfleet",
                    "stateCode": "MA",
                    "line1": "99 Marconi Site Road",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "02667",
                    "city": "Wellfleet",
                    "stateCode": "MA",
                    "line1": "99 Marconi Site Road",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "DE0A8012-5324-4F5C-98DA-0EE6589FDFB3",
            "fullName": "Cape Cod National Seashore",
            "latitude": "41.92381465"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "8438815516",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "8438817070",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "chpi_information@nps.gov"
                    }
                ]
            },
            "states": "SC",
            "longitude": "-79.82487582",
            "activities": [
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "A510F02B-8938-4679-A4F9-76580BCAE9C7",
                    "name": "Boat Tour"
                },
                {
                    "id": "071BA73C-1D3C-46D4-A53C-00D5602F7F0E",
                    "name": "Boating"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "31F88DA6-696F-441F-89CF-D7B1415C4CB9",
                    "name": "Citizen Science"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A",
                    "name": "Hands-On"
                },
                {
                    "id": "237A1662-6018-4115-ABD1-B8CCF827E703",
                    "name": "Historic Weapons Demonstration"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "B204DE60-5A24-43DD-8902-C81625A09A74",
                    "name": "Living History"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "9456A40A-AF75-4AD3-8BE1-79C4A7DBEDFC",
                    "name": "Volunteer Vacation"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There are no entrance fees to visit this site.",
                    "title": "Fee-Free Site"
                }
            ],
            "directionsInfo": "The park is located on the south side of Long Point Road .7 miles from US Highway 17, or 3 miles if coming from I-526.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/chpi/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/chpi/index.htm",
            "weatherInfo": "Winters are generally mild. Summers are hot and humid.",
            "name": "Charles Pinckney",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "9:00AM - 5:00PM",
                                "monday": "Closed",
                                "thursday": "9:00AM - 5:00PM",
                                "sunday": "9:00AM - 5:00PM",
                                "tuesday": "Closed",
                                "friday": "9:00AM - 5:00PM",
                                "saturday": "9:00AM - 5:00PM"
                            },
                            "startDate": "2020-05-28",
                            "name": "Partial Closure Due to COVID-19",
                            "endDate": "2020-06-16"
                        }
                    ],
                    "description": "Park grounds close at 5 p.m. The entrance gate to the parking lot will be shut and locked upon closing. The historic house (visitor center) remains closed until further notice in accordance with CDC, state, and local public health guidance related to COVID-19",
                    "standardHours": {
                        "wednesday": "9:00AM - 5:00PM",
                        "monday": "Closed",
                        "thursday": "9:00AM - 5:00PM",
                        "sunday": "9:00AM - 5:00PM",
                        "tuesday": "Closed",
                        "friday": "9:00AM - 5:00PM",
                        "saturday": "9:00AM - 5:00PM"
                    },
                    "name": "Charles Pinckney National Historic Site"
                }
            ],
            "topics": [
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "F3883A66-A7CB-461B-868E-1B5932224B25",
                    "name": "American Revolution"
                },
                {
                    "id": "990E22A2-20D8-4CC2-8E6C-D2DF165BCDA5",
                    "name": "American Revolutionary War"
                },
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
                    "name": "Arts"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "3D2EE3E9-7344-416C-A412-C2C7CDCDE684",
                    "name": "Colonial/European Contact Conflicts"
                },
                {
                    "id": "7F12224B-217A-4B07-A4A2-636B1CE7F221",
                    "name": "Colonization and Settlement"
                },
                {
                    "id": "1170EEB6-5070-4760-8E7D-FF1A98272FAD",
                    "name": "Commerce"
                },
                {
                    "id": "D9FC6D14-F8C7-4EBA-86EA-DFD99B6BB4F5",
                    "name": "Enslavement"
                },
                {
                    "id": "1F833C99-A75D-4F9E-9256-B96523485466",
                    "name": "Farming and  Agriculture"
                },
                {
                    "id": "1608649A-E7D7-4529-BD83-074C90F9FB68",
                    "name": "Fish"
                },
                {
                    "id": "480D5BD7-D43B-44BB-AD82-1751CB859054",
                    "name": "French and Indian War"
                },
                {
                    "id": "2B428F59-9148-40C1-B38E-130589F2540E",
                    "name": "Immigration"
                },
                {
                    "id": "351EE154-87AA-46B0-BBA1-ED604368ACE9",
                    "name": "Incarceration"
                },
                {
                    "id": "E411F474-A530-4804-9D23-1D94C78B41E4",
                    "name": "Infantry and Militia"
                },
                {
                    "id": "50A3D2B2-C922-4749-89F1-E986A5D520AC",
                    "name": "Jails and Prisons"
                },
                {
                    "id": "14FA9FF3-7D86-4406-9A6D-BE9032A1C578",
                    "name": "Laborer and Worker"
                },
                {
                    "id": "FD0BA21A-5F69-4688-9D4B-856DA242DC78",
                    "name": "Marshes"
                },
                {
                    "id": "1F95D138-CE10-40B5-95D0-B5BE4133B3A1",
                    "name": "Migrant Workers"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "9BD60DC0-C82B-42BA-A170-456B7423429D",
                    "name": "Photography"
                },
                {
                    "id": "F67CA03D-109F-44B9-9B63-D9EC9FD77A1D",
                    "name": "Plantations"
                },
                {
                    "id": "F669BC40-BDC4-41C0-9ACE-B2CD25373045",
                    "name": "Presidents"
                },
                {
                    "id": "6AD3C080-0D31-4B75-BF4E-9A14DBC3AF6E",
                    "name": "Religious Freedom"
                },
                {
                    "id": "0BBD4A42-2B3D-4E82-B5C4-1A3874C8682E",
                    "name": "Roads, Routes and Highways"
                },
                {
                    "id": "3CDB67A9-1EAC-408D-88EC-F26FA35E90AF",
                    "name": "Schools and Education"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                },
                {
                    "id": "86C6DC89-D311-44F8-A5BC-35F9FDC4AF1C",
                    "name": "Swamps"
                },
                {
                    "id": "A010EADF-78B8-4526-B0A4-70B0E0B3470E",
                    "name": "Trade"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "FE2C2613-B41E-4531-BC43-03EB6E45CBCF",
                    "name": "Transportation"
                },
                {
                    "id": "846E5C56-E5AC-489C-B3BF-11F4C73F12C2",
                    "name": "Urban America"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "1365C347-952C-475A-B755-731DD523C195",
                    "name": "Wetlands"
                }
            ],
            "latLong": "lat:32.84577392, long:-79.82487582",
            "description": "Charles Pinckney was a principal author and signer of the United States Constitution. This remnant of his coastal plantation is preserved to tell the story of a \"founding father,\" his life of public service, the lives of enslaved African Americans on South Carolina Lowcountry plantations and their influences on Charles Pinckney.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "1828 Lowcountry cottage and grounds",
                    "title": "Historic House and Grounds",
                    "caption": "The historic house serves as the park's visitor center and features exhibits, film options, and a museum shop.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C86ACA6-1DD8-B71B-0B4AB188D4CC5AE8.jpg"
                },
                {
                    "credit": "New York State Office of Parks, Recreation and Historic Preservation",
                    "altText": "Charles Pinckney portrait",
                    "title": "Charles Pinckney",
                    "caption": "American founding father, Charles Pinckney, was a contributing author and signer of the U.S. Constitution.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C86B04E-1DD8-B71B-0BF5BB35B9534139.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Live Oak",
                    "title": "Live Oak",
                    "caption": "Spanish Moss drape Live Oak in the early morning sun.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C86B25A-1DD8-B71B-0B3451518A1D565B.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Southern Magnolia (Magnolia grandiflora)",
                    "title": "Southern Magnolia (Magnolia grandiflora)",
                    "caption": "Flowering plants, like this Southern Magnolia, are remnant of historic ornamental gardens once enjoyed by former farm owners and still marveled over by modern visitors.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C86B43C-1DD8-B71B-0BA91DAD21A2793B.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Corn Crib",
                    "title": "Corn Crib",
                    "caption": "Snee Farm, once owned by Charles Pinckney, was a working farm for over 200 years. This corn crib, built in 1910, is one of the few remaining structures of a bygone era.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C86B604-1DD8-B71B-0B72883C9777D630.jpg"
                },
                {
                    "credit": "NPS Photo.",
                    "altText": "Boardwalk and Marsh",
                    "title": "Boardwalk and Marsh",
                    "caption": "A .25 mile loop trail is a popular activity for visitors to enjoy the grounds and see points of cultural and natural interest along the way.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C86B810-1DD8-B71B-0B084DB6A7FABC1C.jpg"
                }
            ],
            "designation": "National Historic Site",
            "parkCode": "chpi",
            "addresses": [
                {
                    "postalCode": "29482",
                    "city": "Sullivan's Island",
                    "stateCode": "SC",
                    "line1": "1214 Middle Street",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "29464",
                    "city": "Mount Pleasant",
                    "stateCode": "SC",
                    "line1": "1254 Long Point Road",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "08EFF7E4-0FE4-4402-B23A-124EB8AAC249",
            "fullName": "Charles Pinckney National Historic Site",
            "latitude": "32.84577392"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "4407173890",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "cuva_info@nps.gov"
                    }
                ]
            },
            "states": "OH",
            "longitude": "-81.57116722",
            "activities": [
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "21DB3AFC-8AAC-4665-BC1F-7198C0685983",
                    "name": "Canoeing"
                },
                {
                    "id": "C59E231D-55FC-4B37-BC5B-FF76383951B5",
                    "name": "Craft Demonstrations"
                },
                {
                    "id": "EAB1EBDE-5B72-493F-8F8F-0EE5B1724436",
                    "name": "Cross-Country Skiing"
                },
                {
                    "id": "FAED7F97-3474-4C21-AB42-FB0768A2F826",
                    "name": "Cultural Demonstrations"
                },
                {
                    "id": "D99BCDA3-4363-438B-B3A8-06E6EA204C83",
                    "name": "Downhill Skiing"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "43800AD1-D439-40F3-AAB3-9FB651FE45BB",
                    "name": "Gift Shop and Souvenirs"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "0307955A-B65C-4CE4-A780-EB36BAAADF0B",
                    "name": "Horse Trekking"
                },
                {
                    "id": "1886DA47-0AEC-4568-B9C2-8E9BC316AAAC",
                    "name": "Horseback Riding"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "F353A9ED-4A08-456E-8DEC-E61974D0FEB6",
                    "name": "Kayaking"
                },
                {
                    "id": "C0FFC3D5-0E74-4B6F-B69D-6F95B78906CE",
                    "name": "Live Music"
                },
                {
                    "id": "B204DE60-5A24-43DD-8902-C81625A09A74",
                    "name": "Living History"
                },
                {
                    "id": "299CB934-88DC-474F-A33D-E43E29A149C2",
                    "name": "Mountain Biking"
                },
                {
                    "id": "4D224BCA-C127-408B-AC75-A51563C42411",
                    "name": "Paddling"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "A8650547-1A30-4222-86C3-A7660A829670",
                    "name": "Reenactments"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "F9B1D433-6B86-4804-AED7-B50A519A3B7C",
                    "name": "Skiing"
                },
                {
                    "id": "C38B3C62-1BBF-4EA1-A1A2-35DE21B74C17",
                    "name": "Snow Play"
                },
                {
                    "id": "01D717BC-18BB-4FE4-95BA-6B13AD702038",
                    "name": "Snowshoeing"
                },
                {
                    "id": "B3EF12AF-D951-419E-BD3C-6B36CBCC1E16",
                    "name": "Stand Up Paddleboarding"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no entrance fee.",
                    "title": "Entrance"
                }
            ],
            "directionsInfo": "Plane\nCleveland Hopkins International Airport and Akron-Canton Regional Airport offer many daily flights to the area. Car rentals are available at both airports.\n\nBus & Train\nBus stations are located in downtown Cleveland and Akron. The Amtrak station is in downtown Cleveland.\n\nCar\nThe park is easily accessible by car from all directions. A good place to start your visit is at Boston Mill Visitor Center located at 6947 Riverview Road, Peninsula, Ohio 44264. (41° 15'45.3\" N) (81° 33'37.3\" W).",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/cuva/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/cuva/index.htm",
            "weatherInfo": "Spring's rain and warming temperatures bring new leaves on trees, blooming wildflowers, and visitors anxious get out on the trail. \n\nSummer temperatures range from 49 to 95 degrees F and can be humid. Dressing in layers is advisable. \n\nFall temperatures can range from low 70s during the day to freezing during the night. Fall foliage often peaks in mid-October.\n\nWinter weather conditions can rapidly change, due to the lake effect snow from Lake Erie. Temperatures vary from mid-30s to below zero.",
            "name": "Cuyahoga Valley",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Cuyahoga Valley National Park is open everyday, 24 hours a day with the following exceptions:  Brandywine Falls, Virginia Kendall Ledges, Octagon, and Lake close from dusk until morning opening.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Cuyahoga Valley National Park"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
                    "name": "Arts"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "9749E14B-ED9A-4E86-BAEA-CAC7B718F266",
                    "name": "Canals"
                },
                {
                    "id": "7F12224B-217A-4B07-A4A2-636B1CE7F221",
                    "name": "Colonization and Settlement"
                },
                {
                    "id": "DE2F0F3C-C0C4-410F-90D3-97EEC33D348E",
                    "name": "Deciduous Forests"
                },
                {
                    "id": "1F833C99-A75D-4F9E-9256-B96523485466",
                    "name": "Farming and  Agriculture"
                },
                {
                    "id": "41B1A0A3-11FF-4F55-9CB9-034A7E28B087",
                    "name": "Forests and Woodlands"
                },
                {
                    "id": "0B575E33-B68F-4F3D-998E-B03284606CF3",
                    "name": "Industry"
                },
                {
                    "id": "1CF1F6BB-A037-445B-8CF2-81428E50CE52",
                    "name": "Lakes"
                },
                {
                    "id": "BD81BF37-14B1-408A-903F-2BF52C8C7927",
                    "name": "Mills"
                },
                {
                    "id": "571E1597-4C6A-4814-A7E9-FC4EF8293CE8",
                    "name": "Music"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "A155238F-0DD2-4610-9B87-05FCE1C59283",
                    "name": "River and Riparian"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "86525CF5-EB56-41A6-90BF-566C6C0FC945",
                    "name": "Trains and Railroads"
                },
                {
                    "id": "FE2C2613-B41E-4531-BC43-03EB6E45CBCF",
                    "name": "Transportation"
                },
                {
                    "id": "5ED826E0-76BB-47BB-87DD-E081A72B0A04",
                    "name": "Waterfalls"
                },
                {
                    "id": "BA12B386-49EA-46B0-9121-FCACACC47538",
                    "name": "Watersheds"
                },
                {
                    "id": "1365C347-952C-475A-B755-731DD523C195",
                    "name": "Wetlands"
                }
            ],
            "latLong": "lat:41.26093905, long:-81.57116722",
            "description": "Though a short distance from the urban areas of Cleveland and Akron, Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors. The winding Cuyahoga River gives way to deep forests, rolling hills, and open farmlands. Walk or ride the Towpath Trail to follow the historic route of the Ohio & Erie Canal.",
            "images": [
                {
                    "credit": "Photo by Ted Toth",
                    "altText": "Scenic train as it pulls into Peninsula Depot.",
                    "title": "Cuyahoga Valley Scenic Railroad in Peninsula",
                    "caption": "Many park visitors ride the scenic excursion trail through the valley or take advantage of the Bike Aboard option to ride one way with their bike.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/50001FF6-1DD8-B71B-0BECA954B0F991BF.jpg"
                },
                {
                    "credit": "Photo by Tom Jones",
                    "altText": "A ray of sunshine streaming through the rock formation along the Ledges Trail.",
                    "title": "Along the Ledges Trail",
                    "caption": "One of Cuyahoga Valley's most popular trails, the Ledges Trail proved glimpses of great color and rock formations throughout the year.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C81841A-1DD8-B71B-0B1A447676517C5B.jpg"
                },
                {
                    "credit": "Photo by Tom Jones",
                    "altText": "A misty sunset over a lone goose at the Beaver Marsh",
                    "title": "Sunset at the Beaver Marsh",
                    "caption": "Anytime of day or night there is some wildlife at the Beaver Marsh to capture your attention.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/4FD6A6BA-1DD8-B71B-0B5B3D9F4BE50EEF.jpg"
                },
                {
                    "credit": "Photo by Tom Jones",
                    "altText": "Brandywine Falls the parks 60 ft waterfall.",
                    "title": "Brandywine Falls",
                    "caption": "Brandywine Falls is Among the Most Popular Attractions in Cuyahoga Valley National Park",
                    "url": "https://www.nps.gov/common/uploads/structured_data/4FE11F5B-1DD8-B71B-0BBC14532CF8C3B3.jpg"
                }
            ],
            "designation": "National Park",
            "parkCode": "cuva",
            "addresses": [
                {
                    "postalCode": "44141",
                    "city": "Brecksville",
                    "stateCode": "OH",
                    "line1": "15610 Vaughn Road",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "44264",
                    "city": "Peninsula",
                    "stateCode": "OH",
                    "line1": "6947 Riverview Road",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "F4D44F29-3F67-498F-B05B-0783473D2708",
            "fullName": "Cuyahoga Valley National Park",
            "latitude": "41.26093905"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "3052427700",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "3052427711",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "drto_information@nps.gov"
                    }
                ]
            },
            "states": "FL",
            "longitude": "-82.87319",
            "activities": [
                {
                    "id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
                    "name": "Astronomy"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "071BA73C-1D3C-46D4-A53C-00D5602F7F0E",
                    "name": "Boating"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "4D224BCA-C127-408B-AC75-A51563C42411",
                    "name": "Paddling"
                },
                {
                    "id": "42CF4021-8524-428E-866A-D33097A4A764",
                    "name": "SCUBA Diving"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "3EBF7EAC-68FC-4754-B6A4-0C38A1583D45",
                    "name": "Snorkeling"
                },
                {
                    "id": "D37A0003-8317-4F04-8FB0-4CF0A272E195",
                    "name": "Stargazing"
                },
                {
                    "id": "587BB2D3-EC35-41B2-B3F7-A39E2B088AEE",
                    "name": "Swimming"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "10.0000",
                    "description": "This fee covers entrance to the park for 7 days. If you are arriving via seaplane or ferry the travel ticket includes entrance fee to Dry Tortugas National Park and Fort Jefferson. If you hold a National Parks Pass, show your pass at check-in and the entrance fee will be deducted from your transportation cost.\n\nIf you are arriving via private boat or private seaplane fees are collected through a self-service fee area on the main dock at Garden Key. Cash or check only.",
                    "title": "Dry Tortugas Entrance Fee"
                }
            ],
            "directionsInfo": "Dry Tortugas National Park is one of the most remote parks in the National Park System. Located approximately 70 miles west of Key West it is accessible only by a daily concession ferry, private boats, charter boats, or seaplane.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/drto/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/drto/index.htm",
            "weatherInfo": "The climate in the Dry Tortugas is subtropical, which basically means that it has warm and tropical weather in the range of 60°F to 90°F. The two main seasons are the winter stormy season from December through March which is windier and sees rougher seas, and the summertime tropical storm season from June through November where there is a higher chance of isolated storms. During the summers it is hot and humid. During the winter the temperature is milder and drier.",
            "name": "Dry Tortugas",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The Dry Tortugas is open 24 hours, 7 days a week. This includes holidays.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Dry Tortugas"
                }
            ],
            "topics": [
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "921D1471-5F6B-47D5-918D-389E7106083A",
                    "name": "Alligators or Crocodiles"
                },
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "123CE28E-0EFA-4330-8E6E-EEFF3D7BF772",
                    "name": "Coastal Defenses"
                },
                {
                    "id": "C7FAA779-9AF2-4B50-915E-8E2AF2E7337A",
                    "name": "Coral Reefs"
                },
                {
                    "id": "489D6333-FD72-44DF-83B0-3D4412DD0A75",
                    "name": "Endangered"
                },
                {
                    "id": "1608649A-E7D7-4529-BD83-074C90F9FB68",
                    "name": "Fish"
                },
                {
                    "id": "988B4AFC-F478-4673-B66D-E6BDB0CCFF35",
                    "name": "Forts"
                },
                {
                    "id": "F0F97E32-2F29-41B4-AF98-9FBE8DAB36B1",
                    "name": "Geology"
                },
                {
                    "id": "263BAC6E-4DEC-47E4-909D-DA8AD351E06E",
                    "name": "Lighthouses"
                },
                {
                    "id": "4C9D4777-A9DA-47D1-A0B9-F4A3C98BC1B3",
                    "name": "Maritime"
                },
                {
                    "id": "F8C2FE93-DEB3-4B12-9A87-913E3E6B448D",
                    "name": "Natural Sounds"
                },
                {
                    "id": "A7359FC4-DAD8-45F5-AF15-7FF62F816ED3",
                    "name": "Night Sky"
                },
                {
                    "id": "0E6D8503-CB65-467F-BCD6-C6D9E28A4E0B",
                    "name": "Oceans"
                },
                {
                    "id": "A079385C-3E71-4E18-9E42-B046BC22EA95",
                    "name": "Ships and Shipwrecks"
                },
                {
                    "id": "393F60FB-80D6-46F7-B0FB-BBF3C90F59FD",
                    "name": "Tortoises and Turtles"
                },
                {
                    "id": "78E4F4AC-AF97-435A-8C2C-7FB8D67516ED",
                    "name": "Unique Species"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                }
            ],
            "latLong": "lat:24.628741, long:-82.87319",
            "description": "Almost 70 miles (113 km) west of Key West lies the remote Dry Tortugas National Park. This 100-square mile park is mostly open water with seven small islands.  Accessible only by boat or seaplane, the park is known the world over as the home of magnificent Fort Jefferson, picturesque blue waters, superlative coral reefs and marine life, and the vast assortment of bird life that frequents the area.",
            "images": [
                {
                    "credit": "NPS Photo / Maria Belen Farias",
                    "altText": "Park visitors enjoy a sunset on the moat wall.",
                    "title": "Sunset at Fort Jefferson",
                    "caption": "Sunsets at the Dry Tortugas are breathtaking. Visitors who choose to camp over night can view the sun set at Fort Jefferson.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C80FF02-1DD8-B71B-0B39AC51BF7B2FA2.jpg"
                },
                {
                    "credit": "NPS Photo / Maria Belen Farias",
                    "altText": "A view of Fort Jefferson from the moat all.",
                    "title": "Fort Jefferson",
                    "caption": "ort Jefferson is a massive but unfinished coastal fortress. It is the largest masonry structure in the Americas, and is composed of over 16 million bricks.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C810049-1DD8-B71B-0B0040641619D4A6.jpg"
                },
                {
                    "credit": "NPS Photo / Maria Belen Farias",
                    "altText": "A boat passes in front of Loggerhead Key during sunset.",
                    "title": "Loggerhead Key",
                    "caption": "The largest island in the Dry Tortugas, Loggerhead Key is a site of shipwrecks, a significant lighthouse installation, and where the historic Carnegie Laboratory for Marine Ecology once stood. Named for its abundance of loggerhead sea turtles, Loggerhead",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C810258-1DD8-B71B-0BE07AC43C736990.jpg"
                },
                {
                    "credit": "NPS Photo / Maria Belen Farias",
                    "altText": "A view inside Fort Jefferson.",
                    "title": "Inside Fort Jefferson",
                    "caption": "Garden Key is the second largest island in the Dry Tortugas, about 14 acres in size, and has had the most human impact. Located on Garden Key is historic Fort Jefferson, one of the nation’s largest 19th century forts and a central cultural feature of Dry",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C8103D0-1DD8-B71B-0B6DB5CF9A4AC58F.jpg"
                },
                {
                    "credit": "NPS Photo / Brett Seymour",
                    "altText": "A few of the stars at night with a view of Fort Jefferson.",
                    "title": "Night sky at the Dry Tortugas",
                    "caption": "The Dry Tortugas is so remote that night sky viewing is possible.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C81050F-1DD8-B71B-0B45EDC68B621860.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Two divers dive the Windjammer Wreck",
                    "title": "Diving at the Dry Tortugas",
                    "caption": "The Dry Tortugas has over 300 sunken ships. One of the most accessible is the Winjammer Wreck which can be dove or snorkeled.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C810626-1DD8-B71B-0B1DFF7BCF9A0682.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "An aerial view of the Dry Tortugas",
                    "title": "Aerial view of the Dry Tortugas",
                    "caption": "The Dry Tortugas is made up of seven islands.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C810722-1DD8-B71B-0BAD4B445F0C3D8C.jpg"
                }
            ],
            "designation": "National Park",
            "parkCode": "drto",
            "addresses": [
                {
                    "postalCode": "33034",
                    "city": "Homestead",
                    "stateCode": "FL",
                    "line1": "40001 SR-9336",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "33034",
                    "city": "Homestead",
                    "stateCode": "FL",
                    "line1": "40001 SR-9336",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "167A05D1-5793-49E0-89FE-0A1DDFA9A7F4",
            "fullName": "Dry Tortugas National Park",
            "latitude": "24.628741"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "5638733491",
                        "description": "Visitor Center front desk.",
                        "extension": "123",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "efmo_interpretation@nps.gov"
                    }
                ]
            },
            "states": "IA",
            "longitude": "-91.19687517",
            "activities": [
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "No fee to enjoy the Visitor Center and all trails.",
                    "title": "Visitor Center and Trails"
                }
            ],
            "directionsInfo": "Located 3 miles north of Marquette, Iowa on Hwy 76.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/efmo/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/efmo/index.htm",
            "weatherInfo": "All four seasons are represented in this area with summer temperature in the upper 80’s with higher heat indexes due to humidity and winter daytime highs in the 20's. Temperatures are in °Fahrenheit.",
            "name": "Effigy Mounds",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Park is open dawn to dusk.",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "Park Hours"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "607D41B0-F830-4C07-A557-BCEF880A3929",
                    "name": "Burial, Cemetery and Gravesite"
                },
                {
                    "id": "DE2F0F3C-C0C4-410F-90D3-97EEC33D348E",
                    "name": "Deciduous Forests"
                },
                {
                    "id": "04A39AB8-DD02-432F-AE5F-BA1267D41A0D",
                    "name": "Fire"
                },
                {
                    "id": "41B1A0A3-11FF-4F55-9CB9-034A7E28B087",
                    "name": "Forests and Woodlands"
                },
                {
                    "id": "F0F97E32-2F29-41B4-AF98-9FBE8DAB36B1",
                    "name": "Geology"
                },
                {
                    "id": "94262026-92F5-48E9-90EF-01CEAEFBA4FF",
                    "name": "Grasslands"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "1AEDC86F-5792-487F-8CDF-9E92CAB97ACE",
                    "name": "Prairies"
                },
                {
                    "id": "9C9FCBB6-360B-4743-8155-6F9341CBE01B",
                    "name": "Scenic Views"
                },
                {
                    "id": "1365C347-952C-475A-B755-731DD523C195",
                    "name": "Wetlands"
                }
            ],
            "latLong": "lat:43.08095081, long:-91.19687517",
            "description": "The mounds preserved here are considered sacred by many Americans, especially the Monument's 20 culturally associated American Indian tribes. A visit offers opportunities to contemplate the meanings of the mounds and the people who built them. The 200 plus American Indian mounds are located in one of the most picturesque sections of the Upper Mississippi River Valley.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "Bear Effigy Mounds with visitor walking nearby.",
                    "title": "Marching Bear in Spring",
                    "caption": "Marching Bear Mound Group in summer.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7BB1E2-1DD8-B71B-0B5500DF447CB89D.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Scenic view of the steep bluffs adjacent to the Mississippi River as trees start to change color.",
                    "title": "Scenic Overlook at Fire Point",
                    "caption": "Scenic overlook from the popular Fire Point Trail overlooking the Mississippi River and Driftless area bluffs.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7BB6EE-1DD8-B71B-0BDC4A0D83D76902.jpg"
                },
                {
                    "credit": "NPS / Kat Busse",
                    "altText": "Three conical mounds in a foggy morning setting.",
                    "title": "Mounds on a Foggy Morning",
                    "caption": "Three Conical mounds along the Fire Point Trail during a foggy morning.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7BB8AE-1DD8-B71B-0BCEF3BB013A5F6A.jpg"
                },
                {
                    "credit": "NPS Photo/ Eaton Cote'",
                    "altText": "Circular mounds in a single line.",
                    "title": "Conical Mounds Leading to Fire Point",
                    "caption": "Follow a line of conical mounds that will lead you out to Fire Point which overlooks the Mississippi River.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/20611706-1DD8-B71B-0BEA4697A628DD12.jpg"
                }
            ],
            "designation": "National Monument",
            "parkCode": "efmo",
            "addresses": [
                {
                    "postalCode": "52146",
                    "city": "Harpers Ferry",
                    "stateCode": "IA",
                    "line1": "151 Hwy 76",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "52146",
                    "city": "Harpers Ferry",
                    "stateCode": "IA",
                    "line1": "151 Hwy 76",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "0265E5A4-576A-4626-882A-05971DEE9B76",
            "fullName": "Effigy Mounds National Monument",
            "latitude": "43.08095081"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "5058762784",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "ernie_price@nps.gov"
                    }
                ]
            },
            "states": "NM",
            "longitude": "-107.9950948",
            "activities": [
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
                    "name": "Astronomy"
                },
                {
                    "id": "5F723BAD-7359-48FC-98FA-631592256E35",
                    "name": "Auto and ATV"
                },
                {
                    "id": "4A58AF13-E8FB-4530-B41A-97DF0B0C77B7",
                    "name": "Backcountry Camping"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "BA316D0F-92AE-4E00-8C80-DBD605DC58C3",
                    "name": "Caving"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "8386EEAF-985F-4DE8-9037-CCF91975AC94",
                    "name": "Hunting and Gathering"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "0B4A5320-216D-451A-9990-626E1D5ACE28",
                    "name": "Scenic Driving"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no fee to enter El Malpais National Monument.",
                    "title": "El Malpais National Monument Entrance Fee"
                }
            ],
            "directionsInfo": "Take exit 85 of I-40 in Grants, New Mexico. After you exit, head south on Santa Fe Ave, and continue straight over the freeway overpass. Take a left at the entrance sign for El Malpais Visitor Center. Continue 300 yards until you reach the parking lot.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/elma/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/elma/index.htm",
            "weatherInfo": "As a general rule, daily temperatures swing roughly 30 degrees (F) from night lows to afternoon highs. Summer is sunny and hot with monsoon rain storms with average high of 80 (F), while Winter is cool, sunny, with potential snow storms and an average high of 45 (F). Spring and Fall are generally dry, with the occasional storm rain and/or snow storm.",
            "name": "El Malpais",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "El Malpais National Monument is open 24 hours a day.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "El Malpais National Monument"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "E25F3456-43ED-45DD-93BC-057F9B944F7A",
                    "name": "Caves, Caverns and Karst"
                },
                {
                    "id": "04A39AB8-DD02-432F-AE5F-BA1267D41A0D",
                    "name": "Fire"
                },
                {
                    "id": "996BEDAE-CB23-4003-B008-3A1F46A72263",
                    "name": "Rare"
                },
                {
                    "id": "78E4F4AC-AF97-435A-8C2C-7FB8D67516ED",
                    "name": "Unique Species"
                },
                {
                    "id": "90F8744F-CD10-4925-955C-064CB1A17EB0",
                    "name": "Volcanoes"
                }
            ],
            "latLong": "lat:34.88422799, long:-107.9950948",
            "description": "The richly diverse volcanic landscape of El Malpais offers solitude, recreation, and discovery. Explore cinder cones, lava tube caves, sandstone bluffs, and hiking trails. Wildlife abounds in the open grasslands and forests. While some may see a desolate environment, people have been adapting to and living in this extraordinary terrain for generations. Come discover the land of fire and ice!",
            "images": [
                {
                    "credit": "NPS Photo/ Maci MacPherson",
                    "altText": "Summer at Sandstone Bluffs Overlook",
                    "title": "Sandstone Bluffs Overlook",
                    "caption": "A vast expanse of lava fields as seen from Sandstone Bluffs Overlook",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7E2FFF-1DD8-B71B-0B930EEBB4CE85D2.jpg"
                },
                {
                    "credit": "NPS Photo/ Maci MacPherson",
                    "altText": "Snow on the El Calderon Trail",
                    "title": "Snowy Landscape",
                    "caption": "Winter exploration allows one to discover the quiet beauty of El Malpais",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7E318A-1DD8-B71B-0B7B52ABFE080D37.jpg"
                },
                {
                    "credit": "NPS Photo/ Maci MacPherson",
                    "altText": "Summer view from El Calderon cinder cone",
                    "title": "View from El Calderon",
                    "caption": "A hike to the top of El Calderon cinder cone offers one a view of the entire monument.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7E331B-1DD8-B71B-0BFA2AA0CF058DB2.jpg"
                },
                {
                    "credit": "NPS Photo/ Maci MacPherson",
                    "altText": "Hiking in Summer",
                    "title": "Wildflowers on the El Calderon Trail",
                    "caption": "Enjoy a stroll along the El Calderon Trail to view beautiful wildflowers in summer.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7E3569-1DD8-B71B-0B72C8409C12A154.jpg"
                },
                {
                    "credit": "NPS Photo/ Maci MacPherson",
                    "altText": "Lava Tube caving at El Malpais",
                    "title": "Lava Tube Cave",
                    "caption": "Explore lava tube caving at El Malpais National Monument",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7E3708-1DD8-B71B-0B6AC3646D5C7E72.jpg"
                }
            ],
            "designation": "National Monument",
            "parkCode": "elma",
            "addresses": [
                {
                    "postalCode": "87020",
                    "city": "Grants",
                    "stateCode": "NM",
                    "line1": "1900 E. Santa Fe Ave.",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "87020",
                    "city": "Grants",
                    "stateCode": "NM",
                    "line1": "1900 E. Santa Fe Ave.",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "0826F21E-43A2-4675-8D2A-11F676293364",
            "fullName": "El Malpais National Monument",
            "latitude": "34.88422799"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "(330) 452-0876",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "lisa_meade@nps.gov"
                    }
                ]
            },
            "states": "OH",
            "longitude": "-81.37579869",
            "activities": [
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "28880A5B-3D29-41AC-BD8B-24743E7A070F",
                    "name": "First Person Interpretation"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "B204DE60-5A24-43DD-8902-C81625A09A74",
                    "name": "Living History"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                }
            ],
            "entranceFees": [
                {
                    "cost": "7.0000",
                    "description": "Fee is only charged for Saxton House tours.",
                    "title": "General Adult"
                },
                {
                    "cost": "6.0000",
                    "description": "Fee is only charged for Saxton House tours.",
                    "title": "Senior"
                },
                {
                    "cost": "5.0000",
                    "description": "17 years old and under. Fee is only charged for Saxton House tours.",
                    "title": "Child"
                }
            ],
            "directionsInfo": "The First Ladies National Historic Site is located in downtown Canton, Ohio. Free parking is available behind the Saxton House or at our gated lot on the corner of Market Avenue South and 3rd Street SW. Please begin your visit at the education center at 205 Market Avenue South.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/fila/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/fila/index.htm",
            "weatherInfo": "The weather at First Ladies National Historic Site is typical of Northeastern Ohio: four distinct seasons. \n\nSpring's rain and warming temperatures bring new leaves on trees and blooming wildflowers.\n\nSummer temperatures range from 49 to 95 degrees F and can be humid. \n\nFall temperatures can range from low 70s during the day to freezing during the night. Fallcolor peaks mid-October.\n\nWinter weather conditions can rapidly change. Temperatures vary from mid-30s to below zero.",
            "name": "First Ladies",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "9:00AM - 4:00PM",
                                "monday": "Closed",
                                "thursday": "9:00AM - 4:00PM",
                                "sunday": "9:00AM - 4:00PM",
                                "tuesday": "9:00AM - 4:00PM",
                                "friday": "9:00AM - 4:00PM",
                                "saturday": "9:00AM - 4:00PM"
                            },
                            "startDate": "2020-05-01",
                            "name": "Summer Hours",
                            "endDate": "2020-10-31"
                        },
                        {
                            "exceptionHours": {
                                "friday": "Closed"
                            },
                            "startDate": "2018-12-25",
                            "name": "Closed Christmas",
                            "endDate": "2018-12-25"
                        },
                        {
                            "exceptionHours": {
                                "thursday": "Closed"
                            },
                            "startDate": "2018-11-22",
                            "name": "Thanksgiving",
                            "endDate": "2018-11-22"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed"
                            },
                            "startDate": "2018-01-01",
                            "name": "Closed New Year's Day",
                            "endDate": "2018-01-01"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2020-03-17",
                            "name": "Closed Due to COVID-19",
                            "endDate": "2020-05-31"
                        }
                    ],
                    "description": "We are currently in Winter Hours: open Wednesday - Saturday. Summer Hours begin May 1, 2020.",
                    "standardHours": {
                        "wednesday": "9:00AM - 4:00PM",
                        "monday": "Closed",
                        "thursday": "9:00AM - 4:00PM",
                        "sunday": "Closed",
                        "tuesday": "Closed",
                        "friday": "9:00AM - 4:00PM",
                        "saturday": "9:00AM - 4:00PM"
                    },
                    "name": "Winter Hours"
                }
            ],
            "topics": [
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
                    "name": "Arts"
                },
                {
                    "id": "416ED6B1-AA0E-4CF0-B311-36D92447BE77",
                    "name": "Assassinations"
                },
                {
                    "id": "F669BC40-BDC4-41C0-9ACE-B2CD25373045",
                    "name": "Presidents"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                },
                {
                    "id": "A160B3D9-1603-4D89-B82F-21FCAF9EEE3B",
                    "name": "Tragic Events"
                },
                {
                    "id": "DA1E6678-D60D-4E66-96A5-78183342673B",
                    "name": "Voting Rights and Suffrage"
                },
                {
                    "id": "7DA81DAB-5045-4953-9C20-36590AD9FA95",
                    "name": "Women's History"
                }
            ],
            "latLong": "lat:40.79689857, long:-81.37579869",
            "description": "First Ladies National Historic Site consists of two properties in downtown Canton, Ohio - the home of First Lady Ida Saxton-McKinley and a small visitor center with an exhibit and film. Come learn about how the position of First Lady has evolved over time to include a public role.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "a front view of the Ida Saxton McKinley House",
                    "title": "First Ladies National Historic Site",
                    "caption": "This was the longtime residence of William and Ida McKinley.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C824DCE-1DD8-B71B-0B14D80DEE050385.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "A piano in the Saxton McKinley Home",
                    "title": "Saxton McKinley House Piano",
                    "caption": "Ida Saxton's original piano is just one of many items belonging to President McKinley and First Lady Ida McKinley.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C8250B3-1DD8-B71B-0BC1186047C44DD7.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Close up view of home entrance.",
                    "title": "Saxton McKinley Home",
                    "caption": "The Saxton McKinley Home is significant as the only residence with direct historical ties to President William McKinley remaining in his hometown of Canton.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82537E-1DD8-B71B-0B629A860705ABF0.jpg"
                }
            ],
            "designation": "National Historic Site",
            "parkCode": "fila",
            "addresses": [
                {
                    "postalCode": "44702-2107",
                    "city": "Canton",
                    "stateCode": "OH",
                    "line1": "205 Market Avenue South",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "44702-2107",
                    "city": "Canton",
                    "stateCode": "OH",
                    "line1": "205 Market Avenue South",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "35CB040E-765C-47D0-A594-05943E64EF3E",
            "fullName": "First Ladies National Historic Site",
            "latitude": "40.79689857"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "520-847-2500",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "520-847-2349",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "chir_interpretation@nps.gov"
                    }
                ]
            },
            "states": "AZ",
            "longitude": "-109.451132",
            "activities": [
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "Fort Bowie National Historic Site is a fee free park. No entrance fee is required.",
                    "title": "Fort Bowie Entrance Fee"
                }
            ],
            "directionsInfo": "From Willcox, AZ / points west on I-10: drive 23 miles east of Willcox on Interstate 10 to the the town of Bowie. Exit at the first Bowie exit and drive through the town. Follow the signs for Fort Bowie National Historic Site and turn south on Apache Pass Road. Drive 13 miles to the Fort Bowie Trailhead (the last mile of the road is unpaved). Be prepared to walk the three miles round trip to the ruins and back to your car.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/fobo/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/fobo/index.htm",
            "weatherInfo": "Please check the Fort Bowie weather page for up to date weather conditions: http://www.wunderground.com/personal-weather-station/dashboard?ID=MAU921",
            "name": "Fort Bowie",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The park is open every day from sunrise to sunset. Visitor Center hours change with the seasons. Check our Operating Hours page for more information: http://www.nps.gov/fobo/planyourvisit/hours.htm",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "Park"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "607D41B0-F830-4C07-A557-BCEF880A3929",
                    "name": "Burial, Cemetery and Gravesite"
                },
                {
                    "id": "988B4AFC-F478-4673-B66D-E6BDB0CCFF35",
                    "name": "Forts"
                },
                {
                    "id": "0E1A04CC-EB51-4F18-93D4-EC0B0B4EC1E3",
                    "name": "Freshwater Springs"
                },
                {
                    "id": "4BE01DC5-52E6-4F18-8C9A-B22D65965F6D",
                    "name": "Groundwater"
                },
                {
                    "id": "53798A16-7CDB-4F17-9C28-095F92D2ED8D",
                    "name": "Indian and Frontier Wars"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "97CCB419-196C-4B95-BB3A-621458F78415",
                    "name": "US Army"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                }
            ],
            "latLong": "lat:32.14925942, long:-109.451132",
            "description": "Fort Bowie witnessed almost 25 years of conflict between the Chiricahua Apache and the US Army, and remains a tangible connection to the turbulent era of the late 1800s. Explore the history of Fort Bowie and Apache Pass as you hike the 1.5 mile trail to the visitor center and old fort ruins. Today, this peaceful landscape stands in stark contrast to the violence that once gripped this land.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "Ruined walls of the old buildings and mountains in the background",
                    "title": "Fort Bowie landscape and ruins",
                    "caption": "Fort Bowie was once a bustling frontier military fort. Today, the ruins offer a place of reflection.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82E117-1DD8-B71B-0BBC3BE2A2C1C1FD.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Close up of a canon barrel",
                    "title": "Mountain howitzer",
                    "caption": "The mountain howitzer is a symbolic relic from the active days of Fort Bowie",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82E24B-1DD8-B71B-0BDB09461B231689.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Black and white photo of white tombstones in a cemetery, mountains in the background",
                    "title": "Fort Bowie Cemetery",
                    "caption": "Fort Bowie cemetery is accessed via the Fort Bowie Trail, and in addition to many US troops buried here, some Apache/Indeh are buried here as well.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82FC33-1DD8-B71B-0B162188DB413F97.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "A group gathers as a ranger displays the heliograph equipment",
                    "title": "Heliograph demonstration",
                    "caption": "The heliograph was an important communications tool in the late 1880s. Stationed on top of high desert peaks, sunlight was reflected off mirrors in coded patterns to send a message miles away.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82FD36-1DD8-B71B-0B4FEF6DCA35A115.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Weathered remains of an adobe building at Fort Bowie",
                    "title": "Fort Bowie Ruins",
                    "caption": "After the fort's abandonment in the late 1800s the unmaintained buildings slowly weathered until the 1950s when the park service acquired the site.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82FE49-1DD8-B71B-0B8728000D1EEB54.jpg"
                }
            ],
            "designation": "National Historic Site",
            "parkCode": "fobo",
            "addresses": [
                {
                    "postalCode": "85605",
                    "city": "Bowie",
                    "stateCode": "AZ",
                    "line1": "P.O. Box 158",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "85605",
                    "city": "Bowie",
                    "stateCode": "AZ",
                    "line1": "3500 South Apache Pass Road",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "5AD68231-8681-43F6-89B1-08E5AA4C7FE6",
            "fullName": "Fort Bowie National Historic Site",
            "latitude": "32.14925942"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "4324263224",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "4324263122",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "foda_superintendent@nps.gov"
                    }
                ]
            },
            "states": "TX",
            "longitude": "-103.8961904",
            "activities": [
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "7C37B79B-D02D-49EB-9020-3DB8299B748A",
                    "name": "Backcountry Hiking"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "C59E231D-55FC-4B37-BC5B-FF76383951B5",
                    "name": "Craft Demonstrations"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "43800AD1-D439-40F3-AAB3-9FB651FE45BB",
                    "name": "Gift Shop and Souvenirs"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "237A1662-6018-4115-ABD1-B8CCF827E703",
                    "name": "Historic Weapons Demonstration"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "B204DE60-5A24-43DD-8902-C81625A09A74",
                    "name": "Living History"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "10.0000",
                    "description": "Per Person Fee over 15 years of age. 7 Day pass",
                    "title": "Option #1 Fort Davis Entrance Fee - Per Person"
                },
                {
                    "cost": "20.0000",
                    "description": "All visitors within a non-commercial vehicle included. Visitors under 16 years of age are always Free. Per person fee may be more affordable for two adults. 7 day pass.",
                    "title": "Option #2 Fort Davis Entrance Fee - Per Vehicle"
                },
                {
                    "cost": "15.0000",
                    "description": "This fee is for 2 adults on one motorcycle. Per person fee may be more affordable for one adult. 7 day pass.",
                    "title": "Option #3 Fort Davis Entrance Fee - Per Motorcycle"
                }
            ],
            "directionsInfo": "We are approximately 2.5 hours south of Midland/Odessa starting on I-20 to HWY 17, 3.5 hours North West of Del Rio starting on HWY 90 to HWY 118, 4 hours east of El Paso starting on I-10 to HWY 118 and 7 hours west of San Antonio starting on I-10 to HWY 17.",
            "entrancePasses": [
                {
                    "cost": "35.0000",
                    "description": "You can buy an annual pass to Fort Davis National Historic Site for $30.00. This pass will admit the pass owners and three other adults to the Fort for 12 months from the month of purchase.",
                    "title": "Fort Davis Annual Pass"
                }
            ],
            "directionsUrl": "http://www.nps.gov/foda/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/foda/index.htm",
            "weatherInfo": "Summer Temperatures average a High of 95 and low of 65. Winter Temperatures average a High of 60 and a low of 20.  Wind is very common and heavy rainfall is very sporadic.",
            "name": "Fort Davis",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-01-01",
                            "name": "New Year's Day",
                            "endDate": "2018-01-01"
                        },
                        {
                            "exceptionHours": {
                                "monday": "Closed"
                            },
                            "startDate": "2018-01-21",
                            "name": "Birthday of Martin Lither King, Jr.",
                            "endDate": "2018-01-21"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-12-25",
                            "name": "Christmas Day",
                            "endDate": "2018-12-25"
                        },
                        {
                            "exceptionHours": {
                                "thursday": "Closed"
                            },
                            "startDate": "2018-11-22",
                            "name": "Thanksgiving Day",
                            "endDate": "2018-11-22"
                        }
                    ],
                    "description": "Daily Hours are 8:00 AM - 5:00 PM\nHoliday Closures: Thanksgiving Day, Christmas Day, New Year's Day, and Martin Luther King Jr. Holiday.",
                    "standardHours": {
                        "wednesday": "8:00AM - 5:00PM",
                        "monday": "8:00AM - 5:00PM",
                        "thursday": "8:00AM - 5:00PM",
                        "sunday": "8:00AM - 5:00PM",
                        "tuesday": "8:00AM - 5:00PM",
                        "friday": "8:00AM - 5:00PM",
                        "saturday": "8:00AM - 5:00PM"
                    },
                    "name": "Regular Hours"
                }
            ],
            "topics": [
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "921D1471-5F6B-47D5-918D-389E7106083A",
                    "name": "Alligators or Crocodiles"
                },
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "607D41B0-F830-4C07-A557-BCEF880A3929",
                    "name": "Burial, Cemetery and Gravesite"
                },
                {
                    "id": "2539614A-9646-446E-8251-34D3AAE068FA",
                    "name": "Cats (wild)"
                },
                {
                    "id": "69790851-A62A-4920-AA3E-E61406FFC27D",
                    "name": "Cavalry"
                },
                {
                    "id": "344CE561-4E98-49BF-ACD2-438E3684DA5D",
                    "name": "Elk"
                },
                {
                    "id": "988B4AFC-F478-4673-B66D-E6BDB0CCFF35",
                    "name": "Forts"
                },
                {
                    "id": "97716EF5-D001-449C-993A-EC15AB8FD345",
                    "name": "Hospital"
                },
                {
                    "id": "53798A16-7CDB-4F17-9C28-095F92D2ED8D",
                    "name": "Indian and Frontier Wars"
                },
                {
                    "id": "6766B838-9493-4EF8-830E-2D1EFB917461",
                    "name": "Indigenous and Native Warrior"
                },
                {
                    "id": "E411F474-A530-4804-9D23-1D94C78B41E4",
                    "name": "Infantry and Militia"
                },
                {
                    "id": "4B3CD083-7500-434B-A8C2-D355925E0245",
                    "name": "Medicine"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "393F60FB-80D6-46F7-B0FB-BBF3C90F59FD",
                    "name": "Tortoises and Turtles"
                },
                {
                    "id": "97CCB419-196C-4B95-BB3A-621458F78415",
                    "name": "US Army"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "C9C749E3-39C3-45F7-BCC5-9A609E30AA05",
                    "name": "Westward Expansion"
                }
            ],
            "latLong": "lat:30.59930381, long:-103.8961904",
            "description": "Fort Davis is one of the best surviving examples of an Indian Wars' frontier military post in the Southwest. From 1854 to 1891, Fort Davis was strategically located to protect emigrants, mail coaches, and freight wagons on the Trans-Pecos portion of the San Antonio-El Paso Road and on the Chihuahua Trail.",
            "images": [
                {
                    "credit": "NPS Photo / Dana Jones",
                    "altText": "Two ladies working in the kitchen",
                    "title": "Kitchen",
                    "caption": "Special events bring back the smells of an 1800s Kitchen",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DCBC4-1DD8-B71B-0B71D2F2431ADAD5.jpg"
                },
                {
                    "credit": "NPS Photo / Max Kandler",
                    "altText": "Garrison Flag flying over the post.",
                    "title": "Parade Ground",
                    "caption": "Garrison flag flying over the post within the box canyon Fort Davis is located.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DCD39-1DD8-B71B-0BEE09E6D3EF298C.jpg"
                },
                {
                    "credit": "NPS Photo / Max Kandler",
                    "altText": "Artillery Crew stands at the ready",
                    "title": "Artillery Crew",
                    "caption": "The Artillery Crew stand ready for orders to post at their positions and fire the U.S. 3-inch Ordnance Rifle.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DCEB9-1DD8-B71B-0B0D7E4D5947B1BB.jpg"
                },
                {
                    "credit": "NPS Photo / Max Kandler",
                    "altText": "Soldier mounted on his horse",
                    "title": "Cavalry",
                    "caption": "The U.S. Cavalry was utilized at Fort Davis for most of its existence. Here a soldier shows off the uniform and equipment of the 1800s.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DD030-1DD8-B71B-0BCFFA4A826F038F.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "Building and trees at Fort Davis during the fall with yellow leaves.",
                    "title": "Fall Colors",
                    "caption": "This sky island habitat is known for its dramatic season changes. Fall brings the end of our rainy season allowing the bright yellow Cottonwoods to shine. In spring /summer waving grasses and wildflowers show off their vivid colors once again.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DD1B0-1DD8-B71B-0B75AFDB9100B067.jpg"
                }
            ],
            "designation": "National Historic Site",
            "parkCode": "foda",
            "addresses": [
                {
                    "postalCode": "79734",
                    "city": "Fort Davis",
                    "stateCode": "TX",
                    "line1": "101 Lt. Flipper Dr. #1379",
                    "type": "Physical",
                    "line3": "",
                    "line2": "P.O. Box 1379"
                },
                {
                    "postalCode": "79734",
                    "city": "Fort Davis",
                    "stateCode": "TX",
                    "line1": "P.O. Box 1379",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "101 Lt. Flipper Dr. #1379"
                }
            ],
            "id": "DE70B987-01A4-4BA5-9662-030BE3329AB3",
            "fullName": "Fort Davis National Historic Site",
            "latitude": "30.59930381"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "315-338-7730",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "315-334-5051",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    },
                    {
                        "phoneNumber": "800-662-1220",
                        "description": "",
                        "extension": "",
                        "type": "TTY"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "fost_info@nps.gov"
                    }
                ]
            },
            "states": "NY",
            "longitude": "-75.45557626",
            "activities": [
                {
                    "id": "19A59EFB-DF4B-4049-9EE1-A784CAC9C70C",
                    "name": "Arts and Crafts"
                },
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
                    "name": "Astronomy"
                },
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "C59E231D-55FC-4B37-BC5B-FF76383951B5",
                    "name": "Craft Demonstrations"
                },
                {
                    "id": "FAED7F97-3474-4C21-AB42-FB0768A2F826",
                    "name": "Cultural Demonstrations"
                },
                {
                    "id": "28880A5B-3D29-41AC-BD8B-24743E7A070F",
                    "name": "First Person Interpretation"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "43800AD1-D439-40F3-AAB3-9FB651FE45BB",
                    "name": "Gift Shop and Souvenirs"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A",
                    "name": "Hands-On"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "237A1662-6018-4115-ABD1-B8CCF827E703",
                    "name": "Historic Weapons Demonstration"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "B204DE60-5A24-43DD-8902-C81625A09A74",
                    "name": "Living History"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "A8650547-1A30-4222-86C3-A7660A829670",
                    "name": "Reenactments"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "C38B3C62-1BBF-4EA1-A1A2-35DE21B74C17",
                    "name": "Snow Play"
                },
                {
                    "id": "D37A0003-8317-4F04-8FB0-4CF0A272E195",
                    "name": "Stargazing"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "All activities and tours are free.",
                    "title": "Free"
                }
            ],
            "directionsInfo": "Take I-90 (NY Thruway) to Exit 33 (Verona-Rome). Turn Right onto Rt. 365 E. Follow Rt. 365, veering left as Rt. 365 merges with Rt 69 at the fork in the road. This will take you over an arterial bridge into the City of Rome. Fort Stanwix NM will be across Erie Blvd. on the right side of James Street.",
            "entrancePasses": [
                {
                    "cost": "0.0000",
                    "description": "All activities and tours are free.",
                    "title": "No Pass Required for Entrance"
                }
            ],
            "directionsUrl": "http://www.nps.gov/fost/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/fost/index.htm",
            "weatherInfo": "The Park lies within a temperate zone and experiences four full seasons. Summer can become very hot and humid. Snow is common as late as May and as early as October. The fort area can become muddy in all seasons. With most activities outdoors, good closed-toe walking shoes and low heels are advised. Air conditioning and heating is limited to park visitor center most times in the year. Water and extra layers of clothing in all seasons are always recommended!",
            "name": "Fort Stanwix",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "9:00AM - 5:00PM",
                                "monday": "Closed",
                                "thursday": "9:00AM - 5:00PM",
                                "sunday": "Closed",
                                "tuesday": "9:00AM - 5:00PM",
                                "friday": "9:00AM - 5:00PM",
                                "saturday": "9:00AM - 5:00PM"
                            },
                            "startDate": "2020-12-15",
                            "name": "Winter Hours",
                            "endDate": "2020-04-15"
                        }
                    ],
                    "description": "Fort Stanwix National Monument sits in the center of downtown Rome, NY. Grounds are open throughout the year. Please see further information to learn when the park visitor center and fort can be accessed.",
                    "standardHours": {
                        "wednesday": "Closed",
                        "monday": "Closed",
                        "thursday": "Closed",
                        "sunday": "Closed",
                        "tuesday": "Closed",
                        "friday": "Closed",
                        "saturday": "Closed"
                    },
                    "name": "CLOSED until further notice"
                }
            ],
            "topics": [
                {
                    "id": "F3883A66-A7CB-461B-868E-1B5932224B25",
                    "name": "American Revolution"
                },
                {
                    "id": "990E22A2-20D8-4CC2-8E6C-D2DF165BCDA5",
                    "name": "American Revolutionary War"
                },
                {
                    "id": "FB3641FE-67A3-4EC7-B9C4-0A0867776798",
                    "name": "Ancient Seas"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "B145FAB8-5462-4FE2-964E-464D3A5E7F96",
                    "name": "Artillery"
                },
                {
                    "id": "6A3658B4-FB6E-4E23-A63A-9AEF11988831",
                    "name": "Battlefields"
                },
                {
                    "id": "607D41B0-F830-4C07-A557-BCEF880A3929",
                    "name": "Burial, Cemetery and Gravesite"
                },
                {
                    "id": "3D2EE3E9-7344-416C-A412-C2C7CDCDE684",
                    "name": "Colonial/European Contact Conflicts"
                },
                {
                    "id": "7F12224B-217A-4B07-A4A2-636B1CE7F221",
                    "name": "Colonization and Settlement"
                },
                {
                    "id": "9F6A7003-59D6-4438-935F-760FD04C1073",
                    "name": "Foothills, Plains and Valleys"
                },
                {
                    "id": "988B4AFC-F478-4673-B66D-E6BDB0CCFF35",
                    "name": "Forts"
                },
                {
                    "id": "480D5BD7-D43B-44BB-AD82-1751CB859054",
                    "name": "French and Indian War"
                },
                {
                    "id": "F0F97E32-2F29-41B4-AF98-9FBE8DAB36B1",
                    "name": "Geology"
                },
                {
                    "id": "F12B6BDB-2FE9-4961-9DC2-59FEBC0990CD",
                    "name": "Great Depression"
                },
                {
                    "id": "53798A16-7CDB-4F17-9C28-095F92D2ED8D",
                    "name": "Indian and Frontier Wars"
                },
                {
                    "id": "E411F474-A530-4804-9D23-1D94C78B41E4",
                    "name": "Infantry and Militia"
                },
                {
                    "id": "FD0BA21A-5F69-4688-9D4B-856DA242DC78",
                    "name": "Marshes"
                },
                {
                    "id": "CB405E14-E2A3-4C2E-A91C-AFF8AEB3DEA0",
                    "name": "Massacres"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "F669BC40-BDC4-41C0-9ACE-B2CD25373045",
                    "name": "Presidents"
                },
                {
                    "id": "A155238F-0DD2-4610-9B87-05FCE1C59283",
                    "name": "River and Riparian"
                },
                {
                    "id": "A160B3D9-1603-4D89-B82F-21FCAF9EEE3B",
                    "name": "Tragic Events"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "846E5C56-E5AC-489C-B3BF-11F4C73F12C2",
                    "name": "Urban America"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "BA12B386-49EA-46B0-9121-FCACACC47538",
                    "name": "Watersheds"
                },
                {
                    "id": "C9C749E3-39C3-45F7-BCC5-9A609E30AA05",
                    "name": "Westward Expansion"
                },
                {
                    "id": "1365C347-952C-475A-B755-731DD523C195",
                    "name": "Wetlands"
                }
            ],
            "latLong": "lat:43.21053441, long:-75.45557626",
            "description": "For centuries, the Oneida Carrying Place, a six mile portage connecting the Mohawk River and Wood Creek, served as a vital link for those traveling by water from the ocean to the Great Lakes. When Europeans arrived, nations fought for control of the carry, the homelands of the Six Nations Confederacy, and the rich resources of North America. In this struggle, Fort Stanwix would play a vital role.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "A park ranger directs a group of children thorugh the fort.",
                    "title": "Which Adventure Will You Choose?",
                    "caption": "From ranger tours, to walking trails, to exploring history, there's plenty to do at Fort Stanwix!",
                    "url": "https://www.nps.gov/common/uploads/structured_data/97622E69-1DD8-B71B-0BFA66595163F51F.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Children dance, jump, and skip on the parade ground of reconstructed Fort Stanwix.",
                    "title": "Celebrate the Park! Fort Stanwix at 40 & the NPS Centennial!",
                    "caption": "The park is gearing up for the National Park Service Centennial. Find out what's going on and what's already been done!",
                    "url": "https://www.nps.gov/common/uploads/structured_data/97B49B54-1DD8-B71B-0B182BEF64FAA577.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Small boxes in rows contain small artifacts, including broken pipes and glass bottles.",
                    "title": "Objects From the Past: Museum Collection",
                    "caption": "Learn more about the objects in the park's museum collection.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/987D6EEA-1DD8-B71B-0BEBD381AE9D09C9.png"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "A woman digs in a carefully excavated hole.",
                    "title": "Uncovering the Past at Fort Stanwix",
                    "caption": "What evidence of the past has been found at Fort Stanwix? Stop through to find out!",
                    "url": "https://www.nps.gov/common/uploads/structured_data/988ED0D8-1DD8-B71B-0B42050335B9C0C4.jpg"
                },
                {
                    "credit": "NPS Photo/M. Hucko",
                    "altText": "Soldiers stand in a neat row holding their muskets.",
                    "title": "Fort Stanwix: History Happened Here!",
                    "caption": "Discover the vital role that Fort Stanwix/Schuyler, the fort that \"never surrendered\" played in the American Revolution.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/98ADC8DB-1DD8-B71B-0B6F8FEADD955234.jpg"
                }
            ],
            "designation": "National Monument",
            "parkCode": "fost",
            "addresses": [
                {
                    "postalCode": "13440",
                    "city": "Rome",
                    "stateCode": "NY",
                    "line1": "112 East Park St.",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "13440",
                    "city": "Rome",
                    "stateCode": "NY",
                    "line1": "100 North James St.",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "D57C8F0D-71E9-46D7-B00B-001BC7E39096",
            "fullName": "Fort Stanwix National Monument",
            "latitude": "43.21053441"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "2024265961",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "2024260880",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "nace_superintendent@nps.gov"
                    }
                ]
            },
            "states": "DC",
            "longitude": "-76.98508147",
            "activities": [
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no entrance fee.",
                    "title": "Entrance Fee"
                },
                {
                    "cost": "1.0000",
                    "description": "Visitors can reserve tickets for guided tours of the historic house.",
                    "title": "House Tour Reservation"
                }
            ],
            "directionsInfo": "The site can be reached by car, public transportation, or on foot. See the directions page of the website for more detailed information.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/frdo/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/frdo/index.htm",
            "weatherInfo": "Winter: Temperatures usually range from 30 to 50 F. There is occasional snow.\n\nSpring: Temperatures usually range widely from 40 to 70 F. Rain is common.\n\nSummer: Temperatures usually range from 70 to 90 F. Humidity is usually high. Be prepared and drink plenty of water. There is a water fountain in the visitor center.\n\nFall: Temperatures usually range widely from 40 to 70 F. Humidity can remain high in the earlier part of the season.",
            "name": "Frederick Douglass",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "9:00AM - 4:30PM",
                                "monday": "9:00AM - 4:30PM",
                                "thursday": "9:00AM - 4:30PM",
                                "sunday": "9:00AM - 4:30PM",
                                "tuesday": "9:00AM - 4:30PM",
                                "friday": "9:00AM - 4:30PM",
                                "saturday": "9:00AM - 4:30PM"
                            },
                            "startDate": "2015-11-01",
                            "name": "Fall and Winter Hours",
                            "endDate": "2015-03-31"
                        }
                    ],
                    "description": "Hours apply to the grounds and visitor center. \n\nVisitors may only enter the historic house on guided tours at scheduled times. Space is limited. Reservations are strongly encouraged if you are visiting on your own or with fewer than ten people. Reservations are required for groups of more than ten people.",
                    "standardHours": {
                        "wednesday": "9:00AM - 5:00PM",
                        "monday": "9:00AM - 5:00PM",
                        "thursday": "9:00AM - 5:00PM",
                        "sunday": "9:00AM - 5:00PM",
                        "tuesday": "9:00AM - 5:00PM",
                        "friday": "9:00AM - 5:00PM",
                        "saturday": "9:00AM - 5:00PM"
                    },
                    "name": "Frederick Douglass National Historic Site"
                }
            ],
            "topics": [
                {
                    "id": "5CCB14BC-2AC4-45CE-B786-54A065DA1B60",
                    "name": "Abolition Movement"
                },
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "8F34C3EC-7B8E-4F28-8114-B8DFE4F300DF",
                    "name": "Civil Rights"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "D9FC6D14-F8C7-4EBA-86EA-DFD99B6BB4F5",
                    "name": "Enslavement"
                },
                {
                    "id": "351EE154-87AA-46B0-BBA1-ED604368ACE9",
                    "name": "Incarceration"
                },
                {
                    "id": "BAA85463-A96E-4CF4-A260-290D195423DB",
                    "name": "Reconstruction"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                },
                {
                    "id": "DA1E6678-D60D-4E66-96A5-78183342673B",
                    "name": "Voting Rights and Suffrage"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                }
            ],
            "latLong": "lat:38.86298458, long:-76.98508147",
            "description": "Frederick Douglass spent his life fighting for justice and equality. Born into slavery in 1818, he escaped as a young man and became a leading voice in the abolitionist movement. People everywhere still find inspiration today in his tireless struggle, brilliant words, and inclusive vision of humanity. Douglass's legacy is preserved here at Cedar Hill, where he lived his last 17 years.",
            "images": [
                {
                    "credit": "NPS Photo / Nate Johnson",
                    "altText": "Visitors take photos in front of a historic house",
                    "title": "Cedar Hill",
                    "caption": "Rangers guide daily tours of the historic house at scheduled times.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7BDCB8-1DD8-B71B-0BB04B6313FE6EF1.jpg"
                },
                {
                    "credit": "NPS Photo / Nate Johnson",
                    "altText": "A tiny stone cabin surrounded by fall foliage",
                    "title": "The Growlery",
                    "caption": "Frederick Douglass retreated to this stone cabin to read, write, and think in seclusion.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7BDEC6-1DD8-B71B-0B5F0591764FD200.jpg"
                },
                {
                    "credit": "NPS Photo / Nate Johnson",
                    "altText": "View of downtown Washington, D.C., including the Washington Monument and U.S. Capitol",
                    "title": "View of Washington, D.C.",
                    "caption": "Frederick Douglass's view from Cedar Hill continues to impress visitors today.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7BE042-1DD8-B71B-0B373631B36D4F20.jpg"
                },
                {
                    "credit": "NPS Photo / Nate Johnson",
                    "altText": "A plaster bust of Frederick Douglass",
                    "title": "Bust of Frederick Douglass",
                    "caption": "Hundreds of original objects, such as this bust, furnish the historic house.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7BE216-1DD8-B71B-0B9689720804C283.jpg"
                }
            ],
            "designation": "National Historic Site",
            "parkCode": "frdo",
            "addresses": [
                {
                    "postalCode": "20020",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "1411 W Street SE",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "20020",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "1411 W Street SE",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "F6831504-A456-45C8-B87B-0FCE1D849A12",
            "fullName": "Frederick Douglass National Historic Site",
            "latitude": "38.86298458"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "5406933200",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "john_hennessy@nps.gov"
                    }
                ]
            },
            "states": "VA",
            "longitude": "-77.6470428",
            "activities": [
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "237A1662-6018-4115-ABD1-B8CCF827E703",
                    "name": "Historic Weapons Demonstration"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "B204DE60-5A24-43DD-8902-C81625A09A74",
                    "name": "Living History"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "A8650547-1A30-4222-86C3-A7660A829670",
                    "name": "Reenactments"
                },
                {
                    "id": "8D778629-F603-4C50-A121-6F4BB2FE2C4B",
                    "name": "Road Biking"
                },
                {
                    "id": "C7D5A145-F8EB-4C37-9E92-2F6C6206B196",
                    "name": "Self-Guided Tours - Auto"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "Fredericksburg & Spotsylvania is a fee free park",
                    "title": "No Entrance Fee"
                },
                {
                    "cost": "2.0000",
                    "description": "The Fredericksburg and Chancellorsville Visitor Center each offer a unique 22-minute film. The films cost $2.00 (free for ages 10 and under, $1.00 for adults 62 and over). \n\nTickets can be purchased at the museum store.",
                    "title": "Visitor Center Films"
                }
            ],
            "directionsInfo": "Fredericksburg and Spotsylvania National Military Park manages 4 battlefields and multiple historical sites across multiple counties. The park is located approximately 50 miles south of Washington DC. Different battlefields and historical sites are accessible via I-95 and VA Route 3. For directions and physical addresses for each of our sites, please visit the Directions & Transportation section of our website.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/frsp/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/frsp/index.htm",
            "weatherInfo": "The regional climate is characterized by mild winters and warm, humid summers. The mean annual temperatures is 56 degrees Fahrenheit. The average summer temperature is 75 degrees Fahrenheit. Daytime highs during the summer are in the upper 80s, and nighttime lows are in the lower 60s. Daytime highs in the winter are in the upper 40s, and nighttime lows are in the middle 20s. Precipitation is well distributed throughout the year, with the minimum amount in August and the maximum in February.",
            "name": "Fredericksburg & Spotsylvania",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Park grounds are open from sunrise to sunset daily, with the exception of extreme weather incidents. Building hours vary by building and season.",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "Park Grounds"
                }
            ],
            "topics": [
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "B145FAB8-5462-4FE2-964E-464D3A5E7F96",
                    "name": "Artillery"
                },
                {
                    "id": "6A3658B4-FB6E-4E23-A63A-9AEF11988831",
                    "name": "Battlefields"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "D10852A3-443C-4743-A5FA-6DD6D2A054B3",
                    "name": "Birthplace"
                },
                {
                    "id": "607D41B0-F830-4C07-A557-BCEF880A3929",
                    "name": "Burial, Cemetery and Gravesite"
                },
                {
                    "id": "69790851-A62A-4920-AA3E-E61406FFC27D",
                    "name": "Cavalry"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "D9FC6D14-F8C7-4EBA-86EA-DFD99B6BB4F5",
                    "name": "Enslavement"
                },
                {
                    "id": "1F833C99-A75D-4F9E-9256-B96523485466",
                    "name": "Farming and  Agriculture"
                },
                {
                    "id": "1608649A-E7D7-4529-BD83-074C90F9FB68",
                    "name": "Fish"
                },
                {
                    "id": "F12B6BDB-2FE9-4961-9DC2-59FEBC0990CD",
                    "name": "Great Depression"
                },
                {
                    "id": "97716EF5-D001-449C-993A-EC15AB8FD345",
                    "name": "Hospital"
                },
                {
                    "id": "E411F474-A530-4804-9D23-1D94C78B41E4",
                    "name": "Infantry and Militia"
                },
                {
                    "id": "4B3CD083-7500-434B-A8C2-D355925E0245",
                    "name": "Medicine"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "570E8E93-3A49-45FB-B11A-F2F984EAC862",
                    "name": "National Cemetery"
                },
                {
                    "id": "F67CA03D-109F-44B9-9B63-D9EC9FD77A1D",
                    "name": "Plantations"
                },
                {
                    "id": "F669BC40-BDC4-41C0-9ACE-B2CD25373045",
                    "name": "Presidents"
                },
                {
                    "id": "BAA85463-A96E-4CF4-A260-290D195423DB",
                    "name": "Reconstruction"
                },
                {
                    "id": "97CCB419-196C-4B95-BB3A-621458F78415",
                    "name": "US Army"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "7DA81DAB-5045-4953-9C20-36590AD9FA95",
                    "name": "Women's History"
                }
            ],
            "latLong": "lat:38.28277118, long:-77.6470428",
            "description": "Fredericksburg, Chancellorsville, Wilderness, and Spotsylvania--this is America's battleground, where the Civil War roared to its bloody climax. No place more vividly reflects the War's tragic cost in all its forms. A town bombarded and looted. Farms large and small ruined. Refugees by the thousands forced into the countryside. More than 85,000 men wounded; 15,000 killed--most in graves unknown.",
            "images": [
                {
                    "credit": "Buddy Secor",
                    "altText": "Fog near rolling hills with sun rising in background",
                    "title": "Jackson Flank Attack Site",
                    "caption": "Fredericksburg & Spotsylvania is now characterized by dynamic landscapes as well significant Civil War battles that took place on the same ground",
                    "url": "https://www.nps.gov/common/uploads/structured_data/C9D380A5-1DD8-B71B-0BB978C07B3F3DAF.jpg"
                },
                {
                    "credit": "Buddy Secor",
                    "altText": "Trees with fall colors in front of large brick manor house",
                    "title": "Chatham in the Fall",
                    "caption": "When visiting Fredericksburg & Spotsylvania, be sure to explore our numerous historic structures, such as Chatham Manor pictured here",
                    "url": "https://www.nps.gov/common/uploads/structured_data/C9E8E1AB-1DD8-B71B-0B26F19D38F769B0.jpg"
                },
                {
                    "credit": "Buddy Secor",
                    "altText": "Cannon crew in the process of a firing demonstration",
                    "title": "Cannon Firing Demonstration",
                    "caption": "Check out our Special Events page for information about special tours, lectures, programs, and living history demonstrations",
                    "url": "https://www.nps.gov/common/uploads/structured_data/C9F4B63C-1DD8-B71B-0B475838F03C082D.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Monument in national cemetery illuminated by candles",
                    "title": "Fredericksburg National Cemetery",
                    "caption": "Thousands of visitors join us every year for our Memorial Day Illumination of the National Cemetery",
                    "url": "https://www.nps.gov/common/uploads/structured_data/CA02C1EF-1DD8-B71B-0BEEB2EBD4B3D88F.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Two NPS rangers and a number of visitors hold candles during evening ceremony",
                    "title": "Ranger Programs",
                    "caption": "Get the most out of your battlefield experience by taking a guided ranger program!",
                    "url": "https://www.nps.gov/common/uploads/structured_data/CA2C4B40-1DD8-B71B-0B1E3606639FCA7E.jpg"
                }
            ],
            "designation": "National Military Park",
            "parkCode": "frsp",
            "addresses": [
                {
                    "postalCode": "22405",
                    "city": "Fredericksburg",
                    "stateCode": "VA",
                    "line1": "120 Chatham Ln",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "22405",
                    "city": "Fredericksburg",
                    "stateCode": "VA",
                    "line1": "120 Chatham Ln",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "52430E36-3361-4BB8-BE6F-0F2834E50CB3",
            "fullName": "Fredericksburg & Spotsylvania National Military Park",
            "latitude": "38.28277118"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "7243292501",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "7243292515",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "frhi_superintendent@nps.gov"
                    }
                ]
            },
            "states": "PA",
            "longitude": "-79.92504169",
            "activities": [
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "EAB1EBDE-5B72-493F-8F8F-0EE5B1724436",
                    "name": "Cross-Country Skiing"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "F9B1D433-6B86-4804-AED7-B50A519A3B7C",
                    "name": "Skiing"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no entrance fee at Friendship Hill National Historic Site.   Activities that require a permit may have a fee.",
                    "title": "No Entrance Fee"
                }
            ],
            "directionsInfo": "Friendship Hill NHS is located on PA 166 three miles north of Point Marion, Pennsylvania.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/frhi/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/frhi/index.htm",
            "weatherInfo": "Weather varies considerably within each season.  Be prepared with layered clothing. Precipitation is common throughout the year.\nSpring: Temperatures usually range from 25°F to 70°F.  On average, May is the wettest month.\nSummer: Temperatures usually range from 50°F to 80°F. July is the warmest month.\nFall: Temperatures usually range from 30°F to 70°F. Fall foliage is at its peak around mid-October. \nWinter: Temperatures range from 15°F to 40°F.  January is the coldest month.",
            "name": "Friendship Hill",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed"
                            },
                            "startDate": "2020-05-01",
                            "name": "Closed due to COVID-19",
                            "endDate": "2020-05-15"
                        }
                    ],
                    "description": "The Park Grounds and Trails are open daily from sunrise to sunset, all year. Please note: While the park is open Sunrise to Sunset - the Gallatin House Visitor Center may be closed.",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "Friendship Hill Grounds and Trails"
                }
            ],
            "topics": [
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                }
            ],
            "latLong": "lat:39.77543423, long:-79.92504169",
            "description": "Albert Gallatin is best remembered for his thirteen year tenure as Secretary of the Treasury during the Jefferson and Madison administrations. In that time he reduced the national debt, purchased the Louisiana Territory and funded the Lewis & Clark exploration. Gallatin's accomplishments and contributions are highlighted at Friendship Hill, his restored country estate.",
            "images": [
                {
                    "credit": "NPS Photo / Tom Markwardt",
                    "altText": "Gallatin house",
                    "title": "Gallatin House - Stone House and well",
                    "caption": "Friendship Hill was the country home of Albert Gallatin",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85E483-1DD8-B71B-0B3038074D3BF415.jpg"
                }
            ],
            "designation": "National Historic Site",
            "parkCode": "frhi",
            "addresses": [
                {
                    "postalCode": "15437",
                    "city": "Farmington",
                    "stateCode": "PA",
                    "line1": "c/o Fort Necessity NB",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "1 Washington Parkway"
                },
                {
                    "postalCode": "15470",
                    "city": "Point Marion",
                    "stateCode": "PA",
                    "line1": "223 New Geneva Rd.",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "F6D0ABED-2C07-4194-8CB7-09476271EDB9",
            "fullName": "Friendship Hill National Historic Site",
            "latitude": "39.77543423"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "907-459-3730",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "fair_interpretation@nps.gov"
                    }
                ]
            },
            "states": "AK",
            "longitude": "-153.2917758",
            "activities": [
                {
                    "id": "4A58AF13-E8FB-4530-B41A-97DF0B0C77B7",
                    "name": "Backcountry Camping"
                },
                {
                    "id": "7C37B79B-D02D-49EB-9020-3DB8299B748A",
                    "name": "Backcountry Hiking"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "907E8125-15E4-483C-8EAD-B9FA1E85C6F8",
                    "name": "Canoe or Kayak Camping"
                },
                {
                    "id": "21DB3AFC-8AAC-4665-BC1F-7198C0685983",
                    "name": "Canoeing"
                },
                {
                    "id": "B12FAAB9-713F-4B38-83E4-A273F5A43C77",
                    "name": "Climbing"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "25559F45-F162-4B8B-BEC2-B341034A2AF4",
                    "name": "Hunting"
                },
                {
                    "id": "8386EEAF-985F-4DE8-9037-CCF91975AC94",
                    "name": "Hunting and Gathering"
                },
                {
                    "id": "F353A9ED-4A08-456E-8DEC-E61974D0FEB6",
                    "name": "Kayaking"
                },
                {
                    "id": "977B3209-68A2-4BCE-97A9-EA0CAC320664",
                    "name": "Mountain Climbing"
                },
                {
                    "id": "EADFAEEB-4D57-49DB-9C58-BF8DC241C24F",
                    "name": "Off-Trail Permitted Hiking"
                },
                {
                    "id": "4D224BCA-C127-408B-AC75-A51563C42411",
                    "name": "Paddling"
                },
                {
                    "id": "87D3B1CD-3903-4561-ABB1-2DD870C43F2F",
                    "name": "Rock Climbing"
                },
                {
                    "id": "75B92BEB-A36D-4064-88B7-92EEC6D17611",
                    "name": "Whitewater Rafting"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no entrance fee for Gates of the Arctic.",
                    "title": "Entrance Fee"
                }
            ],
            "directionsInfo": "Gates of the Arctic is a wilderness park, with no roads or trails into the park lands, so visitors must fly or hike into the park. Access begins in Fairbanks, Alaska & there are several small airlines that provide daily flights into the communities of Bettles and Anaktuvuk Pass, and Coldfoot. Most visitors access the park by air taxi or hike in from the Dalton Highway or from the village of Anaktuvuk Pass. River crossings are necessary from both locations.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/gaar/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/gaar/index.htm",
            "weatherInfo": "The climate of Gates of the Arctic National Park & Preserve is generally classified as arctic and sub-arctic, with exceptionally cold winters, relatively mild summers, low annual precipitation, and generally high winds. The weather is influenced by many different systems, and can change rapidly.",
            "name": "Gates Of The Arctic",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "No closed times or seasons for Gates of the Arctic National Park & Preserve. Visitor Center hours vary greatly by location and season. See Visitor Center Hours for more information.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Park & Preserve are always open"
                }
            ],
            "topics": [
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "77B7EFDF-1A74-409C-8BA2-324EC919DB0E",
                    "name": "Arctic"
                },
                {
                    "id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
                    "name": "Arts"
                },
                {
                    "id": "4DC11D06-00F1-4A01-81D0-89CCCCE4FF50",
                    "name": "Climate Change"
                },
                {
                    "id": "12EA2B56-17EC-410A-A10D-BFBA87A0669B",
                    "name": "Explorers and Expeditions"
                },
                {
                    "id": "04A39AB8-DD02-432F-AE5F-BA1267D41A0D",
                    "name": "Fire"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "A155238F-0DD2-4610-9B87-05FCE1C59283",
                    "name": "River and Riparian"
                },
                {
                    "id": "83DDFE66-914E-4402-AD3E-ACA731AB2537",
                    "name": "The Gold Rush"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "C8F16A24-90B7-47D9-B2E0-5F2A9237D0F4",
                    "name": "Tundra"
                },
                {
                    "id": "596BAA6D-F66B-4348-8433-FEFF35A8005E",
                    "name": "Water Trails"
                },
                {
                    "id": "C9C749E3-39C3-45F7-BCC5-9A609E30AA05",
                    "name": "Westward Expansion"
                },
                {
                    "id": "B85866E2-0897-4000-9040-605CA335804F",
                    "name": "Wilderness"
                }
            ],
            "latLong": "lat:67.75961636, long:-153.2917758",
            "description": "This vast landscape does not contain any roads or trails. Visitors discover intact ecosystems where people have lived with the land for thousands of years. Wild rivers meander through glacier-carved valleys, caribou migrate along age-old trails, endless summer light fades into aurora-lit night skies of winter. It remains virtually unchanged except by the forces of nature.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "Alpenglow on the granite cliffs of mountains",
                    "title": "Arrigetch Peaks",
                    "caption": "A spring alpenglow brightens the granite walls of the Arrigetch Peaks",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7A89F4-1DD8-B71B-0B52204A2EBF61A4.jpg"
                },
                {
                    "credit": "NPS Photo / Sean Tevebaugh",
                    "altText": "Aerial view of the Alatna River as it winds through a valley",
                    "title": "Alatna River",
                    "caption": "Aerial view of the Alatna River as it winds through a valley",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7A8B6B-1DD8-B71B-0B8B89FE0C6B6F4F.jpg"
                },
                {
                    "credit": "Photo courtesy of Paxson Woebler",
                    "altText": "A hiker crosses a stream with mountains in the background",
                    "title": "Entering Oolah Valley",
                    "caption": "A hiker crosses a stream and enters Oolah Valley.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7A8CFC-1DD8-B71B-0BF455202A395DA6.jpg"
                },
                {
                    "credit": "Photo courtesy of Paxson Wobelber",
                    "altText": "Handful of blueberries",
                    "title": "Blueberries",
                    "caption": "Pausing to pick blueberries can result in a handful of delicious snacks.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7A8E6D-1DD8-B71B-0B34C967D29F5940.jpg"
                },
                {
                    "credit": "Photo courtesy of Paxson Woebler",
                    "altText": "Two hikers climb up a mountain pass",
                    "title": "Hikers crossing a mountain pass",
                    "caption": "Hikers choose river valleys as corridors when hiking over mountain passes.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7A8FC3-1DD8-B71B-0BB9EF068FF8EFF7.jpg"
                }
            ],
            "designation": "National Park & Preserve",
            "parkCode": "gaar",
            "addresses": [
                {
                    "postalCode": "99701",
                    "city": "Fairbanks",
                    "stateCode": "AK",
                    "line1": "101 Dunkel St",
                    "type": "Physical",
                    "line3": "",
                    "line2": "Suite 110"
                },
                {
                    "postalCode": "99701",
                    "city": "Fairbanks",
                    "stateCode": "AK",
                    "line1": "101 Dunkel St",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "Suite 110"
                }
            ],
            "id": "BC195D18-71C8-4A99-BF8E-10BFAB849679",
            "fullName": "Gates Of The Arctic National Park & Preserve",
            "latitude": "67.75961636"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "3044650508",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "3044650591",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "neri_interpretation@nps.gov"
                    }
                ]
            },
            "states": "WV",
            "longitude": "-81.00420836",
            "activities": [
                {
                    "id": "071BA73C-1D3C-46D4-A53C-00D5602F7F0E",
                    "name": "Boating"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA",
                    "name": "Car or Front Country Camping"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "25FB188F-5AAD-459A-9092-28A9801709FF",
                    "name": "Freshwater Fishing"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "F353A9ED-4A08-456E-8DEC-E61974D0FEB6",
                    "name": "Kayaking"
                },
                {
                    "id": "4D224BCA-C127-408B-AC75-A51563C42411",
                    "name": "Paddling"
                },
                {
                    "id": "C5C5971C-E325-4CEB-8C81-EE49A881DF17",
                    "name": "RV Camping"
                },
                {
                    "id": "75B92BEB-A36D-4064-88B7-92EEC6D17611",
                    "name": "Whitewater Rafting"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no fee to enter Gauley River National Recreation Area. Enjoy your visit!",
                    "title": "Entrance Fees"
                }
            ],
            "directionsInfo": "Plane\nThe largest airport is at Charleston, about 65 miles from Summersville. There are also small airports at Summersville and Beckley.\n\nCar\nThe main entrance to Gauley River National Recreation Area is located off US Route 19 south of Summersville and north of Fayetteville, West Virginia. Turn off US Route 19 onto WV Route 129 toward Summersville Dam. Take the second left after you cross over the dam and follow the signs to Gauley River.",
            "entrancePasses": [
                {
                    "cost": "0.0000",
                    "description": "There is no fee to enter Gauley River National Recreation Area, so there is no need for an entrance pass. Enjoy your visit!",
                    "title": "Entrance Passes"
                }
            ],
            "directionsUrl": "http:www.gari/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/gari/index.htm",
            "weatherInfo": "Weather in the Appalachian Mountains can be unpredictable and can change quickly. Always be prepared for the possibility of sudden storms. Weather in the mountains is often cooler and wetter than the surrounding area. On average, the warmest month is July. The maximum average precipitation also occurs in July.",
            "name": "Gauley River",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The area is open year round. The official Gauley boating season is from early September through mid October. Boating is occasionally possible at other times, depending on water releases from Summersville Dam.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Gauley River National Recreation Area"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "6A3658B4-FB6E-4E23-A63A-9AEF11988831",
                    "name": "Battlefields"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "DE2F0F3C-C0C4-410F-90D3-97EEC33D348E",
                    "name": "Deciduous Forests"
                },
                {
                    "id": "1608649A-E7D7-4529-BD83-074C90F9FB68",
                    "name": "Fish"
                },
                {
                    "id": "41B1A0A3-11FF-4F55-9CB9-034A7E28B087",
                    "name": "Forests and Woodlands"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                }
            ],
            "latLong": "lat:38.20614947, long:-81.00420836",
            "description": "The 25 miles of free-flowing Gauley River and the six miles of the Meadow River pass through scenic gorges and valleys containing a wide variety of natural and cultural features. The Gauley River contains several class V+ rapids, making it one of the most adventurous white water boating rivers in the east.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "Rafters enjoying the Gauley River",
                    "title": "Splashy Gauley River",
                    "caption": "Gauley River is a popular whitewater river in the fall",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F582C-1DD8-B71B-0BD2BEB50EE7AA86.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Rafting on the Gauley River",
                    "title": "Smiling on the Gauley River",
                    "caption": "Gauley Season on the Gauley River is popular.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F5999-1DD8-B71B-0B65462A497E2575.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Trying to stay in the raft on the Gauley River",
                    "title": "Holding On - Gauley River",
                    "caption": "Enjoying the rapids on the Gauley River",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F5B0A-1DD8-B71B-0B230CA9C734F1E3.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Rafting on Gauley River before Sweets Falls fapid",
                    "title": "Before Sweets Falls",
                    "caption": "A popular spot to watch the boats on the Gauley River - Sweets Falls",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F5C81-1DD8-B71B-0B5D31CC26F490DD.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Watching the boats come by on the Gauley River",
                    "title": "Kayaking Pillow Rock rapid on the Gauley River",
                    "caption": "A popular place on the Gauley River - Pillow Rock",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F5E00-1DD8-B71B-0B0960FFFB58C3F5.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Kayakers coming through Pillow Rock rapid on Gauley River",
                    "title": "Kayaking Pillow Rock rapid",
                    "caption": "Watching the kayaks come through Pillow Rock rapid",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F5F97-1DD8-B71B-0B5C15F1E2407997.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Tapping the rock at Pillow Rock rapid on the Gauley River",
                    "title": "Paddler's tapping Pillow Rock",
                    "caption": "Tapping the Pillow Rock is a ritual on the Gauley River",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F6158-1DD8-B71B-0BA32F0738491837.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Guiding through a rapid on the Gauley River",
                    "title": "Guiding on the Gauley River",
                    "caption": "Whitewater rafting is popular during Gauley Season",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F666E-1DD8-B71B-0B957E680A2A4C8D.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "One of the many rapids on the Gauley River",
                    "title": "High siding on the Gauley River",
                    "caption": "Enjoying the rapids on the Gauley River",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7F67E3-1DD8-B71B-0BBA63AB254EF9B4.jpg"
                }
            ],
            "designation": "National Recreation Area",
            "parkCode": "gari",
            "addresses": [
                {
                    "postalCode": "25846-0246",
                    "city": "Glen Jean",
                    "stateCode": "WV",
                    "line1": "Gauley River National Recreation Area",
                    "type": "Physical",
                    "line3": "",
                    "line2": "104 Main Street"
                },
                {
                    "postalCode": "25846-0246",
                    "city": "Glen Jean",
                    "stateCode": "WV",
                    "line1": "Gauley River National Recreation Area",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "P.O. Box 246"
                }
            ],
            "id": "A1994071-1BCB-4C14-9C21-108348882067",
            "fullName": "Gauley River National Recreation Area",
            "latitude": "38.20614947"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "3013201400",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "gwmp_glen_echo@nps.gov"
                    }
                ]
            },
            "states": "MD",
            "longitude": "-77.14012206",
            "activities": [
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "C59E231D-55FC-4B37-BC5B-FF76383951B5",
                    "name": "Craft Demonstrations"
                },
                {
                    "id": "FAED7F97-3474-4C21-AB42-FB0768A2F826",
                    "name": "Cultural Demonstrations"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "C0FFC3D5-0E74-4B6F-B69D-6F95B78906CE",
                    "name": "Live Music"
                },
                {
                    "id": "CE84DEFA-D692-4165-96DF-D5FF56002E2F",
                    "name": "Theater"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "No entrance, no parking fee for the grounds, some activities, classes, dances, shows, Carousel rides will have fees for those activities or events.",
                    "title": "Glen Echo Park Entrance fee"
                }
            ],
            "directionsInfo": "By Car: Capital Beltway (I-495), Maryland outer loop exit 40 Cabin John Parkway to Clara Barton Parkway; Virginia inner loop exit 41 Clara Barton Parkway East; follow Clara Barton Parkway to MacArthur Boulevard and Glen Echo exit, left onto MacArthur Boulevard, straight across traffic circle at Goldsboro Road, next left onto Oxford Road, end of street, parking lots on the left.\n\nBy Metro: Red Line to Bethesda or Friendship Heights Station, transfer to Montgomery County Ride-On Bus # 29, Glen Echo stop.",
            "entrancePasses": [
                {
                    "cost": "0.0000",
                    "description": "no entrance pass, no entrance fee",
                    "title": "no entrance pass, no entrance fee"
                }
            ],
            "directionsUrl": "http://www.nps.gov/glec/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/glec/index.htm",
            "weatherInfo": "Weather for Washington, D.C. and Bethesda, Maryland areas.",
            "name": "Glen Echo",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The grounds of Glen Echo Park are open daily from 6 a.m. to 1 a.m. (the next day).  No overnight parking.",
                    "standardHours": {
                        "wednesday": "6:00AM - 1:00AM",
                        "monday": "6:00AM - 1:00AM",
                        "thursday": "6:00AM - 1:00AM",
                        "sunday": "6:00AM - 1:00AM",
                        "tuesday": "6:00AM - 1:00AM",
                        "friday": "6:00AM - 1:00AM",
                        "saturday": "6:00AM - 1:00AM"
                    },
                    "name": "Glen Echo Park Grounds and Parking Lot"
                }
            ],
            "topics": [
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "8F34C3EC-7B8E-4F28-8114-B8DFE4F300DF",
                    "name": "Civil Rights"
                },
                {
                    "id": "571E1597-4C6A-4814-A7E9-FC4EF8293CE8",
                    "name": "Music"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                }
            ],
            "latLong": "lat:38.96912315, long:-77.14012206",
            "description": "Glen Echo Park began in 1891 as a National Chautauqua Assembly \"to promote liberal and practical education.\" By 1911, it transformed into DC's premier amusement park until it closed in 1968. Since 1971, the National Park Service has owned and operated the site and today, with the help of the Glen Echo Park Partnership for Arts and Culture, offers year-round cultural and recreational activities.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "people walking around large room during art show",
                    "title": "Labor Day Art Show in Spanish Ballroom",
                    "caption": "Visitors enjoy the Labor Day Art Show which highlights pieces created by students from the Glen Echo Park art programs.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C848D11-1DD8-B71B-0BC49FD5EE187494.jpg"
                },
                {
                    "credit": "NPS Photo/Bruce Douglas",
                    "altText": "outdoor scene of open dance pavilion illuminated and evening dance crowd inside.",
                    "title": "Dancing in the Bumper Car Pavilion",
                    "caption": "Evening Dance in the Bumper Car Pavilion",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C848E7B-1DD8-B71B-0BBAA0366FDA5B58.jpg"
                },
                {
                    "credit": "NPS Photo/Bruce Douglas",
                    "altText": "groups of families, adults and children strolling in Glen Echo Park near Carousel Building",
                    "title": "Busy Day outside Carousel",
                    "caption": "Glen Echo Park and the Dentzel Carousel are enjoyed by children and adults.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C848FDE-1DD8-B71B-0BE1393F7AFBC3D4.jpg"
                },
                {
                    "credit": "NPS Photo/Bruce Douglas",
                    "altText": "people gathered at picnic tables enjoying a lunch in Glen Echo Park",
                    "title": "Glen Echo Picnic area",
                    "caption": "Glen Echo Park has a large picnic area with many tables, restrooms and a playground.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C84917B-1DD8-B71B-0B9EAFE7DD8C3A13.jpg"
                },
                {
                    "credit": "NPS Photo/Bruce Douglas",
                    "altText": "three children seated at a picnic table working on a Glen Echo Park Junior Ranger Booklet.",
                    "title": "Glen Echo Park Junior Rangers working on booklet.",
                    "caption": "Completing the Glen Echo Park Junior Ranger Booklet to earn the Junior Ranger Badge.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C849327-1DD8-B71B-0B64DA209DFC98B9.jpg"
                }
            ],
            "designation": "Park",
            "parkCode": "glec",
            "addresses": [
                {
                    "postalCode": "20812",
                    "city": "Glen Echo",
                    "stateCode": "MD",
                    "line1": "7300 MacArthur Boulevard",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "20812",
                    "city": "Glen Echo",
                    "stateCode": "MD",
                    "line1": "7300 MacArthur Boulevard",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "3FBC6D2D-C61B-4399-BC35-1B00C92C406A",
            "fullName": "Glen Echo Park",
            "latitude": "38.96912315"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "4155614700",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "goga_socialmedia_goga@nps.gov"
                    }
                ]
            },
            "states": "CA",
            "longitude": "-122.6007386",
            "activities": [
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA",
                    "name": "Car or Front Country Camping"
                },
                {
                    "id": "E53E1320-9B17-41DC-86A5-37EB7D622572",
                    "name": "Dining"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "7CFF5F03-5ECC-4F5A-8572-75D1F0976C0C",
                    "name": "Group Camping"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "237A1662-6018-4115-ABD1-B8CCF827E703",
                    "name": "Historic Weapons Demonstration"
                },
                {
                    "id": "0307955A-B65C-4CE4-A780-EB36BAAADF0B",
                    "name": "Horse Trekking"
                },
                {
                    "id": "1886DA47-0AEC-4568-B9C2-8E9BC316AAAC",
                    "name": "Horseback Riding"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "B204DE60-5A24-43DD-8902-C81625A09A74",
                    "name": "Living History"
                },
                {
                    "id": "299CB934-88DC-474F-A33D-E43E29A149C2",
                    "name": "Mountain Biking"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "A8650547-1A30-4222-86C3-A7660A829670",
                    "name": "Reenactments"
                },
                {
                    "id": "17411C8D-5769-4D0F-ABD1-52ED03840C18",
                    "name": "Saltwater Fishing"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "AE3C95F5-E05B-4A28-81DD-1C5FD4BE88E2",
                    "name": "Surfing"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "With the exception of the entrance fee for Muir Woods National Monument and the cost of the ferry to visit Alcatraz Island, there is no fee to visit lands of Golden Gate National Recreation Area.",
                    "title": "Visiting Golden Gate is free except for Alcatraz Island and Muir Woods National Monument."
                }
            ],
            "directionsInfo": "Golden Gate National Recreation Area has many sites that span over 60 miles of mostly coastal areas north and south of San Francisco. Park areas can be reached by Highways 1, 101 and 280 from the north and south San Francisco Bay Area, and by Highway 80 from the East Bay. \n\nTo access park headquarters at Fort Mason, please use the entrance at Franklin and Bay Streets in San Francisco.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/goga/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/goga/index.htm",
            "weatherInfo": "Winter is characterized by sporadic rain and cool weather punctuated by brilliant sunshine. In winter the grass greens. Trees and flowers dormant through winter start blooming in late February or early March and last until May or June. By July, summer fog predominates in most coastal areas of the park. Grasses and plants have now turned to the golden brown and muted grays characteristic of California summer and fall.  September and October skies are clear and sunshine is abundant everywhere in the park.",
            "name": "Golden Gate",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Although this urban park is accessible 24 hours a day in most areas, most parking lots are open between sunrise to sunset.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Most parking lots are open between sunrise to sunset."
                },
                {
                    "exceptions": [],
                    "description": "Open Wednesday through Monday, 9:30am-4pm except Thanksgiving and Christmas.",
                    "standardHours": {
                        "wednesday": "9:30AM - 4:00PM",
                        "monday": "9:30AM - 4:00PM",
                        "thursday": "9:30AM - 4:00PM",
                        "sunday": "9:30AM - 4:00PM",
                        "tuesday": "Closed",
                        "friday": "9:30AM - 4:00PM",
                        "saturday": "9:30AM - 4:00PM"
                    },
                    "name": "Marin Headlands Visitor Center"
                },
                {
                    "exceptions": [],
                    "description": "Muir Woods Visitor Center is open daily at 9am, though its closing hours vary throughout the year.\n\nHours are as follows\n\n9am-5pm from the last Sunday in January\n\n9am-7:30pm from the 2nd Sunday in March\n\n9am-6:30pm from the 3rd Sunday in September\n\n9am-4:30pm from the 1st Sunday in November",
                    "standardHours": {
                        "wednesday": "9:00AM - 6:30PM",
                        "monday": "9:00AM - 6:30PM",
                        "thursday": "9:00AM - 6:30PM",
                        "sunday": "9:00AM - 6:30PM",
                        "tuesday": "9:00AM - 6:30PM",
                        "friday": "9:00AM - 6:30PM",
                        "saturday": "9:00AM - 6:30PM"
                    },
                    "name": "Muir Woods National Monument Visitor Center"
                },
                {
                    "exceptions": [],
                    "description": "Fort Point is open Friday-Sunday from 10am-5pm.",
                    "standardHours": {
                        "wednesday": "Closed",
                        "monday": "Closed",
                        "thursday": "Closed",
                        "sunday": "10:00AM - 5:00PM",
                        "tuesday": "Closed",
                        "friday": "10:00AM - 5:00PM",
                        "saturday": "10:00AM - 5:00PM"
                    },
                    "name": "Fort Point National Historic Site"
                },
                {
                    "exceptions": [],
                    "description": "The information desk in the Whalen Building is open Monday-Friday from 8:30am-5pm.",
                    "standardHours": {
                        "wednesday": "8:30AM - 5:00PM",
                        "monday": "8:30AM - 5:00PM",
                        "thursday": "8:30AM - 5:00PM",
                        "sunday": "Closed",
                        "tuesday": "8:30AM - 5:00PM",
                        "friday": "8:30AM - 5:00PM",
                        "saturday": "Closed"
                    },
                    "name": "Park Headquarters William J. Whalen Building Fort Mason"
                },
                {
                    "exceptions": [],
                    "description": "Point Bonita is generally open Sunday and Monday 12:30 p.m. to 3:30 p.m. year round. It's best to call the Marin Headlands Visitor Center at 415-331-1540 to confirm before making the trip.",
                    "standardHours": {
                        "wednesday": "Closed",
                        "monday": "12:30PM - 3:30PM",
                        "thursday": "Closed",
                        "sunday": "12:30PM - 3:30PM",
                        "tuesday": "Closed",
                        "friday": "Closed",
                        "saturday": "Closed"
                    },
                    "name": "Point Bonita Lighthouse"
                }
            ],
            "topics": [
                {
                    "id": "5CCB14BC-2AC4-45CE-B786-54A065DA1B60",
                    "name": "Abolition Movement"
                },
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "B145FAB8-5462-4FE2-964E-464D3A5E7F96",
                    "name": "Artillery"
                },
                {
                    "id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
                    "name": "Arts"
                },
                {
                    "id": "227D2677-28CA-4CBF-997F-61108975A497",
                    "name": "Asian American Heritage"
                },
                {
                    "id": "B912363F-771C-4098-BA3A-938DF38A9D7E",
                    "name": "Aviation"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "1015393C-D7B0-47F3-86FB-786F30368CA2",
                    "name": "Bridges"
                },
                {
                    "id": "607D41B0-F830-4C07-A557-BCEF880A3929",
                    "name": "Burial, Cemetery and Gravesite"
                },
                {
                    "id": "C373F02B-7335-4F8A-A3ED-3E2E37CD4085",
                    "name": "Catastrophic Fires"
                },
                {
                    "id": "69790851-A62A-4920-AA3E-E61406FFC27D",
                    "name": "Cavalry"
                },
                {
                    "id": "8F34C3EC-7B8E-4F28-8114-B8DFE4F300DF",
                    "name": "Civil Rights"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "4DC11D06-00F1-4A01-81D0-89CCCCE4FF50",
                    "name": "Climate Change"
                },
                {
                    "id": "123CE28E-0EFA-4330-8E6E-EEFF3D7BF772",
                    "name": "Coastal Defenses"
                },
                {
                    "id": "46FC5CBD-9AD5-48F1-B4DA-1357031B1D2E",
                    "name": "Coasts, Islands and Atolls"
                },
                {
                    "id": "A764E57D-9925-4855-8D66-C60357946FC3",
                    "name": "Cold War"
                },
                {
                    "id": "3D2EE3E9-7344-416C-A412-C2C7CDCDE684",
                    "name": "Colonial/European Contact Conflicts"
                },
                {
                    "id": "7F12224B-217A-4B07-A4A2-636B1CE7F221",
                    "name": "Colonization and Settlement"
                },
                {
                    "id": "762170E5-0747-4836-B837-7F2547D3F733",
                    "name": "Coniferous Forests"
                },
                {
                    "id": "4C0EBDE7-EB73-4252-84D9-0650974EC3E5",
                    "name": "Conservation Movement"
                },
                {
                    "id": "CDD8F34E-3BD4-425A-8264-4F0BA0DFBA38",
                    "name": "Dunes"
                },
                {
                    "id": "489D6333-FD72-44DF-83B0-3D4412DD0A75",
                    "name": "Endangered"
                },
                {
                    "id": "D9FC6D14-F8C7-4EBA-86EA-DFD99B6BB4F5",
                    "name": "Enslavement"
                },
                {
                    "id": "F79C1242-80FF-40F0-A0C1-5FFCBA172EC0",
                    "name": "Estuaries and Mangroves"
                },
                {
                    "id": "12EA2B56-17EC-410A-A10D-BFBA87A0669B",
                    "name": "Explorers and Expeditions"
                },
                {
                    "id": "1F833C99-A75D-4F9E-9256-B96523485466",
                    "name": "Farming and  Agriculture"
                },
                {
                    "id": "04A39AB8-DD02-432F-AE5F-BA1267D41A0D",
                    "name": "Fire"
                },
                {
                    "id": "1608649A-E7D7-4529-BD83-074C90F9FB68",
                    "name": "Fish"
                },
                {
                    "id": "9F6A7003-59D6-4438-935F-760FD04C1073",
                    "name": "Foothills, Plains and Valleys"
                },
                {
                    "id": "8CDF78C9-F91A-4ACD-AE70-4FF186F616CE",
                    "name": "Forced Marches"
                },
                {
                    "id": "41B1A0A3-11FF-4F55-9CB9-034A7E28B087",
                    "name": "Forests and Woodlands"
                },
                {
                    "id": "988B4AFC-F478-4673-B66D-E6BDB0CCFF35",
                    "name": "Forts"
                },
                {
                    "id": "F0F97E32-2F29-41B4-AF98-9FBE8DAB36B1",
                    "name": "Geology"
                },
                {
                    "id": "94262026-92F5-48E9-90EF-01CEAEFBA4FF",
                    "name": "Grasslands"
                },
                {
                    "id": "78078CA8-DCBC-4320-A7BF-259A56D55CA2",
                    "name": "Hispanic American Heritage"
                },
                {
                    "id": "97716EF5-D001-449C-993A-EC15AB8FD345",
                    "name": "Hospital"
                },
                {
                    "id": "2B428F59-9148-40C1-B38E-130589F2540E",
                    "name": "Immigration"
                },
                {
                    "id": "351EE154-87AA-46B0-BBA1-ED604368ACE9",
                    "name": "Incarceration"
                },
                {
                    "id": "53798A16-7CDB-4F17-9C28-095F92D2ED8D",
                    "name": "Indian and Frontier Wars"
                },
                {
                    "id": "0B575E33-B68F-4F3D-998E-B03284606CF3",
                    "name": "Industry"
                },
                {
                    "id": "E411F474-A530-4804-9D23-1D94C78B41E4",
                    "name": "Infantry and Militia"
                },
                {
                    "id": "50A3D2B2-C922-4749-89F1-E986A5D520AC",
                    "name": "Jails and Prisons"
                },
                {
                    "id": "367BC636-6F02-4F1B-BEAA-5A20E46C7207",
                    "name": "Japanese-American Internment"
                },
                {
                    "id": "9FCC01C6-F068-4A05-9A78-23FEBFADAF56",
                    "name": "Latino American Heritage"
                },
                {
                    "id": "E0AB480F-3A94-4DC1-8B21-9555F2C59B32",
                    "name": "LGBTQ American Heritage"
                },
                {
                    "id": "263BAC6E-4DEC-47E4-909D-DA8AD351E06E",
                    "name": "Lighthouses"
                },
                {
                    "id": "FE2FF71D-E850-460E-A727-27B292BF1603",
                    "name": "Logging and Timber Cutting"
                },
                {
                    "id": "4C9D4777-A9DA-47D1-A0B9-F4A3C98BC1B3",
                    "name": "Maritime"
                },
                {
                    "id": "7424754D-EB8B-4608-A69A-50D44992931B",
                    "name": "Maritime - Military"
                },
                {
                    "id": "FD0BA21A-5F69-4688-9D4B-856DA242DC78",
                    "name": "Marshes"
                },
                {
                    "id": "4B3CD083-7500-434B-A8C2-D355925E0245",
                    "name": "Medicine"
                },
                {
                    "id": "E2D07F67-8499-4B0D-A079-14E93484C20F",
                    "name": "Mexican War"
                },
                {
                    "id": "69E16062-0E4F-4DE0-91FB-E4EDB2484572",
                    "name": "Migrations"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "039CDC0F-6408-473D-9C9F-83B3B8A1E069",
                    "name": "Missions"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "570E8E93-3A49-45FB-B11A-F2F984EAC862",
                    "name": "National Cemetery"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "F8C2FE93-DEB3-4B12-9A87-913E3E6B448D",
                    "name": "Natural Sounds"
                },
                {
                    "id": "0E6D8503-CB65-467F-BCD6-C6D9E28A4E0B",
                    "name": "Oceans"
                },
                {
                    "id": "9BD60DC0-C82B-42BA-A170-456B7423429D",
                    "name": "Photography"
                },
                {
                    "id": "1AEDC86F-5792-487F-8CDF-9E92CAB97ACE",
                    "name": "Prairies"
                },
                {
                    "id": "996BEDAE-CB23-4003-B008-3A1F46A72263",
                    "name": "Rare"
                },
                {
                    "id": "518B32FB-339D-4C52-B2C2-04BF406AA4B0",
                    "name": "Religion and Spirituality"
                },
                {
                    "id": "A0C86055-4C79-4F70-9D2E-6B9B738290D0",
                    "name": "Ruins"
                },
                {
                    "id": "9C9FCBB6-360B-4743-8155-6F9341CBE01B",
                    "name": "Scenic Views"
                },
                {
                    "id": "D1CF31DE-AFED-412B-9425-DD1FD4CBB5C7",
                    "name": "Science, Technology and Innovation"
                },
                {
                    "id": "A079385C-3E71-4E18-9E42-B046BC22EA95",
                    "name": "Ships and Shipwrecks"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                },
                {
                    "id": "A28F8700-794E-4BA3-A8D7-7D75D53A4B17",
                    "name": "Spanish-American War"
                },
                {
                    "id": "83DDFE66-914E-4402-AD3E-ACA731AB2537",
                    "name": "The Gold Rush"
                },
                {
                    "id": "393F60FB-80D6-46F7-B0FB-BBF3C90F59FD",
                    "name": "Tortoises and Turtles"
                },
                {
                    "id": "A160B3D9-1603-4D89-B82F-21FCAF9EEE3B",
                    "name": "Tragic Events"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "FE2C2613-B41E-4531-BC43-03EB6E45CBCF",
                    "name": "Transportation"
                },
                {
                    "id": "B564E9AA-95E9-4648-A7D1-48F94BFBEBB5",
                    "name": "Tribal Conflicts"
                },
                {
                    "id": "78E4F4AC-AF97-435A-8C2C-7FB8D67516ED",
                    "name": "Unique Species"
                },
                {
                    "id": "846E5C56-E5AC-489C-B3BF-11F4C73F12C2",
                    "name": "Urban America"
                },
                {
                    "id": "97CCB419-196C-4B95-BB3A-621458F78415",
                    "name": "US Army"
                },
                {
                    "id": "D164D82F-4031-4BCB-90A8-B388502CA308",
                    "name": "US Coast Guard"
                },
                {
                    "id": "D2D3201A-8C12-4CD6-B47D-E982633C8524",
                    "name": "Vietnam War"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "BA12B386-49EA-46B0-9121-FCACACC47538",
                    "name": "Watersheds"
                },
                {
                    "id": "C9C749E3-39C3-45F7-BCC5-9A609E30AA05",
                    "name": "Westward Expansion"
                },
                {
                    "id": "1365C347-952C-475A-B755-731DD523C195",
                    "name": "Wetlands"
                },
                {
                    "id": "980D1693-65BF-4F29-8182-7BAC9796E605",
                    "name": "Whales"
                },
                {
                    "id": "7DA81DAB-5045-4953-9C20-36590AD9FA95",
                    "name": "Women's History"
                },
                {
                    "id": "4EC51024-F0D9-479D-AF3F-344CC0153D2E",
                    "name": "World War I"
                },
                {
                    "id": "74869FAE-8DFD-4454-847F-11FDDB679F94",
                    "name": "World War II"
                }
            ],
            "latLong": "lat:37.85982543, long:-122.6007386",
            "description": "Experience a park so rich it supports 19 distinct ecosystems with over 2,000 plant and animal species. Go for a hike, enjoy a vista, have a picnic or learn about the centuries of overlapping history from California’s indigenous cultures, Spanish colonialism, the Mexican Republic, US military expansion and the growth of San Francisco. All of this and more awaits you, so get out and find your park.",
            "images": [
                {
                    "credit": "Will Elder",
                    "altText": "Mori Point view north with yellow an blue flowers, the blue-green Pacific Ocean and Mt. Tamalpais.",
                    "title": "Spring Flowers at Mori Point",
                    "caption": "View north from Mori Point showing abundant spring flowers and Mt. Tamalpais in the background.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7FE3B8-1DD8-B71B-0B91991C4D692710.jpg"
                },
                {
                    "credit": "Kirke Wrench",
                    "altText": "View over the Pacific from Bolinas Ridge; Stinson Beach, Bolinas Lagoon and head in mid-ground.",
                    "title": "Stinson Beach from Bolinas Ridge",
                    "caption": "Bolinas Ridge offers outstanding panaramas of the Pacific Coast, here including Stinson Beach and Lagoon.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7FE813-1DD8-B71B-0BE722D07B80503A.jpg"
                },
                {
                    "credit": "Kirke Wrench",
                    "altText": "Orange Golden Gate Bridge with waves crashing in foreground and storm clouds behind.",
                    "title": "Storm over the Golden Gate",
                    "caption": "The Golden Gate Bridge is an iconic attraction year-round.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7FE978-1DD8-B71B-0B5B04277B391AE4.jpg"
                },
                {
                    "credit": "NPS photo/Will Elder",
                    "altText": "View south with family on road in foreground and Rodeo Beach and cove in front of Point Bonita.",
                    "title": "Marin Headlands and Rodeo Beach",
                    "caption": "Trails in the Marin Headlands offer a fun and spectacular hiking experience for all.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7FEAD0-1DD8-B71B-0B27C7C76C4A0492.jpg"
                },
                {
                    "credit": "NPS photo/Will Elder",
                    "altText": "Row of red brick barracks with white-columned porches where infantry soldiers lived.",
                    "title": "Montgomery Street Barracks, Presidio of San Francisco",
                    "caption": "The Presidio offers an outdoor museum of military architecture over the centuries.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7FECA7-1DD8-B71B-0B0766C254B04EED.jpg"
                },
                {
                    "credit": "NPS photo/Will Elder",
                    "altText": "White buildings with red roofs at Crissy Field with blue bay and Golden Gate Bridge and fog behind.",
                    "title": "Morning Fog at Crissy Field",
                    "caption": "Visiting Crissy Field is an ever changing experience as the fog comes in and dissipates.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7FEE17-1DD8-B71B-0BA285725552D8E3.jpg"
                },
                {
                    "credit": "NPS photo/Will Elder",
                    "altText": "Closeup shot of Alcatraz Island showing lighthouse and prison with yellow flowers on slope in front.",
                    "title": "Alcatraz Island from Crissy Field",
                    "caption": "Visitors can learn about the complex layered history of Alcatraz Island.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C801934-1DD8-B71B-0B9C7A3F85A2B6E1.jpg"
                }
            ],
            "designation": "National Recreation Area",
            "parkCode": "goga",
            "addresses": [
                {
                    "postalCode": "94123-0022",
                    "city": "San Francisco",
                    "stateCode": "CA",
                    "line1": "Golden Gate National Recreation Area",
                    "type": "Physical",
                    "line3": "",
                    "line2": "Building 201, Fort Mason"
                },
                {
                    "postalCode": "94123-0022",
                    "city": "San Francisco",
                    "stateCode": "CA",
                    "line1": "Golden Gate National Recreation Area",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "Building 201, Fort Mason"
                }
            ],
            "id": "0E797FA8-6E31-418B-A68F-13CEE37A2AF5",
            "fullName": "Golden Gate National Recreation Area",
            "latitude": "37.85982543"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "2128253054",
                        "description": "main",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "joseph_korber@nps.gov"
                    }
                ]
            },
            "states": "NY",
            "longitude": "-74.01670765",
            "activities": [
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "43800AD1-D439-40F3-AAB3-9FB651FE45BB",
                    "name": "Gift Shop and Souvenirs"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "8D778629-F603-4C50-A121-6F4BB2FE2C4B",
                    "name": "Road Biking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "Governors Island National Monument does not charge an entrance fee. The Trust for Governors Island does charge a $2 fee to ride the ferry. Seniors pay $1 and children are free. All ferries before Noon on weekends are free.",
                    "title": "No park entrance fees"
                }
            ],
            "directionsInfo": "Governors Island is located in New York Harbor, 1/2 mile from the southern tip of Lower Manhattan and 400 yards west of the end of Brooklyn's Atlantic Avenue and Red Hook waterfront. It is accessible only via ferry. Ferry service from Manhattan is the main way to access the island. During the summer public access season, the ferry departs from Battery Maritime Building at 10 South Street, at South and Whitehall Streets (next to the Staten Island ferry terminal). Check www.govisland.com for ferry schedules.",
            "entrancePasses": [],
            "directionsUrl": "https://nps.gov/gois/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/gois/index.htm",
            "weatherInfo": "During the summer public access season from May to September, the weather is typical of the mid-Atlantic region. Thunderstorms can come quickly with short downpours. There may be extended periods of heat or humidity that might last a week or more. The island is generally a few degrees cooler than the city due to the fairly constant breeze.",
            "name": "Governors Island",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "10:00AM - 6:00PM",
                                "monday": "10:00AM - 6:00PM",
                                "thursday": "10:00AM - 6:00PM",
                                "sunday": "10:00AM - 7:00PM",
                                "tuesday": "10:00AM - 6:00PM",
                                "friday": "10:00AM - 10:00PM",
                                "saturday": "10:00AM - 7:00PM"
                            },
                            "startDate": "2018-05-24",
                            "name": "Late Night Friday Ferry",
                            "endDate": "2018-09-14"
                        }
                    ],
                    "description": "Governors Island is open to the public on a summer seasonal basis. The 2018 public access season extends until October 31, 2018. Hours reflect access to the inside areas of Fort Jay and Castle Williams. Outside access is 1-2 hours after our facilities close. Visit https://govisland.com/visit-the-island/ferry for the latest schedule for access to Governors Island outdoor areas.",
                    "standardHours": {
                        "wednesday": "10:00AM - 6:00PM",
                        "monday": "10:00AM - 6:00PM",
                        "thursday": "10:00AM - 6:00PM",
                        "sunday": "10:00AM - 7:00PM",
                        "tuesday": "10:00AM - 6:00PM",
                        "friday": "10:00AM - 6:00PM",
                        "saturday": "10:00AM - 7:00PM"
                    },
                    "name": "Governors Island Outdoor Areas"
                },
                {
                    "exceptions": [],
                    "description": "The inner courtyard and exhibit rooms are open to the public 7 days a week. Upper Levels and roof are accessible only by ranger guided tours (11:30 am, 1:30 pm, 3:30 pm) daily.",
                    "standardHours": {
                        "wednesday": "10:00AM - 4:30PM",
                        "monday": "10:00AM - 4:30PM",
                        "thursday": "10:00AM - 4:30PM",
                        "sunday": "10:00AM - 5:00PM",
                        "tuesday": "10:00AM - 4:30PM",
                        "friday": "10:00AM - 4:30PM",
                        "saturday": "10:00AM - 4:30PM"
                    },
                    "name": "Castle Williams"
                },
                {
                    "exceptions": [],
                    "description": "The inner court yard displays, magazine, ravelin, and officer barracks porches, are open for your exploration 7 days a week. Tours available Saturday and Sunday 12:00 PM and 2:00 PM.",
                    "standardHours": {
                        "wednesday": "10:00AM - 4:30PM",
                        "monday": "10:00AM - 4:30PM",
                        "thursday": "10:00AM - 4:30PM",
                        "sunday": "10:00AM - 5:00PM",
                        "tuesday": "10:00AM - 4:30PM",
                        "friday": "10:00AM - 4:30PM",
                        "saturday": "10:00AM - 5:00PM"
                    },
                    "name": "Fort Jay"
                }
            ],
            "topics": [
                {
                    "id": "F3883A66-A7CB-461B-868E-1B5932224B25",
                    "name": "American Revolution"
                },
                {
                    "id": "990E22A2-20D8-4CC2-8E6C-D2DF165BCDA5",
                    "name": "American Revolutionary War"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "123CE28E-0EFA-4330-8E6E-EEFF3D7BF772",
                    "name": "Coastal Defenses"
                },
                {
                    "id": "988B4AFC-F478-4673-B66D-E6BDB0CCFF35",
                    "name": "Forts"
                },
                {
                    "id": "351EE154-87AA-46B0-BBA1-ED604368ACE9",
                    "name": "Incarceration"
                },
                {
                    "id": "50A3D2B2-C922-4749-89F1-E986A5D520AC",
                    "name": "Jails and Prisons"
                },
                {
                    "id": "4C9D4777-A9DA-47D1-A0B9-F4A3C98BC1B3",
                    "name": "Maritime"
                },
                {
                    "id": "7424754D-EB8B-4608-A69A-50D44992931B",
                    "name": "Maritime - Military"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "97CCB419-196C-4B95-BB3A-621458F78415",
                    "name": "US Army"
                },
                {
                    "id": "D164D82F-4031-4BCB-90A8-B388502CA308",
                    "name": "US Coast Guard"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                }
            ],
            "latLong": "lat:40.69164233, long:-74.01670765",
            "description": "From 1794 to 1966, the U.S. Army on Governors Island was part of the social, political, and economic tapestry of New York City. Today, the island is a vibrant summer seasonal venue of art, culture, and performance against the backdrop of two centuries of military heritage and the skyline of one of the great cities of the world. The island is open to the public,  May 1st thru Oct 31st",
            "images": [
                {
                    "credit": "NPS photo / Michael B. Shaver",
                    "altText": "Bridge over dry moat leading into a gated fort.",
                    "title": "Fort Jay gate house and moat.",
                    "caption": "An early spring morning view of Fort Jay. The gate house is the oldest structure on Governors Island dating back to 1794.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85A2A1-1DD8-B71B-0B50FD84825F4474.jpg"
                },
                {
                    "credit": "NPS photo / Katherine Moscowitch",
                    "altText": "Front of sandstone brick fort with arched entrance way.",
                    "title": "Castle Williams at Governors Island National Monument",
                    "caption": "Castle Williams at Governors Island National Monument was constructed in 1811 and was a pioneering design in American fortifications.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85A4CD-1DD8-B71B-0BF93977105773BC.jpg"
                },
                {
                    "credit": "NPS photo / Katherine Moscowitch",
                    "altText": "A park ranger talking to a group of visitors inside a large stone room in a fort.",
                    "title": "Ranger guided tour of Castle Williams at Governors Island National Monument",
                    "caption": "Ranger-led tours of Castle Williams show the pioneering features of fortification architecture that would be used in other masonry forts constructed in the 1800s.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85A7A6-1DD8-B71B-0B3BB515B76253BF.jpg"
                },
                {
                    "credit": "NPS Photo / Sierra Willoughby",
                    "altText": "Manhattan Skyline stands behind the barracks of Fort Jay",
                    "title": "Manhattan from Fort Jay",
                    "caption": "History frames our understanding of the present",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3EA79439-F805-D292-5493E29579C4D5DA.jpg"
                },
                {
                    "credit": "NPS Photo / Sierra Willoughby",
                    "altText": "Canon and Manhattan Skyline from top of castle",
                    "title": "Manhattan from Castle Williams",
                    "caption": "A civil war era canon sitting upon the top of Castle Williams juxtaposes the new and old, with the glimering shine of Manhattan in the background",
                    "url": "https://www.nps.gov/common/uploads/structured_data/14F6F12D-D98B-A5BE-50BF4FD9277B0DA4.jpg"
                }
            ],
            "designation": "National Monument",
            "parkCode": "gois",
            "addresses": [
                {
                    "postalCode": "10004-1921",
                    "city": "New York",
                    "stateCode": "NY",
                    "line1": "10 South Street",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "10004-1921",
                    "city": "New York",
                    "stateCode": "NY",
                    "line1": "Governors Island",
                    "type": "Physical",
                    "line3": "",
                    "line2": "New York Harbor"
                },
                {
                    "postalCode": "10004-1921",
                    "city": "New York",
                    "stateCode": "NY",
                    "line1": "Governors Island",
                    "type": "Physical",
                    "line3": "",
                    "line2": "New York Harbor"
                },
                {
                    "postalCode": "10004-1921",
                    "city": "New York",
                    "stateCode": "NY",
                    "line1": "Governors Island",
                    "type": "Physical",
                    "line3": "",
                    "line2": "New York Harbor"
                },
                {
                    "postalCode": "10004-1921",
                    "city": "New York",
                    "stateCode": "NY",
                    "line1": "Governors Island",
                    "type": "Physical",
                    "line3": "",
                    "line2": "New York Harbor"
                },
                {
                    "postalCode": "10004",
                    "city": "New York",
                    "stateCode": "NY",
                    "line1": "Governors Island",
                    "type": "Physical",
                    "line3": "",
                    "line2": "New York Harbor"
                }
            ],
            "id": "F7DA09B4-41C4-4372-9EBB-15AD1526B391",
            "fullName": "Governors Island National Monument",
            "latitude": "40.69164233"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "315-882-8060",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "hart_superintendent@nps.gov"
                    }
                ]
            },
            "states": "NY",
            "longitude": "-76.5646715462208",
            "activities": [
                {
                    "id": "E53E1320-9B17-41DC-86A5-37EB7D622572",
                    "name": "Dining"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "43800AD1-D439-40F3-AAB3-9FB651FE45BB",
                    "name": "Gift Shop and Souvenirs"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                }
            ],
            "entranceFees": [],
            "directionsInfo": "The Harriet Tubman National Historical Park includes the Thompson Memorial African Methodist Episcopal Zion Church, the Harriet Tubman Visitor Center, the Tubman Home for the Aged, and the Harriet Tubman Residence. A related Tubman site that lies outside of the national historical park is the Fort Hill Cemetery where Tubman is buried. \n\nView directions to each of these five sites on our directions page.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/hart/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/hart/index.htm",
            "weatherInfo": "Auburn, New York has four distinct seasons. Fall and spring are usually mild and summers tend to be sunny, warm, and humid. Winter weather is variable and conditions can change quickly. Snow in November is not uncommon. The heaviest snowfall tends to be in January with an average of 33”.",
            "name": "Harriet Tubman",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2020-03-17",
                            "name": "COVID-19",
                            "endDate": "2020-05-24"
                        }
                    ],
                    "description": "Grounds are open dawn to dusk. Operated independently by Fort Hill Cemetery. \nCheck with the cemetery office or www.forthillcemetery.net for current information.",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "Fort Hill Cemetery"
                }
            ],
            "topics": [
                {
                    "id": "5CCB14BC-2AC4-45CE-B786-54A065DA1B60",
                    "name": "Abolition Movement"
                },
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "607D41B0-F830-4C07-A557-BCEF880A3929",
                    "name": "Burial, Cemetery and Gravesite"
                },
                {
                    "id": "98F41FDF-B73F-4B68-8010-53CCB2891E3B",
                    "name": "Churches"
                },
                {
                    "id": "8F34C3EC-7B8E-4F28-8114-B8DFE4F300DF",
                    "name": "Civil Rights"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "D9FC6D14-F8C7-4EBA-86EA-DFD99B6BB4F5",
                    "name": "Enslavement"
                },
                {
                    "id": "1F833C99-A75D-4F9E-9256-B96523485466",
                    "name": "Farming and  Agriculture"
                },
                {
                    "id": "A7359FC4-DAD8-45F5-AF15-7FF62F816ED3",
                    "name": "Night Sky"
                },
                {
                    "id": "BAA85463-A96E-4CF4-A260-290D195423DB",
                    "name": "Reconstruction"
                },
                {
                    "id": "518B32FB-339D-4C52-B2C2-04BF406AA4B0",
                    "name": "Religion and Spirituality"
                },
                {
                    "id": "6AD3C080-0D31-4B75-BF4E-9A14DBC3AF6E",
                    "name": "Religious Freedom"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                },
                {
                    "id": "A160B3D9-1603-4D89-B82F-21FCAF9EEE3B",
                    "name": "Tragic Events"
                },
                {
                    "id": "846E5C56-E5AC-489C-B3BF-11F4C73F12C2",
                    "name": "Urban America"
                },
                {
                    "id": "DA1E6678-D60D-4E66-96A5-78183342673B",
                    "name": "Voting Rights and Suffrage"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "7DA81DAB-5045-4953-9C20-36590AD9FA95",
                    "name": "Women's History"
                }
            ],
            "latLong": "lat:42.9128920286894, long:-76.5646715462208",
            "description": "Harriet Tubman was guided by a deep faith and devotion to family, freedom, and community. After emancipating herself and members of her family, she moved them from Ontario, Canada to Fleming and Auburn, New York in 1859. Central New York was a center for progressive thought, abolition, and women’s suffrage where Tubman continued to fight for human rights and dignity until she died in 1913.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "White single family home with front porch.",
                    "title": "Harriet Tubman Home for the Aged",
                    "caption": "Part of Tubman's Auburn farm, this building helped shelter the needy.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3F80375F-1DD8-B71B-0B40A16E2EDDA99D.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Wooden church with tall steeple",
                    "title": "Thompson Memorial AME Zion Church",
                    "caption": "Located near Tubman's home, the church continues to honor Tubman's legacy of freedom.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3FA43B62-1DD8-B71B-0B1DA7C2E84D019C.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Headstone of Harriet Tubman",
                    "title": "Tubman Grave",
                    "caption": "Tubman grave at Fort Hill Cemetery",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3FDA61A9-1DD8-B71B-0B91F265773FB60D.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Brick building surrounded by autumn trees",
                    "title": "Harriet Tubman Residence",
                    "caption": "Tubman's Auburn residence.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3FE26B89-1DD8-B71B-0B7E863F6BA073DA.jpg"
                }
            ],
            "designation": "National Historical Park",
            "parkCode": "hart",
            "addresses": [
                {
                    "postalCode": "13021-0769",
                    "city": "Auburn",
                    "stateCode": "NY",
                    "line1": "Harriet Tubman National Historical Park",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "P.O. Box 769"
                },
                {
                    "postalCode": "13021",
                    "city": "Auburn",
                    "stateCode": "NY",
                    "line1": "180 South Street",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "067468EC-25DB-447C-91A8-068C167EEF32",
            "fullName": "Harriet Tubman National Historical Park",
            "latitude": "42.9128920286894"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "7578561200",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "7572294273",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "michael_byrd@nps.gov"
                    }
                ]
            },
            "states": "VA",
            "longitude": "-76.75469561",
            "activities": [
                {
                    "id": "28880A5B-3D29-41AC-BD8B-24743E7A070F",
                    "name": "First Person Interpretation"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "B204DE60-5A24-43DD-8902-C81625A09A74",
                    "name": "Living History"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                }
            ],
            "entranceFees": [
                {
                    "cost": "20.0000",
                    "description": "Fees\n$20 per adult (age 16 and above) - pass good for 7 Days to include Yorktown Battlefield.\n$40 Colonial National Historical Park Annual Pass - pass good for card bearer and three adults at Historic Jamestowne and Yorktown Battlefield for a 12 Month period : NOTE: All adults entering Historic Jamestowne on a Colonial Annual Pass will be charged an additional $5.00 per adult for each visit (Preservation Virginia fee). Visits to Yorktown Battlefield will be free for those 12 months.\nPhone 757-856-1250.",
                    "title": "For those without a National Park or Inter-agency pass the following fees will apply:"
                },
                {
                    "cost": "0.0000",
                    "description": "* Interagency Access and Golden Access Pass\n* Interagency Military Pass\nPhone 757-856-1250 for further information.",
                    "title": "Holders of the following passes will be admitted to Historic Jamestowne at no additional charge:"
                },
                {
                    "cost": "5.0000",
                    "description": "All other National Park pass holders will be charged an additional $5.00 per adult entering on the pass to cover the Preservation Virginia entrance fee. These passes include:\n* Interagency Annual Pass\n* Interagency Senior Pass\n* Golden Age Pass\n* Colonial National Historical Park Annual Pass\n* Preservation Virginia Membership Card - ($5.00 per adult NPS fee)\nPhone 757-856-1250 for further information.",
                    "title": "All other National Park pass holders will be charged an additional $5.00 per adult  to cover the Preservation Virginia fee"
                }
            ],
            "directionsInfo": "Situated on the banks of the James River, Jamestown is a short distance from many major roadways and highways. For a google map search or GPS, use the following address: 1368 Colonial Parkway, Jamestown, Virginia 23081.",
            "entrancePasses": [
                {
                    "cost": "0.0000",
                    "description": "Holders of the following passes will be admitted to Historic Jamestowne at \nDescription*\n* Interagency Access and Golden Access Pass\n* Interagency Military Pass\nPhone 757-856-1250 for further information.",
                    "title": "No Additional Charge for Holders of These Passes"
                }
            ],
            "directionsUrl": "http://www.nps.gov/jame/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/jame/index.htm",
            "weatherInfo": "http://www.nps.gov/jame/planyourvisit/weather.htm\n\nNUMBER TO PHONE IF SITES ARE CLOSED DUE TO INCLEMENT WEATHER:\n For closures in Colonial National Historical Park please phone this 24 hour phone number (757) 856-1240.",
            "name": "Historic Jamestowne",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "ENTRANCE GATE: Gate hours are from 8:30 a.m. - 4:30 p.m. Daily. No entrance is permitted prior to 8:30 a.m. or after 4:30 p.m. including bicyclists and pedestrians.\n\nWhen you pass beyond the gate you have entered a US Fee Area.",
                    "standardHours": {
                        "wednesday": "9:00AM - 5:00PM",
                        "monday": "9:00AM - 5:00PM",
                        "thursday": "9:00AM - 5:00PM",
                        "sunday": "9:00AM - 5:00PM",
                        "tuesday": "9:00AM - 5:00PM",
                        "friday": "9:00AM - 5:00PM",
                        "saturday": "9:00AM - 5:00PM"
                    },
                    "name": "Operating Hours & Seasons"
                }
            ],
            "topics": [],
            "latLong": "lat:37.20027185, long:-76.75469561",
            "description": "Walk in the steps of Captain John Smith and Pocahontas where a successful English colonization of North America began. Despite early struggles to survive, the 1607 settlement evolved into a prosperous colony. As the colony expanded, the Virginia Indians were pushed out of their homeland. In 1619, the arrival of Africans was recorded, marking the origin of slavery in English North America.",
            "images": [
                {
                    "credit": "Park Ranger Roger W. Green",
                    "altText": "Children In Nature Program at Historic Jamestowne",
                    "title": "Children In Nature Program at Historic Jamestowne",
                    "caption": "Interpretive Program",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C79E67E-1DD8-B71B-0B2D4A6D3D48D7A7.jpg"
                },
                {
                    "credit": "Park Ranger Roger W. Green",
                    "altText": "Sunset Over the James River",
                    "title": "Sunset Over the James River",
                    "caption": "Viewed from Historic Jamestowne",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C79E7AD-1DD8-B71B-0BB0DA3376EE97D9.jpg"
                },
                {
                    "credit": "Park Ranger Linda Williams",
                    "altText": "Bacon's Rebellion",
                    "title": "Bacon's Rebellion",
                    "caption": "Living History Program",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C79E91E-1DD8-B71B-0B7E88EBB138AD97.jpg"
                },
                {
                    "credit": "Park Ranger Roger W. Green",
                    "altText": "Park Ranger and Volunteer Prepared for Nature Program",
                    "title": "Park Ranger and Volunteer Prepared for Nature Program",
                    "caption": "Interpretive Program",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C79EA35-1DD8-B71B-0B785C61718F25B1.jpg"
                },
                {
                    "credit": "Park Ranger Roger Green",
                    "altText": "Walking Tour",
                    "title": "Walking Tour",
                    "caption": "Historic Jamestowne's New Towne",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C79EB62-1DD8-B71B-0BEF39AF784B51D3.jpg"
                }
            ],
            "designation": "Part of Colonial National Historical Park",
            "parkCode": "jame",
            "addresses": [
                {
                    "postalCode": "23081",
                    "city": "Jamestown",
                    "stateCode": "VA",
                    "line1": "1368 Colonial Parkway",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "23690",
                    "city": "Yorktown",
                    "stateCode": "VA",
                    "line1": "P.O. Box 210",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "9CFF594A-8DB1-4377-BE2A-10CC2B0C47E1",
            "fullName": "Historic Jamestowne Part of Colonial National Historical Park",
            "latitude": "37.20027185"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "5207233172",
                        "description": "",
                        "extension": "112",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "5207237209",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "cagr_superintendent@nps.gov"
                    }
                ]
            },
            "states": "AZ",
            "longitude": "-111.9192737",
            "activities": [],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "Hohokam Pima is NOT open to the public. Attempts to visit the area are considered trespassing and may result in fines or other legal action.",
                    "title": "No Fees, No Services, NOT OPEN TO PUBLIC"
                }
            ],
            "directionsInfo": "Please do not attempt to visit this area. The park was not established beyond an administrative action. There is nothing to see and it is trespassing to wander Gila River Indian Community lands.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/cagr/contacts.htm",
            "url": "https://www.nps.gov/pima/index.htm",
            "weatherInfo": "Park is not open to the public. Desert landscape, with all its usual inhabitants, is not friendly to trespassers.",
            "name": "Hohokam Pima",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Hohokam Pima is NOT open to the public. Attempting to visit is considered trespassing. Lands are owned by the Gila River Indian Community and not open to the public.",
                    "standardHours": {
                        "wednesday": "Closed",
                        "monday": "Closed",
                        "thursday": "Closed",
                        "sunday": "Closed",
                        "tuesday": "Closed",
                        "friday": "Closed",
                        "saturday": "Closed"
                    },
                    "name": "Hohokam Pima is NOT open to the public"
                }
            ],
            "topics": [],
            "latLong": "lat:33.18713877, long:-111.9192737",
            "description": "The \"Monument\" is located on the Gila River Indian Reservation and is under tribal ownership. The Gila River Indian Community has decided not to open the extremely sensitive area to the public. There is no park brochure, passport stamp, picture stamp or other free literature available.",
            "images": [
                {
                    "credit": "NPS",
                    "altText": "two rangers in the distance in desert nothingness",
                    "title": "Pima 1",
                    "caption": "No features, no services, no markers, no signs, NO PUBLIC ACCESS",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C8609EA-1DD8-B71B-0B03539E27FF6B84.jpg"
                },
                {
                    "credit": "NPS",
                    "altText": "dirt and desert scrub plants in featureless area",
                    "title": "PIMA 2",
                    "caption": "Backfilled old archeological dig, NOT OPEN TO PUBLIC, nothing to see",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C860B11-1DD8-B71B-0B407A9EBC315609.jpg"
                },
                {
                    "credit": "NPS",
                    "altText": "tiny pottery sherds on desert floor",
                    "title": "Pima 3",
                    "caption": "Illegal to collect any artifact, plant, rock. TRESPASSING to atempt a visit.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C860C08-1DD8-B71B-0BCDF7C41F2586C3.jpg"
                },
                {
                    "credit": "NPS",
                    "altText": "telephone pole, female ranger, dip in rather featureless desert",
                    "title": "PIMA 4",
                    "caption": "Park is NOT open to the public. No special features to view, no signs, no tours, no roads.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C860D31-1DD8-B71B-0B9ED0B9CAE98007.jpg"
                },
                {
                    "credit": "NPS",
                    "altText": "desert scrub brush and a lumpy hill of tan dirt",
                    "title": "Pima 5",
                    "caption": "It is too easy to get lost, and is trespassing besides. Please do NOT attempt to visit the site.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C860E29-1DD8-B71B-0B36C65556EA8646.jpg"
                }
            ],
            "designation": "National Monument",
            "parkCode": "pima",
            "addresses": [
                {
                    "postalCode": "85128",
                    "city": "Coolidge",
                    "stateCode": "AZ",
                    "line1": "c/o Casa Grande Ruins National Monument",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "1100 W Ruins Drive"
                },
                {
                    "postalCode": "85128",
                    "city": "No facilities, no city, no signs",
                    "stateCode": "AZ",
                    "line1": "Park is NOT open to the public",
                    "type": "Physical",
                    "line3": "Attempting to visit is trespassing",
                    "line2": "Park is on private Gila River Indian Community Lands"
                }
            ],
            "id": "7F402367-BA37-4B9B-85BD-05A7679CD449",
            "fullName": "Hohokam Pima National Monument",
            "latitude": "33.18713877"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "9074220500",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "9074220571",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "kefjinformation@nps.gov"
                    }
                ]
            },
            "states": "AK",
            "longitude": "-150.106502",
            "activities": [
                {
                    "id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
                    "name": "Astronomy"
                },
                {
                    "id": "4A58AF13-E8FB-4530-B41A-97DF0B0C77B7",
                    "name": "Backcountry Camping"
                },
                {
                    "id": "7C37B79B-D02D-49EB-9020-3DB8299B748A",
                    "name": "Backcountry Hiking"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "5A241412-0CFB-497A-9B5F-0AB8C03CDE72",
                    "name": "Boat Tour"
                },
                {
                    "id": "A510F02B-8938-4679-A4F9-76580BCAE9C7",
                    "name": "Boat Tour"
                },
                {
                    "id": "071BA73C-1D3C-46D4-A53C-00D5602F7F0E",
                    "name": "Boating"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "907E8125-15E4-483C-8EAD-B9FA1E85C6F8",
                    "name": "Canoe or Kayak Camping"
                },
                {
                    "id": "256543C7-4322-48B3-8978-765E89AA9431",
                    "name": "Canoe or Kayak Camping"
                },
                {
                    "id": "9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA",
                    "name": "Car or Front Country Camping"
                },
                {
                    "id": "B12FAAB9-713F-4B38-83E4-A273F5A43C77",
                    "name": "Climbing"
                },
                {
                    "id": "EAB1EBDE-5B72-493F-8F8F-0EE5B1724436",
                    "name": "Cross-Country Skiing"
                },
                {
                    "id": "8C495067-8E94-4D78-BBD4-3379DACF6550",
                    "name": "Dog Sledding"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "C06FE528-9671-4EC1-909F-B7D3720A1D89",
                    "name": "Fixed Wing Flying"
                },
                {
                    "id": "9BC03FAF-28F1-4609-BF6F-643F58071AED",
                    "name": "Fly Fishing"
                },
                {
                    "id": "D72206E4-6CD1-4441-A355-F8F1827466B1",
                    "name": "Flying"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "25FB188F-5AAD-459A-9092-28A9801709FF",
                    "name": "Freshwater Fishing"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "A7536632-1115-41E3-9A63-8E7A6B9003D6",
                    "name": "Helicopter Flying"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "7C822207-214A-48E8-8794-2F42F7CFB56F",
                    "name": "Ice Climbing"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "F353A9ED-4A08-456E-8DEC-E61974D0FEB6",
                    "name": "Kayaking"
                },
                {
                    "id": "977B3209-68A2-4BCE-97A9-EA0CAC320664",
                    "name": "Mountain Climbing"
                },
                {
                    "id": "4D224BCA-C127-408B-AC75-A51563C42411",
                    "name": "Paddling"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "17411C8D-5769-4D0F-ABD1-52ED03840C18",
                    "name": "Saltwater Fishing"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "F9B1D433-6B86-4804-AED7-B50A519A3B7C",
                    "name": "Skiing"
                },
                {
                    "id": "7C912B83-1B1B-4807-9B66-97C12211E48E",
                    "name": "Snowmobiling"
                },
                {
                    "id": "01D717BC-18BB-4FE4-95BA-6B13AD702038",
                    "name": "Snowshoeing"
                },
                {
                    "id": "D37A0003-8317-4F04-8FB0-4CF0A272E195",
                    "name": "Stargazing"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "No entrance fees are charged at Kenai Fjords National Park",
                    "title": "No Entrance Fee"
                }
            ],
            "directionsInfo": "Kenai Fjords National Park is located just outside the town of Seward in south-central Alaska, 126 miles south of Anchorage. Even though the park is often inaccessible during the winter months, Seward is accessible year-round via the Seward Highway, a National Scenic Byway.\n\nFollow the Seward Highway (AK-1) south from Anchorage. It will become AK-9 around mile 35 (87 miles from Anchorage) with AK-1 heading to Homer and Kenai. Continue on AK-9 to Seward.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/kefj/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/kefj/index.htm",
            "weatherInfo": "The weather  Kenai Fjords is difficult to predict and can change rapidly. The area generally enjoys a relatively temperate maritime climate, primarily due to the influence of the Japanese current that flows through the Gulf of Alaska.\n\nSummer daytime temperatures range from the mid 40s to the low 70s (Fahrenheit). Overcast and cool rainy days are frequent. Winter temperatures can range from the low 30s to -20.",
            "name": "Kenai Fjords",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The park is open year-round.  The primary months to visit are June, July, and August.  There are reduced services in the area during the months of May and September.\n\nThe road to the Exit Glacier area is not plowed during the winter months, and is closed to vehicle traffic once it is covered in snow and ice.\n\nThe park's coastal backcountry in also largely inaccessible late fall through the early spring due to rough seas.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Open Year-Round"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "B5E62BF4-5AE6-4100-8DE1-66652943FAEC",
                    "name": "Aurora Borealis"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "4DC11D06-00F1-4A01-81D0-89CCCCE4FF50",
                    "name": "Climate Change"
                },
                {
                    "id": "123CE28E-0EFA-4330-8E6E-EEFF3D7BF772",
                    "name": "Coastal Defenses"
                },
                {
                    "id": "46FC5CBD-9AD5-48F1-B4DA-1357031B1D2E",
                    "name": "Coasts, Islands and Atolls"
                },
                {
                    "id": "762170E5-0747-4836-B837-7F2547D3F733",
                    "name": "Coniferous Forests"
                },
                {
                    "id": "489D6333-FD72-44DF-83B0-3D4412DD0A75",
                    "name": "Endangered"
                },
                {
                    "id": "F79C1242-80FF-40F0-A0C1-5FFCBA172EC0",
                    "name": "Estuaries and Mangroves"
                },
                {
                    "id": "1608649A-E7D7-4529-BD83-074C90F9FB68",
                    "name": "Fish"
                },
                {
                    "id": "41B1A0A3-11FF-4F55-9CB9-034A7E28B087",
                    "name": "Forests and Woodlands"
                },
                {
                    "id": "F0F97E32-2F29-41B4-AF98-9FBE8DAB36B1",
                    "name": "Geology"
                },
                {
                    "id": "FBB14C45-1663-4714-9D28-B2B99874644D",
                    "name": "Glaciers"
                },
                {
                    "id": "4C9D4777-A9DA-47D1-A0B9-F4A3C98BC1B3",
                    "name": "Maritime"
                },
                {
                    "id": "7424754D-EB8B-4608-A69A-50D44992931B",
                    "name": "Maritime - Military"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "101F4D51-F99D-45A6-BBB6-CD481E5FACED",
                    "name": "Mountains"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "A7359FC4-DAD8-45F5-AF15-7FF62F816ED3",
                    "name": "Night Sky"
                },
                {
                    "id": "0E6D8503-CB65-467F-BCD6-C6D9E28A4E0B",
                    "name": "Oceans"
                },
                {
                    "id": "0D1FC024-52CA-4851-BEF0-8811732650DD",
                    "name": "Rainforest"
                },
                {
                    "id": "4244F489-6813-4B7A-9D0C-20CE098C8FFF",
                    "name": "Rock Landscapes and Features"
                },
                {
                    "id": "9C9FCBB6-360B-4743-8155-6F9341CBE01B",
                    "name": "Scenic Views"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "78E4F4AC-AF97-435A-8C2C-7FB8D67516ED",
                    "name": "Unique Species"
                },
                {
                    "id": "97CCB419-196C-4B95-BB3A-621458F78415",
                    "name": "US Army"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "5ED826E0-76BB-47BB-87DD-E081A72B0A04",
                    "name": "Waterfalls"
                },
                {
                    "id": "BA12B386-49EA-46B0-9121-FCACACC47538",
                    "name": "Watersheds"
                },
                {
                    "id": "980D1693-65BF-4F29-8182-7BAC9796E605",
                    "name": "Whales"
                },
                {
                    "id": "B85866E2-0897-4000-9040-605CA335804F",
                    "name": "Wilderness"
                },
                {
                    "id": "74869FAE-8DFD-4454-847F-11FDDB679F94",
                    "name": "World War II"
                }
            ],
            "latLong": "lat:59.81804414, long:-150.106502",
            "description": "At the edge of the Kenai Peninsula lies a land where the ice age lingers. Nearly 40 glaciers flow from the Harding Icefield, Kenai Fjords' crowning feature. Wildlife thrives in icy waters and lush forests around this vast expanse of ice. Sugpiaq people relied on these resources to nurture a life entwined with the sea. Today, shrinking glaciers bear witness to the effects of our changing climate.",
            "images": [
                {
                    "credit": "USGS/Bruce Molnia",
                    "altText": "aerial image of Bear Glacier",
                    "title": "Bear Glacier Aerial",
                    "caption": "Bear Glacier is the largest of nearly 40 glaciers that flow from the Harding Icefield.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C798EAB-1DD8-B71B-0BC4BEFB197F2C90.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "kayakers in front of a tidewater glacier",
                    "title": "Aialik Bay Kayakers",
                    "caption": "Kayakers enjoy the spectacular scenery in the fjords in Aialik Bay.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DE352-1DD8-B71B-0B35831ADF254DE0.jpg"
                },
                {
                    "credit": "NPS Photo/Thoresen",
                    "altText": "a humpback whale breaches",
                    "title": "Humpback Whale Breach",
                    "caption": "A humpback whale breaches in Kenai Fjords National Park",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DE50D-1DD8-B71B-0B23431BC04ACB33.jpg"
                },
                {
                    "credit": "USGS/Bruce Molnia",
                    "altText": "aerial view of Bear Glacier from Harding Icefield",
                    "title": "Above Bear Glacier",
                    "caption": "Flightseeing over the Harding Icefield provides amazing opportunities to view glaciers, like Bear Glacier, from a different perspective.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DE88C-1DD8-B71B-0B3F02FD7F30F1AF.jpg"
                },
                {
                    "credit": "NPS Photo/Jim Pfeiffenberger",
                    "altText": "visitors at accessible overlook of Exit Glacier and Exit Creek.",
                    "title": "Exit Glacier View",
                    "caption": "A stroll to Glacier View provides a nice overlook of Exit Glacier as part of a 1 mile accessible walk.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DEEE0-1DD8-B71B-0B7B85B29F07C371.jpg"
                }
            ],
            "designation": "National Park",
            "parkCode": "kefj",
            "addresses": [
                {
                    "postalCode": "99664",
                    "city": "Seward",
                    "stateCode": "AK",
                    "line1": "PO Box 1727",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "99664",
                    "city": "Seward",
                    "stateCode": "AK",
                    "line1": "411 Washington Street",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "11E73438-0CCC-4441-A76A-1995F67F2D89",
            "fullName": "Kenai Fjords National Park",
            "latitude": "59.81804414"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "7017453300",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "7017453708",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "knri_information@nps.gov"
                    }
                ]
            },
            "states": "ND",
            "longitude": "-101.3860533",
            "activities": [
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "31F88DA6-696F-441F-89CF-D7B1415C4CB9",
                    "name": "Citizen Science"
                },
                {
                    "id": "C11D3746-5063-4BD0-B245-7178D1AD866C",
                    "name": "Compass and GPS"
                },
                {
                    "id": "C59E231D-55FC-4B37-BC5B-FF76383951B5",
                    "name": "Craft Demonstrations"
                },
                {
                    "id": "FAED7F97-3474-4C21-AB42-FB0768A2F826",
                    "name": "Cultural Demonstrations"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "25FB188F-5AAD-459A-9092-28A9801709FF",
                    "name": "Freshwater Fishing"
                },
                {
                    "id": "CA3641A0-FADC-497F-B036-3FE426D0DDCC",
                    "name": "Geocaching"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A",
                    "name": "Hands-On"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C0FFC3D5-0E74-4B6F-B69D-6F95B78906CE",
                    "name": "Live Music"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "Park has no entrance fee.",
                    "title": "Knife River Indian Villages NHS Entrance Fee"
                }
            ],
            "directionsInfo": "Plane\nFly into Bismarck or Minot, ND. Hazen, ND (15 miles from site) has an airport for small planes.\n\nCar\nOne-half mile north of Stanton, ND on County Road 37. One hour northwest of Bismarck, ND and one and a half hours southwest of Minot, ND.\n\nPublic Transportation\nCharter and tour bus parking available at Visitor Center parking lot.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/knri/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/knri/index.htm",
            "weatherInfo": "Summers are warm and sunny with temperatures occasionally reaching 100 degrees F and frequent afternoon thunderstorms.  Winters are invigorating, with extremely cold temperatures as low as -35 degrees F.  High winds and sunny skies are common in winter.  Snow is sporadic in the relatively dry climate, but blizzards are common.",
            "name": "Knife River Indian Villages",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Knife River Indian Villages NHS is open year-round.\nPark trails and grounds are open daily from sunrise to sunset. Dogs are welcome on the trails as long they are on a leash.",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "Trails"
                },
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "8:00AM - 4:30PM",
                                "monday": "8:00AM - 4:30PM",
                                "thursday": "8:00AM - 4:30PM",
                                "sunday": "8:00AM - 4:30PM",
                                "tuesday": "8:00AM - 4:30PM",
                                "friday": "8:00AM - 4:30PM",
                                "saturday": "8:00AM - 4:30PM"
                            },
                            "startDate": "2018-09-03",
                            "name": "Winter Season",
                            "endDate": "2018-05-28"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2020-03-18",
                            "name": "Closed Due to COVID-19",
                            "endDate": "2020-04-30"
                        }
                    ],
                    "description": "Summer season is Memorial Day to Labor Day.",
                    "standardHours": {
                        "wednesday": "9:00AM - 6:00PM",
                        "monday": "9:00AM - 6:00PM",
                        "thursday": "9:00AM - 6:00PM",
                        "sunday": "9:00AM - 6:00PM",
                        "tuesday": "9:00AM - 6:00PM",
                        "friday": "9:00AM - 6:00PM",
                        "saturday": "9:00AM - 6:00PM"
                    },
                    "name": "Visitor Center & Earthlodge"
                }
            ],
            "topics": [
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
                    "name": "Arts"
                },
                {
                    "id": "12EA2B56-17EC-410A-A10D-BFBA87A0669B",
                    "name": "Explorers and Expeditions"
                },
                {
                    "id": "94262026-92F5-48E9-90EF-01CEAEFBA4FF",
                    "name": "Grasslands"
                },
                {
                    "id": "6766B838-9493-4EF8-830E-2D1EFB917461",
                    "name": "Indigenous and Native Warrior"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "1AEDC86F-5792-487F-8CDF-9E92CAB97ACE",
                    "name": "Prairies"
                },
                {
                    "id": "3CDB67A9-1EAC-408D-88EC-F26FA35E90AF",
                    "name": "Schools and Education"
                },
                {
                    "id": "A86F34FB-BD6D-4D09-80CC-421B6113DF2E",
                    "name": "Thickets and Shrublands"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "7DA81DAB-5045-4953-9C20-36590AD9FA95",
                    "name": "Women's History"
                }
            ],
            "latLong": "lat:47.3540219, long:-101.3860533",
            "description": "Earthlodge people hunted bison and other game, but were in essence farmers living in villages along the Missouri and its tributaries. The site was a major Native American trade center for hundreds of years prior to becoming an important market place for fur traders after 1750.",
            "images": [
                {
                    "credit": "NPS photo",
                    "altText": "Summer view of Earthlodge",
                    "title": "Earthlodge",
                    "caption": "Summer view of Earthlodge",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C812613-1DD8-B71B-0B29B74AAFA56DE7.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "Interior View of Earthlodge",
                    "title": "Interior View of Earthlodge",
                    "caption": "Interior View of Earthlodge",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C8127F4-1DD8-B71B-0BE7BEB35219164E.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Winter Earthlodge",
                    "title": "Winter Earthlodge",
                    "caption": "Winter Earthlodge",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C813FB3-1DD8-B71B-0BA4497C2A70C7E8.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Garden",
                    "title": "Garden",
                    "caption": "Garden",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C814266-1DD8-B71B-0BFF0A037013C9BA.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Sakakawea Village",
                    "title": "Sakakawea Village",
                    "caption": "Sakakawea Village",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C81440A-1DD8-B71B-0B07E8FB404C1563.jpg"
                }
            ],
            "designation": "National Historic Site",
            "parkCode": "knri",
            "addresses": [
                {
                    "postalCode": "58571",
                    "city": "Stanton",
                    "stateCode": "ND",
                    "line1": "P.O. Box 9",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "58571",
                    "city": "Stanton",
                    "stateCode": "ND",
                    "line1": "564 County Road 37",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "0103833B-8114-4483-9754-11B5171BCB20",
            "fullName": "Knife River Indian Villages National Historic Site",
            "latitude": "47.3540219"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "2024266841",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "national_mall@nps.gov"
                    }
                ]
            },
            "states": "DC",
            "longitude": "-77.04773857",
            "activities": [
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "No Entrance Fee to enter Park Site",
                    "title": "No Entrance Fee"
                }
            ],
            "directionsInfo": "GPS Coordinates: 38.887778, -77.047660\nAddress: 10 Daniel French Dr, SW, Washington, D.C.\nNearest Intersection: Independence Ave. & Daniel Chester French Dr. SW",
            "entrancePasses": [
                {
                    "cost": "0.0000",
                    "description": "No Passes",
                    "title": "No Passes"
                }
            ],
            "directionsUrl": "http://www.nps.gov/kowa/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/kowa/index.htm",
            "weatherInfo": "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter.\n\nSpring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees\n\nSummer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees\n\nFall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees\n\nWinter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees\n\n(Source: www.usclimatedata.com)",
            "name": "Korean War Veterans Memorial",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The sites of National Mall and Memorial Parks (other than the Washington Monument) are always open to the public. Restrooms, museums and elevators close in the evenings (check individual sites for hours)",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Always Open"
                },
                {
                    "exceptions": [],
                    "description": "Rangers are on Duty to assist the Visiting Public from 9:30 am to 10:00 pm daily (except christmas). The United States Park Police are on Duty 24 hours a day.",
                    "standardHours": {
                        "wednesday": "9:30AM - 10:00PM",
                        "monday": "9:30AM - 10:00PM",
                        "thursday": "9:30AM - 10:00PM",
                        "sunday": "9:30AM - 10:00PM",
                        "tuesday": "9:30AM - 10:00PM",
                        "friday": "9:30AM - 10:00PM",
                        "saturday": "9:30AM - 10:00PM"
                    },
                    "name": "Rangers on Duty"
                }
            ],
            "topics": [
                {
                    "id": "3A25C166-83B4-48A4-BB7B-BD67469D17B6",
                    "name": "Korean War"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                }
            ],
            "latLong": "lat:38.88784226, long:-77.04773857",
            "description": "Our nation honors her sons and daughters who answered the call to defend a country they never knew and a people they never met.",
            "images": [
                {
                    "credit": "NPS Photo/Carol Highsmith",
                    "altText": "Dawn Picture of the statues within the memorial",
                    "title": "Dawn Breaks into the future",
                    "caption": "Sun Rises over the statues of the Memorial",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C822E13-1DD8-B71B-0B426CD34F183D32.jpg"
                },
                {
                    "credit": "NPS Photo/Carol Highsmith",
                    "altText": "Snow covered statues inside the memorial",
                    "title": "Service year round",
                    "caption": "No matter the time of year. The memorials are here to pay honor to those that served",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C822F9D-1DD8-B71B-0B774FA67062BC69.jpg"
                }
            ],
            "designation": "",
            "parkCode": "kowa",
            "addresses": [
                {
                    "postalCode": "20002",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "10 Daniel French Dr, SW",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "20024",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "900 Ohio Drive SW",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "0DEA542F-01B7-4631-8AAD-124161D7B7E6",
            "fullName": "Korean War Veterans Memorial",
            "latitude": "38.88784226"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "2024266841",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "national_mall@nps.gov"
                    }
                ]
            },
            "states": "DC",
            "longitude": "-77.05017778",
            "activities": [
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "No Entrance Fee",
                    "title": "No Entrance Fee"
                }
            ],
            "directionsInfo": "GPS Coordinates: 38.889321, -77.050166\nAddress: 2 Lincoln Memorial Circle, NW, Washington, D.C.\nNearest Intersection: Independence Ave. SW & Daniel Chester French Dr. SW",
            "entrancePasses": [
                {
                    "cost": "0.0000",
                    "description": "No Passes",
                    "title": "No Passes"
                }
            ],
            "directionsUrl": "http://www.nps.gov/linc/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/linc/index.htm",
            "weatherInfo": "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter.\n\nSpring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees\n\nSummer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees\n\nFall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees\n\nWinter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees\n\n(Source: www.usclimatedata.com)",
            "name": "Lincoln Memorial",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The sites of National Mall and Memorial Parks (other than the Washington Monument) are always open to the public. Restrooms, museums and elevators close in the evenings (check individual sites for hours)",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Always Open"
                },
                {
                    "exceptions": [],
                    "description": "Rangers are on Duty to assist the Visiting Public from 9:30 am to 10:00 pm daily (except christmas). The United States Park Police are on Duty 24 hours a day.",
                    "standardHours": {
                        "wednesday": "9:30AM - 10:00PM",
                        "monday": "9:30AM - 10:00PM",
                        "thursday": "9:30AM - 10:00PM",
                        "sunday": "9:30AM - 10:00PM",
                        "tuesday": "9:30AM - 10:00PM",
                        "friday": "9:30AM - 10:00PM",
                        "saturday": "9:30AM - 10:00PM"
                    },
                    "name": "Rangers On Duty"
                }
            ],
            "topics": [
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
                    "name": "Arts"
                },
                {
                    "id": "8F34C3EC-7B8E-4F28-8114-B8DFE4F300DF",
                    "name": "Civil Rights"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "05B7868A-3F3C-433D-876E-A886C4BE7A12",
                    "name": "Painting"
                },
                {
                    "id": "F669BC40-BDC4-41C0-9ACE-B2CD25373045",
                    "name": "Presidents"
                },
                {
                    "id": "0DE2D6B3-46DE-44B1-BB5F-E9E8874630D5",
                    "name": "Sculpture"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                }
            ],
            "latLong": "lat:38.88927229, long:-77.05017778",
            "description": "\"In this temple, as in the hearts of the people for whom he saved the Union, the memory of Abraham Lincoln is enshrined forever.\" Beneath these words, the 16th President of the United States sits immortalized in marble as an enduring symbol of unity, strength, and wisdom.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "Lincoln Memorial at Dusk",
                    "title": "Lincoln Memorial at Dusk",
                    "caption": "One of the most photographed memorials, no matter the hour.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C816F5A-1DD8-B71B-0B6D38F175B60A23.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Lincoln Statue Close up",
                    "title": "Lincoln Statue Close up",
                    "caption": "A statue comes to life",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C8170D5-1DD8-B71B-0BDFF9C2491124BA.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Nations Capital Landscape",
                    "title": "Nations Capital Landscape",
                    "caption": "An iconic photo of the Nations Capital",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C81722F-1DD8-B71B-0B5AAC81974582C6.jpg"
                }
            ],
            "designation": "",
            "parkCode": "linc",
            "addresses": [
                {
                    "postalCode": "20024",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "900 Ohio Drive SW",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "20002",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "2 Lincoln Memorial Circle, NW",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "1EAEF5FA-8CD4-40D7-8B09-07F20E3E5AA5",
            "fullName": "Lincoln Memorial",
            "latitude": "38.88927229"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "(617) 876-4491",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "anna_christie@nps.gov"
                    }
                ]
            },
            "states": "MA",
            "longitude": "-71.12636956",
            "activities": [
                {
                    "id": "19A59EFB-DF4B-4049-9EE1-A784CAC9C70C",
                    "name": "Arts and Crafts"
                },
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A",
                    "name": "Hands-On"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C0FFC3D5-0E74-4B6F-B69D-6F95B78906CE",
                    "name": "Live Music"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "Longfellow House-Washington's Headquarters National Historic Site is a fee free site. This includes all tours and special events.",
                    "title": "Fee Information"
                }
            ],
            "directionsInfo": "Longfellow House-Washington's Headquarters NHS is located in a residential section of Cambridge, MA. There is very little public parking in the area and onsite parking is limited to vehicles with handicapped parking permits. However, the site is a short walk from Harvard Square, where there are paid parking lots and a station for the MBTA Red Line and numerous bus routes. The use of public transportation to the site is highly recommended. Follow the link for detailed instructions.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/long/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/long/index.htm",
            "weatherInfo": "New England weather is highly variable. Temperatures in the winter can be very cold with high snowfall. Fall and spring are generally pleasant. Summer temperatures are generally mild, with periods of heat and humidity. However, the house is air conditioned and heated for collection care and the comfort of the visitor.",
            "name": "Longfellow House Washington's Headquarters",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Indoor operations at Longfellow House-Washington's Headquarters National Historic Site are currently suspended in accordance with public health guidance. The grounds remain open.",
                    "standardHours": {
                        "wednesday": "Closed",
                        "monday": "Closed",
                        "thursday": "Closed",
                        "sunday": "Closed",
                        "tuesday": "Closed",
                        "friday": "Closed",
                        "saturday": "Closed"
                    },
                    "name": "Current Hours"
                }
            ],
            "topics": [
                {
                    "id": "5CCB14BC-2AC4-45CE-B786-54A065DA1B60",
                    "name": "Abolition Movement"
                },
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "F3883A66-A7CB-461B-868E-1B5932224B25",
                    "name": "American Revolution"
                },
                {
                    "id": "990E22A2-20D8-4CC2-8E6C-D2DF165BCDA5",
                    "name": "American Revolutionary War"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
                    "name": "Arts"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "A764E57D-9925-4855-8D66-C60357946FC3",
                    "name": "Cold War"
                },
                {
                    "id": "3D2EE3E9-7344-416C-A412-C2C7CDCDE684",
                    "name": "Colonial/European Contact Conflicts"
                },
                {
                    "id": "1170EEB6-5070-4760-8E7D-FF1A98272FAD",
                    "name": "Commerce"
                },
                {
                    "id": "D9FC6D14-F8C7-4EBA-86EA-DFD99B6BB4F5",
                    "name": "Enslavement"
                },
                {
                    "id": "480D5BD7-D43B-44BB-AD82-1751CB859054",
                    "name": "French and Indian War"
                },
                {
                    "id": "0B575E33-B68F-4F3D-998E-B03284606CF3",
                    "name": "Industry"
                },
                {
                    "id": "E411F474-A530-4804-9D23-1D94C78B41E4",
                    "name": "Infantry and Militia"
                },
                {
                    "id": "14FA9FF3-7D86-4406-9A6D-BE9032A1C578",
                    "name": "Laborer and Worker"
                },
                {
                    "id": "AF4F1CDF-E6C4-4886-BA91-8BC887DC2793",
                    "name": "Landscape Design"
                },
                {
                    "id": "E0AB480F-3A94-4DC1-8B21-9555F2C59B32",
                    "name": "LGBTQ American Heritage"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "05B7868A-3F3C-433D-876E-A886C4BE7A12",
                    "name": "Painting"
                },
                {
                    "id": "9BD60DC0-C82B-42BA-A170-456B7423429D",
                    "name": "Photography"
                },
                {
                    "id": "156AD9B6-B377-418C-BC9A-F6E682D4BAF7",
                    "name": "Poetry and Literature"
                },
                {
                    "id": "F669BC40-BDC4-41C0-9ACE-B2CD25373045",
                    "name": "Presidents"
                },
                {
                    "id": "518B32FB-339D-4C52-B2C2-04BF406AA4B0",
                    "name": "Religion and Spirituality"
                },
                {
                    "id": "3CDB67A9-1EAC-408D-88EC-F26FA35E90AF",
                    "name": "Schools and Education"
                },
                {
                    "id": "0DE2D6B3-46DE-44B1-BB5F-E9E8874630D5",
                    "name": "Sculpture"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                },
                {
                    "id": "A28F8700-794E-4BA3-A8D7-7D75D53A4B17",
                    "name": "Spanish-American War"
                },
                {
                    "id": "A010EADF-78B8-4526-B0A4-70B0E0B3470E",
                    "name": "Trade"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "7DA81DAB-5045-4953-9C20-36590AD9FA95",
                    "name": "Women's History"
                },
                {
                    "id": "4EC51024-F0D9-479D-AF3F-344CC0153D2E",
                    "name": "World War I"
                }
            ],
            "latLong": "lat:42.37698854, long:-71.12636956",
            "description": "Longfellow House-Washington's Headquarters National Historic Site preserves the home of Henry W. Longfellow, one of the world’s foremost 19th century poets. The house also served as headquarters for General George Washington during the Siege of Boston, July 1775 - April 1776. In addition to its rich history, the site offers unique opportunities to explore 19th century literature and arts.",
            "images": [
                {
                    "credit": "NPS Photo/ Garrett Cloer",
                    "altText": "house covered with new fallen snow",
                    "title": "Winter at Longfellow House-Washington's Headquarters National Historic Site",
                    "caption": "New fallen snow blankets the historic mansion.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/39308375-1DD8-B71B-0B9460827B3221DB.jpg"
                },
                {
                    "credit": "NPS Photo/ Garrett Cloer",
                    "altText": "mansion highlighted by the changing colors of fall",
                    "title": "Longfellow House-Washington's Headquarters National Historic Site",
                    "caption": "Thousands tour the historic headquarters of George Washington and home of Henry Longfellow each summer.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/39575623-1DD8-B71B-0BA5AE9AB6BEB650.jpg"
                },
                {
                    "credit": "NPS Photo/ Garrett Cloer",
                    "altText": "garden back dropped by house",
                    "title": "Longfellow Family Garden",
                    "caption": "The Longfellow Family Garden provides a peaceful getaway in the heart of Cambridge.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/397111E0-1DD8-B71B-0BA6161F336D01D5.jpg"
                },
                {
                    "credit": "NPS Photo/Garrett Cloer",
                    "altText": "large crowd on the east lawn listening to singers perfom",
                    "title": "Summer Festival Concert",
                    "caption": "Each year is highlighted by the Summer Festival on the house's east lawn.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3980F568-1DD8-B71B-0B2C8891C1B5FB5F.jpg"
                },
                {
                    "credit": "NPS Photo/ Garrett Cloer",
                    "altText": "children interacting with puppet",
                    "title": "Fun for All Ages",
                    "caption": "Special events create fun for all ages.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3993EE60-1DD8-B71B-0BFAC5A00BF0CF75.jpg"
                },
                {
                    "credit": "NPS Photo/ Garrett Cloer",
                    "altText": "reenactors in front of house",
                    "title": "The General Finds His Park",
                    "caption": "You never know who you might find!",
                    "url": "https://www.nps.gov/common/uploads/structured_data/399E97E5-1DD8-B71B-0B0F1FFCE29A96BC.jpg"
                },
                {
                    "credit": "NPS Photo/ Garrett Cloer",
                    "altText": "pink flower in garden",
                    "title": "Longfellow Family Garden",
                    "caption": "Vibrant colors abound throughout the year in the Longfellow Family Garden.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/39BDB843-1DD8-B71B-0B90045654B4D283.jpg"
                }
            ],
            "designation": "National Historic Site",
            "parkCode": "long",
            "addresses": [
                {
                    "postalCode": "02138",
                    "city": "Cambridge",
                    "stateCode": "MA",
                    "line1": "105 Brattle Street",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "02138",
                    "city": "Cambridge",
                    "stateCode": "MA",
                    "line1": "105 Brattle Street",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "CE9470A1-A8D7-49DE-A555-1A32FBBAB0FF",
            "fullName": "Longfellow House Washington's Headquarters National Historic Site",
            "latitude": "42.37698854"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "(760)878-2194",
                        "description": "Need to speak with a ranger? Call this number for general information.",
                        "extension": "3310",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "(760)878-2949",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "Can't find what you're looking for on our website? Email us with general information requests.",
                        "emailAddress": "manz_information_request@nps.gov"
                    }
                ]
            },
            "states": "CA",
            "longitude": "-118.1547177",
            "activities": [
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "3DE599E2-22ED-40BF-B383-EDA073563C1E",
                    "name": "Bus/Shuttle Guided Tour"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "C7D5A145-F8EB-4C37-9E92-2F6C6206B196",
                    "name": "Self-Guided Tours - Auto"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no fee to enter Manzanar National Historic Site. Enjoy your visit!",
                    "title": "Entrance Fees"
                }
            ],
            "directionsInfo": "Manzanar is located on the west side of U.S. Highway 395, 9 miles north of Lone Pine, California and 6 miles south of Independence, CA.",
            "entrancePasses": [
                {
                    "cost": "0.0000",
                    "description": "No pass is required to enter Manzanar National Historic Site. Enjoy your visit!\n\nIf you plan to visit other parks with an entrance fee, learn more about the National Parks and Federal Recreation Lands Passes.",
                    "title": "Entrance Passes"
                }
            ],
            "directionsUrl": "http://home.nps.gov/manz/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/manz/index.htm",
            "weatherInfo": "Manzanar is located in the Owens Valley at 4,000' elevation, at the eastern base of the Sierra Nevada. We get little precipitation but we do have four distinct seasons. Summer temperatures can soar over 100 degrees. Winter highs are usually in the 40's. Nighttime temperatures year round are 30 to 40 degrees less than daytime highs. High winds are common in any season.",
            "name": "Manzanar",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The driving tour and grounds remain open daily from sunrise to sunset. See visitor center hours below.",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "Site Grounds"
                }
            ],
            "topics": [
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
                    "name": "Arts"
                },
                {
                    "id": "8F34C3EC-7B8E-4F28-8114-B8DFE4F300DF",
                    "name": "Civil Rights"
                },
                {
                    "id": "8CDF78C9-F91A-4ACD-AE70-4FF186F616CE",
                    "name": "Forced Marches"
                },
                {
                    "id": "2B428F59-9148-40C1-B38E-130589F2540E",
                    "name": "Immigration"
                },
                {
                    "id": "351EE154-87AA-46B0-BBA1-ED604368ACE9",
                    "name": "Incarceration"
                },
                {
                    "id": "367BC636-6F02-4F1B-BEAA-5A20E46C7207",
                    "name": "Japanese-American Internment"
                },
                {
                    "id": "69E16062-0E4F-4DE0-91FB-E4EDB2484572",
                    "name": "Migrations"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "05B7868A-3F3C-433D-876E-A886C4BE7A12",
                    "name": "Painting"
                },
                {
                    "id": "9BD60DC0-C82B-42BA-A170-456B7423429D",
                    "name": "Photography"
                },
                {
                    "id": "4244F489-6813-4B7A-9D0C-20CE098C8FFF",
                    "name": "Rock Landscapes and Features"
                },
                {
                    "id": "9C9FCBB6-360B-4743-8155-6F9341CBE01B",
                    "name": "Scenic Views"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                },
                {
                    "id": "A160B3D9-1603-4D89-B82F-21FCAF9EEE3B",
                    "name": "Tragic Events"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "74869FAE-8DFD-4454-847F-11FDDB679F94",
                    "name": "World War II"
                }
            ],
            "latLong": "lat:36.72559195, long:-118.1547177",
            "description": "In 1942, the United States government ordered more than 110,000 men, women, and children to leave their homes and detained them in remote, military-style camps. Manzanar War Relocation Center was one of ten camps where Japanese American citizens and resident Japanese aliens were incarcerated during World War II.",
            "images": [
                {
                    "credit": "Dorothea Lang",
                    "altText": "People walk to barracks framed by mountain peaks.",
                    "title": "Historic Barracks",
                    "caption": "People walk to long rows of barracks.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C876C2F-1DD8-B71B-0B0F7AB75DF47C6F.jpg"
                }
            ],
            "designation": "National Historic Site",
            "parkCode": "manz",
            "addresses": [
                {
                    "postalCode": "93526",
                    "city": "Independence",
                    "stateCode": "CA",
                    "line1": "Manzanar National Historic Site",
                    "type": "Physical",
                    "line3": "5001 Highway 395",
                    "line2": ""
                },
                {
                    "postalCode": "93526",
                    "city": "Independence",
                    "stateCode": "CA",
                    "line1": "Manzanar National Historic Site",
                    "type": "Mailing",
                    "line3": "5001 Highway 395",
                    "line2": "P.O. Box 426"
                }
            ],
            "id": "249AF67F-BB6C-4D0A-B632-07BEE855D24B",
            "fullName": "Manzanar National Historic Site",
            "latitude": "36.72559195"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "5187589689",
                        "description": "",
                        "extension": "2040",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "5187586986",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "mava_info@nps.gov"
                    }
                ]
            },
            "states": "NY",
            "longitude": "-73.70834257",
            "activities": [
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "C11D3746-5063-4BD0-B245-7178D1AD866C",
                    "name": "Compass and GPS"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "CA3641A0-FADC-497F-B036-3FE426D0DDCC",
                    "name": "Geocaching"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no entrance fee to explore Martin Van Buren National Historic Site or take a tour of the president's home.",
                    "title": "No Entrance Fee"
                }
            ],
            "directionsInfo": "The park entrance road is located off of route 9H  two miles south of Kinderhook Village.  \n\nGPS Coordinates:  42° 22' 52'' N   -73° 42' 13'' W",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/mava/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/mava/index.htm",
            "weatherInfo": "The weather at Martin Van Buren National Historic Site is typical of the northeast United States; it varies considerably throughout the year. Always check the forecast prior to your visit and dress accordingly. Be sure to wear comfortable walking shoes.",
            "name": "Martin Van Buren",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Park grounds are open year round from 7:00 am to sunset. Visitor facilities and guided tours of the president's home are available on a seasonal basis. Please check our Operating Hours & Seasons page for our current facility hours.",
                    "standardHours": {
                        "wednesday": "7:00AM - Sunset",
                        "monday": "7:00PM - Sunset",
                        "thursday": "7:00AM - Sunset",
                        "sunday": "7:00AM - Sunset",
                        "tuesday": "7:00AM - Sunset",
                        "friday": "7:00AM - Sunset",
                        "saturday": "7:00AM - Sunset"
                    },
                    "name": "Martin Van Buren National Historic Site"
                }
            ],
            "topics": [
                {
                    "id": "F669BC40-BDC4-41C0-9ACE-B2CD25373045",
                    "name": "Presidents"
                }
            ],
            "latLong": "lat:42.36819596, long:-73.70834257",
            "description": "Today, Martin Van Buren is an obscure man, often little more than a footnote. In pre-Civil War America, however, it was impossible not to have an opinion of him. Van Buren was central to the issues of his day: the creation of political parties, and the largest crisis of his time, slavery. The above quote is from Davy Crockett, one of many Americans trying to understand the Red Fox of Kinderhook.",
            "images": [
                {
                    "credit": "Chloe Barker-Benfield",
                    "altText": "Sunset over the farm fields of Lindewald",
                    "title": "Sunset over the farm fields of Lindewald",
                    "caption": "A stunning sunset over the the fields of Lindenwald with the Catskill Mountains rising in the distance.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/63CAAA72-1DD8-B71B-0BA08E6F04BC7FEC.jpeg"
                },
                {
                    "credit": "HABS",
                    "altText": "President Van Buren's Home",
                    "title": "President Van Buren's Home",
                    "caption": "Van Buren called his home and farm Lindenwald.  He lived here after his term as president from 1841 to 1862.  He ran two presidential campaign from Lindenwald in 1844 and 1848.He ran presidential vam",
                    "url": "https://www.nps.gov/common/uploads/structured_data/63EC7C14-1DD8-B71B-0B7077898DC10768.jpg"
                },
                {
                    "credit": "National Park Service by Michael Fredericks",
                    "altText": "Paycheck from Martin Van Buren to Irish Servant Catherine Kelly",
                    "title": "Paycheck from Martin Van Buren to Irish Servant Catherine Kelly",
                    "caption": "Many of the domestic workers at Lindenwald were Irsh.  They are emblamatic of the great waves of immigrants which beagn arriving in the United states during the ante bellum period.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/674EEFC9-1DD8-B71B-0B8A6F553DE8699D.jpg"
                },
                {
                    "credit": "national Park Service by Michael Fredericks",
                    "altText": "Martin Van Buren by Hiram Powers",
                    "title": "Martin Van Buren by Hiram Powers",
                    "caption": "This bust of van Buren which is in the library of Lindenwald was sculpted by Hiram Powers.  Another version of the bust may be found in the Red Room of the White House.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/67DB406E-1DD8-B71B-0BF580AB26353763.jpg"
                },
                {
                    "credit": "National Park Service",
                    "altText": "Lindenwald's Main Hall",
                    "title": "Lindenwald's Main Hall",
                    "caption": "The main hall and dining table at Lindenwald were used by President Van Buren to not only entertain, but to use his skills to bend political issues his way through the ante bellum period.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/68298B59-1DD8-B71B-0B2C3E86F530B300.jpg"
                }
            ],
            "designation": "National Historic Site",
            "parkCode": "mava",
            "addresses": [
                {
                    "postalCode": "12106-3605",
                    "city": "Kinderhook",
                    "stateCode": "NY",
                    "line1": "Martin Van Buren NHS",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "1013 Old Post Road"
                },
                {
                    "postalCode": "12106-3605",
                    "city": "Kinderhook",
                    "stateCode": "NY",
                    "line1": "Martin Van Buren NHS",
                    "type": "Physical",
                    "line3": "",
                    "line2": "1013 Old Post Road"
                }
            ],
            "id": "C1713EAF-0437-4CE1-8CFB-04147E1318F3",
            "fullName": "Martin Van Buren National Historic Site",
            "latitude": "42.36819596"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "3132593425",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "asmith@motorcities.org"
                    }
                ]
            },
            "states": "MI",
            "longitude": "-83.8187713623047",
            "activities": [
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "C7D5A145-F8EB-4C37-9E92-2F6C6206B196",
                    "name": "Self-Guided Tours - Auto"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "http://www.motorcities.org/About+Us/About+MotorCities-1.html",
                    "title": "Fees"
                }
            ],
            "directionsInfo": "The MotorCities National Heritage Area encompasses over 10,000 square miles in southeast and central Michigan. The Partnership's administrative headquarters are in Detroit.",
            "entrancePasses": [],
            "directionsUrl": "http://www.motorcities.org/Explore+MotorCities.html",
            "url": "https://www.nps.gov/auto/index.htm",
            "weatherInfo": "Michigan has a temperate climate with well-defined seasons. The warmest temperatures and longest frost-free period are found most generally in the southern part of the lower peninsula; Detroit has a normal daily mean temperature of 49°F (9°C), ranging from 23°F (–5°C) in January to 72°F (22°C) in July.",
            "name": "Motor Cities",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The MotorCities National Heritage Area encompasses over 10,000 square miles in southeast and central Michigan.  The Partnership’s administrative headquarters are in Detroit.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Hours"
                }
            ],
            "topics": [
                {
                    "id": "E1C7ED3C-C804-4D96-B565-B4A13BEBB00E",
                    "name": "Labor Movement"
                },
                {
                    "id": "14FA9FF3-7D86-4406-9A6D-BE9032A1C578",
                    "name": "Laborer and Worker"
                },
                {
                    "id": "D1CF31DE-AFED-412B-9425-DD1FD4CBB5C7",
                    "name": "Science, Technology and Innovation"
                },
                {
                    "id": "FE2C2613-B41E-4531-BC43-03EB6E45CBCF",
                    "name": "Transportation"
                },
                {
                    "id": "846E5C56-E5AC-489C-B3BF-11F4C73F12C2",
                    "name": "Urban America"
                }
            ],
            "latLong": "lat:42.518180847168, long:-83.8187713623047",
            "description": "If you are interested in automotive history, then MotorCities National Heritage Area is the place to be. Tour the factory where Henry Ford created and built the Model T. Learn the stories behind the creation of General Motors and DamilerChrysler. Come with us and learn about the long and sometimes tenuous relationship between Labor and Industry while experiencing southeast Michigan.",
            "images": [
                {
                    "credit": "MotorCities National Heritage Area",
                    "altText": "A classic Packard",
                    "title": "A classic Packard",
                    "caption": "A classic Packard was one of several classic cars that parked in front of the State Capitol Building on Tuesday, Nov. 10, in honor of Michigan Auto Heritage Day.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C8425B2-1DD8-B71B-0BF6F588AB24E5D3.jpg"
                }
            ],
            "designation": "National Heritage Area",
            "parkCode": "auto",
            "addresses": [
                {
                    "postalCode": "48243",
                    "city": "Detroit",
                    "stateCode": "MI",
                    "line1": "200 Renaissance Center, Suite 3148",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "48243",
                    "city": "Detroit",
                    "stateCode": "MI",
                    "line1": "200 Renaissance Center, Suite 3148",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "0A1E13CA-F967-42FE-8334-128EB369A4EA",
            "fullName": "Motor Cities National Heritage Area",
            "latitude": "42.518180847168"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "9372257705",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "tom_engberg@nps.gov"
                    }
                ]
            },
            "states": "OH",
            "longitude": "-84.0711364746094",
            "activities": [
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                }
            ],
            "entranceFees": [
                {
                    "cost": "1.0000",
                    "description": "The National Aviation Heritage Area is comprised of many sites. While some sites are free of charge to the public, others may have entrance fees and/or event or participation fees. Please check on the specific National Aviation Heritage Area site prior to your visit.",
                    "title": "Entrance Fees Vary"
                }
            ],
            "directionsInfo": "The National Aviation Heritage Area has multiple sites located throughout eight counties in the Dayton, Ohio and western Ohio area. Please be sure to visit a specific National Aviation Heritage Area website for directions and/or maps to each location.",
            "entrancePasses": [
                {
                    "cost": "1.0000",
                    "description": "The National Aviation Heritage Area is comprised of many sites. While some sites are free of charge to the public, others may have entrance fees and/or event or participation fees. Please check on the specific National Aviation Heritage Area site prior to your visit.",
                    "title": "Fee Pass Costs Vary"
                }
            ],
            "directionsUrl": "http://www.aviationheritagearea.org/",
            "url": "https://www.nps.gov/avia/index.htm",
            "weatherInfo": "The National Aviation Heritage Area lies in a humid continental zone with a generally temperate climate. Winters are mildly cold with average temperatures around 39 degrees (F). Summers are hot and humid with an average temperature around 74 degrees (F). Average annual total rainfall is just above 41\". Snowfall in the winter is generally light with an average total snowfall of about 25\".",
            "name": "National Aviation",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "While this website is not meant to be an exhaustive resource for all of the National Aviation Heritage Area partners and organizations, there is an official partner organization (National Aviation Heritage Alliance) which operates a separate and full-functioning website with a plethora of site information. Visit National Aviation Heritage Alliances' webpage for up-to-date information, directions and breaking news for all of the historical sites and member organizations.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Various Heritage Area Sites"
                }
            ],
            "topics": [
                {
                    "id": "B912363F-771C-4098-BA3A-938DF38A9D7E",
                    "name": "Aviation"
                }
            ],
            "latLong": "lat:39.9818229675293, long:-84.0711364746094",
            "description": "Aviation is chock-full of tradition & history and nowhere will you find a richer collection of aviation than here, the birthplace of aviation.  From the straightforward bicycle shops that fostered the Wright brothers' flying ambitions to the complex spacecraft that carried man to the moon, the National Aviation Heritage Area has everything you need to learn about this country’s aviation legacy.",
            "images": [
                {
                    "credit": "NPS Photo / Tom Engberg",
                    "altText": "Visitor center building in background with plaza in foreground",
                    "title": "Dayton's National Park",
                    "caption": "The Wright-Dunbar Interpretive Center located just west of downtown Dayton",
                    "url": "https://www.nps.gov/common/uploads/structured_data/DCB2628F-1DD8-B71B-0BD78D1063069C70.jpg"
                }
            ],
            "designation": "Heritage Area",
            "parkCode": "avia",
            "addresses": [
                {
                    "postalCode": "45402",
                    "city": "Dayton",
                    "stateCode": "OH",
                    "line1": "16 South Williams St.",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "45402",
                    "city": "Dayton",
                    "stateCode": "OH",
                    "line1": "16 South Williams St.",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "C8C207D8-49C4-4891-9915-0007205A0284",
            "fullName": "National Aviation Heritage Area",
            "latitude": "39.9818229675293"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "2026905185",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "nace_superintendent@nps.gov"
                    }
                ]
            },
            "states": "DC",
            "longitude": "-76.98495791",
            "activities": [
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "National Capital Parks-East is located in Anacostia Park, which is fee free.",
                    "title": "Free Entrance"
                }
            ],
            "directionsInfo": "DC295 South to the Exit for I-694/I-395/Capitol Hill then a left Exit 4B to 11th St SE/MLK Jr Ave.  Turn Left at light onto 11st/MLK JR. **\n\nI-295 North to Exit 4B to 11th St SE/MLK Jr Ave.  Turn Right at the light.  **\n\nFrom downtown DC: I-395 to I-695/SW Freeway, take Exit 1C 11th St SE. Turn Right onto 11th St **\n\n** At the  light turn Right onto Good Hope Road.  At the Stop Sign turn Left.  Turn Left at the next road way.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/nace/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/nace/index.htm",
            "weatherInfo": "Summers are generally hot and humid, with daytime highs frequently above 90 degrees Fahrenheit, high humidity, and scattered afternoon thunderstorms. \nWinters are generally cold, with nighttime lows frequently near freezing and occasional snowfall. \nWeather during spring and fall is generally moderate, but can change quickly.",
            "name": "National Capital Parks-East",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {},
                            "startDate": "2018-01-21",
                            "name": "Martin Luther King Jr",
                            "endDate": "2018-01-21"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-02-18",
                            "name": "President's Day",
                            "endDate": "2018-02-18"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-05-28",
                            "name": "Memorial Day",
                            "endDate": "2018-05-28"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-07-04",
                            "name": "July 4th",
                            "endDate": "2018-07-04"
                        },
                        {
                            "exceptionHours": {},
                            "startDate": "2018-09-03",
                            "name": "Labor Day",
                            "endDate": "2018-09-03"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-10-08",
                            "name": "Columbus Day",
                            "endDate": "2018-10-08"
                        },
                        {
                            "exceptionHours": {},
                            "startDate": "2018-11-11",
                            "name": "Veterans Day",
                            "endDate": "2018-11-11"
                        },
                        {
                            "exceptionHours": {},
                            "startDate": "2018-11-22",
                            "name": "Thanksgiving",
                            "endDate": "2018-11-22"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-12-25",
                            "name": "December 25",
                            "endDate": "2018-12-25"
                        }
                    ],
                    "description": "National Capital Parks-East is an administrative unit for multiple parks throughout the District of Columbia and Maryland.  The headquarters building is located in Anacostia Park. Please note the headquarters hours are separate from the park hours.\n\nThe headquarters is closed all federal holidays.",
                    "standardHours": {
                        "wednesday": "8:00AM - 4:00PM",
                        "monday": "8:00AM - 4:00PM",
                        "thursday": "8:00AM - 4:00PM",
                        "sunday": "Closed",
                        "tuesday": "8:00AM - 4:00PM",
                        "friday": "8:00AM - 4:00PM",
                        "saturday": "Closed"
                    },
                    "name": "National Capital Parks-East Headquarters"
                }
            ],
            "topics": [
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "41B1A0A3-11FF-4F55-9CB9-034A7E28B087",
                    "name": "Forests and Woodlands"
                },
                {
                    "id": "94262026-92F5-48E9-90EF-01CEAEFBA4FF",
                    "name": "Grasslands"
                },
                {
                    "id": "AEA4C5FD-F25C-4C3D-97FE-2767ED3EE682",
                    "name": "Meadows"
                },
                {
                    "id": "A155238F-0DD2-4610-9B87-05FCE1C59283",
                    "name": "River and Riparian"
                },
                {
                    "id": "3CDB67A9-1EAC-408D-88EC-F26FA35E90AF",
                    "name": "Schools and Education"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "846E5C56-E5AC-489C-B3BF-11F4C73F12C2",
                    "name": "Urban America"
                },
                {
                    "id": "596BAA6D-F66B-4348-8433-FEFF35A8005E",
                    "name": "Water Trails"
                },
                {
                    "id": "BA12B386-49EA-46B0-9121-FCACACC47538",
                    "name": "Watersheds"
                }
            ],
            "latLong": "lat:38.85301412, long:-76.98495791",
            "description": "Welcome to National Capital Parks-East. We invite you to journey to parks Beyond the Capital of Washington, D.C.  National Capital Parks-East is 13 park sites, parkways and statuary covering more than 8,000 acres of historic, cultural, and recreational parklands from Capitol Hill to the nearby Maryland suburbs",
            "images": [
                {
                    "credit": "NPS photo",
                    "altText": "The red barns and outbuildings at Oxon Hill Farm",
                    "title": "Oxon Cove Park",
                    "caption": "The Barnyard at Oxon Hill Farm",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82B782-1DD8-B71B-0B692035768B7064.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Photo of the outside of the Mary McLeod Bethune Council House",
                    "title": "Mary McLeod Bethune National Historic Site",
                    "caption": "Mary McLeod Bethune Council House in Washington D.C.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82B89F-1DD8-B71B-0B83D546B43BD349.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Cars driving on the Baltimore0Washington Parkway",
                    "title": "Baltimore-Washington Parkway",
                    "caption": "Baltimore-Washington Parkway is managed by National Capital Park-East",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82BA2D-1DD8-B71B-0BD77C70BF37D1E9.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Image of a three red and white water lilies.",
                    "title": "Kenilworth Aquatic Gardens",
                    "caption": "Water lilies that can be found at Kenilworth Aquatic Gardens",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82BB4D-1DD8-B71B-0B5854E45462FFF9.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Photo of Cedar Hill, home of Frederick Douglass",
                    "title": "Frederick Douglass National Historic Site",
                    "caption": "Cedar Hill, Frederick Douglass' Washington D.C. home.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82BC63-1DD8-B71B-0B2640B5624E7EBA.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Image of Still Creek running through the trees at Greenbelt Park.",
                    "title": "Greenbelt Park",
                    "caption": "Still Creek at Greenbelt Park",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82BD6B-1DD8-B71B-0B0E49552107D0B2.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Hundreds of audience member watching the Summer Theater program at Fort Dupont.",
                    "title": "Fort Dupont",
                    "caption": "Summer Theater is an annual event at Fort Dupont Park.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82BF0F-1DD8-B71B-0BE15EDE790BE1D9.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "A photo of the Urban Tree House.  The tree house is a wooden outline of the United States.",
                    "title": "Anacostia Park",
                    "caption": "The tree house is a wooden outline of the United States.  Used as an outdoor classroom.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82C0C7-1DD8-B71B-0BAE1553BC5451CD.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Photo of the parade ground inside the historic fort.",
                    "title": "Fort Washington Park",
                    "caption": "Fort Washington's parade ground facing the main entrance.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82C1F2-1DD8-B71B-0BF244B97CE6E952.jpg"
                },
                {
                    "credit": "NPS Photo/MJ Garcia",
                    "altText": "Photo of Accokeek Creek Site, as the fog rises in the early morning.",
                    "title": "Piscataway Park",
                    "caption": "Accokeek Creek Site is a part of Piscataway Park.  The boardwalk takes you over the wetlands.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82C316-1DD8-B71B-0BD2336D2323D7EC.jpg"
                }
            ],
            "designation": "",
            "parkCode": "nace",
            "addresses": [
                {
                    "postalCode": "20020",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "1900 Anacostia Drive SE",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "20020",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "1900 Anacostia Drive SE",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "BA3C1A1D-AA6A-49EB-9237-0222CEEE2670",
            "fullName": "National Capital Parks-East",
            "latitude": "38.85301412"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "4023761901",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "niobrara_nsr@nps.gov"
                    }
                ]
            },
            "states": "NE",
            "longitude": "-99.91870646",
            "activities": [
                {
                    "id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
                    "name": "Astronomy"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "21DB3AFC-8AAC-4665-BC1F-7198C0685983",
                    "name": "Canoeing"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "25559F45-F162-4B8B-BEC2-B341034A2AF4",
                    "name": "Hunting"
                },
                {
                    "id": "8386EEAF-985F-4DE8-9037-CCF91975AC94",
                    "name": "Hunting and Gathering"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "F353A9ED-4A08-456E-8DEC-E61974D0FEB6",
                    "name": "Kayaking"
                },
                {
                    "id": "4D224BCA-C127-408B-AC75-A51563C42411",
                    "name": "Paddling"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "0F2CC530-8DD9-4328-98AA-E514918AD206",
                    "name": "River Tubing"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "D37A0003-8317-4F04-8FB0-4CF0A272E195",
                    "name": "Stargazing"
                },
                {
                    "id": "4D06CEED-90C6-4B69-B264-32CC90B69BA6",
                    "name": "Tubing"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There are no fees to enter the Niobrara NSR. However, because the NPS does not own the land along the river, individual sites and private landowners may charge a fee.",
                    "title": "Niobrara NSR Entrance Fees"
                },
                {
                    "cost": "8.0000",
                    "description": "Smith Falls State Park, within the boundaries of the Niobrara NSR, charges a day use fee (per carload). Those with a Nebraska State Park Pass are not charged the day use fee. Individuals with out-of-state license plates will be charged slightly more. Federal passes are not valid for this entry fee. NOTE: no fee is charged for those visiting the waterfall from the river.",
                    "title": "Smith Falls State Park day use fee"
                }
            ],
            "directionsInfo": "Most visitors start their trip in the city of Valentine, Nebraska. Valentine is 76 miles south of I-90 (Murdo, SD Exit) on Hwy 83; or 130 miles north of I-80 (North Platte, NE Exit) on Hwy 83.\n\nThe nearest major airports are in Rapid City, SD (220 miles); Denver, CO (391 miles); and Omaha, NE (300 miles).",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/niob/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/niob/index.htm",
            "weatherInfo": "Summer (June-August): highs - low 80s to low 100s; lows - 50s to 60s, with occasional thunderstorms and associated strong winds. Moderate dry winds are common in the summer. 8.3\" is average summer rainfall.\n\nSpring (April/May) and Fall (September/October) have cooler temperatures: average highs 60-70s, average lows 30-40s with 7.3\" average rain/snowfall.",
            "name": "Niobrara",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Most of the river itself is open 24 hours a day, with the exception of the river that flows through Fort Niobrara National Wildlife Refuge. The river in that stretch is open from sunrise to sunset. Please use caution: because the NPS does not own the land, different sites and private businesses have their own hours. Please ensure that you are following individual landowner regulations when you launch, take out, or visit individual areas.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Floating and paddling standard hours"
                }
            ],
            "topics": [
                {
                    "id": "5BA15815-F78C-4E10-B9C1-FF5723881F7C",
                    "name": "Aquifers"
                },
                {
                    "id": "762170E5-0747-4836-B837-7F2547D3F733",
                    "name": "Coniferous Forests"
                },
                {
                    "id": "DE2F0F3C-C0C4-410F-90D3-97EEC33D348E",
                    "name": "Deciduous Forests"
                },
                {
                    "id": "41B1A0A3-11FF-4F55-9CB9-034A7E28B087",
                    "name": "Forests and Woodlands"
                },
                {
                    "id": "F6D3A52E-608F-47D6-96DF-1FD64122A2FC",
                    "name": "Fossils and Paleontology"
                },
                {
                    "id": "0E1A04CC-EB51-4F18-93D4-EC0B0B4EC1E3",
                    "name": "Freshwater Springs"
                },
                {
                    "id": "F0F97E32-2F29-41B4-AF98-9FBE8DAB36B1",
                    "name": "Geology"
                },
                {
                    "id": "4BE01DC5-52E6-4F18-8C9A-B22D65965F6D",
                    "name": "Groundwater"
                },
                {
                    "id": "A7359FC4-DAD8-45F5-AF15-7FF62F816ED3",
                    "name": "Night Sky"
                },
                {
                    "id": "A155238F-0DD2-4610-9B87-05FCE1C59283",
                    "name": "River and Riparian"
                },
                {
                    "id": "9C9FCBB6-360B-4743-8155-6F9341CBE01B",
                    "name": "Scenic Views"
                },
                {
                    "id": "78E4F4AC-AF97-435A-8C2C-7FB8D67516ED",
                    "name": "Unique Species"
                },
                {
                    "id": "5ED826E0-76BB-47BB-87DD-E081A72B0A04",
                    "name": "Waterfalls"
                }
            ],
            "latLong": "lat:42.79413083, long:-99.91870646",
            "description": "The 76 miles of the Niobrara National Scenic River winds through dramatic bluffs, incredible wildlife diversity, gorgeous waterfalls, world-class fossil resources, and plenty of floating fun for the whole family. Less than 1/4 of one percent of US rivers are designated under the National Wild & Scenic Rivers System. Come discover why this prairie river has earned this honor.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "Two people in one canoe paddle along the bluffs of the Niobrara NSR.",
                    "title": "Canoeing the Niobrara NSR",
                    "caption": "The Niobrara is a peaceful place to paddle during the week.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7C948A-1DD8-B71B-0B91A2ACA9AACDDF.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "A beautiful, if short, waterfall empties into the side of the Niobrara NSR.",
                    "title": "Berry Falls along the Niobrara NSR.",
                    "caption": "Berry Falls is one of over 200 waterfalls that visitors may see along the Niobrara National Scenic River's bluffs.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7C95AD-1DD8-B71B-0B9C962E8BA62E89.jpg"
                },
                {
                    "credit": "NPS Photo/Ryan Schmieder",
                    "altText": "A view from a canoe, with the photographer's feet resting on the bow, of the Niobrara NSR.",
                    "title": "Relaxing canoeing on the Niobrara NSR",
                    "caption": "Much of the Niobrara National Scenic River is easy paddling, suitable for novice canoers.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7C9873-1DD8-B71B-0B9C787CAE2BC09F.jpg"
                },
                {
                    "credit": "NPS Photo/Solveig Perrett",
                    "altText": "A paddler in a canoe goes through Class II Rapids on the Niobrara NSR.",
                    "title": "Egelhoffs Rapids on the Niobrara NSR",
                    "caption": "An experienced canoer takes on the Class II Egelhoffs Rapids along the Niobrara National Scenic River.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7C9A47-1DD8-B71B-0BFF627C036B27B1.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Yellows, oranges, and greens dominate the fall colors along the Niobrara NSR.",
                    "title": "Fall colors along the Niobrara NSR",
                    "caption": "Autumn is a perfect time to enjoy the beauty of the Niobrara National Scenic River, from the river or the banks.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7C9E7E-1DD8-B71B-0BA958173B164D34.jpg"
                },
                {
                    "credit": "NPS Photo/Ryan Schmieder",
                    "altText": "A man takes a photo of a meandering river from an overlook.",
                    "title": "Taking photos along the Niobrara NSR",
                    "caption": "Parts of the river are shallow and meandering, making beautiful backdrops for people to take photographs.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7CA02C-1DD8-B71B-0BCEA25352ED688A.jpg"
                },
                {
                    "credit": "NPS Photo/Solveig Perrett",
                    "altText": "Many people on tubes float down the Niobrara.",
                    "title": "Tubers congregate at Smith Falls State Park",
                    "caption": "On Saturdays, the Niobrara National Scenic River is a great place to meet hundreds of other tubers.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7CA6F5-1DD8-B71B-0B9425F70CB40B05.jpg"
                }
            ],
            "designation": "National Scenic River",
            "parkCode": "niob",
            "addresses": [
                {
                    "postalCode": "69201",
                    "city": "Valentine",
                    "stateCode": "NE",
                    "line1": "214 W US Highway 20",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "69201",
                    "city": "Valentine",
                    "stateCode": "NE",
                    "line1": "214 W US Highway 20",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "406594CB-1532-45CD-82EA-0C03FD2F0422",
            "fullName": "Niobrara National Scenic River",
            "latitude": "42.79413083"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "5203876849",
                        "description": "",
                        "extension": "7302",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "orpi_information@nps.gov"
                    }
                ]
            },
            "states": "AZ",
            "longitude": "-112.8573314",
            "activities": [
                {
                    "id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
                    "name": "Astronomy"
                },
                {
                    "id": "5F723BAD-7359-48FC-98FA-631592256E35",
                    "name": "Auto and ATV"
                },
                {
                    "id": "4A58AF13-E8FB-4530-B41A-97DF0B0C77B7",
                    "name": "Backcountry Camping"
                },
                {
                    "id": "7C37B79B-D02D-49EB-9020-3DB8299B748A",
                    "name": "Backcountry Hiking"
                },
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA",
                    "name": "Car or Front Country Camping"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "7CFF5F03-5ECC-4F5A-8572-75D1F0976C0C",
                    "name": "Group Camping"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "788C7572-5425-49EF-A0BF-5A0DF93F7542",
                    "name": "Horse Camping (see also camping)"
                },
                {
                    "id": "80229F2D-972E-40A8-8860-232551CC30D6",
                    "name": "Horse Camping (see also Horse/Stock Use)"
                },
                {
                    "id": "0307955A-B65C-4CE4-A780-EB36BAAADF0B",
                    "name": "Horse Trekking"
                },
                {
                    "id": "1886DA47-0AEC-4568-B9C2-8E9BC316AAAC",
                    "name": "Horseback Riding"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "EADFAEEB-4D57-49DB-9C58-BF8DC241C24F",
                    "name": "Off-Trail Permitted Hiking"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "8D778629-F603-4C50-A121-6F4BB2FE2C4B",
                    "name": "Road Biking"
                },
                {
                    "id": "C5C5971C-E325-4CEB-8C81-EE49A881DF17",
                    "name": "RV Camping"
                },
                {
                    "id": "0B4A5320-216D-451A-9990-626E1D5ACE28",
                    "name": "Scenic Driving"
                },
                {
                    "id": "C7D5A145-F8EB-4C37-9E92-2F6C6206B196",
                    "name": "Self-Guided Tours - Auto"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "D37A0003-8317-4F04-8FB0-4CF0A272E195",
                    "name": "Stargazing"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "12.0000",
                    "description": "7 day entrance pass for the vehicle and all occupants",
                    "title": "Organ Pipe Cactus Entrance Fee"
                },
                {
                    "cost": "16.0000",
                    "description": "Per-night charge for one campsite.",
                    "title": "Twin Peaks Campground Fee"
                },
                {
                    "cost": "10.0000",
                    "description": "Per night per campsite",
                    "title": "Alamo Canyon Primitive Campground"
                },
                {
                    "cost": "5.0000",
                    "description": "Per trip",
                    "title": "Backcountry Camping"
                }
            ],
            "directionsInfo": "The Kris Eggle Visitor Center is located on Highway 85, approximately 25 miles south of Why, AZ.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/orpi/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/orpi/index.htm",
            "weatherInfo": "Summer months are hot, with temperatures exceeding 100F.  Winter months are milder, with temperatures in the 70s, with overnight lows in the 40s.",
            "name": "Organ Pipe Cactus",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Park road and trails are open 24 hours.  The Kris Eggle Visitor Center is currently closed until further notice.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Organ Pipe Cactus National Monument"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "72E87FCE-B48F-48E8-8761-4849A79736AF",
                    "name": "Arches"
                },
                {
                    "id": "E06F3C94-AC8A-4B1C-A247-8EBA8910D5EE",
                    "name": "Astronomy"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "2539614A-9646-446E-8251-34D3AAE068FA",
                    "name": "Cats (wild)"
                },
                {
                    "id": "489D6333-FD72-44DF-83B0-3D4412DD0A75",
                    "name": "Endangered"
                },
                {
                    "id": "12EA2B56-17EC-410A-A10D-BFBA87A0669B",
                    "name": "Explorers and Expeditions"
                },
                {
                    "id": "1F833C99-A75D-4F9E-9256-B96523485466",
                    "name": "Farming and  Agriculture"
                },
                {
                    "id": "0E1A04CC-EB51-4F18-93D4-EC0B0B4EC1E3",
                    "name": "Freshwater Springs"
                },
                {
                    "id": "4BE01DC5-52E6-4F18-8C9A-B22D65965F6D",
                    "name": "Groundwater"
                },
                {
                    "id": "101F4D51-F99D-45A6-BBB6-CD481E5FACED",
                    "name": "Mountains"
                },
                {
                    "id": "A7359FC4-DAD8-45F5-AF15-7FF62F816ED3",
                    "name": "Night Sky"
                },
                {
                    "id": "E4E84C87-6737-4C37-9157-5962648A35F2",
                    "name": "Ranches"
                },
                {
                    "id": "996BEDAE-CB23-4003-B008-3A1F46A72263",
                    "name": "Rare"
                },
                {
                    "id": "4244F489-6813-4B7A-9D0C-20CE098C8FFF",
                    "name": "Rock Landscapes and Features"
                },
                {
                    "id": "9C9FCBB6-360B-4743-8155-6F9341CBE01B",
                    "name": "Scenic Views"
                },
                {
                    "id": "3CDB67A9-1EAC-408D-88EC-F26FA35E90AF",
                    "name": "Schools and Education"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "78E4F4AC-AF97-435A-8C2C-7FB8D67516ED",
                    "name": "Unique Species"
                },
                {
                    "id": "B85866E2-0897-4000-9040-605CA335804F",
                    "name": "Wilderness"
                }
            ],
            "latLong": "lat:32.03585543, long:-112.8573314",
            "description": "Look closely. Look again. The sights and sounds of Organ Pipe Cactus National Monument, an International Biosphere Reserve, reveal a thriving community of plants and animals. Human stories echo throughout this desert preserve, chronicling thousands of years of desert living. A scenic drive, wilderness hike or a night of camping will expose you to a living desert that thrives.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "sun setting on a green organ pipe cactus",
                    "title": "Organ Pipe Cactus",
                    "caption": "Experience the only place in the US where the Organ Pipe Cactus naturally grows",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7EB5D4-1DD8-B71B-0B8593382BE0A36F.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "View through the valley, flanked by Ajo Mountains",
                    "title": "Scenic view through the Ajo Mountains",
                    "caption": "Capture amazing views from the scenic drives",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7EB7A6-1DD8-B71B-0B613E597F565252.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "a green desert environment with cholla cactus glowing in the light",
                    "title": "Cholla Cactus in the Light",
                    "caption": "Experience the rich assemblage of cacti at Organ Pipe Cactus.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7EB8FB-1DD8-B71B-0B7EEDF1D22FF051.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Jagged Bates Mountains with shadows and clouds",
                    "title": "View of the Bates Mountains",
                    "caption": "Watch sun and shadow interplay across the jagged mountains",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7EBA20-1DD8-B71B-0B28B7AA1D8DD67D.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Yellow poppies on the green desert floor with cacti in the background",
                    "title": "Desert Wildflowers",
                    "caption": "The desert awakens in the Spring with vibrant wildflowers",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7EBB5B-1DD8-B71B-0BBB25862E69B7A0.jpg"
                }
            ],
            "designation": "National Monument",
            "parkCode": "orpi",
            "addresses": [
                {
                    "postalCode": "85321",
                    "city": "Ajo",
                    "stateCode": "AZ",
                    "line1": "10 Organ Pipe Drive",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "85321",
                    "city": "Ajo",
                    "stateCode": "AZ",
                    "line1": "10 Organ Pipe Drive",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "8A4FA0D4-A3BE-4AE2-8303-1936D9BA1E29",
            "fullName": "Organ Pipe Cactus National Monument",
            "latitude": "32.03585543"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "5733234236",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "5733238010",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "ozar_interpretation@nps.gov"
                    }
                ]
            },
            "states": "MO",
            "longitude": "-91.25709817",
            "activities": [
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "5F723BAD-7359-48FC-98FA-631592256E35",
                    "name": "Auto and ATV"
                },
                {
                    "id": "4A58AF13-E8FB-4530-B41A-97DF0B0C77B7",
                    "name": "Backcountry Camping"
                },
                {
                    "id": "7C37B79B-D02D-49EB-9020-3DB8299B748A",
                    "name": "Backcountry Hiking"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "907E8125-15E4-483C-8EAD-B9FA1E85C6F8",
                    "name": "Canoe or Kayak Camping"
                },
                {
                    "id": "256543C7-4322-48B3-8978-765E89AA9431",
                    "name": "Canoe or Kayak Camping"
                },
                {
                    "id": "21DB3AFC-8AAC-4665-BC1F-7198C0685983",
                    "name": "Canoeing"
                },
                {
                    "id": "9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA",
                    "name": "Car or Front Country Camping"
                },
                {
                    "id": "BA316D0F-92AE-4E00-8C80-DBD605DC58C3",
                    "name": "Caving"
                },
                {
                    "id": "C59E231D-55FC-4B37-BC5B-FF76383951B5",
                    "name": "Craft Demonstrations"
                },
                {
                    "id": "FAED7F97-3474-4C21-AB42-FB0768A2F826",
                    "name": "Cultural Demonstrations"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "25FB188F-5AAD-459A-9092-28A9801709FF",
                    "name": "Freshwater Fishing"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "8286295F-0932-4491-9350-280C9848E6AB",
                    "name": "Gathering and Foraging"
                },
                {
                    "id": "7CFF5F03-5ECC-4F5A-8572-75D1F0976C0C",
                    "name": "Group Camping"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "80229F2D-972E-40A8-8860-232551CC30D6",
                    "name": "Horse Camping (see also Horse/Stock Use)"
                },
                {
                    "id": "25559F45-F162-4B8B-BEC2-B341034A2AF4",
                    "name": "Hunting"
                },
                {
                    "id": "8386EEAF-985F-4DE8-9037-CCF91975AC94",
                    "name": "Hunting and Gathering"
                },
                {
                    "id": "F353A9ED-4A08-456E-8DEC-E61974D0FEB6",
                    "name": "Kayaking"
                },
                {
                    "id": "C0FFC3D5-0E74-4B6F-B69D-6F95B78906CE",
                    "name": "Live Music"
                },
                {
                    "id": "4D224BCA-C127-408B-AC75-A51563C42411",
                    "name": "Paddling"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "0F2CC530-8DD9-4328-98AA-E514918AD206",
                    "name": "River Tubing"
                },
                {
                    "id": "C5C5971C-E325-4CEB-8C81-EE49A881DF17",
                    "name": "RV Camping"
                },
                {
                    "id": "0B4A5320-216D-451A-9990-626E1D5ACE28",
                    "name": "Scenic Driving"
                },
                {
                    "id": "C7D5A145-F8EB-4C37-9E92-2F6C6206B196",
                    "name": "Self-Guided Tours - Auto"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "B3EF12AF-D951-419E-BD3C-6B36CBCC1E16",
                    "name": "Stand Up Paddleboarding"
                },
                {
                    "id": "4D06CEED-90C6-4B69-B264-32CC90B69BA6",
                    "name": "Tubing"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no entrance fee at Ozark National Scenic Riverways.",
                    "title": "Park entrance fee"
                }
            ],
            "directionsInfo": "The Headquarters for Ozark National Scenic Riverways is located at 404 Watercress Drive in Van Buren, Missouri.  It's located at the corner of Watercress Drive and Main Street, across the street from the Van Buren Public School complex.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/ozar/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/ozar/index.htm",
            "weatherInfo": "Ozark National Scenic Riverways is located in southeastern Missouri.  Summer temperatures generally range from 75-100 degrees with high humidity.  Winter temperatures generally range from 0-50 degrees with periods of intermittent freezing and snow.",
            "name": "Ozark",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The park grounds are open daily, 24-hours per day.  Campgrounds are restricted to campers only from 10:00 p.m. to 6:00 a.m. Campgrounds are currently closed due to COVID-19",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Ozark National Scenic Riverways"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "2539614A-9646-446E-8251-34D3AAE068FA",
                    "name": "Cats (wild)"
                },
                {
                    "id": "E25F3456-43ED-45DD-93BC-057F9B944F7A",
                    "name": "Caves, Caverns and Karst"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "489D6333-FD72-44DF-83B0-3D4412DD0A75",
                    "name": "Endangered"
                },
                {
                    "id": "04A39AB8-DD02-432F-AE5F-BA1267D41A0D",
                    "name": "Fire"
                },
                {
                    "id": "F12B6BDB-2FE9-4961-9DC2-59FEBC0990CD",
                    "name": "Great Depression"
                },
                {
                    "id": "0B575E33-B68F-4F3D-998E-B03284606CF3",
                    "name": "Industry"
                },
                {
                    "id": "FE2FF71D-E850-460E-A727-27B292BF1603",
                    "name": "Logging and Timber Cutting"
                },
                {
                    "id": "BD81BF37-14B1-408A-903F-2BF52C8C7927",
                    "name": "Mills"
                },
                {
                    "id": "996BEDAE-CB23-4003-B008-3A1F46A72263",
                    "name": "Rare"
                },
                {
                    "id": "A155238F-0DD2-4610-9B87-05FCE1C59283",
                    "name": "River and Riparian"
                },
                {
                    "id": "4244F489-6813-4B7A-9D0C-20CE098C8FFF",
                    "name": "Rock Landscapes and Features"
                },
                {
                    "id": "9C9FCBB6-360B-4743-8155-6F9341CBE01B",
                    "name": "Scenic Views"
                },
                {
                    "id": "78E4F4AC-AF97-435A-8C2C-7FB8D67516ED",
                    "name": "Unique Species"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "B85866E2-0897-4000-9040-605CA335804F",
                    "name": "Wilderness"
                }
            ],
            "latLong": "lat:37.13968894, long:-91.25709817",
            "description": "Ozark National Scenic Riverways is the first national park area to protect a river system. The Current and Jacks Fork Rivers are two of the finest floating rivers you'll find anywhere. Spring-fed, cold and clear they are a delight to canoe, swim, boat or fish. Besides these two famous rivers, the park is home to hundreds of freshwater springs, caves, trails and historic sites such as Alley Mill.",
            "images": [
                {
                    "credit": "NPS/Bill O'Donnell",
                    "altText": "Alley Spring in the winter.",
                    "title": "Alley Spring in the winter",
                    "caption": "Alley Spring Roller Mill is a popular destination year round.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C8186A2-1DD8-B71B-0B5649945E1AD39C.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Big Spring near Van Buren, Missouri",
                    "title": "Big Spring",
                    "caption": "Big Spring produces more than 250 million gallons of water per day.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C81882B-1DD8-B71B-0BB6270ECBB772DC.jpg"
                },
                {
                    "credit": "NPS Photo/JoAnn Miller",
                    "altText": "Prairie Hollow Gorge",
                    "title": "Prairie Hollow Gorge",
                    "caption": "Prairie Hollow Gorge is located near the Two Rivers junction, off State Route V.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C818988-1DD8-B71B-0BF4BE0D63DA6DF9.jpg"
                },
                {
                    "credit": "NPS Photo/JoAnn Miller",
                    "altText": "Current River near Pulltite",
                    "title": "Current River near Pulltite",
                    "caption": "The clear water of the Current River is perfect for floating.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C818ACD-1DD8-B71B-0B91F9B923E1E7A7.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Rocky Falls",
                    "title": "Rocky Falls",
                    "caption": "Rocky Falls is a popular picnic area and swimming hole located near the center of Ozark National Scenic Riverways.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C818C34-1DD8-B71B-0B06A21719A1D697.jpg"
                },
                {
                    "credit": "NPS Photo/Bill O'Donnell",
                    "altText": "Round Spring",
                    "title": "Round Spring",
                    "caption": "Round Spring maintains a deep blue hue, like many of the other Ozark springs.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C818D8D-1DD8-B71B-0B9CB97DB6FC8FE6.jpg"
                }
            ],
            "designation": "National Scenic Riverways",
            "parkCode": "ozar",
            "addresses": [
                {
                    "postalCode": "63965",
                    "city": "Van Buren",
                    "stateCode": "MO",
                    "line1": "P.O. Box 490",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "63965",
                    "city": "Van Buren",
                    "stateCode": "MO",
                    "line1": "404 Watercress Drive",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "CEC2A157-CDDC-4F11-BBE5-0AA2CEA35ADB",
            "fullName": "Ozark National Scenic Riverways",
            "latitude": "37.13968894"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "4356883200",
                        "description": "Phones are answered Monday - Friday 7:45 a.m. - 5 p.m., and Saturdays from 10 a.m. - 3 p.m. The center is closed on Sundays as well as all federal holiday with the exceptions of Memorial Day and Labor Day.",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "4356883388fax",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "This is the email account to use, not Lake Mead.",
                        "emailAddress": "para_interpretation@nps.gov"
                    }
                ]
            },
            "states": "AZ",
            "longitude": "-113.6682797",
            "activities": [],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "No entrance fees or permits are required for general public activities except for winter access to the Kelly Point Road. \n\nPermits are required for commercial activities, either a Commercial Use Authorization on NPS lands or a Special Recreation Permit on BLM lands. Other activities such as hunting licenses and ORV vehicle licensing are subject to Arizona state regulations.",
                    "title": "Entrance Fees"
                }
            ],
            "directionsInfo": "The monument is located in the northwest corner of Arizona, bordering Nevada to the west and near the southern border of Utah. There are no paved roads or visitor services within the monument's million-plus acres. Visitors should be prepared for travel on rugged dirt roads. Traveling with an appropriate high clearance vehicle equipped with all-terrain tires. The spare tire should also be all-terrain rated. The monument has entry roads from Nevada, Utah and Arizona.",
            "entrancePasses": [
                {
                    "cost": "0.0000",
                    "description": "No permits or fees are required for general visitor activities. Visits to this monument require special planning and awareness of potential hazards such as unmarked rugged roads, venomous animals, extreme heat, and flash floods. Bring plenty of water, food, extra gasoline and at least two spare tires. High clearance vehicles are recommended.",
                    "title": "Passes"
                }
            ],
            "directionsUrl": "http://home.nps.gov/para/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/para/index.htm",
            "weatherInfo": "Parashant is split between low elevation Mojave Desert on the west side and high elevation pinyon/juniper/ponderosa highlands on the east side. Expect sun on average 310 days per year. The summer months of June through September are very hot on the west side with highs above 100°F daily (80°F+ at night) below 2,500 feet. The high elevation east side is ~15°F cooler. Expect heavy afternoon monsoon storms June - September. Roads often stay muddy/icy above 5,500 feet December - February.",
            "name": "Parashant",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The monument is open 24 hours a day 365 days of the year, but there are no facilities or visitor contact areas within the boundaries.",
                    "standardHours": {
                        "wednesday": "7:45AM - 5:00PM",
                        "monday": "7:45AM - 5:00PM",
                        "thursday": "7:45AM - 5:00PM",
                        "sunday": "10:00AM - 3:00PM",
                        "tuesday": "7:45AM - 5:00AM",
                        "friday": "7:45AM - 5:00PM",
                        "saturday": "10:00AM - 3:00PM"
                    },
                    "name": "Operating Hours & Seasons"
                }
            ],
            "topics": [],
            "latLong": "lat:36.41535465, long:-113.6682797",
            "description": "Take a lonely and rocky two-track road in a 4x4 to the edge of the Grand Wash Cliffs. Find a stunning solitary vista deep into the Grand Canyon. Relax in the shade of ponderosas at Mt. Trumbull. Touch ancient waters at Pakoon Springs in one of the driest places in the world. Parashant is remote. There are no crowds here. Be equipped to leave pavement, cell service, and the 21st century behind.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "Red rock formations",
                    "title": "Grand Canyon-Parashant National Monument",
                    "caption": "Red rock formations jut up from the canyon floor.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C87545E-1DD8-B71B-0B0A6C59DB91B3CC.jpg"
                }
            ],
            "designation": "National Monument",
            "parkCode": "para",
            "addresses": [
                {
                    "postalCode": "84790",
                    "city": "St. George",
                    "stateCode": "UT",
                    "line1": "345 East Riverside Drive",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "84790",
                    "city": "St. George",
                    "stateCode": "UT",
                    "line1": "345 East Riverside Drive",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "F614E6C5-1283-431A-AF44-15FC849D65FE",
            "fullName": "Parashant National Monument",
            "latitude": "36.41535465"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "8047323531",
                        "description": "",
                        "extension": "0",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "8047320835",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "pete_interpretation@nps.gov"
                    }
                ]
            },
            "states": "VA",
            "longitude": "-77.47594865",
            "activities": [
                {
                    "id": "5F723BAD-7359-48FC-98FA-631592256E35",
                    "name": "Auto and ATV"
                },
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "0B4A5320-216D-451A-9990-626E1D5ACE28",
                    "name": "Scenic Driving"
                },
                {
                    "id": "C7D5A145-F8EB-4C37-9E92-2F6C6206B196",
                    "name": "Self-Guided Tours - Auto"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no fee to enter Petersburg National Battlefield and passes are not available for purchase.",
                    "title": "Petersburg National Battlefield has no entrance fees"
                }
            ],
            "directionsInfo": "The Eastern Front (Main) Visitor Center is located approximately 2.5 miles east of Rt. 95 off of Route 36 in Petersburg. If travelling north on Rt. 95, take exit 50D and follow signs to Wythe Street. Once on Wythe Street, travel 2.5 miles east to entrance of Battlefield. If travelling south on Rt. 95, take Exit 52 (Wythe Street). Again, travel about 2.5 miles to entrance.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/pete/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/pete/index.htm",
            "weatherInfo": "Winters are usually cool with temperatures averaging in the 40s. \nSpring and fall are mild.\nSummer can bring very hot and humid weather.",
            "name": "Petersburg",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {},
                            "startDate": "2020-03-17",
                            "name": "Closed due to COVID-19",
                            "endDate": "2020-04-30"
                        }
                    ],
                    "description": "The Eastern Front Unit includes our main visitor center and a four mile, 7-stop tour road which includes the Fort Stedman and Crater battlefields. The Visitor Center is open from 9:00-5:00 daily except for Thanksgiving, Christmas, and New Years Day when the park is closed.",
                    "standardHours": {
                        "wednesday": "9:00AM - Sunset",
                        "monday": "9:00AM - Sunset",
                        "thursday": "9:00AM - Sunset",
                        "sunday": "9:00AM - Sunset",
                        "tuesday": "9:00AM - Sunset",
                        "friday": "9:00AM - Sunset",
                        "saturday": "9:00AM - Sunset"
                    },
                    "name": "Petersburg National Battlefield - Eastern Front Unit"
                },
                {
                    "exceptions": [
                        {
                            "exceptionHours": {},
                            "startDate": "2020-03-17",
                            "name": "Visitor Contact Station Closed Due to COVID-19",
                            "endDate": "2020-04-30"
                        }
                    ],
                    "description": "The Visitor Contact Station is open 9:00-5:00 every day from March - November. Although the contact station is closed from December - February, the grounds, with wayside exhibits, remain open during daylight hours.",
                    "standardHours": {
                        "wednesday": "9:00AM - Sunset",
                        "monday": "9:00AM - Sunset",
                        "thursday": "9:00AM - Sunset",
                        "sunday": "9:00AM - Sunset",
                        "tuesday": "9:00AM - Sunset",
                        "friday": "9:00AM - Sunset",
                        "saturday": "9:00AM - Sunset"
                    },
                    "name": "Petersburg National Battlefield - General Grant's Headquarters Unit"
                },
                {
                    "exceptions": [
                        {
                            "exceptionHours": {},
                            "startDate": "2020-03-17",
                            "name": "Closed Due to COVID-19",
                            "endDate": "2020-04-30"
                        }
                    ],
                    "description": "The Visitor Contact Station at Five Forks is open from 9:00 - 5:00 pm March - November when staffing allows. The station is closed from December through February, however, the driving tour and trails remain open year round.",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "Petersburg National Battlefield - Five Forks Battlefield Unit"
                }
            ],
            "topics": [
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "607D41B0-F830-4C07-A557-BCEF880A3929",
                    "name": "Burial, Cemetery and Gravesite"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "F7DAD83F-3F1D-4DB0-98A2-C9DE0CFADA0A",
                    "name": "Explosions"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "570E8E93-3A49-45FB-B11A-F2F984EAC862",
                    "name": "National Cemetery"
                },
                {
                    "id": "A160B3D9-1603-4D89-B82F-21FCAF9EEE3B",
                    "name": "Tragic Events"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                }
            ],
            "latLong": "lat:37.19109957, long:-77.47594865",
            "description": "Nine and a half months, 70,000 casualties, the suffering of civilians, thousands of U. S. Colored Troops fighting for the freedom of their race, and the decline of Gen. Robert E. Lee's Army of No. Virginia all describe the Siege of Petersburg. It was here Gen. Ulysses S. Grant cut off all of Petersburg's supply lines ensuring the fall of Richmond on April 3, 1865. Six days later, Lee surrendered.",
            "images": [
                {
                    "credit": "Library of Congress",
                    "altText": "Confederate Battery V after the Union Army captured it in June, 1864.",
                    "title": "Battery V",
                    "caption": "Confederate Battery V was stormed on June 15, 1864 during the Union Army's opening attack on Petersburg.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C857D8F-1DD8-B71B-0BD04EB400C7FB91.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Plantation home prior to the War. U.S. Quartermaster Headquarters during the Siege.",
                    "title": "Appomattox Plantation (Eppes Home)",
                    "caption": "This home and the grounds surrounding it were used by General Grant and his staff during the Siege of Petersburg.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C857F09-1DD8-B71B-0B54C972E552D1CB.jpg"
                },
                {
                    "credit": "NPS Photo / Aaron Rowland",
                    "altText": "Snow covered cannon overlooking the Crater Battlefield",
                    "title": "Snow Covered Cannon",
                    "caption": "Soldiers spent months in the trenches around Petersburg, including snowy winter mornings.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C858037-1DD8-B71B-0B879E0A0E39C0E8.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Exhibits, video, and artifacts inhabit this visitor contact station opened in 2009.",
                    "title": "Five Forks Visitor Contact Station",
                    "caption": "The Battle of Five Forks was nicknames the \"Waterloo of the Confederacy\" by Confederate General Thomas Munford.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85818A-1DD8-B71B-0B7C19E295CC7668.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Fire! Reenactors fire cannon during 150th Anniv. program.",
                    "title": "Artillery Demonstration",
                    "caption": "Thousands of visitors learn the steps involved in firing off a Civil War cannon by members of the Pegram's Battery Reenactment Unit.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C8582BD-1DD8-B71B-0B0763F341D1BF0F.jpg"
                }
            ],
            "designation": "National Battlefield",
            "parkCode": "pete",
            "addresses": [
                {
                    "postalCode": "23803",
                    "city": "Petersburg",
                    "stateCode": "VA",
                    "line1": "Petersburg National Battlefield",
                    "type": "Physical",
                    "line3": "5001 Siege Road",
                    "line2": "Eastern Front Unit Visitor Center"
                },
                {
                    "postalCode": "23803",
                    "city": "Petersburg",
                    "stateCode": "VA",
                    "line1": "Petersburg National Battlefield Administration Office",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "1539 Hickory Hill Road"
                }
            ],
            "id": "16B99840-35CB-4D14-BB83-136C371EFD2E",
            "fullName": "Petersburg National Battlefield",
            "latitude": "37.19109957"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "5169224788",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "5169224792",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "sahi_information@nps.gov"
                    }
                ]
            },
            "states": "NY",
            "longitude": "-73.49686438",
            "activities": [
                {
                    "id": "19A59EFB-DF4B-4049-9EE1-A784CAC9C70C",
                    "name": "Arts and Crafts"
                },
                {
                    "id": "09DF0950-D319-4557-A57E-04CD2F63FF42",
                    "name": "Arts and Culture"
                },
                {
                    "id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
                    "name": "Astronomy"
                },
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "31F88DA6-696F-441F-89CF-D7B1415C4CB9",
                    "name": "Citizen Science"
                },
                {
                    "id": "C11D3746-5063-4BD0-B245-7178D1AD866C",
                    "name": "Compass and GPS"
                },
                {
                    "id": "C59E231D-55FC-4B37-BC5B-FF76383951B5",
                    "name": "Craft Demonstrations"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "CA3641A0-FADC-497F-B036-3FE426D0DDCC",
                    "name": "Geocaching"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A",
                    "name": "Hands-On"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C0FFC3D5-0E74-4B6F-B69D-6F95B78906CE",
                    "name": "Live Music"
                },
                {
                    "id": "B204DE60-5A24-43DD-8902-C81625A09A74",
                    "name": "Living History"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "A8650547-1A30-4222-86C3-A7660A829670",
                    "name": "Reenactments"
                },
                {
                    "id": "8D778629-F603-4C50-A121-6F4BB2FE2C4B",
                    "name": "Road Biking"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "Entry to and parking at the grounds is free between sunrise and sunset. This includes the historic farm and orchard and the nature trail to the beach on Cold Spring Harbor.",
                    "title": "Park Entrance"
                },
                {
                    "cost": "10.0000",
                    "description": "Individual tour tickets are required to enter the Theodore Roosevelt Home. Tours are every half-hour from 10 a.m. to 4 p.m. and are approximately 45 minutes to one hour in length. Children 15 years old and under are free. Visitors 62 years of age and older may be eligible for a Senior Pass that covers them and up to three other people. A limited number of reservations can be made at recreation.gov or by calling 1-877-444-6777.",
                    "title": "Theodore Roosevelt Home"
                },
                {
                    "cost": "0.0000",
                    "description": "The Old Orchard Museum is housed in the historic home of Theodore Roosevelt's oldest son Ted and his wife Eleanor Alexander-Roosevelt. Admission is free during regular business hours.",
                    "title": "Old Orchard Museum"
                }
            ],
            "directionsInfo": "Take either the Northern State Parkway to Exit 35N or the Long Island Expressway (I-495) to Exit 41N. At those exits, take Route 106 North for approximately 6 miles to downtown Oyster Bay. Turn right onto East Main Street (at Nobman's Hardware Store) and travel 2 miles on East Main Street/Cove Road. Turn left onto Cove Neck Road and drive 1.5 miles to Sagamore Hill National Historic Site.",
            "entrancePasses": [
                {
                    "cost": "40.0000",
                    "description": "The Sagamore Hill Annual Pass covers the cost of tour tickets for the bearer and three others for an unlimited number of visits during one year.",
                    "title": "Sagamore Hill Annual Pass"
                }
            ],
            "directionsUrl": "http://www.nps.gov/sahi/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/sahi/index.htm",
            "weatherInfo": "The Atlantic Ocean and Long Island Sound moderates the climate of Long Island and Sagamore Hill.\n\nSpring: Highs average between 50 F and 70 F. Snow in early March becomes rain by April.\nSummer: Average highs range between 70 F and the upper 80s F. Summers are drier but thunderstorms are possible.\nFall: Highs are from the mid-50s F to the mid-70s F. Fall is the driest season, but showers are possible.\nWinter: Highs are around 40 F. Snow showers are common; the largest accumulations come in February.",
            "name": "Sagamore Hill",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The park grounds are open every day from sunrise to sunset.",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "Park Grounds"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "416ED6B1-AA0E-4CF0-B311-36D92447BE77",
                    "name": "Assassinations"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "607D41B0-F830-4C07-A557-BCEF880A3929",
                    "name": "Burial, Cemetery and Gravesite"
                },
                {
                    "id": "69790851-A62A-4920-AA3E-E61406FFC27D",
                    "name": "Cavalry"
                },
                {
                    "id": "46FC5CBD-9AD5-48F1-B4DA-1357031B1D2E",
                    "name": "Coasts, Islands and Atolls"
                },
                {
                    "id": "4C0EBDE7-EB73-4252-84D9-0650974EC3E5",
                    "name": "Conservation Movement"
                },
                {
                    "id": "DE2F0F3C-C0C4-410F-90D3-97EEC33D348E",
                    "name": "Deciduous Forests"
                },
                {
                    "id": "F79C1242-80FF-40F0-A0C1-5FFCBA172EC0",
                    "name": "Estuaries and Mangroves"
                },
                {
                    "id": "1F833C99-A75D-4F9E-9256-B96523485466",
                    "name": "Farming and  Agriculture"
                },
                {
                    "id": "41B1A0A3-11FF-4F55-9CB9-034A7E28B087",
                    "name": "Forests and Woodlands"
                },
                {
                    "id": "FD0BA21A-5F69-4688-9D4B-856DA242DC78",
                    "name": "Marshes"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "F669BC40-BDC4-41C0-9ACE-B2CD25373045",
                    "name": "Presidents"
                },
                {
                    "id": "40C0866A-3890-41A4-84CA-5935DEE181AE",
                    "name": "Social Movements"
                },
                {
                    "id": "A28F8700-794E-4BA3-A8D7-7D75D53A4B17",
                    "name": "Spanish-American War"
                },
                {
                    "id": "A160B3D9-1603-4D89-B82F-21FCAF9EEE3B",
                    "name": "Tragic Events"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "846E5C56-E5AC-489C-B3BF-11F4C73F12C2",
                    "name": "Urban America"
                },
                {
                    "id": "97CCB419-196C-4B95-BB3A-621458F78415",
                    "name": "US Army"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "1365C347-952C-475A-B755-731DD523C195",
                    "name": "Wetlands"
                },
                {
                    "id": "4EC51024-F0D9-479D-AF3F-344CC0153D2E",
                    "name": "World War I"
                }
            ],
            "latLong": "lat:40.88579128, long:-73.49686438",
            "description": "Sagamore Hill was the home of Theodore Roosevelt, 26th President of the United States, from 1885 until his death in 1919. During Roosevelt's time in office, his \"Summer White House\" was the focus of international attention. Explore 83 acres of natural surroundings and historic buildings and become inspired by the legacy of one of America's most popular presidents.",
            "images": [
                {
                    "credit": "NPS/John Waite",
                    "altText": "Theodore Roosevelt House with state historical society signage",
                    "title": "Theodore Roosevelt House",
                    "caption": "Theodore Roosevelt House at Sagamore Hill",
                    "url": "https://www.nps.gov/common/uploads/structured_data/70B0FFC7-1DD8-B71B-0B09465A0A0048AD.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "A nature trail to Cold Spring Harbor passes through woods.",
                    "title": "Nature Trail",
                    "caption": "Walk the grounds and explore the place the Roosevelt family called home.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/6D6F4EEA-1DD8-B71B-0BEF1F4ABBDC5190.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Papers, pens, and an inkwell arranged on a wooden desk.",
                    "title": "Roosevelt's Library",
                    "caption": "World War I-era papers on Theodore Roosevelt's library desk",
                    "url": "https://www.nps.gov/common/uploads/structured_data/7096D876-1DD8-B71B-0BC351466330FE65.jpg"
                }
            ],
            "designation": "National Historic Site",
            "parkCode": "sahi",
            "addresses": [
                {
                    "postalCode": "11771",
                    "city": "Oyster Bay",
                    "stateCode": "NY",
                    "line1": "20 Sagamore Hill Road",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "11771",
                    "city": "Oyster Bay",
                    "stateCode": "NY",
                    "line1": "20 Sagamore Hill Road",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "BA5A0D58-E05F-44AE-94F1-10A88A4AF143",
            "fullName": "Sagamore Hill National Historic Site",
            "latitude": "40.88579128"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "7154832274",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "7154833288",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "sacn_info@nps.gov"
                    }
                ]
            },
            "states": "WI,MN",
            "longitude": "-92.36126685",
            "activities": [
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "071BA73C-1D3C-46D4-A53C-00D5602F7F0E",
                    "name": "Boating"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "907E8125-15E4-483C-8EAD-B9FA1E85C6F8",
                    "name": "Canoe or Kayak Camping"
                },
                {
                    "id": "256543C7-4322-48B3-8978-765E89AA9431",
                    "name": "Canoe or Kayak Camping"
                },
                {
                    "id": "21DB3AFC-8AAC-4665-BC1F-7198C0685983",
                    "name": "Canoeing"
                },
                {
                    "id": "31F88DA6-696F-441F-89CF-D7B1415C4CB9",
                    "name": "Citizen Science"
                },
                {
                    "id": "AE42B46C-E4B7-4889-A122-08FE180371AE",
                    "name": "Fishing"
                },
                {
                    "id": "9BC03FAF-28F1-4609-BF6F-643F58071AED",
                    "name": "Fly Fishing"
                },
                {
                    "id": "25FB188F-5AAD-459A-9092-28A9801709FF",
                    "name": "Freshwater Fishing"
                },
                {
                    "id": "42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A",
                    "name": "Hands-On"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "F353A9ED-4A08-456E-8DEC-E61974D0FEB6",
                    "name": "Kayaking"
                },
                {
                    "id": "E0E4CE55-3119-46DE-86EB-6817CD8D5F30",
                    "name": "Motorized Boating"
                },
                {
                    "id": "4D224BCA-C127-408B-AC75-A51563C42411",
                    "name": "Paddling"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "0F2CC530-8DD9-4328-98AA-E514918AD206",
                    "name": "River Tubing"
                },
                {
                    "id": "4D06CEED-90C6-4B69-B264-32CC90B69BA6",
                    "name": "Tubing"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "Free entrance to national park visitor centers. Free entrance to national park facilities and lands. There may be charges to enter state, county, and private lands within the boundaries of the Riverway.",
                    "title": "St. Croix National Scenic Riverway"
                }
            ],
            "directionsInfo": "The St. Croix National Scenic Riverway stretches for over 200 miles in northwest Wisconsin and east-central Minnesota. The Namekagon River flows entirely in Wisconsin while the St. Croix River serves as a border between the two states for much of its length. With many different access points there are numerous opportunities for day trips as well as multi-day paddling adventures. Visitor centers are located on the Namekagon River in Trego, Wisconsin, and on the St. Croix River in St. Croix Falls, Wisconsin.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/sacn/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/sacn/index.htm",
            "weatherInfo": "Access to the Riverway is year-round. Early spring temperatures can reach into the 40's resulting in high, fast, and cold water from melting snow and ice. Summers are warm and humid. Severe weather can be experienced anytime from mid-spring through late summer. Fall colors begin in late September with high temperatures averaging in the 60's. Winter can set in early with high temperatures in the teens, lows falling below zero, and occasional heavy snow. The rivers can begin to freeze over by early December.",
            "name": "Saint Croix",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The St. Croix and Namekagon rivers are open all-day, year-round except for periods of dangerous water conditions. Access to landings and trails is seasonal.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "St. Croix National Scenic Riverway"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "1608649A-E7D7-4529-BD83-074C90F9FB68",
                    "name": "Fish"
                },
                {
                    "id": "F8C2FE93-DEB3-4B12-9A87-913E3E6B448D",
                    "name": "Natural Sounds"
                },
                {
                    "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
                    "name": "Trails"
                },
                {
                    "id": "596BAA6D-F66B-4348-8433-FEFF35A8005E",
                    "name": "Water Trails"
                }
            ],
            "latLong": "lat:45.70019235, long:-92.36126685",
            "description": "Grab your paddle and your longing for adventure and head to the St. Croix and Namekagon rivers! Together they form the St. Croix National Scenic Riverway, offering over 200 miles of clean water that glides and rushes through a forested landscape. Paddle, boat, fish, and camp among this wild and scenic beauty. Hiking and historic towns also beckon, if you can bear to leave the cool water.",
            "images": [
                {
                    "credit": "NPS Photo / Butler",
                    "altText": "A man holds a large fish while sitting in a boat near a forested shore.",
                    "title": "Fishing the St. Croix River",
                    "caption": "The fishing is spectacular on the St. Croix and Namekagon rivers.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82D31A-1DD8-B71B-0BB199A9644A51B5.jpg"
                },
                {
                    "credit": "NPS Photo / Konopacz",
                    "altText": "A woman paddles a kayak past cliffs on a forested river.",
                    "title": "Kayaking on the St. Croix River",
                    "caption": "Paddling is an excellent way to experience the St. Croix National Scenic Riverway.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82D82E-1DD8-B71B-0BA50602B2B786DD.jpg"
                },
                {
                    "credit": "NPS Photo / Schaeppi",
                    "altText": "A fast river flows over large rocks in a forested landscape.",
                    "title": "Fast Water on the St. Croix River.",
                    "caption": "There are opportunities to paddle stretches of fast and slow water on the Riverway.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82D9B1-1DD8-B71B-0B22EF948984D549.jpg"
                },
                {
                    "credit": "NPS Photo / Schaeppi",
                    "altText": "A man stands next to a river watching a sunset.",
                    "title": "Evening on the St. Croix River.",
                    "caption": "Watch scenic sunsets from shoreline campsites.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82DAFA-1DD8-B71B-0B042435F96D7124.jpg"
                },
                {
                    "credit": "NPS Photo / VanTatenhove",
                    "altText": "Kayakers pass impressive cliffs.",
                    "title": "The St. Croix Dalles",
                    "caption": "The scenic Dalles of the St. Croix River provide dramatic backdrops for paddlers.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C82DC48-1DD8-B71B-0BD70C0C62ACE7E0.jpg"
                }
            ],
            "designation": "National Scenic Riverway",
            "parkCode": "sacn",
            "addresses": [
                {
                    "postalCode": "54024",
                    "city": "St. Croix Falls",
                    "stateCode": "WI",
                    "line1": "401 North Hamilton Street",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "54024",
                    "city": "St. Croix Falls",
                    "stateCode": "WI",
                    "line1": "401 North Hamilton Street",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "5CB26B91-B888-46E0-95E1-0683A63C45B0",
            "fullName": "Saint Croix National Scenic Riverway",
            "latitude": "45.70019235"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "5058472585",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "5058472441",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "norma_pineda@nps.gov"
                    }
                ]
            },
            "states": "NM",
            "longitude": "-106.2050309",
            "activities": [
                {
                    "id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
                    "name": "Astronomy"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "D37A0003-8317-4F04-8FB0-4CF0A272E195",
                    "name": "Stargazing"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "There is no fee to enter Salinas Pueblo Missions National Monument.",
                    "title": "Salinas Pueblo Entrance Fee"
                }
            ],
            "directionsInfo": "Reach the Mountainair Headquarters by taking I-25 south from Albuquerque to Belen, then NM 47 diagonally to US 60, then east 21 miles to Mountainair. To travel the historic highway route (Turquoise Highway) from the north, take I-40 east from Albuquerque to NM 337, drive south 47 miles (76K) to junction with NM State Highway 55. Proceed right (west) on Hwy 55 about 16 miles (26 K). Turn right on Highway 60 and proceed one block to HQ.  Information on the ruins & surrounding area is available here.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/sapu/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/sapu/index.htm",
            "weatherInfo": "Salinas Pueblo Missions is located at an elevation of 6100-6500 ft (1860-1980 m) in an arid climate. Average annual rainfall is about 15 inches. Winters can be cold and snowy. Summer highs are above 90°F/32°C with cool evenings. The months of June-September often have thunderstorms. Flash flooding may occur in the area. Abó is especially prone to road closures as a result. Spring highs average 75°F/24°C.  Fall temperatures are a little cooler. High winds often occur, which may result in trail closures.",
            "name": "Salinas Pueblo Missions",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-12-25",
                            "name": "Christmas Day",
                            "endDate": "2018-12-25"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-11-22",
                            "name": "Thanksgiving Day",
                            "endDate": "2018-11-22"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-01-01",
                            "name": "New Year's Day",
                            "endDate": "2018-01-01"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2020-03-22",
                            "name": "Closed Due to COVID-19",
                            "endDate": "2020-04-30"
                        }
                    ],
                    "description": "The three park Mission Units (Abó, Quarai, and Gran Quivira) are open daily from 9:00 a.m. - 5:00 p.m.\n\nSalinas Pueblo Missions is closed three days out of the year: Thanksgiving Day, Christmas Day, and New Year's Day.",
                    "standardHours": {
                        "wednesday": "9:00AM - 5:00PM",
                        "monday": "9:00AM - 5:00PM",
                        "thursday": "9:00AM - 5:00PM",
                        "sunday": "9:00AM - 5:00PM",
                        "tuesday": "9:00AM - 5:00PM",
                        "friday": "9:00AM - 5:00PM",
                        "saturday": "9:00AM - 5:00PM"
                    },
                    "name": "Salinas Pueblo Missions National Monument Site Hours"
                }
            ],
            "topics": [
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "98F41FDF-B73F-4B68-8010-53CCB2891E3B",
                    "name": "Churches"
                },
                {
                    "id": "78078CA8-DCBC-4320-A7BF-259A56D55CA2",
                    "name": "Hispanic American Heritage"
                },
                {
                    "id": "101F4D51-F99D-45A6-BBB6-CD481E5FACED",
                    "name": "Mountains"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "A7359FC4-DAD8-45F5-AF15-7FF62F816ED3",
                    "name": "Night Sky"
                },
                {
                    "id": "518B32FB-339D-4C52-B2C2-04BF406AA4B0",
                    "name": "Religion and Spirituality"
                },
                {
                    "id": "A0C86055-4C79-4F70-9D2E-6B9B738290D0",
                    "name": "Ruins"
                }
            ],
            "latLong": "lat:34.35423203, long:-106.2050309",
            "description": "Tucked away in the middle of New Mexico you’ll find Salinas Pueblo Missions National Monument.  Its three distinct sites offer a glimpse into a unique time in history—a time entrenched with cultural borrowing, conflict and struggles.  These sites continue to stand as reminders of the Spanish and Pueblo peoples’ early encounters and prompt exploration of today’s interactions among different people.",
            "images": [
                {
                    "credit": "NPS photo",
                    "altText": "A path through stone walls of an old church.",
                    "title": "Inside the Abo Church",
                    "caption": "A view inside the Abo Church looking north. A nice carpet of grass is usually present during summer months.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85FAE8-1DD8-B71B-0BF5E48AEE58FC9E.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "Stone foundations of an old mission structure.",
                    "title": "An overview of the Abo Mission",
                    "caption": "An overview of the Abo Mission with the Convento in the foreground.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85FC1C-1DD8-B71B-0B63D1D8264921A4.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "An solar eclipse outlines an old stone structure at Salinas Pueblo NM.",
                    "title": "Annular Eclipse seen from Gran Quivira",
                    "caption": "An annular eclipse was visible from Gran Quivira in 2012. A special program allowed visitors to experience this amazing celestrial event.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85FD29-1DD8-B71B-0B6F8E0F1D119DC4.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "A paved path winds through the stone foundations of several old kivas.",
                    "title": "Kivas at Gran Quivira",
                    "caption": "An overview of kivas at Gran Quivira",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85FE2F-1DD8-B71B-0B576101F10DC705.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "Stone walls of a roofless building rise into a bright blue sky.",
                    "title": "Quarai Mission",
                    "caption": "An overview of the Quarai Mission, seen from the west.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C85FF45-1DD8-B71B-0B970D305A272A60.jpg"
                },
                {
                    "credit": "NPS photo",
                    "altText": "Pink flowers and green foliage frame the roofless remains of a stone mission.",
                    "title": "Quarai Mission in Spring",
                    "caption": "Quarai Mission in Spring",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C860054-1DD8-B71B-0BE09BE0AD611F0B.jpg"
                }
            ],
            "designation": "National Monument",
            "parkCode": "sapu",
            "addresses": [
                {
                    "postalCode": "87036-0517",
                    "city": "Mountainair",
                    "stateCode": "NM",
                    "line1": "Salinas Pueblo Missions National Monument",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "PO Box 517"
                },
                {
                    "postalCode": "87036-0517",
                    "city": "Mountainair",
                    "stateCode": "NM",
                    "line1": "Salinas Pueblo Missions National Monument",
                    "type": "Physical",
                    "line3": "",
                    "line2": "105 South Ripley St."
                }
            ],
            "id": "4E7F8D4B-68EC-4A1B-BB71-0A295EB08557",
            "fullName": "Salinas Pueblo Missions National Monument",
            "latitude": "34.35423203"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "(340) 773.1460",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "(340) 719.1791",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "chri_education@nps.gov"
                    }
                ]
            },
            "states": "VI",
            "longitude": "-64.75519348",
            "activities": [
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "None",
                    "title": "None"
                }
            ],
            "directionsInfo": "There are several air carriers to St Croix arriving at the Henry E. Rohlesen Airport. The park is five miles from Christiansted National Historic Site and can be reached by car via Rt. 75 from Christiansted, connecting to Route 80. Cars may be rented at the airport and various other island locations. Ask your lodging hosts for information about guided land tours.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/sari/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/sari/index.htm",
            "weatherInfo": "Welcome to the tropics!",
            "name": "Salt River Bay",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2020-03-23",
                            "name": "Closed Due to COVID-19",
                            "endDate": "2020-04-30"
                        }
                    ],
                    "description": "Due to damage suffered from Hurricane Maria, the Salt River Bay NHP&EP Visitor Center is closed. For information about Salt River Bay - its history and natural environment - please visit the Visitor Center at Fort Christiansvaern, Christiansted National Historic Site. For tours, please call the Interpretation Division at 340.773.1460.",
                    "standardHours": {
                        "wednesday": "unknown",
                        "monday": "unknown",
                        "thursday": "unknown",
                        "sunday": "unknown",
                        "tuesday": "unknown",
                        "friday": "unknown",
                        "saturday": "unknown"
                    },
                    "name": "Salt River Bay Visitor Contact Station"
                }
            ],
            "topics": [
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "0E6D8503-CB65-467F-BCD6-C6D9E28A4E0B",
                    "name": "Oceans"
                }
            ],
            "latLong": "lat:17.77908602, long:-64.75519348",
            "description": "Salt River Bay National Historical Park and Ecological Preserve uniquely documents the human and natural Caribbean world from the earliest indigenous settlements in the central Caribbean to their clash with seven different colonial European powers to the present day.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "View of the Salt River Bay Visitor Contact Station",
                    "title": "Salt River Bay Visitor Contact Station",
                    "caption": "View of the Salt River Bay Visitor Contact Station from below.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/D0B758DC-1DD8-B71B-0B463C640F211F0A.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "View from the Salt River Bay Visitor Contact Station in the Bay",
                    "title": "View from the Salt River Bay Visitor Contact Station",
                    "caption": "Many visitors visit the Visitor Contact Station and view Salt River Bay from this scenic vista.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/D0CC412F-1DD8-B71B-0B4FBD44C72415C2.jpg"
                },
                {
                    "credit": "S. Corsaut, Digital Island.",
                    "altText": "Kayak on the beach at Salt River",
                    "title": "Kayak Salt River",
                    "caption": "Kayaking is a great way to see our mangroves and beaches!",
                    "url": "https://www.nps.gov/common/uploads/structured_data/D19D85BC-1DD8-B71B-0B19EB8C0B7DCC23.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "An aerial view of the Salt River Bay area.",
                    "title": "Salt River Bay Aerial View",
                    "caption": "An aerial view of the Salt River Bay area.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/D0F89B5B-1DD8-B71B-0B5DE91ED465970E.jpg"
                },
                {
                    "credit": "NPS photo.",
                    "altText": "Photograph of historic masonry well tower in the woods at Salt River.",
                    "title": "Well Tower",
                    "caption": "This brick and coral block masonry tower, built in the 1790s, used the power of wind to move water from Salt River to neighboring plantation estates.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/D17B78F2-1DD8-B71B-0B5DD6FEDBAD5A65.jpg"
                },
                {
                    "credit": "NPS",
                    "altText": "park ranger talking with summer campers",
                    "title": "Schools and summer camps",
                    "caption": "Students and summer campers come to Salt River to learn about our island's nature and history.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/925C33D7-D146-E242-85D7207B60D7DA83.jpg"
                },
                {
                    "credit": "NPS",
                    "altText": "SCUBA diver looking at the coral on the underwater canyon wall at Salt River",
                    "title": "Diving the wall",
                    "caption": "SCUBA divers from around the world come to dive the famous canyon walls at Salt River.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/92750549-DB4D-532E-36BFD193A9F73F39.jpg"
                }
            ],
            "designation": "National Historical Park and Ecological Preserve",
            "parkCode": "sari",
            "addresses": [
                {
                    "postalCode": "00820",
                    "city": "Christiansted",
                    "stateCode": "VI",
                    "line1": "2100 Church St. #100",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "00820",
                    "city": "Christiansted",
                    "stateCode": "VI",
                    "line1": "Route 75 Salt River Bay",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "E84CCC52-A22F-42D6-86F1-198D818C25DD",
            "fullName": "Salt River Bay National Historical Park and Ecological Preserve",
            "latitude": "17.77908602"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "2109321001",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "2105341106",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "saan_interpretation@nps.gov"
                    }
                ]
            },
            "states": "TX",
            "longitude": "-98.4289522",
            "activities": [
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "8D778629-F603-4C50-A121-6F4BB2FE2C4B",
                    "name": "Road Biking"
                },
                {
                    "id": "C7D5A145-F8EB-4C37-9E92-2F6C6206B196",
                    "name": "Self-Guided Tours - Auto"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "Entrance to the park is free.",
                    "title": "Entrance Fee"
                }
            ],
            "directionsInfo": "Park Headquarter's is located 4 miles south of downtown San Antonio.\nThe four mission sites lay as a chain south of downtown. Mission Concepción is 3 miles, Mission San José and the park visitor center is 6 miles south, Mission San Juan is 3 miles south of San José, and Mission Espada lays another mile beyond. \nWritten directions and GPS addresses can be found at the link below.",
            "entrancePasses": [],
            "directionsUrl": "http://www.nps.gov/saan/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/saan/index.htm",
            "weatherInfo": "Over the course of a year, the temperature typically varies from 40°F to 95°F and is rarely below 29°F or above 100°F. The warm season lasts from May through September with an average daily high temperature above 90°F and a low of 75°F. The cold season lasts from November through February with an average daily high below 68°F and an average low of 40°F.\nThe relative humidity ranges from 40-80% over the course of the year, which can be very uncomfortable to many people.",
            "name": "San Antonio Missions",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-11-22",
                            "name": "Closed",
                            "endDate": "2018-11-22"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-12-25",
                            "name": "Closed",
                            "endDate": "2018-12-25"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-01-01",
                            "name": "Closed",
                            "endDate": "2018-01-01"
                        }
                    ],
                    "description": "Visitor facilities at Mission Concepcion and Mission San Jose are open seven days a week 9:00 am - 5:00 pm daily. Contact Stations at Mission San Juan and Mission Espada are generally open 10:00 am - 5:00 pm daily, as staffing permits. All sites closed Thanksgiving Day, Christmas Day, and New Year's Day.",
                    "standardHours": {
                        "wednesday": "Sunrise to Sunset",
                        "monday": "Sunrise to Sunset",
                        "thursday": "Sunrise to Sunset",
                        "sunday": "Sunrise to Sunset",
                        "tuesday": "Sunrise to Sunset",
                        "friday": "Sunrise to Sunset",
                        "saturday": "Sunrise to Sunset"
                    },
                    "name": "San Antonio Missions National Historical Park"
                },
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-11-22",
                            "name": "Thanksgiving Day",
                            "endDate": "2018-11-22"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-12-25",
                            "name": "Christmas Day",
                            "endDate": "2018-12-25"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-01-01",
                            "name": "New Years Day",
                            "endDate": "2018-01-01"
                        }
                    ],
                    "description": "The Visitor Center at Mission San José includes the 20 minute interpretive film, the bookstore, exhibit areas, and ranger information desk. Visit the Visitor Center for park information or to pick up your Junior Ranger booklet!",
                    "standardHours": {
                        "wednesday": "9:00AM - 5:00PM",
                        "monday": "9:00AM - 5:00PM",
                        "thursday": "9:00AM - 5:00PM",
                        "sunday": "9:00AM - 5:00PM",
                        "tuesday": "9:00AM - 5:00PM",
                        "friday": "9:00AM - 5:00PM",
                        "saturday": "9:00AM - 5:00PM"
                    },
                    "name": "Mission San José and Visitor Center"
                },
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-11-22",
                            "name": "Thanksgiving Day",
                            "endDate": "2018-11-22"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-12-25",
                            "name": "Christmas Day",
                            "endDate": "2018-12-25"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-01-01",
                            "name": "New Years Day",
                            "endDate": "2018-01-01"
                        }
                    ],
                    "description": "The contact station at Mission Concepción operates on a 9:00 am to 5:00 pm schedule.",
                    "standardHours": {
                        "wednesday": "9:00AM - 5:00PM",
                        "monday": "9:00AM - 5:00PM",
                        "thursday": "9:00AM - 5:00PM",
                        "sunday": "9:00AM - 5:00PM",
                        "tuesday": "9:00AM - 5:00PM",
                        "friday": "9:00AM - 5:00PM",
                        "saturday": "9:00AM - 5:00PM"
                    },
                    "name": "Contact Station at Mission Concepción"
                },
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-12-25",
                            "name": "Christmas Day",
                            "endDate": "2018-12-25"
                        },
                        {
                            "exceptionHours": {
                                "wednesday": "Closed",
                                "monday": "Closed",
                                "thursday": "Closed",
                                "sunday": "Closed",
                                "tuesday": "Closed",
                                "friday": "Closed",
                                "saturday": "Closed"
                            },
                            "startDate": "2018-01-01",
                            "name": "New Years Day",
                            "endDate": "2018-01-01"
                        }
                    ],
                    "description": "Contact Stations at the two southern mission sites, Mission Espada and Mission San Juan, open at 10:00 am.",
                    "standardHours": {
                        "wednesday": "10:00AM - 5:00PM",
                        "monday": "10:00AM - 5:00PM",
                        "thursday": "10:00AM - 5:00PM",
                        "sunday": "10:00AM - 5:00PM",
                        "tuesday": "10:00AM - 5:00PM",
                        "friday": "10:00AM - 5:00PM",
                        "saturday": "10:00AM - 5:00PM"
                    },
                    "name": "Mission Espada and Mission San Juan"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
                    "name": "Archeology"
                },
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "98F41FDF-B73F-4B68-8010-53CCB2891E3B",
                    "name": "Churches"
                },
                {
                    "id": "7F12224B-217A-4B07-A4A2-636B1CE7F221",
                    "name": "Colonization and Settlement"
                },
                {
                    "id": "12EA2B56-17EC-410A-A10D-BFBA87A0669B",
                    "name": "Explorers and Expeditions"
                },
                {
                    "id": "1F833C99-A75D-4F9E-9256-B96523485466",
                    "name": "Farming and  Agriculture"
                },
                {
                    "id": "9FCC01C6-F068-4A05-9A78-23FEBFADAF56",
                    "name": "Latino American Heritage"
                },
                {
                    "id": "039CDC0F-6408-473D-9C9F-83B3B8A1E069",
                    "name": "Missions"
                },
                {
                    "id": "A1BAF33E-EA84-4608-A888-4CEE9541F027",
                    "name": "Native American Heritage"
                },
                {
                    "id": "518B32FB-339D-4C52-B2C2-04BF406AA4B0",
                    "name": "Religion and Spirituality"
                },
                {
                    "id": "A0C86055-4C79-4F70-9D2E-6B9B738290D0",
                    "name": "Ruins"
                },
                {
                    "id": "3CDB67A9-1EAC-408D-88EC-F26FA35E90AF",
                    "name": "Schools and Education"
                }
            ],
            "latLong": "lat:29.31262089, long:-98.4289522",
            "description": "After 10,000 years, the people of South Texas found their cultures, their very lives under attack. In the early 1700s Apache raided from the north, deadly diseases traveled from Mexico, and drought lingered. Survival lay in the missions. By entering a mission, they foreswore their traditional life to become Spanish, accepting a new religion and pledging fealty to a distant and unseen king.",
            "images": [
                {
                    "credit": "NPS Photo",
                    "altText": "Mission Concepción, World Heritage Site",
                    "title": "Mission Concepción, World Heritage Site",
                    "caption": "Mission Concepción has colorful frescos inside that date to the 1750s.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7D9A82-1DD8-B71B-0BDAE9A6D757367C.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Mission San José, World Heritage Site",
                    "title": "Mission San José, World Heritage Site",
                    "caption": "Mission San José shows many aspects of a Spanish colonial mission.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DA93C-1DD8-B71B-0B219B223AE7D5FB.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Mission San Juan, World Heritage Site",
                    "title": "Mission San Juan, World Heritage Site",
                    "caption": "Mission San Juan has a farm watered with an historic irrigation system.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DAABD-1DD8-B71B-0B484755647E2892.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Mission Espada, World Heritage Site",
                    "title": "Mission Espada, World Heritage Site",
                    "caption": "A part of Mission Espada's ranch is located 30 miles south-east, outside of Floresville, TX.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DAC12-1DD8-B71B-0B52A18E18ADF8B7.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "The Rose Window, Mission San José",
                    "title": "The Rose Window, Mission San José",
                    "caption": "Legend has Pedro Huizar constructing this window for his beloved Rosa, who died at sea on her way from Spain to join him in new Spain.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DAED8-1DD8-B71B-0BAAC47C56428D9C.jpg"
                },
                {
                    "credit": "NPS Photo.",
                    "altText": "Park Ranger leads a tour through Mission San José",
                    "title": "Tours of Mission San José",
                    "caption": "Catch a tour at Mission San José at 10:00, 11:00, 1:00 and 3:00 daily.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/A1F5E6C0-1DD8-B71B-0B23C3B88803DB0B.jpg"
                }
            ],
            "designation": "National Historical Park",
            "parkCode": "saan",
            "addresses": [
                {
                    "postalCode": "78214",
                    "city": "San Antonio",
                    "stateCode": "TX",
                    "line1": "Visitor Center at Mission San José",
                    "type": "Physical",
                    "line3": "",
                    "line2": "6701 San Jose Drive"
                },
                {
                    "postalCode": "78210",
                    "city": "San Antonio",
                    "stateCode": "TX",
                    "line1": "Headquarters",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "2202 Roosevelt Avenue"
                }
            ],
            "id": "CCE1AD17-9B13-4D74-9CAC-0278D5477316",
            "fullName": "San Antonio Missions National Historical Park",
            "latitude": "29.31262089"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "7016234466",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "7016234840",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "thro_interpretation@nps.gov"
                    }
                ]
            },
            "states": "ND",
            "longitude": "-103.4300083",
            "activities": [
                {
                    "id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
                    "name": "Astronomy"
                },
                {
                    "id": "5F723BAD-7359-48FC-98FA-631592256E35",
                    "name": "Auto and ATV"
                },
                {
                    "id": "4A58AF13-E8FB-4530-B41A-97DF0B0C77B7",
                    "name": "Backcountry Camping"
                },
                {
                    "id": "7C37B79B-D02D-49EB-9020-3DB8299B748A",
                    "name": "Backcountry Hiking"
                },
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
                    "name": "Birdwatching"
                },
                {
                    "id": "467DC8B8-0B7D-436D-A026-80A22358F615",
                    "name": "Bookstore and Park Store"
                },
                {
                    "id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
                    "name": "Camping"
                },
                {
                    "id": "9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA",
                    "name": "Car or Front Country Camping"
                },
                {
                    "id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
                    "name": "Food"
                },
                {
                    "id": "45261C0A-00D8-4C27-A1F8-029F933A0D34",
                    "name": "Front-Country Hiking"
                },
                {
                    "id": "7CFF5F03-5ECC-4F5A-8572-75D1F0976C0C",
                    "name": "Group Camping"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
                    "name": "Hiking"
                },
                {
                    "id": "788C7572-5425-49EF-A0BF-5A0DF93F7542",
                    "name": "Horse Camping (see also camping)"
                },
                {
                    "id": "80229F2D-972E-40A8-8860-232551CC30D6",
                    "name": "Horse Camping (see also Horse/Stock Use)"
                },
                {
                    "id": "0307955A-B65C-4CE4-A780-EB36BAAADF0B",
                    "name": "Horse Trekking"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "C8F98B28-3C10-41AE-AA99-092B3B398C43",
                    "name": "Museum Exhibits"
                },
                {
                    "id": "EADFAEEB-4D57-49DB-9C58-BF8DC241C24F",
                    "name": "Off-Trail Permitted Hiking"
                },
                {
                    "id": "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
                    "name": "Park Film"
                },
                {
                    "id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
                    "name": "Picnicking"
                },
                {
                    "id": "8D778629-F603-4C50-A121-6F4BB2FE2C4B",
                    "name": "Road Biking"
                },
                {
                    "id": "0B4A5320-216D-451A-9990-626E1D5ACE28",
                    "name": "Scenic Driving"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                },
                {
                    "id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
                    "name": "Shopping"
                },
                {
                    "id": "D37A0003-8317-4F04-8FB0-4CF0A272E195",
                    "name": "Stargazing"
                },
                {
                    "id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
                    "name": "Wildlife Watching"
                }
            ],
            "entranceFees": [
                {
                    "cost": "30.0000",
                    "description": "Entrance to all units of Theodore Roosevelt National Park for one private, non-commercial vehicle and its occupants for 7 days.",
                    "title": "Vehicle Entrance Fee"
                },
                {
                    "cost": "15.0000",
                    "description": "Per-person fee grants access for individuals on foot, bicycle, or horseback to all units of Theodore Roosevelt National Park for 7 days.",
                    "title": "Non-motorized Individual Entrance Fee"
                },
                {
                    "cost": "25.0000",
                    "description": "Entrance to all units of Theodore Roosevelt National Park for one motorcycle and its riders for 7 days.",
                    "title": "Motorcycle Entrance Fee"
                },
                {
                    "cost": "25.0000",
                    "description": "Entrance to all units of Theodore Roosevelt National Park for one 1-6 passenger capacity commercial vehicle and its occupants for 7 days. \n\n**Additional fee of $15 per person in addition to the $25 Commercial Vehicle fee.",
                    "title": "Commercial Vehicle 1-6 Passenger Capacity"
                },
                {
                    "cost": "50.0000",
                    "description": "Entrance to all units of Theodore Roosevelt National Park for one 7-15 passenger capacity commercial vehicle and its occupants for 7 days.",
                    "title": "Commercial Vehicle 7-15 Passenger Capacity"
                },
                {
                    "cost": "60.0000",
                    "description": "Entrance to all units of Theodore Roosevelt National Park for a 16-25 passenger capacity commercial vehicle and its occupants for 7 days.",
                    "title": "Commercial Vehicle 16-25 Passenger Capacity"
                },
                {
                    "cost": "150.0000",
                    "description": "Entrance to all units of Theodore Roosevelt National Park for one 25+ passenger capacity commercial vehicle and its occupants for 7 days.",
                    "title": "Commercial Vehicle 25+ Passenger Capacity"
                }
            ],
            "directionsInfo": "Theodore Roosevelt National Park is located in the Badlands of western North Dakota. \nThere are three units to the park. The South Unit entrance is in the town of Medora, ND off of Interstate 94 exits 24 and 27. The North Unit entrance is on Highway 85 approximately 14 miles south of Watford City, ND. The remote Elkhorn Ranch Unit sits roughly in the middle of the North and South Units and is accessed via gravel roads. Consult park staff for directions to the Elkhorn Ranch Unit.",
            "entrancePasses": [
                {
                    "cost": "55.0000",
                    "description": "Entrance to all units of Theodore Roosevelt National Park for one year from month of purchase. Admits pass holder and passengers in a single, private, non-commercial vehicle, or the pass holder and his/her immediate family (spouse, children, parents) when entry is by other means (foot, bicycle, etc.).",
                    "title": "Theodore Roosevelt National Park Annual Pass"
                }
            ],
            "directionsUrl": "http://www.nps.gov/thro/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/thro/index.htm",
            "weatherInfo": "In winter, some or all park roads may be closed due to snow.",
            "name": "Theodore Roosevelt",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "Theodore Roosevelt National Park is open 24 hours a day, every day of the year. Even when entrance stations and visitor centers are closed, the park itself remains open.",
                    "standardHours": {
                        "wednesday": "Closed",
                        "monday": "Closed",
                        "thursday": "Closed",
                        "sunday": "Closed",
                        "tuesday": "Closed",
                        "friday": "Closed",
                        "saturday": "Closed"
                    },
                    "name": "Theodore Roosevelt National Park"
                },
                {
                    "exceptions": [],
                    "description": "The North Unit of Theodore Roosevelt National Park is open 24 hours a day, every day of the year. The North Unit remains open even when the entrance station and visitor center are closed.",
                    "standardHours": {
                        "wednesday": "Closed",
                        "monday": "Closed",
                        "thursday": "Closed",
                        "sunday": "Closed",
                        "tuesday": "Closed",
                        "friday": "Closed",
                        "saturday": "Closed"
                    },
                    "name": "Theodore Roosevelt National Park North Unit"
                },
                {
                    "exceptions": [],
                    "description": "The South Unit is open 24 hours a day, every day of the year. The South Unit remains open even when the entrance station and visitor center are closed.",
                    "standardHours": {
                        "wednesday": "Closed",
                        "monday": "Closed",
                        "thursday": "Closed",
                        "sunday": "Closed",
                        "tuesday": "Closed",
                        "friday": "Closed",
                        "saturday": "Closed"
                    },
                    "name": "Theodore Roosevelt National Park South Unit"
                },
                {
                    "exceptions": [],
                    "description": "The Elkhorn Ranch Unit is open 24 hours a day, every day of the year.",
                    "standardHours": {
                        "wednesday": "Closed",
                        "monday": "Closed",
                        "thursday": "Closed",
                        "sunday": "Closed",
                        "tuesday": "Closed",
                        "friday": "Closed",
                        "saturday": "Closed"
                    },
                    "name": "Theodore Roosevelt National Park Elkhorn Ranch Unit"
                }
            ],
            "topics": [
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "E06F3C94-AC8A-4B1C-A247-8EBA8910D5EE",
                    "name": "Astronomy"
                },
                {
                    "id": "B5E62BF4-5AE6-4100-8DE1-66652943FAEC",
                    "name": "Aurora Borealis"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "324C31EC-7D75-41C7-AA28-EF8ACB5B6BF5",
                    "name": "Bison"
                },
                {
                    "id": "DC053312-4F5B-430E-831F-B939FA6E8E8E",
                    "name": "Buttes"
                },
                {
                    "id": "2539614A-9646-446E-8251-34D3AAE068FA",
                    "name": "Cats (wild)"
                },
                {
                    "id": "7F12224B-217A-4B07-A4A2-636B1CE7F221",
                    "name": "Colonization and Settlement"
                },
                {
                    "id": "344CE561-4E98-49BF-ACD2-438E3684DA5D",
                    "name": "Elk"
                },
                {
                    "id": "1F833C99-A75D-4F9E-9256-B96523485466",
                    "name": "Farming and  Agriculture"
                },
                {
                    "id": "1608649A-E7D7-4529-BD83-074C90F9FB68",
                    "name": "Fish"
                },
                {
                    "id": "F6D3A52E-608F-47D6-96DF-1FD64122A2FC",
                    "name": "Fossils and Paleontology"
                },
                {
                    "id": "F0F97E32-2F29-41B4-AF98-9FBE8DAB36B1",
                    "name": "Geology"
                },
                {
                    "id": "94262026-92F5-48E9-90EF-01CEAEFBA4FF",
                    "name": "Grasslands"
                },
                {
                    "id": "F12B6BDB-2FE9-4961-9DC2-59FEBC0990CD",
                    "name": "Great Depression"
                },
                {
                    "id": "D1722DD1-E314-4B6D-8116-DED86305C4A4",
                    "name": "Homesteading"
                },
                {
                    "id": "EC707104-66CB-466F-90F8-76264F3BE578",
                    "name": "Horses (wild)"
                },
                {
                    "id": "087E5290-E130-49C1-ADFB-DAFB0644DBE4",
                    "name": "Mineral Deposits"
                },
                {
                    "id": "A7359FC4-DAD8-45F5-AF15-7FF62F816ED3",
                    "name": "Night Sky"
                },
                {
                    "id": "A14B362A-C121-4EF0-B1D5-2057FA535D15",
                    "name": "Petrified Wood"
                },
                {
                    "id": "1AEDC86F-5792-487F-8CDF-9E92CAB97ACE",
                    "name": "Prairies"
                },
                {
                    "id": "F669BC40-BDC4-41C0-9ACE-B2CD25373045",
                    "name": "Presidents"
                },
                {
                    "id": "E4E84C87-6737-4C37-9157-5962648A35F2",
                    "name": "Ranches"
                },
                {
                    "id": "A155238F-0DD2-4610-9B87-05FCE1C59283",
                    "name": "River and Riparian"
                },
                {
                    "id": "4244F489-6813-4B7A-9D0C-20CE098C8FFF",
                    "name": "Rock Landscapes and Features"
                },
                {
                    "id": "9C9FCBB6-360B-4743-8155-6F9341CBE01B",
                    "name": "Scenic Views"
                },
                {
                    "id": "393F60FB-80D6-46F7-B0FB-BBF3C90F59FD",
                    "name": "Tortoises and Turtles"
                },
                {
                    "id": "C9C749E3-39C3-45F7-BCC5-9A609E30AA05",
                    "name": "Westward Expansion"
                },
                {
                    "id": "B85866E2-0897-4000-9040-605CA335804F",
                    "name": "Wilderness"
                }
            ],
            "latLong": "lat:47.17777274, long:-103.4300083",
            "description": "When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.",
            "images": [
                {
                    "credit": "NPS Photo / Laura Thomas",
                    "altText": "the Little Missouri River under blue skies",
                    "title": "A View from the Maah Daah Hey Trail",
                    "caption": "The Maah Daah Hey Trail follows the Little Missouri River for several miles before it enters the Theodore Roosevelt Wilderness.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7939C8-1DD8-B71B-0B048D7EC3812DE3.jpg"
                },
                {
                    "credit": "NPS Photo / Mark Meyers",
                    "altText": "A colorfully striped butte in the foreground overlooks a dark green badlands landscape",
                    "title": "River Bend Overlook, North Unit",
                    "caption": "The River Bend Overlook offers one of the most popular views in the park's North Unit.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C793AD5-1DD8-B71B-0B4A3C1BFA5B4C83.jpg"
                },
                {
                    "credit": "NPS Photo / Laura Thomas",
                    "altText": "a green prairie hilltop overlooks the badlands, shrouded in shadows",
                    "title": "Sunset on Buck Hill",
                    "caption": "A short climb to the top of Buck Hill in the park's South Unit rewards hikers with a sweeping panorama and a fantastic place to watch the sun rise or set.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C793C29-1DD8-B71B-0BD780A3A72F020B.jpg"
                },
                {
                    "credit": "NPS Photo / Laura Thomas",
                    "altText": "A muddy river bank lined with cottonwood trees and steep buttes",
                    "title": "Ekblom Trail",
                    "caption": "The Ekblom Trail is the gateway to the Theodore Roosevelt Wilderness. All you have to do is make it across the river!",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C793D1D-1DD8-B71B-0B17AA76AF7AE453.jpg"
                },
                {
                    "credit": "NPS Photo / Roland and Lisa Honeyman",
                    "altText": "a string of bison are silhouetted against the backdrop of hazy blue and yellow badlands",
                    "title": "Bison Trail",
                    "caption": "Bison roam the badlands from top to bottom, surprising visitors with their agility and ability to cross even the most rugged terrain.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7941B3-1DD8-B71B-0B9F03744B164B38.jpg"
                },
                {
                    "credit": "NPS Photo / Teresina Wheaten",
                    "altText": "two bull bison collide heads in a dusty battle for dominance",
                    "title": "Raise a Ruckus",
                    "caption": "In the summer, bull bison wage furious battles over the right to breed.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C794347-1DD8-B71B-0B5EB10134348DE1.jpg"
                },
                {
                    "credit": "NPS Photo / Rolan and Lisa Honeyman",
                    "altText": "A bugling bull elk and his harem of cows stand on the edge of a butte as the sunlight fades",
                    "title": "Fall Bugle",
                    "caption": "The ghostly bugles of bull elk can be heard wafting through the badlands in the fall.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C79484D-1DD8-B71B-0BD76E098C35DBFA.jpg"
                },
                {
                    "credit": "NPS Photo / Jeff Zylland",
                    "altText": "the swirling, dusty looking milky way runs vertically though a starry night sky",
                    "title": "Milky Way",
                    "caption": "Though light pollution in the area is increasing, the night sky over Theodore Roosevelt National Park remains beautiful and inspiring.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C794A8F-1DD8-B71B-0B3C8A05CF065D02.jpg"
                },
                {
                    "credit": "NPS Photo / Laura Thomas",
                    "altText": "a strange looking sand and rock formation stands in a prairie of brown grass",
                    "title": "Hoodoos",
                    "caption": "Theodore Roosevelt described the badlands as \"so fantastically broken in form and so bizarre in color as to seem hardly properly to belong to this earth.\"",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C794D85-1DD8-B71B-0BE8C67C46D0233A.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "The rising sun casts light on Roosevelt's snow-covered cabin.",
                    "title": "Maltese Cross Cabin",
                    "caption": "Imagine waking up on a crisp winter morning in Roosevelt's Maltese Cross Cabin. It is no wonder that his heart was captured by the romance of life in the West.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C795014-1DD8-B71B-0B9A2115735380B0.jpg"
                }
            ],
            "designation": "National Park",
            "parkCode": "thro",
            "addresses": [
                {
                    "postalCode": "58645",
                    "city": "Medora",
                    "stateCode": "ND",
                    "line1": "PO Box 7",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "58645",
                    "city": "Medora",
                    "stateCode": "ND",
                    "line1": "315 Second Avenue",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "B5FE5682-7981-47DD-AC96-13F4B33A466E",
            "fullName": "Theodore Roosevelt National Park",
            "latitude": "47.17777274"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "2024266841",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "national_mall@nps.gov"
                    }
                ]
            },
            "states": "DC",
            "longitude": "-77.03632572",
            "activities": [
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                }
            ],
            "entranceFees": [
                {
                    "cost": "0.0000",
                    "description": "No Entrance Fee",
                    "title": "No Entrance Fee"
                }
            ],
            "directionsInfo": "GPS Coordinates: 38.881387, -77.036508\n\nThomas Jefferson Memorial is part of the National Mall and Memorial Parks. The site lies at the southern end of the National Mall, adjacent to the Tidal Basin in West Potomac Park. The memorial rests within the sightline to and from the White House, which stands one mile to the north.",
            "entrancePasses": [
                {
                    "cost": "0.0000",
                    "description": "No Passes",
                    "title": "No Passes"
                }
            ],
            "directionsUrl": "http://www.nps.gov/thje/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/thje/index.htm",
            "weatherInfo": "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter.\n\nSpring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees\n\nSummer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees\n\nFall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees\n\nWinter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees\n\n(Source: www.usclimatedata.com)",
            "name": "Thomas Jefferson Memorial",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "The sites of National Mall and Memorial Parks (other than the Washington Monument) are always open to the public. Restrooms, museums and elevators close in the evenings (check individual sites for hours)",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Always Open"
                },
                {
                    "exceptions": [],
                    "description": "Rangers are on Duty to assist the Visiting Public from 9:30 am to 10:00 pm daily (except christmas). The United States Park Police are on Duty 24 hours a day.",
                    "standardHours": {
                        "wednesday": "9:30AM - 10:00PM",
                        "monday": "9:30AM - 10:00PM",
                        "thursday": "9:30AM - 10:00PM",
                        "sunday": "9:30AM - 10:00PM",
                        "tuesday": "9:30AM - 10:00PM",
                        "friday": "9:30AM - 10:00PM",
                        "saturday": "9:30AM - 10:00PM"
                    },
                    "name": "Rangers on Duty"
                }
            ],
            "topics": [
                {
                    "id": "69693007-2DF2-4EDE-BB3B-A25EBA72BDF5",
                    "name": "Architecture and Building"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "F669BC40-BDC4-41C0-9ACE-B2CD25373045",
                    "name": "Presidents"
                }
            ],
            "latLong": "lat:38.88101431, long:-77.03632572",
            "description": "Author of the Declaration of Independence, statesman and visionary for the founding of a nation.",
            "images": [
                {
                    "credit": "NPS",
                    "altText": "Thomas Jefferson Memorial at Night",
                    "title": "Jefferson at Night",
                    "caption": "Reflections of the past",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C822990-1DD8-B71B-0BE050EA15A04568.gif"
                }
            ],
            "designation": "",
            "parkCode": "thje",
            "addresses": [
                {
                    "postalCode": "200024",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "16 East Basin Drive, SW",
                    "type": "Physical",
                    "line3": "",
                    "line2": ""
                },
                {
                    "postalCode": "20024",
                    "city": "Washington",
                    "stateCode": "DC",
                    "line1": "900 Ohio Drive SW",
                    "type": "Mailing",
                    "line3": "",
                    "line2": ""
                }
            ],
            "id": "2D0C31DF-BE78-42A8-812E-1A44602B3D40",
            "fullName": "Thomas Jefferson Memorial",
            "latitude": "38.88101431"
        },
        {
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "7578982410",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    },
                    {
                        "phoneNumber": "7578986346",
                        "description": "",
                        "extension": "",
                        "type": "Fax"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "colo_interpretation@nps.gov"
                    }
                ]
            },
            "states": "VA",
            "longitude": "-76.29900672",
            "activities": [
                {
                    "id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
                    "name": "Biking"
                },
                {
                    "id": "28880A5B-3D29-41AC-BD8B-24743E7A070F",
                    "name": "First Person Interpretation"
                },
                {
                    "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
                    "name": "Guided Tours"
                },
                {
                    "id": "237A1662-6018-4115-ABD1-B8CCF827E703",
                    "name": "Historic Weapons Demonstration"
                },
                {
                    "id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
                    "name": "Junior Ranger Program"
                },
                {
                    "id": "B204DE60-5A24-43DD-8902-C81625A09A74",
                    "name": "Living History"
                },
                {
                    "id": "A8650547-1A30-4222-86C3-A7660A829670",
                    "name": "Reenactments"
                },
                {
                    "id": "8D778629-F603-4C50-A121-6F4BB2FE2C4B",
                    "name": "Road Biking"
                },
                {
                    "id": "C7D5A145-F8EB-4C37-9E92-2F6C6206B196",
                    "name": "Self-Guided Tours - Auto"
                },
                {
                    "id": "A0631906-9672-4583-91DE-113B93DB6B6E",
                    "name": "Self-Guided Tours - Walking"
                }
            ],
            "entranceFees": [
                {
                    "cost": "10.0000",
                    "description": "Adult (16 and older) -$10.00; good for 7 days entrance to Yorktown Battlefield (and NPS areas at Historic Jamestowne); \ncan be upgraded to see Preservation Virginia areas at Historic Jamestowne for an additional $10.00 at the Historic Jamestowne Visitor Center. Yorktown Battlefield will not be selling the $20 entrance permit for Historic Jamestowne. 15 and younger are free.\n\nInteragency Federal Passes are honored at Yorktown Battlefield allowing card holder and 3 adults entrance.",
                    "title": "Yorktown Battlefield"
                }
            ],
            "directionsInfo": "For an internet map search or GPS, use the following:\nYorktown Battlefield Visitor Center, 1000 Colonial Parkway, Yorktown, Virginia 23690.\n\nEastbound from the Richmond area via I-64, exit 242B for Yorktown, to the Colonial Parkway. Follow the parkway to its end. West bound Interstate 64 from the Virginia Beach/Norfolk/Hampton area for Yorktown should take Route 105 East (Fort Eustis Boulevard east), exit 250B to Route 17. Turn left  onto Route 17. Follow the signs to Yorktown Battlefield.",
            "entrancePasses": [
                {
                    "cost": "40.0000",
                    "description": "The The Colonial annual pass admits passholder and three accompanying adults unlimited admittance to both NPS areas at Historic Jamestowne and Yorktown Battlefield during regular operating hours. Pass is valid for twelve months from the month of purchase. Note: There is an additional $5.00 Preservation Virginia entrance fee for each adult entering on the Colonial Pass to Historic Jamestowne to visit the Preservation Virginia historic areas.",
                    "title": "Colonial National Historical Park Annual Pass"
                }
            ],
            "directionsUrl": "http://www.nps.gov/york/planyourvisit/directions.htm",
            "url": "https://www.nps.gov/york/index.htm",
            "weatherInfo": "Yorktown, VA climate is warm during summer when temperatures tend to be in the 80's and cold during winter when temperatures tend to be in the 30's.\n\nThe warmest month of the year is July with an average maximum temperature of 89.00 degrees Fahrenheit, while the coldest month of the year is January with an average minimum temperature of 28.10 degrees Fahrenheit.    \n\nFor closures in due to inclement weather at Colonial National Historical Park please phone this 24 hour phone number (757) 856-1240.",
            "name": "Yorktown Battlefield",
            "operatingHours": [
                {
                    "exceptions": [],
                    "description": "All park grounds are closed at sunset. Yorktown Visitor Center: Opened daily 9:00 a.m. to 5:00 p.m.. Park is closed Thanksgiving, Christmas, and New Years Day.\n\nPhone 757-856-1240 (24 hour recording) for status of closures.",
                    "standardHours": {
                        "wednesday": "9:00AM - 5:00PM",
                        "monday": "9:00AM - 5:00PM",
                        "thursday": "9:00AM - 5:00PM",
                        "sunday": "9:00AM - 5:00PM",
                        "tuesday": "9:00AM - 5:00PM",
                        "friday": "9:00AM - 5:00PM",
                        "saturday": "9:00AM - 5:00PM"
                    },
                    "name": "Yorktown Battlefield Visitor Center"
                }
            ],
            "topics": [
                {
                    "id": "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
                    "name": "African American Heritage"
                },
                {
                    "id": "F3883A66-A7CB-461B-868E-1B5932224B25",
                    "name": "American Revolution"
                },
                {
                    "id": "990E22A2-20D8-4CC2-8E6C-D2DF165BCDA5",
                    "name": "American Revolutionary War"
                },
                {
                    "id": "0D00073E-18C3-46E5-8727-2F87B112DDC6",
                    "name": "Animals"
                },
                {
                    "id": "B145FAB8-5462-4FE2-964E-464D3A5E7F96",
                    "name": "Artillery"
                },
                {
                    "id": "6A3658B4-FB6E-4E23-A63A-9AEF11988831",
                    "name": "Battlefields"
                },
                {
                    "id": "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
                    "name": "Birds"
                },
                {
                    "id": "A8E54356-20CD-490E-B34D-AC6A430E6F47",
                    "name": "Civil War"
                },
                {
                    "id": "7F12224B-217A-4B07-A4A2-636B1CE7F221",
                    "name": "Colonization and Settlement"
                },
                {
                    "id": "DE2F0F3C-C0C4-410F-90D3-97EEC33D348E",
                    "name": "Deciduous Forests"
                },
                {
                    "id": "1608649A-E7D7-4529-BD83-074C90F9FB68",
                    "name": "Fish"
                },
                {
                    "id": "41B1A0A3-11FF-4F55-9CB9-034A7E28B087",
                    "name": "Forests and Woodlands"
                },
                {
                    "id": "988B4AFC-F478-4673-B66D-E6BDB0CCFF35",
                    "name": "Forts"
                },
                {
                    "id": "E411F474-A530-4804-9D23-1D94C78B41E4",
                    "name": "Infantry and Militia"
                },
                {
                    "id": "FD0BA21A-5F69-4688-9D4B-856DA242DC78",
                    "name": "Marshes"
                },
                {
                    "id": "3B0D607D-9933-425A-BFA0-21529AC4734C",
                    "name": "Military"
                },
                {
                    "id": "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
                    "name": "Monuments and Memorials"
                },
                {
                    "id": "F8C2FE93-DEB3-4B12-9A87-913E3E6B448D",
                    "name": "Natural Sounds"
                },
                {
                    "id": "A7359FC4-DAD8-45F5-AF15-7FF62F816ED3",
                    "name": "Night Sky"
                },
                {
                    "id": "F669BC40-BDC4-41C0-9ACE-B2CD25373045",
                    "name": "Presidents"
                },
                {
                    "id": "A155238F-0DD2-4610-9B87-05FCE1C59283",
                    "name": "River and Riparian"
                },
                {
                    "id": "9C9FCBB6-360B-4743-8155-6F9341CBE01B",
                    "name": "Scenic Views"
                },
                {
                    "id": "86C6DC89-D311-44F8-A5BC-35F9FDC4AF1C",
                    "name": "Swamps"
                },
                {
                    "id": "393F60FB-80D6-46F7-B0FB-BBF3C90F59FD",
                    "name": "Tortoises and Turtles"
                },
                {
                    "id": "97CCB419-196C-4B95-BB3A-621458F78415",
                    "name": "US Army"
                },
                {
                    "id": "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
                    "name": "Wars and Conflicts"
                },
                {
                    "id": "BA12B386-49EA-46B0-9121-FCACACC47538",
                    "name": "Watersheds"
                },
                {
                    "id": "1365C347-952C-475A-B755-731DD523C195",
                    "name": "Wetlands"
                }
            ],
            "latLong": "lat:37.38623205, long:-76.29900672",
            "description": "Discover what it took for the United States to be independent as you explore the site of the last major battle of the Revolutionary War.  Here at Yorktown, in the fall of 1781, General George Washington, with allied American and French forces, besieged General Charles Lord Cornwallis’s British army.  On October 19, Cornwallis surrendered, effectively ending the war and ensuring independence.",
            "images": [
                {
                    "credit": "NPS Photo/Linda Williams",
                    "altText": "Cannon at sunset at Yorktown Battlefield",
                    "title": "Cannon at Sunset Yorktown Battlefield",
                    "caption": "Cannon on earthworks at sunset.  Yorktown Battlefield",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DF20A-1DD8-B71B-0B6F95C33437A94D.jpg"
                },
                {
                    "credit": "NPS Photo/Linda Williams",
                    "altText": "Lamb's Artillery Fire 18 pounder Cannon Yorktown Battlefield",
                    "title": "Lamb's Artillery Fire 18 pounder Cannon Yorktown Battlefield",
                    "caption": "We have artillery firing programs twice a month throughout the summer at Yorktown Battlefield",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DF3BE-1DD8-B71B-0BA3070E3D7843A9.jpg"
                },
                {
                    "credit": "NPS Photo/Linda Williams",
                    "altText": "The Moore House",
                    "title": "The Moore House",
                    "caption": "The Moore House where the terms of surrender were negotiated.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DF5C5-1DD8-B71B-0B930002068FF0F0.jpg"
                },
                {
                    "credit": "NPS Photo/Linda Williams",
                    "altText": "National Cemetery showing tombstones, American Flag and Cemetery Lodge in sunlight.",
                    "title": "National Cemetery",
                    "caption": "Civil War National Cemetery",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DF840-1DD8-B71B-0B96BEC911E1F5B8.jpg"
                },
                {
                    "credit": "NPS Photo",
                    "altText": "Nelson house on main street.",
                    "title": "The Nelson House",
                    "caption": "The Nelson house on main street of Yorktown.  Home of Thomas Nelson Jr.  a signer of the Declaration of Independence.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7DF9BE-1DD8-B71B-0B58076431E15B17.jpg"
                },
                {
                    "credit": "NPS Photo/Linda Williams",
                    "altText": "Yorktown Victory Monument",
                    "title": "Yorktown Victory Monument",
                    "caption": "Yorktown Victory Monument",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7E0CC0-1DD8-B71B-0B1A15C76D70B217.jpg"
                },
                {
                    "credit": "NPS Photo/Linda Williams",
                    "altText": "Yorktown Battlefield Earthworks:Redoubt 9",
                    "title": "Yorktown Battlefield Earthworks:Redoubt 9",
                    "caption": "Yorktown Battlefield Earthworks:Redoubt 9",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C7E0E49-1DD8-B71B-0BF744104FAD9A8A.jpg"
                }
            ],
            "designation": "Part of Colonial National Historical Park",
            "parkCode": "york",
            "addresses": [
                {
                    "postalCode": "23690",
                    "city": "Yorktown",
                    "stateCode": "VA",
                    "line1": "Colonial National Historical Park - Yorktown Battlefield",
                    "type": "Mailing",
                    "line3": "",
                    "line2": "P.O. Box 210"
                },
                {
                    "postalCode": "23690",
                    "city": "Yorktown",
                    "stateCode": "VA",
                    "line1": "Yorktown Battlefield",
                    "type": "Physical",
                    "line3": "",
                    "line2": "1000 Colonial Parkway"
                }
            ],
            "id": "D09FF0F8-B16E-4D2B-9C37-03202D6B8176",
            "fullName": "Yorktown Battlefield Part of Colonial National Historical Park",
            "latitude": "37.38623205"
        }
    ],
    "limit": "50",
    "start": "1"
}
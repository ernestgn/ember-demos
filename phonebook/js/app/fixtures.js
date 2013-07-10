/**
 * @author Ernest Ngaruiya
*/

/*global App,DS*/

App.Contact = DS.Model.extend({
    name: DS.attr('string'),
    number: DS.attr('string'),
    photo: DS.attr('string')
});

App.Contact.FIXTURES = [
    {
        "id": 0,
        "name": "Goff Beck",
        "number": "+1 (882) 442-3378",
        "photo": "images/asterix.png"
    },
    {
        "id": 1,
        "name": "Mayer Best",
        "number": "+1 (969) 500-2318",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 2,
        "name": "Grimes Harrell",
        "number": "+1 (989) 426-2847",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 3,
        "name": "Ramirez Ramirez",
        "number": "+1 (955) 578-3720",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 4,
        "name": "Christian Odonnell",
        "number": "+1 (920) 469-2998",
        "photo": "images/obelix.png"
    },
    {
        "id": 5,
        "name": "Amie Lercher",
        "number": "+1 (964) 516-3969",
        "photo": "images/obelix.png"
    },
    {
        "id": 6,
        "name": "Mavis Wiggins",
        "number": "+1 (895) 555-3515",
        "photo": "images/obelix.png"
    },
    {
        "id": 7,
        "name": "Marylou Faulkner",
        "number": "+1 (921) 571-2144",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 8,
        "name": "Amanda Wagenet",
        "number": "+1 (996) 430-2154",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 9,
        "name": "Ferguson Ellis",
        "number": "+1 (843) 454-2529",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 10,
        "name": "Gould Tillman",
        "number": "+1 (809) 546-3658",
        "photo": "images/tintin.png"
    },
    {
        "id": 11,
        "name": "Todd Conway",
        "number": "+1 (958) 556-3715",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 12,
        "name": "Ken Campbell",
        "number": "+1 (992) 488-3740",
        "photo": "images/tintin.png"
    },
    {
        "id": 13,
        "name": "Kirsten Love",
        "number": "+1 (965) 585-2530",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 14,
        "name": "Hendrix Schroeder",
        "number": "+1 (845) 470-2248",
        "photo": "images/tintin.png"
    },
    {
        "id": 15,
        "name": "Tracy Cross",
        "number": "+1 (869) 403-3338",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 16,
        "name": "Deanna Nunez",
        "number": "+1 (900) 417-2931",
        "photo": "images/popeye.png"
    },
    {
        "id": 17,
        "name": "Dillon Warren",
        "number": "+1 (921) 580-2873",
        "photo": "images/tintin.png"
    },
    {
        "id": 18,
        "name": "Acosta Katz",
        "number": "+1 (922) 465-3487",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 19,
        "name": "Jeth Baldwin",
        "number": "+1 (825) 534-3808",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 20,
        "name": "Sims Atkins",
        "number": "+1 (837) 502-3970",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 21,
        "name": "Drake Watkins",
        "number": "+1 (872) 585-3816",
        "photo": "images/popeye.png"
    },
    {
        "id": 22,
        "name": "Jarrett Dickson",
        "number": "+1 (866) 518-3544",
        "photo": "images/asterix.png"
    },
    {
        "id": 23,
        "name": "Fischer Hart",
        "number": "+1 (952) 573-3891",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 24,
        "name": "Tonia Allen",
        "number": "+1 (924) 573-2103",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 25,
        "name": "Carmen Bernard",
        "number": "+1 (911) 581-3007",
        "photo": "images/tintin.png"
    },
    {
        "id": 26,
        "name": "Anthony Glowacki",
        "number": "+1 (947) 415-2844",
        "photo": "images/tintin.png"
    },
    {
        "id": 27,
        "name": "Curtis Miranda",
        "number": "+1 (876) 573-2174",
        "photo": "images/asterix.png"
    },
    {
        "id": 28,
        "name": "Horn Maldonado",
        "number": "+1 (904) 506-2025",
        "photo": "images/asterix.png"
    },
    {
        "id": 29,
        "name": "Jimmie Underwood",
        "number": "+1 (855) 548-3160",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 30,
        "name": "Cherry Delgado",
        "number": "+1 (920) 578-2238",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 31,
        "name": "Reyna Lyons",
        "number": "+1 (987) 566-2114",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 32,
        "name": "Nola Foreman",
        "number": "+1 (805) 507-3941",
        "photo": "images/popeye.png"
    },
    {
        "id": 33,
        "name": "Charmaine Kane",
        "number": "+1 (959) 454-3883",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 34,
        "name": "Lynne Sweeney",
        "number": "+1 (883) 545-3311",
        "photo": "images/asterix.png"
    },
    {
        "id": 35,
        "name": "Alyson Silber",
        "number": "+1 (821) 510-3926",
        "photo": "images/asterix.png"
    },
    {
        "id": 36,
        "name": "Rosetta Combs",
        "number": "+1 (959) 567-3965",
        "photo": "images/tintin.png"
    },
    {
        "id": 37,
        "name": "Shauna Davis",
        "number": "+1 (800) 470-3465",
        "photo": "images/obelix.png"
    },
    {
        "id": 38,
        "name": "Wilda Kinney",
        "number": "+1 (916) 541-3741",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 39,
        "name": "Finch Mcleod",
        "number": "+1 (965) 562-3801",
        "photo": "images/popeye.png"
    },
    {
        "id": 40,
        "name": "Jrowning Boyle",
        "number": "+1 (869) 407-3814",
        "photo": "images/obelix.png"
    },
    {
        "id": 41,
        "name": "Reed Sampson",
        "number": "+1 (978) 495-2772",
        "photo": "images/tintin.png"
    },
    {
        "id": 42,
        "name": "Pam Gutierrez",
        "number": "+1 (849) 558-2815",
        "photo": "images/asterix.png"
    },
    {
        "id": 43,
        "name": "Mcgee Bond",
        "number": "+1 (872) 521-3162",
        "photo": "images/obelix.png"
    },
    {
        "id": 44,
        "name": "Haley Herrera",
        "number": "+1 (930) 416-2496",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 45,
        "name": "Hensley Glass",
        "number": "+1 (993) 428-3871",
        "photo": "images/tintin.png"
    },
    {
        "id": 46,
        "name": "Cobb Wilson",
        "number": "+1 (815) 401-3477",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 47,
        "name": "Eddie Brooks",
        "number": "+1 (907) 493-3052",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 48,
        "name": "Tillman Drake",
        "number": "+1 (934) 461-3067",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 49,
        "name": "Reynolds Powers",
        "number": "+1 (996) 482-2566",
        "photo": "images/popeye.png"
    },
    {
        "id": 50,
        "name": "Suarez Gordon",
        "number": "+1 (950) 467-2046",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 51,
        "name": "Warren George",
        "number": "+1 (878) 598-3995",
        "photo": "images/asterix.png"
    },
    {
        "id": 52,
        "name": "Vicky Henry",
        "number": "+1 (988) 436-2800",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 53,
        "name": "Rachael Benson",
        "number": "+1 (873) 449-3591",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 54,
        "name": "Aida Dale",
        "number": "+1 (942) 442-3325",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 55,
        "name": "Carney Mathews",
        "number": "+1 (863) 498-3723",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 56,
        "name": "Madden Walsh",
        "number": "+1 (974) 490-2599",
        "photo": "images/popeye.png"
    },
    {
        "id": 57,
        "name": "Torres Marquez",
        "number": "+1 (911) 413-3270",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 58,
        "name": "Gena Owen",
        "number": "+1 (938) 500-2353",
        "photo": "images/asterix.png"
    },
    {
        "id": 59,
        "name": "Forbes Mcfadden",
        "number": "+1 (893) 478-3227",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 60,
        "name": "Diann Delaney",
        "number": "+1 (876) 441-3352",
        "photo": "images/asterix.png"
    },
    {
        "id": 61,
        "name": "Guerra Jordan",
        "number": "+1 (905) 552-3092",
        "photo": "images/popeye.png"
    },
    {
        "id": 62,
        "name": "John Adkins",
        "number": "+1 (996) 521-2081",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 63,
        "name": "Ronda Baxter",
        "number": "+1 (831) 451-2015",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 64,
        "name": "Norma Simmons",
        "number": "+1 (900) 592-2492",
        "photo": "images/obelix.png"
    },
    {
        "id": 65,
        "name": "Kim Austin",
        "number": "+1 (853) 468-2990",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 66,
        "name": "Hughes Koch",
        "number": "+1 (801) 549-2632",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 67,
        "name": "Elena Montgomery",
        "number": "+1 (827) 600-3460",
        "photo": "images/obelix.png"
    },
    {
        "id": 68,
        "name": "Meyer Rivas",
        "number": "+1 (854) 513-3127",
        "photo": "images/obelix.png"
    },
    {
        "id": 69,
        "name": "Keller Park",
        "number": "+1 (861) 500-3260",
        "photo": "images/tintin.png"
    },
    {
        "id": 70,
        "name": "Richard Raymond",
        "number": "+1 (986) 582-3129",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 71,
        "name": "Valdez Perez",
        "number": "+1 (839) 507-2371",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 72,
        "name": "Powell Skinner",
        "number": "+1 (985) 485-2871",
        "photo": "images/tintin.png"
    },
    {
        "id": 73,
        "name": "England Daniel",
        "number": "+1 (988) 479-3857",
        "photo": "images/obelix.png"
    },
    {
        "id": 74,
        "name": "Veronica Wiley",
        "number": "+1 (961) 496-3927",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 75,
        "name": "Alta Bryn",
        "number": "+1 (926) 423-3992",
        "photo": "images/popeye.png"
    },
    {
        "id": 76,
        "name": "Rodgers Crawford",
        "number": "+1 (881) 521-3439",
        "photo": "images/obelix.png"
    },
    {
        "id": 77,
        "name": "Rosella Boyd",
        "number": "+1 (874) 417-2895",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 78,
        "name": "Santana Noble",
        "number": "+1 (975) 538-2301",
        "photo": "images/popeye.png"
    },
    {
        "id": 79,
        "name": "Dee Lindsay",
        "number": "+1 (874) 595-2042",
        "photo": "images/asterix.png"
    },
    {
        "id": 80,
        "name": "Serrano Hensley",
        "number": "+1 (979) 505-3741",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 81,
        "name": "Estelle Maddox",
        "number": "+1 (883) 598-3698",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 82,
        "name": "Jrittany Macias",
        "number": "+1 (815) 513-3601",
        "photo": "images/tintin.png"
    },
    {
        "id": 83,
        "name": "Ramona Gomez",
        "number": "+1 (817) 474-2939",
        "photo": "images/obelix.png"
    },
    {
        "id": 84,
        "name": "Claudette Stephenson",
        "number": "+1 (994) 572-2110",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 85,
        "name": "Dickerson Haley",
        "number": "+1 (811) 412-3050",
        "photo": "images/asterix.png"
    },
    {
        "id": 86,
        "name": "Corine Cochran",
        "number": "+1 (915) 453-2817",
        "photo": "images/obelix.png"
    },
    {
        "id": 87,
        "name": "Santos Holder",
        "number": "+1 (941) 568-3736",
        "photo": "images/obelix.png"
    },
    {
        "id": 88,
        "name": "Carmella Butler",
        "number": "+1 (979) 589-2583",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 89,
        "name": "Molina Abbott",
        "number": "+1 (978) 452-2722",
        "photo": "images/andy_capp.png"
    },
    {
        "id": 90,
        "name": "Leah Curry",
        "number": "+1 (923) 509-2207",
        "photo": "images/tintin.png"
    },
    {
        "id": 91,
        "name": "Hoffman Soto",
        "number": "+1 (979) 501-3902",
        "photo": "images/asterix.png"
    },
    {
        "id": 92,
        "name": "Webb Clayton",
        "number": "+1 (923) 537-2212",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 93,
        "name": "Espinoza Cooley",
        "number": "+1 (908) 558-3451",
        "photo": "images/captain_haddock.png"
    },
    {
        "id": 94,
        "name": "Tate Perry",
        "number": "+1 (986) 442-3689",
        "photo": "images/prof_calculus.png"
    },
    {
        "id": 95,
        "name": "Levy Byrd",
        "number": "+1 (935) 400-2949",
        "photo": "images/andy_capp.png"
    }
];
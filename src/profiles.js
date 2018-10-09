const profiles = [
  {
    name: "Nance MacFadin",
    jobtitle: "Help Desk Operator",
    organization: "Schuster-Senger",
    img: "https://source.unsplash.com/CQl3Y5bV6FA/500x500",
    href: "/profiles/nance-macfadin"
  },
  {
    name: "Clerc Edis",
    jobtitle: "Staff Scientist",
    organization: "Ritchie Inc",
    img: "https://source.unsplash.com/AbNO2iejoXA/500x500",
    href: "/profiles/clerc-edis"
  },
  {
    name: "Clifford Skipperbottom",
    jobtitle: "Senior Financial Analyst",
    organization: "Block, Bruen and Gerlach",
    img: "https://source.unsplash.com/-VTJEOcYT8o/500x500",
    href: "/profiles/clifford-skipperbottom"
  },
  {
    name: "Willow Rangall",
    jobtitle: "Human Resources Assistant I",
    organization: "Corkery LLC",
    img: "https://source.unsplash.com/0lwa8Dprrzs/500x500",
    href: "/profiles/willow-rangall"
  },
  {
    name: "Suzy Cahan",
    jobtitle: "Research Assistant I",
    organization: "Hickle-Emmerich",
    img: "https://source.unsplash.com/bKhETeDV1WM/500x500",
    href: "/profiles/suzy-cahan"
  },
  {
    name: "Sandra Abramovici",
    jobtitle: "Help Desk Operator",
    organization: "Kunze, Lehner and Kutch",
    img: "https://source.unsplash.com/mx0DEnfYxic/500x500",
    href: "/profiles/"
  },
  {
    name: "Jan McKea",
    jobtitle: "Civil Engineer",
    organization: "Corkery-Grady",
    img: "https://source.unsplash.com/mx0DEnfYxic/500x500",
    href: "/profiles/sandra-abramovici"
  },
  {
    name: "Ola Brunger",
    jobtitle: "Nurse Practicioner",
    organization: "Gottlieb Inc",
    img: "https://source.unsplash.com/K_Na5gCmh38/500x500",
    href: "/profiles/ola-brunger"
  },
  {
    name: "Ivette Rowlinson",
    jobtitle: "Research Nurse",
    organization: "Purdy and Sons",
    img: "https://source.unsplash.com/93q1OMq5uHE/500x500",
    href: "/profiles/ivette-rowlinson"
  },
  {
    name: "Madeleine Stredwick",
    jobtitle: "Staff Scientist",
    organization: "Gaylord, Stoltenberg and Haag",
    img: "https://source.unsplash.com/GHOiyov2TSQ/500x500",
    href: "/profiles/madeleine-stredwick"
  },
  {
    name: "Lin Billson",
    jobtitle: "Database Administrator I",
    organization: "Legros and Sons",
    img: "https://source.unsplash.com/KvHT4dltPEQ/500x500",
    href: "/profiles/lin-billson"
  },
  {
    name: "Alfie Piborn",
    jobtitle: "Mechanical Systems Engineer",
    organization: "Rosenbaum and Sons",
    img: "https://source.unsplash.com/ZRZSmK362Xw/500x500",
    href: "/profiles/alfie-piborn"
  },
  {
    name: "Garvy Bartlomiej",
    jobtitle: "Research Associate",
    organization: "Tillman LLC",
    img: "https://source.unsplash.com/adK3Vu70DEQ/500x500",
    href: "/profiles/garvy-bartlomiej"
  },
  {
    name: "Gustavus Splevings",
    jobtitle: "Structural Analysis Engineer",
    organization: "Farrell, Veum and Daugherty",
    img: "https://source.unsplash.com/nTfGYGPURFA/500x500",
    href: "/profiles/gustavus-splevings"
  },
  {
    name: "Cristi Tale",
    jobtitle: "Desktop Support Technician",
    organization: "Eichmann LLC",
    img: "https://source.unsplash.com/8zdEgWg5JAA/500x500",
    href: "/profiles/cristi-tale"
  },
  {
    name: "Gae Phinn",
    jobtitle: "Associate Professor",
    organization: "Cronin-Homenick",
    img: "https://source.unsplash.com/Cz9U61L7fR8/500x500",
    href: "/profiles/gae-phinn"
  },
  {
    name: "Leoline Hacaud",
    jobtitle: "Occupational Therapist",
    organization: "Bosco and Sons",
    img: "https://source.unsplash.com/_PfODeuCyzI/500x500",
    href: "/profiles/leoline-hacaud"
  },
  {
    name: "Rufe Rockhill",
    jobtitle: "Operator",
    organization: "Champlin, Heller and Mante",
    img: "https://source.unsplash.com/VOnCYKI8_T4/500x500",
    href: "/profiles/rufe-rockhill"
  },
  {
    name: "Bernadene Van der Velden",
    jobtitle: "Sales Representative",
    organization: "Schimmel-Pollich",
    img: "https://source.unsplash.com/6ZDY7XhT8_0/500x500",
    href: "/profiles/bernadene-van-der-velden"
  },
  {
    name: "Edithe Densell",
    jobtitle: "Dental Hygienist",
    organization: "Turcotte-Greenholt",
    img: "https://source.unsplash.com/2ZCg3Tx2R9I/500x500",
    href: "/profiles/edithe-densell"
  },
  {
    name: "Emmalynne Sone",
    jobtitle: "Accountant II",
    organization: "Hansen-Keebler",
    img: "https://source.unsplash.com/ipHDt5XZF40/500x500",
    href: "/profiles/emmalynne-sone"
  },
  {
    name: "Ardella Sapir",
    jobtitle: "Geological Engineer",
    organization: "Cassin-Kirlin",
    img: "https://source.unsplash.com/GerG5v2UQqI/500x500",
    href: "/profiles/ardella-sapir"
  },
  {
    name: "Ilise Sailor",
    jobtitle: "Technical Writer",
    organization: "Grimes, Gleichner and Gleason",
    img: "https://source.unsplash.com/cmKPOUgdmWc/500x500",
    href: "/profiles/ilise-aailor"
  },
  {
    name: "Anita Olander",
    jobtitle: "Help Desk Operator",
    organization: "Halvorson Group",
    img: "https://source.unsplash.com/g-KH52m2P7g/500x500",
    href: "/profiles/anita-olander"
  },
  {
    name: "Gerik Frisby",
    jobtitle: "Analyst Programmer",
    organization: "Ullrich, Jakubowski and Doyle",
    img: "https://source.unsplash.com/KeUKM5N-e_g/500x500",
    href: "/profiles/gerik-frisby"
  },
  {
    name: "Rayshell Marmion",
    jobtitle: "Human Resources Manager",
    organization: "Hane Group",
    img: "https://source.unsplash.com/ITjiVXcwVng/500x500",
    href: "/profiles/rayshell-marmion"
  },
  {
    name: "Brooks Grene",
    jobtitle: "Paralegal",
    organization: "Swift, Bogan and Jones",
    img: "https://source.unsplash.com/JGYU58CbT-g/500x500",
    href: "/profiles/brooks-grene"
  },
  {
    name: "Bev Dorey",
    jobtitle: "Community Outreach Specialist",
    organization: "D'Amore-Kassulke",
    img: "https://source.unsplash.com/cdqK7pL21Rw/500x500",
    href: "/profiles/bev-dorey"
  },
  {
    name: "Vladimir Parres",
    jobtitle: "Community Outreach Specialist",
    organization: "Leuschke, Okuneva and Heaney",
    img: "https://source.unsplash.com/-umWPg1Adts/500x500",
    href: "/profiles/vladimir-parres"
  },
  {
    name:
      "Really really really really really really really really really really long name",
    jobtitle:
      "Really really really really really really really really really really long jobtitle",
    organization:
      "Really really really really really really really really really really long organization",
    img: "https://source.unsplash.com/ig9lRTGT0h8/500x500",
    href: "/profiles/really-really-long"
  }
];

export default profiles;

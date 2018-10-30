import avatar from "./avatar.png";

const posts = [
  {
    title: "Aliquet maecenas leo odio condimentum id luctus nec molestie",
    date: "July 4, 2018",
    authors: [
      {
        name: "Nance MacFadin",
        img: avatar,
        href: "/profiles/nance-macfadin"
      }
    ],
    lead:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    href: "/2018/07/04/slug"
  },
  {
    title: "Pretium iaculis justo in hac habitasse platea",
    date: "June 12, 2018",
    authors: [
      {
        name: "Clerc Edis",
        img: avatar,
        href: "/profiles/clerc-edis"
      },
      {
        name: "Clifford Skipperbottom",
        img: avatar,
        href: "/profiles/clifford-skipperbottom"
      }
    ],
    lead:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    href: "/2018/06/12/slug"
  },
  {
    title: "Vestibulum proin eu mi nulla ac enim in tempor turpis",
    date: "May 31, 2018",
    authors: [
      {
        name: "Willow Rangall",
        img: avatar,
        href: "/profiles/willow-rangall"
      },
      {
        name: "Suzy Cahan",
        img: avatar,
        href: "/profiles/suzy-cahan"
      },
      {
        name: "Sandra Abramovici",
        img: avatar,
        href: "/profiles/"
      },
      {
        name: "Jan McKea",
        img: avatar,
        href: "/profiles/sandra-abramovici"
      },
      {
        name: "Ola Brunger",
        img: avatar,
        href: "/profiles/ola-brunger"
      },
      {
        name: "Ivette Rowlinson",
        img: avatar,
        href: "/profiles/ivette-rowlinson"
      },
      {
        name: "Madeleine Stredwick",
        img: avatar,
        href: "/profiles/madeleine-stredwick"
      },
      {
        name: "Lin Billson",
        img: avatar,
        href: "/profiles/lin-billson"
      },
      {
        name: "Alfie Piborn",
        img: avatar,
        href: "/profiles/alfie-piborn"
      },
      {
        name: "Garvy Bartlomiej",
        img: avatar,
        href: "/profiles/garvy-bartlomiej"
      }
    ],
    lead:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    href: "/2018/05/31/slug"
  },
  {
    title:
      "Vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
    authors: [
      {
        name: "Gustavus Splevings",
        img: avatar,
        href: "/profiles/gustavus-splevings"
      },
      {
        name: "Cristi Tale",
        img: avatar,
        href: "/profiles/cristi-tale"
      }
    ],
    date: "May 15, 2018",
    lead:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    href: "/2018/05/15/slug"
  },
  {
    title: "Primis in faucibus orci luctus est",
    authors: [
      {
        name: "Gae Phinn",
        img: avatar,
        href: "/profiles/gae-phinn"
      },
      {
        name: "Leoline Hacaud",
        img: avatar,
        href: "/profiles/leoline-hacaud"
      },
      {
        name: "Rufe Rockhill",
        img: avatar,
        href: "/profiles/rufe-rockhill"
      }
    ],
    date: "May 2, 2018",
    lead:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    href: "/2018/05/02/slug"
  },
  {
    title: "Suscipit ligula in lacus curabitur at ipsum",
    authors: [
      {
        name: "Bernadene Van der Velden",
        img: avatar,
        href: "/profiles/bernadene-van-der-velden"
      },
      {
        name: "Edithe Densell",
        img: avatar,
        href: "/profiles/edithe-densell"
      }
    ],
    date: "April 20, 2018",
    lead:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    href: "/2018/04/20/slug"
  },
  {
    title: "Orci eget orci vehicula condimentum curabitur in",
    date: "April 5, 2018",
    authors: [
      {
        name: "Emmalynne Sone",
        jobtitle: "Accountant II",
        organization: "Hansen-Keebler",
        img: avatar,
        href: "/profiles/emmalynne-sone"
      }
    ],
    lead:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    href: "/2018/04/05/slug"
  },
  {
    title: "Quam pede lobortis ligula sit",
    authors: [
      {
        name: "Ardella Sapir",
        img: avatar,
        href: "/profiles/ardella-sapir"
      }
    ],
    date: "March 14, 2018",
    lead:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    href: "/2018/03/14/slug"
  },
  {
    title:
      "Diam cras pellentesque volutpat dui maecenas tristique est et tempus",
    authors: [
      {
        name: "Ilise Sailor",
        img: avatar,
        href: "/profiles/ilise-aailor"
      },
      {
        name: "Anita Olander",
        img: avatar,
        href: "/profiles/anita-olander"
      }
    ],
    date: "February 28, 2018",
    lead:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    href: "/2018/02/28/slug"
  },
  {
    title: "Metus sapien ut nunc vestibulum ante",
    authors: [
      {
        name: "Gerik Frisby",
        img: avatar,
        href: "/profiles/gerik-frisby"
      },
      {
        name: "Rayshell Marmion",
        img: avatar,
        href: "/profiles/rayshell-marmion"
      },
      {
        name: "Brooks Grene",
        img: avatar,
        href: "/profiles/brooks-grene"
      }
    ],
    date: "February 13, 2018",
    lead:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    href: "/2018/02/13/slug"
  }
];

export default posts;

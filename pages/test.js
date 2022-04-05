// function wrapValue(factor) {
//   return function (numbers) {
//     return `This is a numbers ${numbers}; Tis is factor ${factor} = ${
//       numbers * factor
//     } `;
//   };
// }

// var test = wrapValue(9);
// console.log(test(2));

// function noisy(f) {
//   return function (arg) {
//     console.log("calling with ", arg);
//     var val = f(arg);
//     console.log("called with", arg, "- got", val);
//     return val;
//   };
// }

// noisy(Boolean)(34);

// function unless(test, then) {
//   if (!test) then();
// }

// function repeat(times, body) {
//   for (var i = 0; i < times; i++) body(i);
// }

// repeat(3, function (n) {
//   unless(n % 2, function () {
//     console.log(n, "is even");
//   });
// });

// console.log(Object.getPrototypeOf({}) === Object.prototype);
const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://www.thinkgeoenergy.com/wp-content/uploads/2017/09/LosAlamosNationalLab.jpg",
    title: "Los Alamaos",
    address: "1st NW avenue",
    description: "This is the first meeetup",
  },
  {
    id: "m2",
    image:
      "https://besthqwallpapers.com/Uploads/12-1-2021/151409/thumb2-los-santos-4k-modern-buildings-american-cities-los-angeles.jpg",
    title: "Los Santos",
    address: "3rd W avenue",
    description: "This is the second meeetup",
  },
  {
    id: "m3",
    image:
      "http://www.godominicanrepublic.com/wp-content/uploads/2017/11/boca-chica-slide-1.jpg",
    title: "Boka Chica",
    address: "Main highway",
    description: "This is the third meeetup",
  },
];

const newArray = DUMMY_MEETUPS.map((value) => ({
  header: value.title,
  imaging: value.image,
}));
// console.log(newArray);

const someObj = {
  paths: [
    {
      params: {
        meetupId: "m1",
      },
    },
    {
      params: {
        meetupId: "m2",
      },
    },
  ],
};

// console.log(someObj);
const modified = DUMMY_MEETUPS.map((value) => ({
  params: { meetupId: value.id },
}));

console.log(someObj.paths.map((value) => value));
console.log(modified);

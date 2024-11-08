const burger = document.querySelector(".burger"),
   menu = document.querySelector(".menu"),
   closeElem = document.querySelector(".menu__close");

burger.addEventListener("click", () => {
   menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
   menu.classList.remove("active");
});

const counters = document.querySelectorAll(".elem__interest"),
   lines = document.querySelectorAll(".elem__line span");

counters.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});

// function beggars(values, n) {
//    let newArr = [...values];
//    if (newArr.length === 0 || n === 0) {
//       return [];
//    } else if (n > values.length) {
//       return (res = [...values, ...Array(n - values.length).fill(0)]);
//    } else {
//       let res = [];
//       for (let i = 0; i < n; i++) {
//          let sum = newArr
//             .filter((item, i) => i % n === 0)
//             .reduce((accum, current) => accum + current);
//          res.push(sum);
//          newArr.shift();
//       }
//       return res;
//    }
// }
// console.log(beggars([78, 7, 89], 18));

// function formatDuration(seconds) {
//    const data = new Date(seconds * 1000);
//    let second = data.getSeconds(),
//       minutes = data.getMinutes(),
//       hours = data.getHours(),
//       years = data.getFullYear() - 1970;

//    console.log(second, minutes, hours, years);
// }

// formatDuration(3662);

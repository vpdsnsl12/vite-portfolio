import { intro } from "./intro.js";
import { link } from "./link.js";
import { menu } from "./menu.js";
import { smooth } from "./smooth.js";
import { work } from "./work.js";
import { graphics } from "./graphics.js";
import { about } from "./about.js";
// import { splide } from "./splide.js";


window.addEventListener('load', function () {
  smooth()
  link()
  menu()
  intro()
  work()
  // splide()
  graphics()
  about()
})
import { graphics } from "./graphics.js";
import { intro } from "./intro.js";
import { link } from "./link.js";
import { menu } from "./menu.js";
import { smooth } from "./smooth.js";
import { work } from "./work.js";
import { splide } from "./splide.js";


window.addEventListener('load',function(){
  smooth()
  graphics()
  link()
  menu()
  intro()
  work()
  splide()
})
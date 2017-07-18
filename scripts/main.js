'use strict';

class Button{
  constructor(element, text, icon){
    this.element = element;
    this.text = text;
    this.icon = icon;
  }
  render(){
    this.element.innerHTML = `${this.text}${this.icon}`;
  }
}

const element= document.querySelector(".hello-button");
const icon= '<span class="glyphicon glyphicon-heart"></span>';
const text= "Hola";
const myButton = new Button(element, text, icon);
myButton.render();

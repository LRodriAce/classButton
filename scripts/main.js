'use strict';

class Button{
  constructor(element, text, icon){
    this.element = element;
    this.text = text;
    this.icon = icon;
  }

  render(){
    this.element.innerHTML = `${this.text}<span class="glyphicon glyphicon-${this.icon}"></span>`;
  }

  set newText(newText){
    this.text = newText;
    this.render();
  }
}

class ButtonUpgrade extends Button{
  constructor(element, text, icon){
    super(element, text, icon);
    this.changeRed();
  }

  changeRed(){
    this.element.style.color = "red";
  }
}

const myButton = new Button(`.hello-button`, `Click me`, `user`);
const redButton = new ButtonUpgrade(`.hello-button`, `Click me`, `stats`);
redButton.newText= "Nuevo texto";

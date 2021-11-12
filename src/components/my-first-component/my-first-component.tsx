import { Component, Host, h, Prop, State, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'my-first-component',
  styleUrl: 'my-first-component.scss',
  shadow: true,
})
export class MyFirstComponent {

  @Prop() names: string[];
  @Prop() name: string = 'Nome';

  @Event() buttonClicked: EventEmitter<string>;

  @State() store = {};

  @Element() element: HTMLElement;

  componentDidUpdate() {
    console.log('Update prop')
  }

  componentDidRender() {
    console.log('renderizei');
    this.element.shadowRoot.querySelector('label').style.color = 'red';
  }

  buttonClickHandler() {
    this.buttonClicked.emit('emitir o evento de click');
    this.store = {};
  }

  render() {

    return (
      <Host>
        <h1>Hello, {this.name}</h1>
        <br></br>
        {this.names.map(name => <p><label>{name}</label></p>)}

        {/* <slot></slot> */}
      </Host>
    );
  }

}

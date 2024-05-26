import { Component } from '../framework/component.js';

export default class Barcode extends Component {
  constructor(document) {
    super('app-barcode', document);

    this.props = {
      body: '',
    };
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);
    return templateClone;
  }
}

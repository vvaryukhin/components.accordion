import { ComponentSettings } from 'v.components.core'

export default class AccordionSettings extends ComponentSettings {
  /**
     * Constructor
     * @param {object} settings
     */
  constructor(settings = {}) {
    super(settings);
    this.settings = Object.assign({}, {
      name: 'accordion',
      selector: {
        autoload: '[data-component="accordion"]',
        item: '.accordion__item',
      },
      classes: {
        group: 'AccordionGroup',
        item: 'AccordionItem',
        constructor: 'AccordionConstructor',
      },
    }, settings);
  }
}

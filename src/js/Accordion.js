import Component from 'v.components.core';
import AccordionSettings from './AccordionSettings';
import AccordionGroup from './AccordionGroup';
import AccordionConstructor from './AccordionConstructor';

const SettingsInstance = new AccordionSettings();

export default class Accordion extends Component {
  /**
   * Autoload accordions on page
   *
   * @param {object} config Settings for whole plugin Accordion
   *
   * @returns {array} of accodrions each instanceOf {AccorionGroup}
   *
   * @toDo replace it with {AccordionsCollection}
   */
  static autoload(settings = {}) {
    const s = SettingsInstance.extend(settings);

    const document = s.get('document');
    const selector = s.get('selector.autoload');

    const nodes = document.querySelectorAll(selector);

    const accordions = [...nodes].map(node => new AccordionGroup(node, s));

    return accordions;
  }

  /**
   * Load required element
   *
   * @param {node} node Node Element
   * @param {object} settings
   *
   * @returns {object} AccordionGroup
   */
  static load(node, settings = {}) {
    return new AccordionGroup(node, Accordion.setup(settings));
  }

  /**
   * Make new accordion
   *
   * @param {object} settings
   *
   * @returns {object} AccorionConstructor
   */
  static make(settings = {}) {
    return new AccordionConstructor(Accordion.setup(settings));
  }
}

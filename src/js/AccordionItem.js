export default class AccorionItem {
    node = null

    handler = null

    content = null

    settings = {}

    state = null

    constructor(node, settings) {
      this.node = node;
      this.settings = settings;

      this.handler = node.querySelector('.accordion__handler');
      this.content = node.querySelector('.accordion__content');
    }

    open() {
      this.node.classList.add('accordion__item--active');
      this.state = 1;
    }

    close() {
      this.node.classList.remove('accordion__item--active');
      this.state = 0;
    }

    toggle() {
      if (this.state) {
        this.close();
      } else {
        this.open();
      }
    }
}

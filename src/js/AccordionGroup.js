import AccordionItem from './AccordionItem';

export default class AccorionGroup {
    node = null

    settings = {}

    items = []

    constructor(node, settings) {
      this.node = node;
      this.settings = settings;

      const items = this.node.querySelectorAll(this.settings.get('selector.item'));
      this.items = [...items].map(n => new AccordionItem(n, settings));

      this.closeAll(0);
    }

    closeAll() {
      this.items.forEach(i => i.close());
    }

    openAll() {
      this.items.forEach(i => i.open());
    }
}

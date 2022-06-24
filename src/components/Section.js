class Section {
    constructor({items, renderer}, selector) {
        this._container = document.querySelector(selector);
        this._renderer = renderer;
        this._items = items;
    }

    render() {
        this._items.forEach(element => {
            this._container.appendChild(this._renderer(element))
        });
    }

    addItem(element) {
        this._container.prepend(element)
    }
}

export default Section;
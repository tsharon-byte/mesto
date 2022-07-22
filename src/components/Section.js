class Section {
    constructor({renderer}, selector) {
        this._container = document.querySelector(selector);
        this._renderer = renderer;
    }

    render(items) {
        this._items = items;
        this._items.forEach(element => {
            this._container.appendChild(this._renderer(element))
        });
    }

    addItem(element) {
        this._container.prepend(element)
    }
}

export default Section;
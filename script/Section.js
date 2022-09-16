export class Section {
    constructor ({items, renderer}, containerSelector ) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._containerSelector = containerSelector;
        
    }
 render = () => {
    this._renderedItems.forEach( item =>{
        this._renderer(item);
        console.log(item);
    })
    
 }

 addItem = (element) => {
    this._container.prepend(element);
 }
}

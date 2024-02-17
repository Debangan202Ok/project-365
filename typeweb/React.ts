class React {
  static render(root: HTMLDivElement, elem: HTMLDivElement) {
    root.append(elem);
  }
  
  static createElem(tag: string, title: string): HTMLElement {
    let elem: HTMLElement = document.createElement(tag);
    elem.innerText = title;
    return elem;
  }
}

export default React;

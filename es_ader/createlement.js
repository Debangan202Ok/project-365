class React {
  static Render(root, elem) {
    root.append(elem);
  }
  static createElem(tag, obj, content) {
    const elem = document.createElement(tag);
    elem.innerText = content;
    console.log(obj);
    Object.entries(obj).forEach((o) => {
      elem.setAttribute(o[0], o[1]);
    });
    return elem;
  }
}
export default React;

export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props: Partial<HTMLElementTagNameMap[K]> & {
    childs?: HTMLElement[];
  }
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);
  const { childs, ...other } = props;
  Object.assign(element, other);
  if (childs) {
    element.append(...childs);
  }
  return element;
}
import $ from "jquery";

// matches the given query with the given element and it's parents.
// returns the one matched else returns undefined
export function match(element: HTMLElement, query: string) {
  if ($(element).is(query)) {
    return element;
  } else if ($(element).parents(query).length > 0) {
    return $(element).parents(query)[0];
  } else return undefined;
}

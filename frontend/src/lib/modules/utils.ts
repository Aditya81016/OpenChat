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

export function getTime() {
  const now = new Date();

  let hours = now.getHours();
  const mins = now.getMinutes();
  let period = "AM";

  if (hours > 12) {
    hours -= 12;
    period = "PM";
  }

  // formatted hours
  const fHours = hours < 10 ? "0" + hours : "" + hours;
  const fMins = mins < 10 ? "0" + mins : "" + mins;

  const time = `${fHours}:${fMins} ${period}`;

  return time;
}

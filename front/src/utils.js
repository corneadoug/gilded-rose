export function itemMatchesFilter(item, filter) {
  let isAMatch = true;

  // TODO - Try to find a better way to handle those checks, Typescript?
  if (item && item.name && item.hasOwnProperty('quality') && filter &&
    filter.hasOwnProperty('name') && filter.hasOwnProperty('minQuality') && filter.hasOwnProperty('maxQuality')) {
    // Check for name filter
    if (filter.name !== '' && !item.name.toLowerCase().includes(filter.name.toLowerCase())) {
      isAMatch = false;
    }

    // Check for Quality filter
    if (item.quality < filter.minQuality || item.quality > filter.maxQuality) {
      isAMatch = false;
    }
  } else {
    return false;
  }

  return isAMatch;
}
export function itemMatchesFilter(item, filter) {
    let isAMatch = true;

    // Check for name filter
    if (filter.name !== '' && !item.name.toLowerCase().includes(filter.name.toLowerCase())) {
        isAMatch = false;
    }

    // Check for Quality filter
    if (item.quality < filter.minQuality || item.quality > filter.maxQuality) {
      isAMatch = false;
    }

    return isAMatch;
}
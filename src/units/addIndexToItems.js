export function addIndexToItems(items) {
  return items.map((item, index) => {
    return { id: index + 1, ...item };
  });
}

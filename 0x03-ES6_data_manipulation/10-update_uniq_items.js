const updateUniqueItems = (items) => {
  if (Object.getPrototypeOf(items) !== Map.prototype) throw Error('Cannot process');

  items.forEach((item, quantity) => {
    if (quantity === 1) {
      items.set(item, 100);
    }
  });

  return items;
};

export default updateUniqueItems;

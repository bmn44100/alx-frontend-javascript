let endpointQueries = 0;
export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }

  endpointQueries += 1;
  weakMap.set(endpoint, endpointQueries);
};

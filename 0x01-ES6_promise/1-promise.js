export default function getFullResponseFromAPI(success) {
  const booleanPromise = new Promise((resolve, reject) => {
    if (success !== false) {
      resolve({ status: 200, body: 'Success' });
    }

    reject(new Error('The fake API is not working currently'));
  });
  return booleanPromise;
}

export default function uploadPhoto(filename) {
  const image = new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
  return image;
}

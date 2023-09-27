import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const image = await uploadPhoto();
    const signUp = await createUser();
    return { photo: image, user: signUp };
  } catch (e) {
    return { photo: null, user: null };
  }
}

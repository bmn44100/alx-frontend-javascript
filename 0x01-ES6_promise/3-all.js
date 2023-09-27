import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const image = await uploadPhoto();
    const profile = await createUser();
    console.log(`${image.body} ${profile.firstName} ${profile.lastName}`);
  } catch (e) {
    console.log('Signup system offline');
  }
}

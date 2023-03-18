export const getProfileImageSrc = (id: string) => {
  return `https://api.dicebear.com/5.x/shapes/svg?seed=${id}`;
};

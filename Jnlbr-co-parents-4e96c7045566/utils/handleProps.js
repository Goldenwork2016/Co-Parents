export const handleAvatarProps = (icon, title) => {
  return icon !== null? { source: { uri: icon }} : { title };
}
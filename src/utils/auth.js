// eslint-disable-next-line import/prefer-default-export
export const isAuthenticated = () => {
  const token = !!sessionStorage.getItem("token");
  console.log(token);
  return token;
};

export const emailValidade = (email, data) => {
  if (email) {
    const re = /\S+@\S+\.\S+/;
    const validate = re.test(email);
    if (validate) {
      return {
        ...data,
        valid: true,
        invalid: false,
      };
    }
    return {
      ...data,
      invalid: true,
      valid: false,
    };
  }
  return {
    ...data,
    invalid: false,
    valid: false,
  };
};

export const passwordValidade = (password, data) => {
  if (password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    const validate = re.test(password);
    if (validate) {
      return {
        ...data,
        valid: true,
        invalid: false,
      };
    }
    return {
      ...data,
      invalid: true,
      valid: false,
    };
  }
  return {
    ...data,
    invalid: false,
    valid: false,
  };
};

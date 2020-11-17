/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
export const nameValidade = (name, data) => {
  if (name) {
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
};

export const rgValidade = (rg, data) => {
  if (rg) {
    const re = /(\d{1,2}\.?)(\d{3}\.?)(\d{3})(\-?[0-9Xx]{1})/g;
    const validate = re.test(rg);
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

export const phoneValidade = (phone, data) => {
  if (phone) {
    const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    const validate = re.test(phone);
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

export const confirmPasswordValidade = (confirmPassword, password, data) => {
  if (confirmPassword) {
    if (confirmPassword === password) {
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

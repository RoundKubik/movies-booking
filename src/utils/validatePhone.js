import { isValidPhoneNumber } from "libphonenumber-js";

const errorMessage = "Invalid phone number format";

export const validatePhoneNumber = (phoneNumber) => {
  if (!isValidPhoneNumber(phoneNumber)) {
    return errorMessage;
  }
  return "";
};

//* Imports
import validator from "validator";

//* validateIp Helper Function
const validateIp = (searchText: string) => {
  const validateResult =
    validator.isIP(searchText) || validator.isFQDN(searchText);

  if (validateResult) return true;
  return false;
};

export default validateIp;

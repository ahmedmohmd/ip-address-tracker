import validator from "validator";

const validateIp = (searchText: string) => {
  const validateResult =
    validator.isIP(searchText) || validator.isFQDN(searchText);

  if (validateResult) return true;
  return false;
};

export default validateIp;

// import Joi from "joi";

// const schema = Joi.object({
//   ip: Joi.string().ip({
//     version: ["ipv4"],
//   }),
// });

// const validateIp = (ip: string): boolean => {
//   const error = schema.validate({ ip }).error?.details[0].message;

//   if (error) return false;
//   return true;
// };

// export default validateIp;

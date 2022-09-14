import { useState, useEffect } from "react";
import useValidation from "../../../hooks/useValidation";
import useForm from "../../../hooks/useValidation";
const Details = ({ formData, setFormData }) => {
  //   const {
  //     validName,
  //     validEmail,
  //     validAccount,
  //     validCBEBirrMerchantCode,
  //     handleSchoolNameChange,
  //     handleEmailChange,
  //     handleAccountChange,
  //     handleCBEBirrMerchantCodeChange,
  //     } = useValidation({ formData, setFormData });
  const { values, validName, validEmail, handleChange } = useForm();

  return (
    <div>
      <form className="inputs">
        <input type="text" onChange={handleChange} />
        <input type="email" onChange={handleChange} />
        <input type="password" onChange={handleChange} />
        <input type="submit" onChange={handleChange} />
      </form>
    </div>
  );
};

export default Details;

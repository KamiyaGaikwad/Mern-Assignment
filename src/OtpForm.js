import React, { useRef } from "react";

const OtpForm = () => {
  const inputs = Array.from({ length: 8 }, () => useRef(null));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 7) {
      inputs[index + 1].current.focus();
    }
  };

  return (
    <div className="otp-form">
      <form>
        {inputs.map((inputRef, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            ref={inputRef}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </form>
    </div>
  );
};

export default OtpForm;

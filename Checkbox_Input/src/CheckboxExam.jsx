import React , { useState} from 'react'

const CheckboxExam = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        Accept Terms and Conditions
      </label>
      <p>{isChecked ? "Accepted" : "Not Accepted"}</p>
    </div>
  );
}

export default CheckboxExam
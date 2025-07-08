import React , { useState} from 'react'

const SelectExample = () => {
  const [language, setLanguage] = useState("JavaScript");

  const handleChange = (e) => {
    setLanguage(e.target.value)
  };

  return (
    <div>
      <label>Select Language:</label>
      <select value={language} onChange={handleChange}>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
      </select>
      <p>You selected: {language}</p>
    </div>
  );
}

export default SelectExample
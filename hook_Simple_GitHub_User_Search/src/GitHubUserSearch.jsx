import React, { useState , useEffect } from 'react'

const GitHubUserSearch = () => {
  const [userName , setUserName] = useState('sambit455');
  const [inputValue , setInputValue] = useState('');
  const [userData , setUserData] = useState(null);

  useEffect(() => {
    if (!userName) return;

    const fetchUser = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();
  }, [userName]);

  const handleSearch = () => {
    if(inputValue.trim() !== ''){
      setUserName(inputValue.trim());
    }
  };

  return (
      <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>🔍 GitHub User Search</h2>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: '18px', width: '80%' }}
      />
      <button onClick={handleSearch} style={{ padding: '8px 12px', marginLeft: '10px', marginTop: '10px' , background: 'blue' , color: 'White'}}>
        Search
      </button>

      {userData && (
        <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '15px', borderRadius: '10px' }}>
          <img src={userData.avatar_url} alt="avatar" width="100" style={{ borderRadius: '50%' }} />
          <h3>{userData.name || 'No name found'}</h3>
          <p>💼 {userData.bio || 'No bio available'}</p>
          <p>📍 {userData.location || 'Location unknown'}</p>
          <p>🌟 Followers: {userData.followers}</p>
        </div>
      )}
    </div>
  )
}

export default GitHubUserSearch
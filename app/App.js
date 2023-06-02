import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [selectedTimes, setSelectedTimes] = useState([]);

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayParts = ['8-10', '10-12', '12-14', '14-16', '16-18', '18-20', '20-22'];

  const handleTimeSelection = (day, part) => {
    const timeSlot = `${day} ${part}`;
    if (selectedTimes.includes(timeSlot)) {
      setSelectedTimes(selectedTimes.filter(item => item !== timeSlot));
    } else {
      setSelectedTimes([...selectedTimes, timeSlot]);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/schedule', { username, selectedTimes });
      alert('Done');
    } catch (err) {
      console.error(err);
      alert('Failure');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Input User's Name."
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <div>
        {weekDays.map(day =>
          dayParts.map(part => (
            <div key={`${day}-${part}`} onClick={() => handleTimeSelection(day, part)}>
              <input type="checkbox" checked={selectedTimes.includes(`${day} ${part}`)} readOnly />
              <label>{`${day} ${part}`}</label>
            </div>
          ))
        )}
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;

let schedules = [];  // In-memory storage for meeting schedules

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { username, selectedTimes } = req.body;

    // Add the new schedule to the in-memory storage
    schedules.push({
      username,
      times: selectedTimes,
    });

    res.status(200).send('Schedule added');
  } else if (req.method === 'GET') {
    res.status(200).json(schedules);
  } else {
    res.status(405).send('Method not allowed');
  }
};

const poll = new Map([
  ['Turkey', new Set()],
  ['Syria', new Set()],
  ['China', new Set()]
]);

poll.get('Turkey').add('1.Oy');
poll.get('Syria').add('2.Oy');
poll.get('Syria').add('3.Oy');

const addOption = (option) => {
  if (option === '') {
    return "Option cannot be empty.";
  }
  else if (poll.has(`${option}`)) {
    return `Option "${option}" already exists.`;
  }
  else {
    poll.set(`${option}`, new Set());
    return `Option "${option}" added to the poll.`;
  }
}

const vote = (option, voterId) => {
  if (poll.has(option)) {
    if (poll.get(option).has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`
    }
    else {
      poll.get(option).add(voterId);
      return `Voter ${voterId} voted for "${option}".`;
    }
  }
  else {
    return `Option "${option}" does not exist.`;
  }
}

const displayResults = () => {
  let sonuc = "Poll Results:\n";
  let sayac = 0;
  
  for (let [option, voters] of poll) {
    sonuc += `${option}: ${voters.size} votes`;
    sayac++;
    if (sayac < poll.size) sonuc += "\n";
  }
  
  return sonuc;
};

const game = (isSwitching) => {
  const doors = [];
  const winningDoor = Math.floor(Math.random() * 3);
  let selectedDoor = Math.floor(Math.random() * 3);
  for (let i = 0; i < 3; i++) doors[i] = i === winningDoor ? "car" : "goat";
  const openedDoor = doors.findIndex(
    (thing, door) =>
      door !== winningDoor && door !== selectedDoor && thing === "goat"
  );
  if (isSwitching)
    selectedDoor = doors.findIndex(
      (thing, door) => door !== selectedDoor && door !== openedDoor
    );
  return doors[selectedDoor] === "car";
};

const play = (n, isSwitching) => {
  let won = 0;
  for (let i = 0; i < n; i++) game(isSwitching) && won++;
  return (won / n) * 100 + "%";
};

console.log(play(100000, false));

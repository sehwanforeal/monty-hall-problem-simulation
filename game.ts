const simulate = (isSwitching: boolean) => {
  const doors = generateDoors();
  let selectedDoorIndex = randomNumber(3);
  const openedDoor = openDoor();
  if (isSwitching) switchDoor();
  return doors[selectedDoorIndex] === "car";

  function generateDoors() {
    const doors = [];
    const winningDoorIndex = randomNumber(3);
    for (let i = 0; i < 3; i++)
      doors[i] = i === winningDoorIndex ? "car" : "goat";
    return doors;
  }

  function openDoor() {
    return doors.findIndex(
      (value, index) => value !== "car" && index !== selectedDoorIndex
    );
  }

  function switchDoor() {
    selectedDoorIndex = doors.findIndex(
      (value, index) => index !== selectedDoorIndex && index !== openedDoor
    );
  }
};

const randomNumber = (range: number) => Math.floor(Math.random() * range);

const getResult = ({ playCount, isSwitching }): string => {
  return simulateMultiple(playCount, isSwitching);

  function simulateMultiple(playCount: number, isSwitching: boolean) {
    let win = 0;
    for (let i = 0; i < playCount; i++) simulate(isSwitching) && win++;
    return getOdds(playCount, win);
  }

  function getOdds(playCount: number, winCount: number) {
    return (winCount / playCount) * 100 + "%";
  }
};

const playCount = 10000;
console.log("switching :", getResult({ playCount, isSwitching: true }));
console.log("not switching :", getResult({ playCount, isSwitching: false }));

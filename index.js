// code your solution here
function superbowlWin(record) {
  const winRecord = record.find((element) => element.result === "W");
  if (winRecord) {
    return winRecord.year;
  }

  return undefined;
}

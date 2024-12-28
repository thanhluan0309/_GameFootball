export const ConvertTimeTamp = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  return formattedDate;
};

export const getRandomTechnical = (arr, count) => {
  const result = [];
  const indices = new Set();

  while (indices.size < count) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!indices.has(randomIndex)) {
      indices.add(randomIndex);
      result.push(arr[randomIndex]);
    }
  }

  return result;
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomId = (length = 8) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";
  for (let i = 0; i < length; i++) {
    randomId += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomId;
};

export const checkPassing = (techniqueScore, defenseScore) => {
  const defensiveRatio = defenseScore / (techniqueScore + defenseScore);
  return Math.random() < defensiveRatio ? 0 : 1;
};

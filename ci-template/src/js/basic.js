export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

const obj = {name: 'Маг', health: 90};

export default function mag(obj){
  if (obj.health < 15) {
    return healthMag = critical;
  }
  if (obj.health > 15 && obj.health < 50) {
    return healthMag = wounded;
  }
  if (obj.health > 50) {
    return healthMag = healthy;
  }
}
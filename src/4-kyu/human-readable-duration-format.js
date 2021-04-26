/* Source: https://www.codewars.com/kata/52742f58faf5485cae000b9a */

function getDuration(time, timeLength) {
  const result = time / timeLength;
  return [Math.floor(result), Math.round((result - parseInt(result.toString().split('.')[0], 10)) * timeLength)];
}

function getValues(seconds) {
  let time = seconds;
  let iteration = 0;
  const result = [];

  while (time > 0) {
    let temp = 0;

    if (iteration < 2) {
      [time, temp] = getDuration(time, 60);
      result.push(temp);
    } else if (iteration === 2) {
      [time, temp] = getDuration(time, 24);
      result.push(temp);
    } else {
      [time, temp] = getDuration(time, 365);
      result.push(temp);

      if (time > 0) result.push(time);

      time = 0;

      break;
    }

    iteration += 1;
  }

  return result;
}

function getTimeString(time, string) {
  return time > 1 ? `${time} ${string}s` : `1 ${string}`;
}

function formatDuration(seconds) {
  if (seconds === 0) return 'now';

  const times = getValues(seconds);

  const result = [];

  times.reverse().forEach((time, index) => {
    if (times[index] !== 0) {
      switch (times.length - index - 1) {
        case 0:
          result.push(getTimeString(time, 'second'));
          break;
        case 1:
          result.push(getTimeString(time, 'minute'));
          break;
        case 2:
          result.push(getTimeString(time, 'hour'));
          break;
        case 3:
          result.push(getTimeString(time, 'day'));
          break;
        case 4:
          result.push(getTimeString(time, 'year'));
          break;
        default:
          break;
      }
    }
  });

  if (result.length > 1) result[result.length - 2] += ` and ${result.pop()}`;

  return result.join(', ');
}

module.exports = { formatDuration };

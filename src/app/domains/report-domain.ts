import { DateTime } from 'luxon';

export const reportTemplate = '# お気持ち\n\n# 今日やったこと\n\n# 明日(次回)やること';

export function makeDatePath(): string {
  const { year, month, day } = DateTime.local();

  let monthString: string;
  let dayString: string;

  if (month >= 10) {
    monthString = month.toString();
  } else {
    monthString = `0${month.toString()}`;
  }

  if (day >= 10) {
    dayString = day.toString();
  } else {
    dayString = `0${day.toString()}`;
  }

  return `${year}/${monthString}/${dayString}`;
}

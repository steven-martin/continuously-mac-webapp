import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    let result: string;

    // current time
    const now = new Date().getTime();

    // time since the provided date value
    const deltaDate: Date = new Date(value);
    const delta = (now - deltaDate.getTime()) / 1000;

    // format the value into a valid string
    if (delta < 60) {
      result = 'Just Now.';
    } else if (delta < 130) {
      // sent in last minute
      result = 'Posted about ' + Math.floor(delta) + ' seconds ago.';
    } else if (delta < 7210) {
      // sent in last hour
      result = 'Posted about ' + Math.floor(delta / 60) + ' minutes ago.';
    } else if (delta < 172810) {
      // sent on last day
      result = 'Posted about ' + Math.floor(delta / 3600) + ' hours ago.';
    } else {
      // sent more than one day ago
      result = 'Posted about ' + Math.floor(delta / 86400) + ' days ago.';
    }
    return result;
  }
}

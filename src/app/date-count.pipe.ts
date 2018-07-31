import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDifference = Math.abs(value - todayWithNoTime ); // returns value in millisecond
    const secondsInADay = 86400; // 60 *60 *24hrs

    const dateDifferenceSeconds = dateDifference * 0.001; // converts to seconds

    const dateCounter = dateDifferenceSeconds / secondsInADay;

    if (dateCounter >= 1) {
        return dateCounter;
    } else {
        return 0;
    }
  }

}

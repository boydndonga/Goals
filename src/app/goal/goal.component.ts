import { Goal } from './../goal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
    new Goal(1, 'Watch Finding Nemo', 'first desc', new Date(2018, 6, 9)),
    new Goal(2, 'Buy Cookies', 'second desc', new Date(2018, 10, 12)),
    new Goal(3, 'Get new Phone Case', 'third desc', new Date(2018, 8, 15)),
    new Goal(4, 'Get Dog Food', 'fourth desc', new Date(2018, 4, 10)),
    new Goal(5, 'Solve math homework', 'fifth desc', new Date(2018, 6, 19)),
    new Goal(6, 'Plot my world domination plan', 'final desc', new Date(2018, 3, 20)), ];

    toogleDetails(index) {
      this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
        this.goals.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}

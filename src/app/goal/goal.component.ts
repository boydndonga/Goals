import { Goal } from './../goal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
    new Goal(1, 'Watch Finding Nemo', 'first desc'),
    new Goal(2, 'Buy Cookies', 'second desc'),
    new Goal(3, 'Get new Phone Case', 'third desc'),
    new Goal(4, 'Get Dog Food', 'fourth desc'),
    new Goal(5, 'Solve math homework', 'fifth desc'),
    new Goal(6, 'Plot my world domination plan', 'final desc'), ];

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

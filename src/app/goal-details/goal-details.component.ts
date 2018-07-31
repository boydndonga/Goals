import { Goal } from './../goal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() goal: Goal;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit} from '@angular/core';
import { Goal } from './../goal';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { GoalService } from '../goals/goal.service';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css'],
  providers: [GoalService]
})
export class GoalDetailsComponent implements OnInit {

  goal: Goal;
  paramMap: ParamMap;
  // @Input() goal: Goal;
  // @Output() isComplete = new EventEmitter<boolean>();

  // goalComplete(complete: boolean) {
  //   this.isComplete.emit(complete);
  // }

  constructor(private route: ActivatedRoute,
    private service: GoalService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id);
 }
}

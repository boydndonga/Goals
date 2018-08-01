import { Quote } from './../quote-class/quote';
import { AlertsService } from './../alert-service/alerts.service';
import { GoalService } from './../goals/goal.service';
import { Goals } from './../goals';
import {HttpClient} from '@angular/common/http';
// import { Goal } from './../goal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  providers: [GoalService],
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  quote: Quote;
  goals = Goals;
  alertService: AlertsService;
  constructor(goalService: GoalService, alertService: AlertsService, private http: HttpClient) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
     }

    toogleDetails(index) {
      this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`);
      if (toDelete) {
          this.goals.splice(index, 1);
          this.alertService.alertMe('Goal deleted successfully');
      }
    }
  }

  addNewGoal(goal) {
    const goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);

}


  ngOnInit() {
    interface ApiResponse {
      quote: string;
      author: string;
    }
    this.http.get<ApiResponse>('https://talaikis.com/api/quotes/random/').subscribe(data => {
      this.quote = new Quote(data.quote, data.author);
  }, () => {
        this.quote = new Quote('Never, never, never give up.', 'winston churchill');
        console.log('Error occured ');
      });
  }

}

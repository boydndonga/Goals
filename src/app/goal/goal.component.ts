import { Router } from '@angular/router';
import { Quote } from './../quote-class/quote';
import { AlertsService } from './../alert-service/alerts.service';
import { GoalService } from './../goals/goal.service';
import { Goal } from './../goal';
import {QuoteRequestService} from './../quote-http/quote-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  providers: [GoalService, QuoteRequestService],
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  quote: Quote;
  goals: Goal[];
  alertService: AlertsService;

  toogleDetails(index) {
      this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(index) {
      const toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`);
      if (toDelete) {
          this.goals.splice(index, 1);
          this.alertService.alertMe('Goal deleted successfully');
      }
  }

  goToUrl(id) {
    this.router.navigate(['/goals', id]);
  }

  addNewGoal(goal) {
    const goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);

  }

  constructor(goalService: GoalService, alertService: AlertsService,
    private quoteService: QuoteRequestService, private router: Router) {
     this.goals = goalService.getGoals();
     this.alertService = alertService;
  }



  ngOnInit() {
    this.quoteService.quoteRequest();
    this.quote = this.quoteService.quote;
  }

}

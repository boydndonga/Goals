import { Goals } from './../goals';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  constructor() {
    // No code here
  }
  getGoals() {
    return Goals;
  }
  getGoal(id) {
    try {
      for (const goal of Goals) {
        if (goal.id == id) {
            return goal;
        }
    }
    } catch (error) {
      console.log('no id found');
    }
  }
}

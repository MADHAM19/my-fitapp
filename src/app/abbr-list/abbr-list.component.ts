import {Component, OnInit} from '@angular/core';
import {Exercise} from '../exercise';
import {ExerciseService} from '../exercise.service';

@Component({
  selector: 'app-abbr-list',
  templateUrl: './abbr-list.component.html',
  styleUrls: ['./abbr-list.component.css']
})
export class AbbrListComponent implements OnInit {
  exercises: Exercise[];

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit() {
      this.getExercices();
  }

  getExercices(): void {
    this.exerciseService.getExercises()
      .subscribe(exercise=>this.exercises = exercise);
  }

}

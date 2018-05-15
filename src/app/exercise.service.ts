import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Exercise} from './exercise'

@Injectable()
export class ExerciseService {

  private exerciseUrl = 'api/exercises';  // URL to web api
  constructor(private http: HttpClient) {
  }

  /** GET heroes from the server */
  getExercises(): Observable < Exercise[] > {
    return this.http.get<Exercise[]>(this.exerciseUrl)
  }

}

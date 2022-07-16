import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchURL:string= "http://localhost:3001/matches";
  // matchURL:string= "api/matches";
  constructor(private httpClient:HttpClient) { }

  getAllMatches(){
    return this.httpClient.get<{matchesRes:any}>(this.matchURL);
  }

  getMatchById(id:number){
    return this.httpClient.get<{findedMatch:any}>(`${this.matchURL}/${id}`);
  }

  salahYfassa5(id:number){
    return this.httpClient.delete<{message:string}>(`${this.matchURL}/${id}`);
  }

  addMatch(match:any){
    return this.httpClient.post<{message:string}>(this.matchURL, match);
  }

  editMatch(match){
    return this.httpClient.put<{message:string}>(`${this.matchURL}/${match._id}`, match);
  }
}

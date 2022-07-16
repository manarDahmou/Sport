import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  // teamURL:string= "http://localhost:3000/teams";
  teamURL:string= "api/teams";
  constructor(private httpClient:HttpClient) { }

  getAllTeams(){
    return this.httpClient.get(this.teamURL);
  }

  getTeamById(id:number){
    return this.httpClient.get(`${this.teamURL}/${id}`);
  }

  deleteTeamById(id:number){
    return this.httpClient.delete(`${this.teamURL}/${id}`);
  }

  addTeam(team:any){
    return this.httpClient.post(this.teamURL, team);
  }

  editTeam(team){
    return this.httpClient.put(`${this.teamURL}/${team.id}`, team);
  }
}

import { Router } from '@angular/router';
import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {

  teams: any;
  constructor(
    private teamService:TeamService,
    private router:Router) { }

  ngOnInit() {
    this.getAllTeams();
  }

  deleteTeam(id){
    this.teamService.deleteTeamById(id).subscribe(
      ()=>{
        console.log('Deleted with success');
        this.getAllTeams();
      }
    );
  }
  getAllTeams(){
    this.teamService.getAllTeams().subscribe(
      (data)=> {
        this.teams = data;
      }
    )
  }

  displayTeam(x){
    this.router.navigate([`displayTeam/${x}`]);
  }

  editTeam(id){
    this.router.navigate([`edit-team/${id}`]);
  }

}

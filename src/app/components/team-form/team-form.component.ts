import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from './../../services/team.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {
  teamForm: FormGroup;
  team: any = {};
  id:any;
  title:string= "Add";
  constructor(
    private formBuilder: FormBuilder, 
    private teamService:TeamService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'Edit';
      this.teamService.getTeamById(this.id).subscribe(
        (data)=> {
          this.team = data;
        }
      )
    }
    this.teamForm = this.formBuilder.group({
      name: [''],
      stadium: [''],
      owner: [''],
      foundation: ['']
    });
  }
  addTeam() {
    console.log('Here team object', this.team);
    if (this.id) {
      this.teamService.editTeam(this.team).subscribe(
        ()=>{
          console.log('Edited with success');
          this.router.navigate(['admin']);
        }
      );
    } else {
      this.teamService.addTeam(this.team).subscribe(
        ()=>{
          console.log('Added with success');
          this.router.navigate(['admin']);
        }
      );
    }
  }

}

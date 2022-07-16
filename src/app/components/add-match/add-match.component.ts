import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  matchForm: FormGroup;
  match: any = {};
  constructor(
    private formBuilder: FormBuilder, 
    private matchService:MatchService,
    private router:Router) { }

  ngOnInit() {
    this.matchForm = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    });
  }

  addMatch() {
    console.log('Here match object', this.match);
    this.matchService.addMatch(this.match).subscribe(
      ()=>{
        console.log('Added with success');
        this.router.navigate(['admin']);
      }
    );
  }

}

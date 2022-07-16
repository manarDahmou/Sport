import { Router, ActivatedRoute } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  matchForm: FormGroup;
  match: any = {};
  id:any;
  constructor(
    private formBuilder: FormBuilder, 
    private matchService:MatchService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      (data)=> {
        this.match = data.findedMatch;
      }
    )
  }
  editMatch() {
    console.log('Here match object', this.match);
    this.matchService.editMatch(this.match).subscribe(
      (data)=>{
        console.log('Edited with success', data.message);
        this.router.navigate(['admin']);
      }
    );
  }

}

import { Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {

  matches: any;
  constructor(
    private matchService:MatchService,
    private router:Router) { }

  ngOnInit() {
    this.getAllMatches();
  }

  deleteMatch(id){
    this.matchService.salahYfassa5(id).subscribe(
      (data)=>{
        console.log('Deleted with success', data.message);
        this.getAllMatches();
      }
    );
  }
  getAllMatches(){
    this.matchService.getAllMatches().subscribe(
      (data)=> {
        this.matches = data.matchesRes;
      }
    )
  }

  displayMatch(x){
    this.router.navigate([`displayMatch/${x}`]);
  }

  editMatch(id){
    this.router.navigate([`editMatch/${id}`]);
  }
  

}

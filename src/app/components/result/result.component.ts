import { MatchService } from './../../services/match.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() matchInput:any;
  @Output() newMatches:EventEmitter<any> = new EventEmitter();
  constructor(private matchService:MatchService) { }

  ngOnInit() {
  }

  deleteMatch(id){
    console.log('selected match', id);
    this.matchService.salahYfassa5(id).subscribe(
      (data)=> {
        console.log('Data after delete', data.message);
        this.matchService.getAllMatches().subscribe(
          (data)=>{
            this.newMatches.emit(data.matchesRes);
          }
        )
      }
    )
  }

}

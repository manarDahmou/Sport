import { ProfileComponent } from './components/profile/profile.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // '' => http://localhost:4200
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'matches', component:MatchesComponent},
  {path:'addMatch', component:AddMatchComponent},
  {path:'admin', component:AdminComponent},
  {path:'displayMatch/:id', component:DisplayMatchComponent},
  {path:'editMatch/:id', component:EditMatchComponent},
  {path:'addTeam', component:TeamFormComponent},
  {path:'edit-team/:id', component:TeamFormComponent},
  {path:'profile/:id', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersService } from './teachers/teachers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './courses/summary.pipe';
import { TwoincricleComponent } from './twoincricle/twoincricle.component';
import { AngContentComponent } from './ang-content/ang-content.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponentComponent } from './new-course-component/new-course-component.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { FollowersComponent } from './followers/followers.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TeachersComponent,
    SummaryPipe,
    TwoincricleComponent,
    AngContentComponent,
    DirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseComponentComponent,
    ChangepasswordComponent,
    PostComponent,
    FollowersComponent,
    NotfoundComponent,
    GithubfollowersComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'followers/:id/:username', component: GithubfollowersComponent },
      { path: 'followers', component: FollowersComponent },
      { path: 'posts', component: PostComponent },
      { path: '**', component: NotfoundComponent },
    ]),
    [MatToolbarModule, MatButtonModule, MatIconModule],
  ],
  providers: [CoursesService, TeachersService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}

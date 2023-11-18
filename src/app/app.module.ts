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
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableOverviewExampleComponent } from './table-overview-example/table-overview-example.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { LogTestComponent } from './log-test/log-test.component';
import { MatSelectModule } from '@angular/material/select';
import { RequestComponent } from './request/request.component';
import { CustomMatPaginatorIntl } from './request/custom-mat-paginator-intl';

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
    LoginComponent,
    TableOverviewExampleComponent,
    LogTestComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // { path: '', component: HomeComponent },
      // { path: 'followers/:id/:username', component: GithubfollowersComponent },
      // { path: 'followers', component: FollowersComponent },
      // { path: 'posts', component: PostComponent },
      // { path: '**', component: NotfoundComponent },
    ]),
    [MatSelectModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatPaginatorModule, MatTableModule, MatSortModule],
    LoggerModule.forRoot({ serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR })
  ],
  providers: [CoursesService, TeachersService, PostService,
     {
    provide: MatPaginatorIntl,
    useClass: CustomMatPaginatorIntl
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }

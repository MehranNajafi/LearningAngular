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
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableOverviewExampleComponent } from './table-overview-example/table-overview-example.component';
import { PopperDirective } from './popper.directive';
import { PopperrxampleComponent } from './popperrxample/popperrxample.component';
import { LookupComponent } from './lookup/lookup.component';
import { LookupSampleComponent } from './lookup/lookup-sample/lookup-sample.component';
import { MatSelectModule } from '@angular/material/select';
import { SearchPipe } from './lookup/search.Pipe';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { RequestComponent } from './request/request.component';
import { CustomMatPaginatorIntl } from './request/custom-mat-paginator-intl';
import { RequestDialogComponent } from './request-dialog/request-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
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
    PopperDirective,
    PopperrxampleComponent,
    LookupComponent,
    LookupSampleComponent,
    SearchPipe,
    RequestComponent,
    RequestDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:id/:username', component: GithubfollowersComponent },
      { path: 'followers', component: FollowersComponent },
      { path: 'posts', component: PostComponent },
      { path: '**', component: NotfoundComponent },
    ]),
    [MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatPaginatorModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule],
  ],
  providers: [CoursesService, TeachersService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule { }

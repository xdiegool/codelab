import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { FeedbackPageComponent } from './feedback-page.component';
import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '../../../../../../libs/presentation/src/lib/slide-routes';
import { FormsModule } from '@angular/forms';
import { BrowserWindowModule } from '../../../../../../libs/browser/src/lib/browser.module';

import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './github.service';
import { environment } from '../../../environments/environment';
import { SlidesModule } from '@codelab/slides';

const routes = RouterModule.forChild(SlidesRoutes.get(FeedbackPageComponent));

export const angularFire = AngularFireModule.initializeApp(
  environment.firebaseConfig
);

@NgModule({
  imports: [
    routes,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserWindowModule,

    angularFire,
    FormsModule,
    CommonModule,
    HttpClientModule,
    SlidesModule
  ],
  declarations: [FeedbackPageComponent],
  providers: [GithubService],
  exports: [FeedbackPageComponent]
})
export class FeedbackPageModule {}

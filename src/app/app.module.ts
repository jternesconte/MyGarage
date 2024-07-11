import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
 

import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ListComponent } from './features/list/list.component';
import { CardComponent } from "./features/list/card/card.component";
import { CarDialogComponent } from './features/list/car-dialog/car-dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ListComponent,
        CardComponent,
        CarDialogComponent
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        NgIf,
        AppRoutingModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        RouterOutlet,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,

    ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OntologyComponent } from './ontology/ontology.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';


@NgModule({
  declarations: [
    AppComponent,
    OntologyComponent,
    AddItemComponent,
    DeleteItemComponent,
    UpdateItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: OntologyComponent },
      { path: "addItem", component: AddItemComponent },
      { path: "deleteItem", component: DeleteItemComponent },
      { path: "updateItem", component: UpdateItemComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

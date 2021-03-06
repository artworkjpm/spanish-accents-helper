import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [AppComponent, FooterComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

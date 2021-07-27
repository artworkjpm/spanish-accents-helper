import { Component, OnInit } from "@angular/core";
import { a } from "../app/listado-general";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "spanish-accents-helper";
	ngOnInit() {
		console.log(a);
	}
}

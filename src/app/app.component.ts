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
		this.filterOs();
	}

	filterOs() {
		let Os = a.filter((item) => item.includes("ó"));
		console.log(Os);
	}
}

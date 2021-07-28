import { Component, OnInit } from "@angular/core";
import { editText } from "./utilities/editText";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "spanish-accents-helper";
	test = "gustaria coger el portatil el lunes y ver mi bebe despues, y irme a nacurutu";
	ngOnInit() {
		console.log(this.test);
		editText(this.test);
	}
}

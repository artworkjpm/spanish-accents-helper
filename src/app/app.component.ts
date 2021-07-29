import { Component, OnInit } from "@angular/core";
import { editText } from "./utilities/editText";
import { FormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "spanish-accents-helper";
	test = "gustaria coger el portatil el lunes y ver mi bebe despues, y irme a portatil!";
	test2 = "quieria decir que el bano esta sucio y pense que veias";
	form: FormGroup = new FormGroup({});

	constructor(private fb: FormBuilder) {}
	ngOnInit() {
		this.form = this.fb.group({
			textBox: [this.test, Validators.required],
		});
	}

	getText() {
		console.log(this.form.controls["textBox"].value.replace(/[?!]/g, ""));
		this.form.patchValue({
			textBox: editText(this.form.controls["textBox"].value.replace(/[?!]/g, "")),
		});
	}

	copyInputMessage(inputElement: HTMLTextAreaElement) {
		inputElement.select();
		document.execCommand("copy");
		inputElement.setSelectionRange(0, 0);
	}
}

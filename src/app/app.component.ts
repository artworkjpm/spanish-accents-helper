import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { editText } from "./utilities/editText";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "spanish-accents-helper";
	test = "Gustaria darte un truco para tu portatil, hemos enganado";
	test2 = "quieria decir que el bano esta sucio y pense que veias";
	form: FormGroup = new FormGroup({});
	loading = false;

	constructor(private fb: FormBuilder) {}
	ngOnInit() {
		this.form = this.fb.group({
			textBox: [this.test, Validators.required],
		});
	}

	getText() {
		this.loading = true;
		this.form.patchValue({
			textBox: editText(this.form.controls["textBox"].value),
		});
		setTimeout(() => (this.loading = false), 500);
	}

	copyInputMessage(inputElement: HTMLTextAreaElement) {
		inputElement.select();
		document.execCommand("copy");
		inputElement.setSelectionRange(0, 0);
	}
}

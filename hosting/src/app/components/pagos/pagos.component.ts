import { Component } from '@angular/core';
import { FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule, } from '@angular/forms';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent {
  dynamicForm: FormGroup; // Main form group

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      name: [""], // Simple input field
      email: [""], // Another input field
      fields: this.fb.array([]), // Dynamic fields will be stored here
    });
  }

  // Getter to access the FormArray for dynamic fields
  get fields(): FormArray {
    return this.dynamicForm.get("fields") as FormArray;
  }

  /**
   * Adds a new field to the dynamic form.
   */
  addField() {
    const fieldGroup = this.fb.group({
      label: [""], // Label for the field
      value: [""], // Value of the field
    });
    this.fields.push(fieldGroup);
  }

  /**
   * Removes a field from the dynamic form at a specific index.
   * @param index Index of the field to be removed.
   */
  removeField(index: number) {
    this.fields.removeAt(index);
  }

  /**
   * Submits the form and logs its current value to the console.
   */
  submitForm() {
    console.log(this.dynamicForm.value);
  }
      
}

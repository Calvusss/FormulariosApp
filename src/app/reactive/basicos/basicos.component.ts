import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080Ti'),
  //   'precio': new FormControl(1800),
  //   'existencias': new FormControl(5)
  // })

  miFormulario: FormGroup = this.formBuilder.group({
    producto: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) { }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
  }

}

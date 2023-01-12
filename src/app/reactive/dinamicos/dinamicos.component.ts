import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Zelda BotW', Validators.required],
      ['Hollow Knight', Validators.required]],
      Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) return;

    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));

    this.nuevoFavorito.reset();
  }

  borrar(i: number) {
    //if (this.miFormulario.invalid) return;

    this.favoritosArr.removeAt(i);
  }

  guardar() {
    // Comprobamos si el formulario es invalido
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log('Guardar:', this.miFormulario.value);
  }

}

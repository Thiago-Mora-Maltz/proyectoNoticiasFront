import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NoticiasService } from 'src/app/components/services/noticias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  form: FormGroup;
  previewUrl: any;
  selectedFile: File;
  isLoaded: boolean;
  mensaje : string
  obj = {}
  editarObj = {}
  
  formObject = {
    titulo: new FormControl("", [Validators.required]),
    resumen: new FormControl("", [Validators.required]),
    parrafo: new FormControl("", [Validators.required]),
    categoria: new FormControl("", [Validators.required]),
    foto: new FormControl(""),
  };
  
  constructor(private service: NoticiasService, private router : Router, private activatedRoute : ActivatedRoute) {}

  ngOnInit() {
    this.isLoaded = false;
    this.form = new FormGroup(this.formObject);
    this.router.url == 'alta' ? this.mensaje = 'Alta de noticia' : this.mensaje = 'Editar noticia'
    this.isLoaded = !this.isLoaded;
  }

  onFileSelected(event) { //PREVIEW
    const reader = new FileReader(); //obj JS
    const files = event.target.files; //valor
    if (files && files.length) { 
      this.selectedFile = files[0]; //seleccionamos la imagen
      reader.onload = (e) => { //interfaz
        console.log(e);
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile); //muestra la imagen
    }
    console.log(this.selectedFile);
  }


  async upload() {
    // subir info al back
    const fd = new FormData();
    const { titulo, resumen, parrafo, categoria} = this.form.value;
    fd.append("titulo", titulo);
    fd.append("resumen", resumen);
    fd.append("parrafo", parrafo);
    fd.append("categoria", categoria);
    fd.append("foto", this.selectedFile, this.selectedFile.name);
      const result = await this.service.postNoticia(fd);
      this.form.reset()
      console.log(result);
      // const result = await this.service.updateNoticia(this.activatedRoute.snapshot.params.id,fd);
      // this.form.reset()
      // console.log(result);
  }
}

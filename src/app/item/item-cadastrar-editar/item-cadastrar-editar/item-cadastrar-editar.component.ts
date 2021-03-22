import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../item.model';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-cadastrar-editar',
  templateUrl: './item-cadastrar-editar.component.html',
  styleUrls: ['./item-cadastrar-editar.component.scss']
})

export class ItemCadastrarEditarComponent implements OnInit {

  formGroup!: FormGroup;
  item!: Item;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data["item"]
    this.formGroup = this.formBuilder.group({
      nome: [(this.item && this.item.nome)?this.item.nome:"", Validators.required]
    })
  }

  salvar() {
    if(this.item && this.item.id) {
      this.itemService.atualizar(this.formGroup.value).subscribe(
      itemAtualizado => {
        this.router.navigateByUrl("/itens")
      },
      error => {
        alert("Erro ao atualizar " + JSON.stringify(error));
      }
    )
    } else {
      this.itemService.cadastrar(this.formGroup.value).subscribe(
      itemCadastrado => {
        this.router.navigateByUrl("/itens")
      },
      error => {
        alert("Erro ao cadastrar " + JSON.stringify(error));
      }
    )
    }
  }

  deletar() {
    if (confirm("Deseja deletar o item " + this.item.nome)) {
      this.itemService.deletar(this.item).subscribe(
        response => {
          this.router.navigateByUrl("/itens");
        },
        error => {
          alert("Erro ao deletar " + JSON.stringify(error));
        }
      )
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Url } from 'url';

@Component({
  selector: 'app-show-doc',
  templateUrl: './show-doc.component.html',
  styleUrls: ['./show-doc.component.css']
})
export class ShowDocComponent implements OnInit {

  private lead: number;
  private linha: number;
  public fxNome: string;
  public imagePath: Url = null;

  constructor(private route: ActivatedRoute, private dataService: DataService, private _sanitizer: DomSanitizer ) {
    this.route.queryParamMap.subscribe(
      params => {
        this.lead = +params.get('lead');
        this.linha = +params.get('ln');
        this.dataService.getData('doc/' + this.lead + '/' + this.linha).subscribe(
          (resp: any) => {
            const document = resp.json()[0];
            this.fxNome = document.nomedoc;
            if (document.tipo === 'pdf') {
              this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + document.fx64);
            } else {
              this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + document.fx64);
            }
          }
        );
      }
    );
   }

  ngOnInit() {
  }

}

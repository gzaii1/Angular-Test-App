import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { discoverLocalRefs } from '@angular/core/src/render3/context_discovery';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes : Recipe[]=[
    new Recipe('测试食谱内容','这时食谱内容的详细介绍','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1749830845,4171385923&fm=27&gp=0.jpg'),
    new Recipe('测试食谱内容2','这时食谱内容的详细介绍2','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1749830845,4171385923&fm=27&gp=0.jpg')
  ]
  constructor() {

   }
  

  ngOnInit() {
  }

}

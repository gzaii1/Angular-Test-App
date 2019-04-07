import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  recipes : Recipe[]=[
    new Recipe('测试食谱内容','这时食谱内容的详细介绍','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1749830845,4171385923&fm=27&gp=0.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  avisos = [ {
    title: 'aaa',
    corpo_aviso: 'aaaa',
    data: '10/08/2020'
  },{
    title: 'aaa',
    corpo_aviso: 'aaaa',
    data: '10/08/2020'
  },
  {
    title: 'aaa',
    corpo_aviso: 'aaaa',
    data: '10/08/2020'
  },
  {
    title: 'aaa',
    corpo_aviso: 'aaaa',
    data: '10/08/2020'
  },
  {
    title: 'aaa',
    corpo_aviso: 'aaaa',
    data: '10/08/2020'
  }]

  constructor() { }

  ngOnInit() {}
}
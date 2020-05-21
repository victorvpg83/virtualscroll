import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport

  people = Array( 500 ).fill( 0 )

  constructor() { }

  ngOnInit(): void {
    console.log(this.people)
  }

  goFinal() {
    this.viewport.scrollToIndex( this.people.length )
  }

  goInit() {
    this.viewport.scrollToIndex( 0 )
  }

  goMiddle() {
    this.viewport.scrollToIndex( this.people.length / 2 )
  }

}

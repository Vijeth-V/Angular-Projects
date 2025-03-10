import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollPosition: { [url: string]: number } = {};

  constructor() { }

  setScrollPosition(url: string): void {
    this.scrollPosition[url] = window.scrollY;
    console.log('Scroll position saved:', this.scrollPosition[url]);
  }

  getScrollPosition(url: string): number {
    console.log('Restoring scroll position:', this.scrollPosition[url]);
    return this.scrollPosition[url] || 0;
  }

}

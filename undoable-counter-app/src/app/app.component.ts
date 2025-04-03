import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
export class AppComponent {
  count = 0;
  history: string[] = [];
  actions: { before: number; after: number }[] = [];
  redoStack: { before: number; after: number }[] = [];

  updateCount(value: number) {
    const before = this.count;
    this.count += value;
    const after = this.count;

    this.history.unshift(
      `${value > 0 ? '+' : ''}${value} (${before} -> ${after})`
    );
    this.actions.unshift({ before, after });

    if (this.actions.length > 50) this.actions.pop(); // Keep only last 50 actions
    this.redoStack = []; // Clear redo history
  }

  undo() {
    if (this.actions.length > 0) {
      const lastAction = this.actions.shift();
      if (lastAction) {
        this.redoStack.unshift(lastAction);
        this.count = lastAction.before;
        this.history.unshift(
          `Undo (${lastAction.after} -> ${lastAction.before})`
        );
      }
    }
  }

  redo() {
    if (this.redoStack.length > 0) {
      const redoAction = this.redoStack.shift();
      if (redoAction) {
        this.actions.unshift(redoAction);
        this.count = redoAction.after;
        this.history.unshift(
          `Redo (${redoAction.before} -> ${redoAction.after})`
        );
      }
    }
  }
}

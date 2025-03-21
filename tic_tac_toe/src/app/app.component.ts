import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  board!: string[][];
  currentPlayer!: string;
  gameOver!: boolean;
  winner!: string | null;
  boardSize: number;

  constructor() {
    this.boardSize = 3;
    this.resetGame();
  }

  resetGame() {
    this.board = Array(this.boardSize)
      .fill(null)
      .map(() => Array(this.boardSize).fill(''));
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.winner = null;
  }

  selected(row: number, col: number) {
    if (this.board[row][col] === '' && !this.gameOver) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWinner(row, col)) {
        this.gameOver = true;
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(row: number, col: number): boolean {
    const player = this.board[row][col];

    if (this.board[row].every((cell) => cell === player)) {
      return true;
    }

    if (this.board.every((row) => row[col] === player)) {
      return true;
    }

    if (
      row === col &&
      this.board.every((row, index) => row[index] === player)
    ) {
      return true;
    }

    if (
      row + col === this.boardSize - 1 &&
      this.board.every(
        (row, index) => row[this.boardSize - 1 - index] === player
      )
    ) {
      return true;
    }
    return false;
  }
}



import * as fs from 'fs';
import { promises as fsPromises } from 'fs';

export class FileDatabase<T> implements Database<T> {
  private filePath: string;
  private data: Map<string, T> = new Map();

  constructor(filePath: string) {
    this.filePath = filePath;
    this.loadData();
  }

  create(item: T): void {
    const id = this.generateId();
    this.data.set(id, item);
    this.saveData();
  }

  read(id: string): T | null {
    return this.data.get(id) || null;
  }

  update(id: string, item: T): void {
    if (this.data.has(id)) {
      this.data.set(id, item);
      this.saveData();
    } else {
      throw new Error(`Item with id ${id} does not exist.`);
    }
  }

  delete(id: string): void {
    this.data.delete(id);
    this.saveData();
  }

  getAll(): T[] {
    return Array.from(this.data.values());
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private loadData(): void {
    try {
      if (fs.existsSync(this.filePath)) {
        const fileData = fs.readFileSync(this.filePath, 'utf-8');
        const parsedData = JSON.parse(fileData);
        this.data = new Map(parsedData);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  private async saveData(): Promise<void> {
    try {
      const fileData = JSON.stringify(Array.from(this.data.entries()));
      await fsPromises.writeFile(this.filePath, fileData, 'utf-8');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }
}

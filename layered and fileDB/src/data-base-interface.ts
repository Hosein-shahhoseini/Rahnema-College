interface Database<T> {
    create(item: T): void;
    read(id: string): T | null;
    update(id: string, item: T): void;
    delete(id: string): void;
    getAll(): T[];
  }
  
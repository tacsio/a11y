import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable()
export class UniqueIdService {
  public generateIdWithPrefix(prefix: string): string {
    const uniqueId = `${prefix}-${this.generateUniqueId()}`;
    return uniqueId;
  }

  private generateUniqueId(): string {
    return uuid.v1();
  }
}

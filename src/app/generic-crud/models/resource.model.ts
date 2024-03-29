export abstract class ResourceModel<T> {
    public _id?: number;
  
    constructor(model?: Partial<T>) {
      if (model) {
        Object.assign(this, model);       
      }
    } 
    public toJson(): any {
      return JSON.parse(JSON.stringify(this));
    }
  }
  
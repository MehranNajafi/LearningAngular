import { ResourceModel } from './resource.model';

export class User extends ResourceModel<User> {
  id: number
  userName: string
  email: string
  passs: string
  isActive: boolean
  constructor(model?: Partial<User>) {
    if (model != undefined)
      model._id = model.id;
    super(model);
  }
}

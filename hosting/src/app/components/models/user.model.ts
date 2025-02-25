import { DocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';

// a model for autcomolete data
export interface IUser {
  name: string | null;
  id: string | null;
  key?: string;
}

export class User {
  public static NewInstance(
    data: DocumentSnapshot | Partial<IUser>,
    id?: string
  ): IUser {
    if (data === null) {
      return null as any;
    }

    const d = data instanceof DocumentSnapshot ? data.data() : data;
    return {
      id: data.id || id as any, // if data.id doesnt exist (in add new)
       name: 'name',
      // key: d['key'],
    };
  }

  // receives QuerySnapshot and maps out the `data() ` and id
  public static NewInstances(data: QuerySnapshot): IUser[] {
    // read docs array
    return data.docs.map((n) => User.NewInstance(n));
  }
}

interface IUser {
  uid: string;
  email: string;
  name: string;
  photoURL: string;
}

type UserAction = {
  type: string;
  user: IUser;
};

type DispatchType = (args: UserAction) => UserAction;

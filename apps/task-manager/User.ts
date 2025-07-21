// Userクラス：アクセサ（getter/setter）とreadonly修飾子
export class User {
  constructor(private readonly _id: number, private _name: string) {}

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}

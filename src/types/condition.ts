export interface ICondition {
  condition: string;
  type: string;
}

export interface IIterableCondition extends ICondition {
  id: string;
  selected?: boolean;
}

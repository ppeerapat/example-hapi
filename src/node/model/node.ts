export default interface INode {
  id: string | number;
  title: string;
  level: number;
  children: INode[];
  parent_id?: string | number;
}
export interface TransformNodeRequest {
  [key: string]: INode[];
}

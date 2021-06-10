export default interface INode {
  id: string;
  title: string;
  level: number;
  children: INode[];
  parent_id?: string;
}
export interface TransformNodeRequest {
  [key: string]: INode[];
}

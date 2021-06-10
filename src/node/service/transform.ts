import INode, { TransformNodeRequest } from "../model/node";

const isConsecutive = (array: any[]) => {
  for (let i = 1; i < array.length; i++) {
    if (Number(array[i]) != Number(array[i - 1]) + 1) {
      return false;
    }
  }
  return true;
};
export const transformNode = async (
  req: TransformNodeRequest
): Promise<INode[]> => {
  const keys = Object.keys(req).sort();
  if (!isConsecutive(keys)) {
    throw new Error("Levels given are not consecutive");
  }
  const res = { ...req };

  for (let i = keys.length - 2; i >= 0; i--) {
    const childrenNodes = res[keys[i + 1]];
    const parentNodes = res[keys[i]];
    parentNodes.forEach((parent) => {
      parent.children = childrenNodes.filter(
        (child) => child.parent_id == parent.id
      );
    });
  }
  return res[keys[0]];
};

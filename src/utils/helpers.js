export function createNextId(list) {
  return list.length > 1 ? Math.max(...list.map((item) => item.id)) + 1 : 1;
}

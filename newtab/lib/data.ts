import { ChangedTreeData, TreeDataNode } from "./bookmarks";

const getChromeBookmarks = async () => {
  try {
    const bookmarks: TreeDataNode[] = await new Promise((resolve, reject) => {
      chrome.bookmarks.getTree(bookmarks => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(bookmarks);
        }
      });
    });
    return bookmarks;
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    throw error;
  }
};

const recursiveChange = async <T, U>(
  target: T[],
  transform: (item: T, index: number) => Promise<U>,
  childName: string = "children"
) => {
  return Promise.all(
    target.map(async (item, index) => {
      // Apply the transform function and await its result
      const transformedItem = await transform(item, index);

      // If the transformed item is not an object, return it directly
      if (typeof transformedItem !== "object" || transformedItem === null) {
        return transformedItem;
      }

      // Create a new object only with the transformed item
      let newItem = { ...transformedItem } as unknown as U;

      // Check if a subarray exists in the original item and recurse
      if ((item as any)[childName] && Array.isArray((item as any)[childName])) {
        // Await the result of the recursive call to ensure it's properly resolved
        (newItem as any)[childName] = await recursiveChange(
          (item as any)[childName],
          transform,
          childName
        );
      }

      return newItem;
    })
  );
};

export const getBookmarks = async () => {
  try {
    const result = await getChromeBookmarks();
    if (!result[0].children) return null;

    const bookmarks = await recursiveChange<TreeDataNode, ChangedTreeData>(
      result[0].children,
      async (item, _index: number) => ({
        ...item,
        type: item?.children ? "folder" : "link"
      })
    );
    return bookmarks;
  } catch (error) {
    console.error(error);
    return null;
  }
};

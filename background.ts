console.log('Welcom to FTab!');

chrome.bookmarks.onChanged.addListener((id: string, changeInfo: object) => {
  console.log('bookmark onChanged', id, changeInfo);
});
chrome.bookmarks.onChildrenReordered.addListener((id: string, reorderInfo: object) => {
  console.log('bookmark onChildrenReordered', id, reorderInfo);
});
chrome.bookmarks.onCreated.addListener((id: string, bookmark: any) => {
  console.log('bookmark onCreated', id, bookmark);
});
chrome.bookmarks.onImportBegan.addListener(() => {
  console.log('bookmark onImportBegan');
});
chrome.bookmarks.onImportEnded.addListener(() => {
  console.log('bookmark onImportEnded');
});
chrome.bookmarks.onMoved.addListener((id: string, moveInfo: object) => {
  console.log('bookmark onMoved', id, moveInfo);
});
chrome.bookmarks.onRemoved.addListener((id: string, removeInfo: object) => {
  console.log('bookmark onRemoved', id, removeInfo);
});

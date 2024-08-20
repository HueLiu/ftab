import React, { useCallback, useEffect, useState } from "react";
import Content from "./content";
import OffCanvasMenu from "./offCanvasMenu";
import Sidebar from "./sidebar";

import { getBookmarks } from "./lib/data";

const NewTabApp: React.FC = () => {
  const [rootBookmark, setRootBookmark] = useState<any>("");
  const refreshBookmarks = useCallback(async () => {
    const rootBookmark = await getBookmarks();
    setRootBookmark(rootBookmark);
    console.log(rootBookmark);
  }, []);

  useEffect(() => {
    refreshBookmarks().catch(console.error);
  }, [refreshBookmarks]);

  return (
    <>
      <OffCanvasMenu />
      <Sidebar />
      <Content />
    </>
  );
};

export default NewTabApp;

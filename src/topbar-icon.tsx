import { Button } from "@blueprintjs/core";
import ReactDom from "react-dom";

import { appendToTopbar, extension_helper } from "./helper";

function TopbarIcon() {
    return <Button icon="add" minimal onClick={() => {
      
  }} />;
}

export function initTopbarIcon(extensionAPI: RoamExtensionAPI) {
  const topbarIcon = appendToTopbar("Extension-Name");
  ReactDom.render(<TopbarIcon />, topbarIcon);
  extension_helper.on_uninstall(() => {
    topbarIcon.parentElement.removeChild(topbarIcon);
  });
}

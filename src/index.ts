import { extension_helper } from "./helper";
import { Button } from '@blueprintjs/core'

function onload({ extensionAPI }: { extensionAPI: RoamExtensionAPI }) {
  console.log(extensionAPI, ' ---', Button)
}

function onunload() {
    extension_helper.uninstall();
}

export default {
  onload,
  onunload,
};

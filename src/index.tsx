import ReactDom from 'react-dom';
import { extension_helper } from "./helper";
import { Button } from '@blueprintjs/core'
import App from './App';

function onload({ extensionAPI }: { extensionAPI: RoamExtensionAPI }) {
  console.log(extensionAPI, ' ---', Button);
  const el = document.createElement('div') as HTMLElement;
  document.appendChild(el);
  ReactDom.render(<App/>, el);
  extension_helper.on_uninstall(() => {
    document.removeChild(el);
  })
}

function onunload() {
    extension_helper.uninstall();
}

export default {
  onload,
  onunload,
};

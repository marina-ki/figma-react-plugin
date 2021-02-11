import { subscribeOnMessages } from 'react-figma';

figma.showUI(__html__);

figma.ui.onmessage = (message) => {
  subscribeOnMessages(message);
};


(figma as any).on('currentpagechange', () => {
  const nodes = figma.root.findAll(node => node.type === "FRAME")
  const names = nodes.map(node => node.name)
  figma.ui.postMessage({
    type: "getNames",
    names,
  })
})
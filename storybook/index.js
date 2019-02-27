import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';


configure(() => {
  require('../src/stories');
}, module);

const StorybookUI = getStorybookUI({
  
});


export default StorybookUI;

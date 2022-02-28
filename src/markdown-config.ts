import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs/prism.js';

import enUS from '@kangc/v-md-editor/lib/lang/en-US';
VueMarkdownEditor.lang.use('en-US', enUS);

const markdownEditor = VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

export default markdownEditor;

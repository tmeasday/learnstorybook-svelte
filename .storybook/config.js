import { configure } from '@storybook/svelte';
import requireContext from 'require-context.macro';

import '../public/global.css';

const req = requireContext('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

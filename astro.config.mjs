// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        'simple-icons': ['github', 'linkedin'],
        lucide: ['mail'],
        mdi: ['medium'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});

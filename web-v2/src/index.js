import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import { Loader } from '@mantine/core';
import { LanguageProvider } from './components/LanguageContext';
import { StepperProvider } from './components/StepperContext';
import App from './App';
import './index.css';
import '@mantine/carousel/styles.css';
import * as serviceWorker from './serviceWorker';

const theme = createTheme({
	fontFamily: 'Inter var',
	fontFamilyMonospace: 'Monaco, Courier, monospace',
	headings: { fontFamily: 'Greycliff CF, sans-serif' },
});
const basename = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined ? '/' : '/web2/digibaas/web-v2/build';

const root = createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loader size={30} />}>
    <MantineProvider theme={theme}>
      <LanguageProvider>
        <StepperProvider>
          <BrowserRouter basename={basename}>
            <App />
          </BrowserRouter>
        </StepperProvider>
      </LanguageProvider>
    </MantineProvider>
  </Suspense>
);

// Service worker setup
serviceWorker.unregister();

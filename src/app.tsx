import * as React from 'react';
import { MemberCollectionContainer } from './components';
import { SessionProvider } from './core/session.context';
import { RouterComponent } from './core/router/router.component';
import { LoadingSpinerComponent } from './components/spiner/spiner.component';

export const App = () => {
  return (
    <div>
      <SessionProvider>
        <RouterComponent />
      </SessionProvider>
      <LoadingSpinerComponent />
    </div>
  );
}

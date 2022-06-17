import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const AuthFront = React.lazy(() => import('auth-front/Module'));

export function App() {
   return (
      <React.Suspense fallback={null}>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>

            <li>
               <Link to="/auth-front">AuthFront</Link>
            </li>
         </ul>
         <Routes>
            <Route path="/" element={<NxWelcome title="main-front" />} />

            <Route path="/auth-front" element={<AuthFront />} />
         </Routes>
      </React.Suspense>
   );
}

export default App;

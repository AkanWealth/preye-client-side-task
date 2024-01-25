import { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/Register';
import Success from './components/Success';
import Dashboard from './components/Dashboard';
import Verification from './components/Verification';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/otp" element={<Verification />} />
              <Route path="/success" element={<Success />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

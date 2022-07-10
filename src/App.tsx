import './Styles/style.scss';

import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './Routes';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import ToasterContainer from './Components/ToasterContainer';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000 * 5, //5min
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToasterContainer />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

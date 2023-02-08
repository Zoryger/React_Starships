// import React from "react";
// import LoginScreen from "./src/screens/LoginScreen";
// import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
// import { TermsScreen } from "./src/screens/TermsScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useStarships } from "./src/hooks/useStarships";
import App from "./src/navigation/Navigator";

const queryClient = new QueryClient({});

const App2 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <LoginScreen />
    <TermsScreen /> */}
      <App />
    </QueryClientProvider>
  );
};

// always export default App otherwise Expo is not happy
export default App2;

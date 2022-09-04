import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { Home } from "./src/routes/Home";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Home />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

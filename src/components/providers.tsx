"use client"

import { HeroUIProvider, ToastProvider } from "@heroui/react"
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import {
//   QueryClient,
//   QueryClientProvider,
//   isServer,
// } from "@tanstack/react-query"
import React from "react"

// function makeQueryClient() {
//   return new QueryClient({
//     defaultOptions: {
//       queries: {
//         staleTime: 60 * 1000,
//       },
//     },
//   })
// }

// let browserQueryClient: QueryClient | undefined = undefined

// function getQueryClient() {
//   if (isServer) {
//     return makeQueryClient()
//   } else {
//     if (!browserQueryClient) browserQueryClient = makeQueryClient()
//     return browserQueryClient
//   }
// }

export default function Providers({ children }: { children: React.ReactNode }) {
  // const queryClient = getQueryClient()
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
      <ToastProvider placement="top-right" toastOffset={60} />
      {/* <QueryClientProvider client={queryClient}> */}
          {children}
      {/* </QueryClientProvider> */}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}

import { ErrorFallback } from "@/components/elements/error-fallback";
import { SuspenseFallback } from "@/components/elements/suspense-fallback";
import { type ReactNode, Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>
  </ErrorBoundary>;
};

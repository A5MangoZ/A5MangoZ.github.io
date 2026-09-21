import { useState, useEffect, useCallback } from "react";

export function useTelemetry<T>(
  fetcher: (forceRefresh: boolean) => Promise<T>,
  fallback: T
) {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const loadData = useCallback(
    async (forceRefresh: boolean = false) => {
      if (forceRefresh) {
        setIsRefreshing(true);
      } else {
        setLoading(true);
      }

      try {
        const telemetry = await fetcher(forceRefresh);
        setData(telemetry);
      } catch {
        setData(fallback);
      } finally {
        setLoading(false);
        setIsRefreshing(false);
      }
    },
    [fetcher, fallback]
  );

  useEffect(() => {
    loadData(false);
  }, [loadData]);

  const refetch = useCallback(() => {
    return loadData(true);
  }, [loadData]);

  return {
    data,
    loading,
    isRefreshing,
    refetch,
  };
}

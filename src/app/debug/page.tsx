'use client';

import { useEffect, useState } from 'react';

export default function DebugPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/test');
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error('Error fetching test data:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-600">Error: {error.message}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Debug Page</h1>

      {data?.data?.course ? (
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-2">Course Information</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="font-medium">ID:</div>
              <div>{data.data.course.id}</div>

              <div className="font-medium">Title:</div>
              <div>{data.data.course.title}</div>

              <div className="font-medium">Students:</div>
              <div>{data.data.course.numberOfStudents || data.data.course.enrollmentsCount || 'N/A'}</div>
            </div>
          </div>

          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-2">Raw Data</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      ) : (
        <div className="text-red-600">No course data found</div>
      )}
    </div>
  );
}

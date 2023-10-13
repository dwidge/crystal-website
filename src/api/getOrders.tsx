import { gql, useQuery } from "@apollo/client";

export function getOrders(): {
  loading: boolean;
  error?: string;
  data?: { id: string; firstName: string }[];
} {
  const { loading, error, data } = useQuery(
    gql`
      query GetOrders {
        orders {
          id
          firstName
        }
      }
    `
  );
  return { loading, error: error?.message, data: data?.orders };
}

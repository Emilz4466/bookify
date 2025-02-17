/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import type {
  FindAllProfilesParams,
  ProfileGetResponse,
  ProfilePostRequest,
  ProfilePostResponse,
} from "../../schema";
import { customInstance } from "../../../lib/axios";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const updateProfile = (
  id: number,
  profilePostRequest: ProfilePostRequest,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<ProfilePostResponse>(
    {
      url: `/bookify/api/v1/profiles/updateProfile/${id}`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: profilePostRequest,
      signal,
    },
    options,
  );
};

export const getUpdateProfileMutationOptions = <
  TData = Awaited<ReturnType<typeof updateProfile>>,
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { id: number; data: ProfilePostRequest },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const mutationKey = ["updateProfile"];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateProfile>>,
    {
      id: number;
      data: ProfilePostRequest;
    }
  > = (props) => {
    const { id, data } = props ?? {};

    return updateProfile(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    {
      id: number;
      data: ProfilePostRequest;
    },
    TContext
  >;
};

export type UpdateProfileMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateProfile>>
>;
export type UpdateProfileMutationBody = ProfilePostRequest;
export type UpdateProfileMutationError = unknown;

export const useUpdateProfile = <
  TData = Awaited<ReturnType<typeof updateProfile>>,
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { id: number; data: ProfilePostRequest },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  TData,
  TError,
  { id: number; data: ProfilePostRequest },
  TContext
> => {
  const mutationOptions = getUpdateProfileMutationOptions(options);

  return useMutation(mutationOptions);
};
export const addProfile = (
  profilePostRequest: ProfilePostRequest,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<ProfilePostResponse>(
    {
      url: `/bookify/api/v1/profiles/addProfile`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: profilePostRequest,
      signal,
    },
    options,
  );
};

export const getAddProfileMutationOptions = <
  TData = Awaited<ReturnType<typeof addProfile>>,
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: ProfilePostRequest },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const mutationKey = ["addProfile"];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof addProfile>>,
    {
      data: ProfilePostRequest;
    }
  > = (props) => {
    const { data } = props ?? {};

    return addProfile(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: ProfilePostRequest },
    TContext
  >;
};

export type AddProfileMutationResult = NonNullable<
  Awaited<ReturnType<typeof addProfile>>
>;
export type AddProfileMutationBody = ProfilePostRequest;
export type AddProfileMutationError = unknown;

export const useAddProfile = <
  TData = Awaited<ReturnType<typeof addProfile>>,
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: ProfilePostRequest },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  TData,
  TError,
  { data: ProfilePostRequest },
  TContext
> => {
  const mutationOptions = getAddProfileMutationOptions(options);

  return useMutation(mutationOptions);
};
export const getProfile = (
  id: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<ProfileGetResponse>(
    {
      url: `/bookify/api/v1/profiles/getProfile/${id}`,
      method: "GET",
      signal,
    },
    options,
  );
};

export const getGetProfileQueryKey = (id: number) => {
  return [`/bookify/api/v1/profiles/getProfile/${id}`] as const;
};

export const getGetProfileInfiniteQueryOptions = <
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof getProfile>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetProfileQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getProfile>>> = ({
    signal,
  }) => getProfile(id, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getProfile>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetProfileInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getProfile>>
>;
export type GetProfileInfiniteQueryError = unknown;

export function useGetProfileInfinite<
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof getProfile>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetProfileInfiniteQueryOptions(id, options);

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getGetProfileQueryOptions = <
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getProfile>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetProfileQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getProfile>>> = ({
    signal,
  }) => getProfile(id, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getProfile>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetProfileQueryResult = NonNullable<
  Awaited<ReturnType<typeof getProfile>>
>;
export type GetProfileQueryError = unknown;

export function useGetProfile<
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getProfile>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetProfileQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const findAllProfiles = (
  params?: FindAllProfilesParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<ProfileGetResponse[]>(
    {
      url: `/bookify/api/v1/profiles/findAllProfiles`,
      method: "GET",
      params,
      signal,
    },
    options,
  );
};

export const getFindAllProfilesQueryKey = (params?: FindAllProfilesParams) => {
  return [
    `/bookify/api/v1/profiles/findAllProfiles`,
    ...(params ? [params] : []),
  ] as const;
};

export const getFindAllProfilesInfiniteQueryOptions = <
  TData = Awaited<ReturnType<typeof findAllProfiles>>,
  TError = unknown,
>(
  params?: FindAllProfilesParams,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof findAllProfiles>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getFindAllProfilesQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findAllProfiles>>> = ({
    signal,
  }) => findAllProfiles(params, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof findAllProfiles>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type FindAllProfilesInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof findAllProfiles>>
>;
export type FindAllProfilesInfiniteQueryError = unknown;

export function useFindAllProfilesInfinite<
  TData = Awaited<ReturnType<typeof findAllProfiles>>,
  TError = unknown,
>(
  params?: FindAllProfilesParams,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof findAllProfiles>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getFindAllProfilesInfiniteQueryOptions(params, options);

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getFindAllProfilesQueryOptions = <
  TData = Awaited<ReturnType<typeof findAllProfiles>>,
  TError = unknown,
>(
  params?: FindAllProfilesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof findAllProfiles>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getFindAllProfilesQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findAllProfiles>>> = ({
    signal,
  }) => findAllProfiles(params, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof findAllProfiles>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type FindAllProfilesQueryResult = NonNullable<
  Awaited<ReturnType<typeof findAllProfiles>>
>;
export type FindAllProfilesQueryError = unknown;

export function useFindAllProfiles<
  TData = Awaited<ReturnType<typeof findAllProfiles>>,
  TError = unknown,
>(
  params?: FindAllProfilesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof findAllProfiles>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getFindAllProfilesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const deleteProfile = (
  id: number,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/bookify/api/v1/profiles/deleteProfile/${id}`,
      method: "DELETE",
    },
    options,
  );
};

export const getDeleteProfileMutationOptions = <
  TData = Awaited<ReturnType<typeof deleteProfile>>,
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { id: number }, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const mutationKey = ["deleteProfile"];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteProfile>>,
    { id: number }
  > = (props) => {
    const { id } = props ?? {};

    return deleteProfile(id, requestOptions);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { id: number },
    TContext
  >;
};

export type DeleteProfileMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteProfile>>
>;

export type DeleteProfileMutationError = unknown;

export const useDeleteProfile = <
  TData = Awaited<ReturnType<typeof deleteProfile>>,
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { id: number }, TContext>;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<TData, TError, { id: number }, TContext> => {
  const mutationOptions = getDeleteProfileMutationOptions(options);

  return useMutation(mutationOptions);
};

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Character = {
  __typename?: "Character";
  age?: Maybe<Scalars["Int"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  episode?: Maybe<Array<Maybe<Episode>>>;
  gender: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Location>;
  name: Scalars["String"]["output"];
  origin?: Maybe<Location>;
  species: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type CharacterFilter = {
  gender?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  species?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type CharacterInput = {
  gender: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  species: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
  age?: Maybe<Scalars["Int"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
};

export type CharactersResponse = {
  __typename?: "CharactersResponse";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: "Episode";
  air_date?: Maybe<Scalars["String"]["output"]>;
  characters?: Maybe<Array<Maybe<Character>>>;
  episode?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type EpisodeFilter = {
  episode?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type EpisodesResponse = {
  __typename?: "EpisodesResponse";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type Info = {
  __typename?: "Info";
  count?: Maybe<Scalars["Int"]["output"]>;
  next?: Maybe<Scalars["Int"]["output"]>;
  pages?: Maybe<Scalars["Int"]["output"]>;
  prev?: Maybe<Scalars["Int"]["output"]>;
};

export type Location = {
  __typename?: "Location";
  dimension?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  residents?: Maybe<Array<Maybe<Character>>>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type LocationFilter = {
  dimension?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type LocationsResponse = {
  __typename?: "LocationsResponse";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createCharacter?: Maybe<Character>;
  deleteCharacter?: Maybe<Scalars["Boolean"]["output"]>;
  updateCharacter?: Maybe<Character>;
};

export type MutationCreateCharacterArgs = {
  input: CharacterInput;
};

export type MutationDeleteCharacterArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateCharacterArgs = {
  id: Scalars["ID"]["input"];
  input: CharacterInput;
};

export type Query = {
  __typename?: "Query";
  character?: Maybe<Character>;
  characters?: Maybe<CharactersResponse>;
  episode?: Maybe<Episode>;
  episodes?: Maybe<EpisodesResponse>;
  location?: Maybe<Location>;
  locations?: Maybe<LocationsResponse>;
};

export type QueryCharacterArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCharactersArgs = {
  filter?: InputMaybe<CharacterFilter>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryEpisodeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryEpisodesArgs = {
  filter?: InputMaybe<EpisodeFilter>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLocationArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLocationsArgs = {
  filter?: InputMaybe<LocationFilter>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SearchResult = {
  __typename?: "SearchResult";
  characters?: Maybe<Array<Maybe<Character>>>;
  episodes?: Maybe<Array<Maybe<Episode>>>;
  locations?: Maybe<Array<Maybe<Location>>>;
};

export type Stats = {
  __typename?: "Stats";
  totalCharacters?: Maybe<Scalars["Int"]["output"]>;
  totalEpisodes?: Maybe<Scalars["Int"]["output"]>;
  totalLocations?: Maybe<Scalars["Int"]["output"]>;
};

export type GetCharacterQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetCharacterQuery = {
  __typename?: "Query";
  character?: {
    __typename?: "Character";
    id: string;
    name: string;
    status: string;
    species: string;
    type?: string | null;
    gender: string;
    image?: string | null;
    origin?: { __typename?: "Location"; id: string; name: string } | null;
    location?: { __typename?: "Location"; id: string; name: string } | null;
  } | null;
};

export type GetCharactersQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetCharactersQuery = {
  __typename?: "Query";
  characters?: {
    __typename?: "CharactersResponse";
    info?: {
      __typename?: "Info";
      count?: number | null;
      pages?: number | null;
      next?: number | null;
      prev?: number | null;
    } | null;
    results?: Array<{
      __typename?: "Character";
      id: string;
      name: string;
      status: string;
      species: string;
      gender: string;
      image?: string | null;
      origin?: { __typename?: "Location"; id: string; name: string } | null;
      location?: { __typename?: "Location"; id: string; name: string } | null;
    } | null> | null;
  } | null;
};

export type GetEpisodesQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetEpisodesQuery = {
  __typename?: "Query";
  episodes?: {
    __typename?: "EpisodesResponse";
    info?: {
      __typename?: "Info";
      count?: number | null;
      pages?: number | null;
      next?: number | null;
      prev?: number | null;
    } | null;
    results?: Array<{
      __typename?: "Episode";
      id: string;
      name: string;
      air_date?: string | null;
      episode?: string | null;
    } | null> | null;
  } | null;
};

export type GetLocationQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetLocationQuery = {
  __typename?: "Query";
  location?: {
    __typename?: "Location";
    id: string;
    name: string;
    type?: string | null;
    dimension?: string | null;
    residents?: Array<{
      __typename?: "Character";
      id: string;
      name: string;
    } | null> | null;
  } | null;
};

export type GetLocationsQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetLocationsQuery = {
  __typename?: "Query";
  locations?: {
    __typename?: "LocationsResponse";
    info?: {
      __typename?: "Info";
      count?: number | null;
      pages?: number | null;
      next?: number | null;
      prev?: number | null;
    } | null;
    results?: Array<{
      __typename?: "Location";
      id: string;
      name: string;
      type?: string | null;
      dimension?: string | null;
    } | null> | null;
  } | null;
};

export type CreateCharacterMutationVariables = Exact<{
  input: CharacterInput;
}>;

export type CreateCharacterMutation = {
  __typename?: "Mutation";
  createCharacter?: {
    __typename?: "Character";
    id: string;
    name: string;
    species: string;
    status: string;
    gender: string;
  } | null;
};

export type UpdateCharacterMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: CharacterInput;
}>;

export type UpdateCharacterMutation = {
  __typename?: "Mutation";
  updateCharacter?: {
    __typename?: "Character";
    id: string;
    name: string;
    species: string;
    status: string;
    gender: string;
  } | null;
};

export type DeleteCharacterMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteCharacterMutation = {
  __typename?: "Mutation";
  deleteCharacter?: boolean | null;
};

export const GetCharacterDocument = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
      }
      location {
        id
        name
      }
      image
    }
  }
`;

/**
 * __useGetCharacterQuery__
 *
 * To run a query within a React component, call `useGetCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCharacterQuery,
    GetCharacterQueryVariables
  > &
    (
      | { variables: GetCharacterQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options
  );
}
export function useGetCharacterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharacterQuery,
    GetCharacterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options
  );
}
export function useGetCharacterSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCharacterQuery,
    GetCharacterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options
  );
}
export type GetCharacterQueryHookResult = ReturnType<
  typeof useGetCharacterQuery
>;
export type GetCharacterLazyQueryHookResult = ReturnType<
  typeof useGetCharacterLazyQuery
>;
export type GetCharacterSuspenseQueryHookResult = ReturnType<
  typeof useGetCharacterSuspenseQuery
>;
export type GetCharacterQueryResult = Apollo.QueryResult<
  GetCharacterQuery,
  GetCharacterQueryVariables
>;
export const GetCharactersDocument = gql`
  query GetCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        gender
        origin {
          id
          name
        }
        location {
          id
          name
        }
        image
      }
    }
  }
`;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options
  );
}
export function useGetCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options
  );
}
export function useGetCharactersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >(GetCharactersDocument, options);
}
export type GetCharactersQueryHookResult = ReturnType<
  typeof useGetCharactersQuery
>;
export type GetCharactersLazyQueryHookResult = ReturnType<
  typeof useGetCharactersLazyQuery
>;
export type GetCharactersSuspenseQueryHookResult = ReturnType<
  typeof useGetCharactersSuspenseQuery
>;
export type GetCharactersQueryResult = Apollo.QueryResult<
  GetCharactersQuery,
  GetCharactersQueryVariables
>;
export const GetEpisodesDocument = gql`
  query GetEpisodes($page: Int, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

/**
 * __useGetEpisodesQuery__
 *
 * To run a query within a React component, call `useGetEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetEpisodesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options
  );
}
export function useGetEpisodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options
  );
}
export function useGetEpisodesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options
  );
}
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>;
export type GetEpisodesLazyQueryHookResult = ReturnType<
  typeof useGetEpisodesLazyQuery
>;
export type GetEpisodesSuspenseQueryHookResult = ReturnType<
  typeof useGetEpisodesSuspenseQuery
>;
export type GetEpisodesQueryResult = Apollo.QueryResult<
  GetEpisodesQuery,
  GetEpisodesQueryVariables
>;
export const GetLocationDocument = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
      }
    }
  }
`;

/**
 * __useGetLocationQuery__
 *
 * To run a query within a React component, call `useGetLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLocationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationQuery,
    GetLocationQueryVariables
  > &
    (
      | { variables: GetLocationQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options
  );
}
export function useGetLocationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationQuery,
    GetLocationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options
  );
}
export function useGetLocationSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetLocationQuery,
    GetLocationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options
  );
}
export type GetLocationQueryHookResult = ReturnType<typeof useGetLocationQuery>;
export type GetLocationLazyQueryHookResult = ReturnType<
  typeof useGetLocationLazyQuery
>;
export type GetLocationSuspenseQueryHookResult = ReturnType<
  typeof useGetLocationSuspenseQuery
>;
export type GetLocationQueryResult = Apollo.QueryResult<
  GetLocationQuery,
  GetLocationQueryVariables
>;
export const GetLocationsDocument = gql`
  query GetLocations($page: Int, $name: String) {
    locations(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetLocationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options
  );
}
export function useGetLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options
  );
}
export function useGetLocationsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options
  );
}
export type GetLocationsQueryHookResult = ReturnType<
  typeof useGetLocationsQuery
>;
export type GetLocationsLazyQueryHookResult = ReturnType<
  typeof useGetLocationsLazyQuery
>;
export type GetLocationsSuspenseQueryHookResult = ReturnType<
  typeof useGetLocationsSuspenseQuery
>;
export type GetLocationsQueryResult = Apollo.QueryResult<
  GetLocationsQuery,
  GetLocationsQueryVariables
>;
export const CreateCharacterDocument = gql`
  mutation CreateCharacter($input: CharacterInput!) {
    createCharacter(input: $input) {
      id
      name
      species
      status
      gender
    }
  }
`;
export type CreateCharacterMutationFn = Apollo.MutationFunction<
  CreateCharacterMutation,
  CreateCharacterMutationVariables
>;

/**
 * __useCreateCharacterMutation__
 *
 * To run a mutation, you first call `useCreateCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCharacterMutation, { data, loading, error }] = useCreateCharacterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCharacterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCharacterMutation,
    CreateCharacterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCharacterMutation,
    CreateCharacterMutationVariables
  >(CreateCharacterDocument, options);
}
export type CreateCharacterMutationHookResult = ReturnType<
  typeof useCreateCharacterMutation
>;
export type CreateCharacterMutationResult =
  Apollo.MutationResult<CreateCharacterMutation>;
export type CreateCharacterMutationOptions = Apollo.BaseMutationOptions<
  CreateCharacterMutation,
  CreateCharacterMutationVariables
>;
export const UpdateCharacterDocument = gql`
  mutation UpdateCharacter($id: ID!, $input: CharacterInput!) {
    updateCharacter(id: $id, input: $input) {
      id
      name
      species
      status
      gender
    }
  }
`;
export type UpdateCharacterMutationFn = Apollo.MutationFunction<
  UpdateCharacterMutation,
  UpdateCharacterMutationVariables
>;

/**
 * __useUpdateCharacterMutation__
 *
 * To run a mutation, you first call `useUpdateCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCharacterMutation, { data, loading, error }] = useUpdateCharacterMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCharacterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCharacterMutation,
    UpdateCharacterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCharacterMutation,
    UpdateCharacterMutationVariables
  >(UpdateCharacterDocument, options);
}
export type UpdateCharacterMutationHookResult = ReturnType<
  typeof useUpdateCharacterMutation
>;
export type UpdateCharacterMutationResult =
  Apollo.MutationResult<UpdateCharacterMutation>;
export type UpdateCharacterMutationOptions = Apollo.BaseMutationOptions<
  UpdateCharacterMutation,
  UpdateCharacterMutationVariables
>;
export const DeleteCharacterDocument = gql`
  mutation DeleteCharacter($id: ID!) {
    deleteCharacter(id: $id)
  }
`;
export type DeleteCharacterMutationFn = Apollo.MutationFunction<
  DeleteCharacterMutation,
  DeleteCharacterMutationVariables
>;

/**
 * __useDeleteCharacterMutation__
 *
 * To run a mutation, you first call `useDeleteCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCharacterMutation, { data, loading, error }] = useDeleteCharacterMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCharacterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCharacterMutation,
    DeleteCharacterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCharacterMutation,
    DeleteCharacterMutationVariables
  >(DeleteCharacterDocument, options);
}
export type DeleteCharacterMutationHookResult = ReturnType<
  typeof useDeleteCharacterMutation
>;
export type DeleteCharacterMutationResult =
  Apollo.MutationResult<DeleteCharacterMutation>;
export type DeleteCharacterMutationOptions = Apollo.BaseMutationOptions<
  DeleteCharacterMutation,
  DeleteCharacterMutationVariables
>;

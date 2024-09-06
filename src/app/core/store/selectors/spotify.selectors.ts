import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpotifyState } from '../reducers/spotify.reducers';

export type SpotifyFeatureState = SpotifyState;

export const selectFeature =
  createFeatureSelector<SpotifyFeatureState>('spotify');

export const selectSpotifyAccessTokenFeature = createSelector(
  selectFeature,
  (state: SpotifyFeatureState) => state.accessToken
);

export const selectSpotifyCatalogFeature = createSelector(
  selectFeature,
  (state: SpotifyFeatureState) => state.catalog
);

export const selectSpotifyLoadingFeature = createSelector(
  selectFeature,
  (state: SpotifyFeatureState) => state.loading
);

export const selectSpotifyFailedFeature = createSelector(
  selectFeature,
  (state: SpotifyFeatureState) => state.error
);

export const selectSpotifyIsModalOpenedFeature = createSelector(
  selectFeature,
  (state: SpotifyFeatureState) => state.isModalOpened
);

export const selectSpotifySearchValueFeature = createSelector(
  selectFeature,
  (state: SpotifyFeatureState) => state.searchValue
);

export const selectSpotifySelectedTypesFeature = createSelector(
  selectFeature,
  (state: SpotifyFeatureState) => state.selectedTypes
);

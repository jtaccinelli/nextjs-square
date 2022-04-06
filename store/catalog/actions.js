import { UPDATE_CATALOG, REFRESH_CATALOG } from "./types";

export const updateCatalog = () => ({
  type: UPDATE_CATALOG,
});

export const refreshCatalog = () => ({
  type: REFRESH_CATALOG,
});

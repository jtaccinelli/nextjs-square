import { Client, Environment } from "square";
import polyfills from "./polyfills";

const ATTRIBUTE_DEFINITION_IDS = {
  HANDLE: "KNQIMBBTDDVKGZB47JCVYQM6",
  MATERIAL: "5X2HMFSB2OJ2X627WTQ47AJR",
  COLOR: "UCUJGQWBMJO3IDCSF5PYN36H",
  TYPE: "RQU4TPJZWAYZRLK56L33UMPC",
};

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

// -- UTILITY FUNCTIONS

export const parseSquareResponse = (obj) => {
  return JSON.parse(JSON.stringify(obj), (_key, value) =>
    typeof value === "bigint" ? (value = value.toString()) : value
  );
};

// --- CATALOG METHODS

export const getCatalog = async () => {
  try {
    const response = await client.catalogApi.listCatalog(undefined, "ITEM");
    return response.result.objects;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// --- ITEM METHODS

export const getItemByHandle = async (handle) => {
  const options = {
    customAttributeFilters: [
      {
        customAttributeDefinitionId: ATTRIBUTE_DEFINITION_IDS.HANDLE,
        stringFilter: handle,
      },
    ],
  };

  try {
    const response = await client.catalogApi.searchCatalogItems(options);

    if (response?.result?.items?.length > 1) {
      return null;
    }

    return response.result.items[0];
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getObjectById = async (id) => {
  try {
    const response = await client.catalogApi.retrieveCatalogObject(id, false);
    return response?.result?.object ?? null;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const buildProductCatalog = async (id) => {};

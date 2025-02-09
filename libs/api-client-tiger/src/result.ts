// (C) 2023-2024 GoodData Corporation
import { AxiosInstance } from "axios";
import {
    ActionsApi,
    ActionsApiInterface,
    ActionsApiAnalyzeCsvRequest,
    AnalyzeCsvResponse,
    AnalyzeCsvRequest,
    AnalyzeCsvRequestItem,
    AnalyzeCsvRequestItemConfig,
    ActionsApiImportCsvRequest,
    ImportCsvRequestTable,
    ImportCsvRequestTableSource,
    ImportCsvRequestTableSourceConfig,
    GdStorageFile,
    ReadFileManifestsResponse,
} from "./generated/result-json-api/index.js";

export const tigerResultClientFactory = (axios: AxiosInstance): ActionsApiInterface =>
    new ActionsApi(undefined, "", axios);

export {
    ActionsApiInterface as ResultActionsApiInterface,
    ActionsApiAnalyzeCsvRequest,
    AnalyzeCsvResponse,
    AnalyzeCsvRequest,
    AnalyzeCsvRequestItem,
    AnalyzeCsvRequestItemConfig,
    ActionsApiImportCsvRequest,
    ImportCsvRequestTable,
    ImportCsvRequestTableSource,
    ImportCsvRequestTableSourceConfig,
    GdStorageFile,
    ReadFileManifestsResponse,
};

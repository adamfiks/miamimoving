import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list_services";
import listServiceAreas from "./tools/list_service_areas";
import getServiceDetails from "./tools/get_service_details";
import getServiceAreaDetails from "./tools/get_service_area_details";
import getBusinessInfo from "./tools/get_business_info";
import submitQuoteRequest from "./tools/submit_quote_request";

export default defineMcp({
  name: "miami-moving-mcp",
  title: "Miami Moving",
  version: "0.1.0",
  instructions:
    "Public tools for Miami Moving, a licensed and insured South Florida moving company. Use `list_services` and `list_service_areas` to see what the company offers and where. Use `get_service_details` / `get_service_area_details` for a specific service or city. Use `get_business_info` for contact info. Use `submit_quote_request` to submit a moving quote request on behalf of a customer — always confirm name, phone, and email with the customer first.",
  tools: [
    listServices,
    listServiceAreas,
    getServiceDetails,
    getServiceAreaDetails,
    getBusinessInfo,
    submitQuoteRequest,
  ],
});

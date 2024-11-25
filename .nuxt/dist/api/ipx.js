import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"C:/Users/root/Documents/depoAntalya/static","domains":["strapi.badblli.dev"],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);

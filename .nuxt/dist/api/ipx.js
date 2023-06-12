import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"C:/depoAntalya/static","domains":["strapi.badblli.dev"],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);

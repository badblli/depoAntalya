import { GetAllSiteConfig } from "../graphql/GetAllSiteConfig";

export default async function (req, res, next) {
  try {
    const { app, redirect } = req;
    const apolloProvider = app && app.apolloProvider;

    if (!apolloProvider) {
      console.error("Apollo sağlayıcısı bulunamadı.");
      next();
      return;
    }

    // Bakım modunu kontrol etmek için gerekli işlemleri yapın
    const { siteConfigs } = await apolloProvider.defaultClient.query({
      query: GetAllSiteConfig,
      variables: {
        locale: req.i18n.locale || "tr", // Varsayılan dilinizi burada ayarlayın
      },
    });

    const maintenance = siteConfigs.data.attributes.maintenance;
    console.log("maintenance", maintenance);
    const isMaintenanceMode = maintenance ? maintenance : false;

    if (isMaintenanceMode && req.url !== "/maintenance") {
      // Bakım modu aktifse ve istek /maintenance sayfasına yönelik değilse,
      // doğrudan /maintenance sayfasına yönlendirilecek
      redirect("/maintenance");
    } else if (!isMaintenanceMode && req.url === "/maintenance") {
      // Bakım modu kapalı ise ve istek /maintenance sayfasına yönelikse,
      // doğrudan ana sayfaya (index) yönlendirilecek
      redirect("/");
    } else {
      // Diğer durumlarda bir sonraki middleware'e devam edecek
      next();
    }
  } catch (error) {
    console.error("GraphQL sorgusu başarısız oldu:", error);
    next(); // GraphQL sorgusu başarısız olduysa da bir sonraki middleware'e devam eder
  }
}

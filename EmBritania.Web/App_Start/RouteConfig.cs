using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace EmBritania.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
                );
            /*
            // 1 - Inicio
            routes.MapRoute(null,
                "{controller}/{action}/",
                new { controller = "Hoteis",
                    action = "ListaHoteis",
                    categoria = (string)null , pagina = 1}
           );

            // 2
            routes.MapRoute(null,
                "{controller}/{action}/pagina{pagina}",
                new { controller = "Hoteis",
                    action = "ListaHoteis",
                    categoria = (string)null }, new { pagina = @"\d+" }
            );

            // 3
            routes.MapRoute(null, "{controller}/{action}/{categoria}", new
            {
                controller = "Hoteis",
                action = "ListaHoteis",
                pagina = 1
            }
            );

            // 4
            routes.MapRoute(null,
                "{controller}/{action}/{categoria}/pagina{pagina}", 
                new { controller = "Hoteis",
                action = "ListaHoteis"},
                new { pagina = @"\d+" }
            );


            //routes.MapRoute(null, "{controller}/{action}");



            //Url Paginação
//            routes.MapRoute(
//                name: null,
//                url: "{controller}/{action}/pagina{pagina}",
//                defaults: new { Controller = "Hoteis", action = "ListaHoteis" }
//                );
//
//            routes.MapRoute(
//                name: "Default",
//                url: "{controller}/{action}/{id}",
//                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
//            );

    */


        }
    }
}

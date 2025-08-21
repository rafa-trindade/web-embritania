using EmBritania.Dominio.Repositorio;

using EmBritania.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EmBritania.Web.Controllers
{
    public class EventosController : Controller
    {

        private EventoRepositorio _repositorio;
        public int EventosPorPagina = 4;

        DbContexto db = new DbContexto();


        [Route("DetalhesEvento/{id}/{evento}")]
        public ViewResult Detalhes(int id)
        {
            _repositorio = new EventoRepositorio();

            var model = new EventosViewModel
            {
                Evento = _repositorio.ObeterEvento(id),

            };

            return View(model);
        }


        public ViewResult ListaEventos(string categoria, int pagina = 1)
        {
            _repositorio = new EventoRepositorio();

            var model = new EventosViewModel
            {

                Eventos = _repositorio.Evento
                        .Where(h => categoria == null || h.CategoriaEvento.DescricaoCategoria == categoria)
                        .OrderBy(d => d.Status)
                        .ThenBy(p => p.DataEvento)
                        .Skip((pagina - 1) * EventosPorPagina)
                        .Take(EventosPorPagina),

                EventosDesc = _repositorio.Evento
                        .Where(h => categoria == null || h.CategoriaEvento.DescricaoCategoria == categoria)
                        .OrderBy(d => d.Status)
                        .ThenByDescending(p => p.DataEvento)
                        .Skip((pagina - 1) * EventosPorPagina)
                        .Take(EventosPorPagina),

                Paginacao = new Paginacao
                {
                    PaginaAtual = pagina,
                    ItensPorPagina = EventosPorPagina,
                    ItensTotal = categoria == null ? _repositorio.Evento.Count() : _repositorio.Evento.Count(e => e.CategoriaEvento.DescricaoCategoria == categoria)
                },

                CategoriaAtual = categoria,

                ContaCategorias = _repositorio.Evento,

                //Hoteis = db.Hotel

            };

            return View(model);
        }

    }
}
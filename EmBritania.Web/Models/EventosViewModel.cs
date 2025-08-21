using EmBritania.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmBritania.Web.Models
{
    public class EventosViewModel
    {
        public IEnumerable<clsEvento> Eventos { get; set; }
        public IEnumerable<clsEvento> EventosDesc { get; set; }

        public IEnumerable<clsEventoCategoria> EventoCategoria { get; set; }

        public Paginacao Paginacao { get; set; }

        public string CategoriaAtual { get; set; }

        public IEnumerable<clsEvento> ContaCategorias { get; set; }

        public IEnumerable<clsEvento> UltimosEventos { get; set; }

        //public IEnumerable<clsHotel> Hoteis { get; set; }

        public clsEvento Evento { get; set; }//id ----repositorio hotelRepositorio

    }
}
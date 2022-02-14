using DAL.Model;
using Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace homework1.Controllers
{
    [Route("api/Mesaj")]
    [ApiController]

    public class MesajController : ControllerBase
    {
        List<Mesaj> mesajs = new List<Mesaj>();
        Result result = new Result();
        DBOperations dbOperations = new DBOperations();
        SiteContext context = new SiteContext();

        //[Authorize(Roles = "Admin")]
        [HttpGet()]
        public List<Mesaj> GetMesaj()
        {

            return dbOperations.GetMesaj();

        }
        [Authorize(Roles = "Admin")]
        [HttpGet("Mesaj/Detay/{mesajId}")]
        public Mesaj GetMesajDetay(int mesajId)
        {

            Mesaj mesaj_obj = new Mesaj();

            mesaj_obj = dbOperations.FindMesajID(mesajId);

            return mesaj_obj;

        }


        [Authorize(Roles = "User")]
        [HttpGet("{userEmail}")]
        public List<Mesaj> GetMesaj(string userEmail)
        {
            int Id = dbOperations.FindUserId(userEmail);
            List<Mesaj> mesaj_obj = new List<Mesaj>();

            mesaj_obj = dbOperations.FindMesajUser(Id);

            return mesaj_obj;

        }
        [Route("[action]/{mesajId}")]
        [HttpGet("[action]/{mesajId}")]
        public Mesaj Detay(int mesajId)
        {
            return dbOperations.FindMesajID(mesajId);
        }

        [Authorize(Roles = "Admin,User")]
        [HttpPost]
        public Result PostMesaj(MesajDTO _mesajdto)
        {
            if (dbOperations.AddMesaj(_mesajdto) == true)
            {
                result.status = 1;
                result.message = "Yeni mesaj listeye eklendi.";
            }
            else
            {
                result.status = 0;
                result.message = "Hata, mesaj eklenemedi.";
            }

            return result;
        }

        [Authorize(Roles = "Admin")]
        [HttpPatch("{mesajId}")]

        public Result UpdateMesaj(int mesajId, Mesaj new_value)
        {

            mesajs = dbOperations.GetMesaj();


            Mesaj? old_value = mesajs.Find(x => x.Id == mesajId);

            if (old_value != null)
            {
                dbOperations.UpdateMesaj(old_value, new_value);

                result.status = 1;
                result.message = "Mesaj bilgileri başarıyla güncellendi.";

            }
            else
            {
                result.status = 0;
                result.message = "Mesaj bulunamadı.";
            }

            return result;
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{mesajId}")]
        public Result DeleteMesaj(int mesajId)
        {

            if (dbOperations.DeleteMesaj(mesajId))
            {

                result.status = 1;
                result.message = "Mesaj silindi.";

            }
            else
            {
                result.status = 0;
                result.message = "Mesaj zaten silinmiş.";
            }

            return result;
        }



    }
}
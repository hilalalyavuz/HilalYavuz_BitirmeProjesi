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
    [Route("api/Daire")]
    [ApiController]

    public class DaireController : ControllerBase
    {
        List<Daire> daires = new List<Daire>();
        Result result = new Result();
        DBOperations dbOperations = new DBOperations();
        SiteContext context = new SiteContext();

        [Authorize(Roles ="Admin")]
        [HttpGet()]
        public List<Daire> GetDaire()
        {
            //listeyi dolduruyor


            return dbOperations.GetDaire();

        }

        [Authorize(Roles = "Admin")]
        [HttpGet("{daireId}")]
        public Daire GetDaire(int daireId)
        {
            //listeyi dolduruyor
            daires = dbOperations.GetDaire();
            Daire daire_obj = new Daire();

            //karşılaştırma işlemini yapıyor.
            daire_obj = daires.FirstOrDefault(x => x.Id == daireId);
            return daire_obj;

        }

        [Authorize(Roles ="Admin")]
        [HttpPost]
        public Result PostDaire(Daire _daire)
        {
            Result result = new Result();
            Daire da = dbOperations.FindDaire(_daire.Blok,_daire.DaireNo,0);

            //verilen film bilgisi listede var mı diye bakıyor
            bool daireCheck = (da != null) ? true : false;

            if (!daireCheck)
            {
                if (dbOperations.AddDaire(_daire) == true)
                {
                    result.status = 1;
                    result.message = "Yeni daire listeye eklendi.";
                }
                else
                {
                    result.status = 0;
                    result.message = "Hata, daire eklenemedi.";
                }
            }
            else
            {
                result.status = 0;
                result.message = "Bu eleman listede zaten var.";

            }

            return result;
        }


        [Authorize(Roles ="Admin")]
        [HttpPatch("{daireId}")]

        public Result UpdateDaire(int daireId, Daire new_value)
        {

            daires = dbOperations.GetDaire();

            //verilen film listede var mı diye kontrol ediyor
            Daire? old_value = daires.Find(x => x.Id == daireId);

            if (old_value != null)
            {
                dbOperations.UpdateDaire(old_value, new_value);

                result.status = 1;
                result.message = "Daire bilgileri başarıyla güncellendi.";


            }
            else
            {
                result.status = 0;
                result.message = "Daire bulunamadı.";
            }

            return result;
        }

        [Authorize(Roles ="Admin")]
        [HttpDelete("{daireId}")]
        public Result DeleteDaire(int daireId)
        {

            if (dbOperations.DeleteDaire(daireId))
            {

                result.status = 1;
                result.message = "Daire silindi.";

            }
            else
            {
                result.status = 0;
                result.message = "Daire zaten silinmiş.";
            }

            return result;
        }






    }
}
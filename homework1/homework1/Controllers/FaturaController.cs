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
    [Route("api/Fatura")]
    [ApiController]

    public class FaturaController : ControllerBase
    {
        List<Fatura> faturas = new List<Fatura>();
        Result result = new Result();
        DBOperations dbOperations = new DBOperations();
        SiteContext context = new SiteContext();

        [Authorize(Roles ="Admin")]
        [HttpGet()]
        public List<Fatura> GetFatura()
        {

            return dbOperations.GetFatura();

        }



        [Authorize(Roles ="User")]
        [HttpGet("{userEmail}")]
        public List<Fatura> GetFatura(string userEmail)
        {
            int Id = dbOperations.FindUserId(userEmail);

            List<Fatura> fatura_obj = new List<Fatura>();

            fatura_obj = dbOperations.FindFaturaUser(Id);

            return fatura_obj;

        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public Result PostFatura(Fatura _fatura)
        {       
                if (dbOperations.AddFatura(_fatura) == true)
                {
                    result.status = 1;
                    result.message = "Yeni fatura listeye eklendi.";
                }
                else
                {
                    result.status = 0;
                    result.message = "Hata, fatura eklenemedi.";
                }
            
            return result;
        }

        [Route("[action]")]
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public Result TopluFatura(Fatura _fatura)
        {
             dbOperations.TopluFaturaAta(_fatura);
             result.status = 1;
             result.message = "Yeni faturalar listeye eklendi.";
            

            return result;
        }

        [Authorize(Roles = "Admin,User")]
        [HttpPatch("{faturaId}")]

        public Result UpdateFatura(int faturaId, Fatura new_value)
        {

            faturas = dbOperations.GetFatura();


            Fatura? old_value = faturas.Find(x => x.Id == faturaId);

            if (old_value != null)
            {
                dbOperations.UpdateFatura(old_value, new_value);

                result.status = 1;
                result.message = "Fatura bilgileri başarıyla güncellendi.";

            }
            else
            {
                result.status = 0;
                result.message = "Fatura bulunamadı.";
            }

            return result;
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{faturaId}")]
        public Result DeleteFatura(int faturaId)
        {

            if (dbOperations.DeleteFatura(faturaId))
            {

                result.status = 1;
                result.message = "Fatura silindi.";

            }
            else
            {
                result.status = 0;
                result.message = "Fatura zaten silinmiş.";
            }

            return result;
        }



    }
}
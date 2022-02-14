
using DAL.Model;
using Entities;

namespace homework1.Controllers
{
    public class DBOperations
    {
        private SiteContext _context = new SiteContext();

        public bool AddUser(User _user)
        {
            try
            {
                _context.user.Add(_user);
                _context.SaveChanges();
                return true;

            }catch(Exception ex)
            {
                return false;

            }
        }
        public bool AddDaire(Daire _daire)
        {
            try
            {
                _context.daire.Add(_daire);
                _context.SaveChanges();
                return true;

            }catch(Exception ex)
            {
                return false;

            }
        }
        public bool AddFatura(Fatura _fatura)
        {
            try
            {
                _context.fatura.Add(_fatura);
                _context.SaveChanges();
                return true;

            }catch(Exception ex)
            {
                return false;

            }
        }
        public bool AddMesaj(MesajDTO _mesajdto)
        {
            Mesaj msj = new Mesaj();
            int id = FindUserId(_mesajdto.UserEmail);
            msj.UserId = id;
            msj.Okundu = _mesajdto.Okundu;
            msj.Icerik = _mesajdto.Icerik;  
            msj.Response = _mesajdto.Response;
            try
            {
                _context.mesaj.Add(msj);
                _context.SaveChanges();
                return true;

            }catch(Exception ex)
            {
                return false;

            }
        }

        public bool DeleteUser(int Id)
        {
            try
            {
                _context.user.Remove(FindUser("", Id));
                _context.SaveChanges();
                return true;

            }
            catch (Exception exc)
            {
                Console.WriteLine(exc.Message);
                return false;

            }
        }
        public bool DeleteDaire(int Id)
        {
            try
            {
                _context.daire.Remove(FindDaire("",0,Id));
                _context.SaveChanges();
                return true;

            }
            catch (Exception exc)
            {
                Console.WriteLine(exc.Message);
                return false;

            }
        }
        public bool DeleteFatura(int Id)
        {
            
            try
            {
                _context.fatura.Remove(FindFaturaID(Id));
                _context.SaveChanges();
                return true;

            }
            catch (Exception exc)
            {
                Console.WriteLine(exc.Message);
                return false;

            }
        }
        public bool DeleteMesaj(int Id)
        {
            try
            {
                _context.mesaj.Remove(FindMesajID(Id));
                _context.SaveChanges();
                return true;

            }
            catch (Exception exc)
            {
                Console.WriteLine(exc.Message);
                return false;

            }
        }
        public User FindUser(string email, int id = 0)
        {
            User? mov = new User();

            if (!string.IsNullOrEmpty(email))
            {
                mov = _context.user.FirstOrDefault(m => m.Email == email);
            }
            else if (id > 0)
            {
                mov = _context.user.FirstOrDefault(m => m.Id == id);
            }

            return mov;
        }
        public Daire FindDaire(string? blok, int? daireNo, int id=0)
        {
            Daire? mov = new Daire();

            if (!string.IsNullOrEmpty(blok) && daireNo !=0)
            {
                mov = _context.daire.FirstOrDefault(m => m.Blok == blok);
                mov = _context.daire.FirstOrDefault(m => m.DaireNo == daireNo);
            }
            else if(id > 0){
                mov = _context.daire.FirstOrDefault(m => m.Id == id);
            }

            return mov;
        }
        public Fatura FindFaturaID(int id)
        {

            Fatura mov = new Fatura();

            if (id > 0)
            {
                mov = _context.fatura.FirstOrDefault(m => m.Id == id);
            }
            return mov;
        }

        public List<Fatura> FindFaturaUser(int? userId)
        {

            List<Fatura> mov = new List<Fatura>();

            if (userId != null || userId > 0)
            {
                mov = _context.fatura.Where(m => m.UserId == userId).ToList();

            }

            return mov;
        }
        public Mesaj FindMesajID(int id)
        {
            Mesaj? mov = new Mesaj();

            if (id != null && id > 0)
            {
                mov = _context.mesaj.FirstOrDefault(m => m.Id == id);
            }
            
            return mov;
        }

        public List<Mesaj> FindMesajUser(int userId)
        {
            List<Mesaj>? mov = new List<Mesaj>();

            if (userId != null && userId > 0)
            {
                mov = _context.mesaj.Where(m => m.UserId == userId).ToList();
            }

            return mov;
        }

        public List<User> GetUsers()
        {
            List<User> users = new List<User>();
            users = _context.user.OrderBy(x => x.Id).ToList();
            return users;
        }
         public List<Daire> GetDaire()
        {
            List<Daire> daires = new List<Daire>();
            daires = _context.daire.OrderBy(x => x.Id).ToList();
            return daires;
        }
         public List<Fatura> GetFatura()
        {
            List<Fatura> faturas = new List<Fatura>();
            faturas = _context.fatura.OrderBy(x => x.Id).ToList();
            return faturas;
        }
         public List<Mesaj> GetMesaj()
        {
            List<Mesaj> mesajs = new List<Mesaj>();
            mesajs = _context.mesaj.OrderBy(x => x.Id).ToList();
            return mesajs;
        }

        public bool UpdateUser(User old_value, User new_value)
        {
            User? mov = FindUser("", old_value.Id);
            try
            {
                if (new_value.Name != null && new_value.Name != old_value.Name)
                {
                    mov.Name = new_value.Name;

                }
                if (new_value.LName != null && new_value.LName != old_value.LName)
                {
                    mov.LName = new_value.LName;

                }
                if (new_value.Email != null && new_value.Email != old_value.Email)
                {
                    mov.Email = new_value.Email;

                }
                if (new_value.TcNo != null && new_value.TcNo != old_value.TcNo)
                {
                    mov.TcNo = new_value.TcNo;

                }
                if (new_value.Phone != null && new_value.Phone != old_value.Phone)
                {
                    mov.Phone = new_value.Phone;

                }
                if (new_value.PlateNum != null && new_value.PlateNum != old_value.PlateNum)
                {
                    mov.PlateNum = new_value.PlateNum;

                }
                if (new_value.DaireId != null && new_value.DaireId != old_value.DaireId)
                {
                    mov.DaireId = new_value.DaireId;

                }

                _context.SaveChanges();
                return true;

            }
            catch (Exception exc)
            {
                return false;

            }
        }

        public bool UpdateDaire(Daire old_value, Daire new_value)
        {
            Daire? mov = FindDaire("",0,old_value.Id);
            try
            {
                if (new_value.Blok !=null && new_value.Blok!=old_value.Blok)
                {
                    mov.Blok = new_value.Blok;

                }
                if (new_value.Durumu != null && new_value.Durumu != old_value.Durumu)
                {
                    mov.Durumu = new_value.Durumu;

                }
                if (new_value.Tipi != null && new_value.Tipi != old_value.Tipi)
                {
                    mov.Tipi = new_value.Tipi;

                }
                if (new_value.Kat != null && new_value.Kat != old_value.Kat)
                {
                    mov.Kat = new_value.Kat;

                }
                if (new_value.DaireNo != null && new_value.DaireNo != old_value.DaireNo)
                {
                    mov.DaireNo = new_value.DaireNo;

                }
                if (new_value.UserId != null && new_value.UserId != old_value.UserId)
                {
                    mov.UserId = new_value.UserId;

                }
                _context.SaveChanges();
                return true;

            }
            catch (Exception exc)
            {
                return false;

            }
        }

        public bool UpdateFatura(Fatura old_value, Fatura new_value)
        {
            Fatura? mov = FindFaturaID(old_value.Id);
            try
            {
                if (new_value.Tip != null && new_value.Tip != old_value.Tip)
                {
                    mov.Tip = new_value.Tip;

                }
                if (new_value.Odendi != null && new_value.Odendi != old_value.Odendi)
                {
                    mov.Odendi = new_value.Odendi;

                }
                if (new_value.Miktar != null && new_value.Miktar != old_value.Miktar)
                {
                    mov.Miktar = new_value.Miktar;

                }
                if (new_value.UserId != null && new_value.UserId != old_value.UserId)
                {
                    mov.UserId = new_value.UserId;

                }
                if (new_value.DaireId != null && new_value.DaireId != old_value.DaireId)
                {
                    mov.DaireId = new_value.DaireId;

                }
                if (new_value.Ay != null && new_value.Ay != old_value.Ay)
                {
                    mov.Ay = new_value.Ay;

                }
                if (new_value.Yıl != null && new_value.Yıl != old_value.Yıl)
                {
                    mov.Yıl = new_value.Yıl;

                }
                _context.SaveChanges();
                return true;

            }
            catch (Exception exc)
            {
                return false;

            }
        }
        public bool UpdateMesaj(Mesaj old_value, Mesaj new_value)
        {
            Mesaj? mov = FindMesajID(old_value.Id);
            try
            {
                if (new_value.Okundu != null && new_value.Okundu != old_value.Okundu)
                {
                    mov.Okundu = new_value.Okundu;

                }
                if (new_value.Icerik != null && new_value.Icerik != old_value.Icerik)
                {
                    mov.Icerik = new_value.Icerik;

                }
                if (new_value.UserId != null && new_value.UserId != old_value.UserId)
                {
                    mov.UserId = new_value.UserId;

                }
                if (new_value.Response != null && new_value.Response != old_value.Response)
                {
                    mov.Response = new_value.Response;

                }
                _context.SaveChanges();
                return true;

            }
            catch (Exception exc)
            {
                return false;

            }
        }

        public int FindUserId(string email)
        {
            int Id = 0;
            if (!string.IsNullOrEmpty(email))
            {
                 Id = _context.user.FirstOrDefault(x => x.Email == email).Id;
            }

            return Id;
        }

        public void TopluFaturaAta(Fatura _fatura)
        {
            List<User> users = new List<User>();
            List<Fatura> faturas = new List<Fatura>();
            users = _context.user.ToList();
            foreach (User user in users)
            {
                Fatura? fat = new Fatura();
                fat.Miktar = _fatura.Miktar;
                fat.Odendi = _fatura.Odendi;
                fat.Tip = _fatura.Tip;
                fat.UserId = user.Id;
                fat.DaireId = user.DaireId;
                fat.Ay = _fatura.Ay;
                faturas.Add(fat);

            }
            _context.fatura.AddRange(faturas);
            _context.SaveChanges();

        }


        #region TOKEN FUNCTIONS...
        public void CreateLogin(APIAuthority loginUser)
        {
            _context.APIAuthority.Add(loginUser);
            _context.SaveChanges();
        }

        public APIAuthority GetLogin(APIAuthority loginUser)
        {
            APIAuthority? user = new APIAuthority();
            if (!string.IsNullOrEmpty(loginUser.Email) && !string.IsNullOrEmpty(loginUser.Password))
            {
                user = _context.APIAuthority.FirstOrDefault(m => m.Email == loginUser.Email && m.Password == loginUser.Password);
            }

            return user;
        }
        #endregion

    }
}

namespace DAL.Model


{
    public class Mesaj

    {

        public int Id { get; set; }
        public string? Okundu { get; set; }
        public string? Icerik { get; set; }
        public int? UserId { get; set; }

        public string? Response { get; set; }



    }

    public class MesajDTO

    {
        public int Id { get; set; }
        public string? Okundu { get; set; }
        public string? Icerik { get; set; }
        public int? UserId { get; set; }

        public string? Response { get; set; }
        public string? UserEmail { get; set; }





    }
}
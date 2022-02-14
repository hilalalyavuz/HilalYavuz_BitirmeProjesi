namespace DAL.Model


{
    public class Fatura

    {

        public int Id { get; set; }
        public string? Tip { get; set; }
        public bool? Odendi { get; set; }
        public int? Miktar { get; set; }
        public int? UserId { get; set; }
        public int? DaireId { get; set; }
        public int? Ay { get; set; }
        public int? Yıl { get; set; }


    }
}
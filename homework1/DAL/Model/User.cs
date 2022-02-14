namespace DAL.Model


{
    public class User

    {

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? LName { get; set; }
        public string? Email { get; set; }
        public string? TcNo { get; set; }
        public string? Phone { get; set; }
        public string? PlateNum { get; set; }
        public int RoleId { get; set; }
        public int? DaireId { get; set; }


    }
}
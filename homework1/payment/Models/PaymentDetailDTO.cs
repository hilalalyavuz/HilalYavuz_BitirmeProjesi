using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace payment.Models;

public class PaymentDetailDTO
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? id { get; set; }

    [BsonElement("cardNumber")]
    public string cardNumber { get; set; } = null!;

    public string expirationDate { get; set; }

    public string cvv { get; set; }

    public string nameSurname { get; set; }
    public int money { get; set; }
}
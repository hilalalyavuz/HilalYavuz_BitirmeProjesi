using payment.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace payment.Services;

public class PaymentService
{
    private readonly IMongoCollection<PaymentDetail> _paymentDetailCollection;

    public PaymentService(
        IOptions<PaymentDBSettings> paymentdbsettings)
    {
        var mongoClient = new MongoClient(
            paymentdbsettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            paymentdbsettings.Value.DatabaseName);

        _paymentDetailCollection = mongoDatabase.GetCollection<PaymentDetail>(
            paymentdbsettings.Value.PaymentCollectionName);
    }

    public async Task<List<PaymentDetail>> GetAsync() =>
        await _paymentDetailCollection.Find(_ => true).ToListAsync();

    public async Task<bool> WithdrawMoney(PaymentDetail pd, int money)
    {
        var current = await _paymentDetailCollection.Find(x => x.cardNumber == pd.cardNumber && x.cvv == pd.cvv && x.nameSurname == pd.nameSurname
        && x.expirationDate == pd.expirationDate).FirstOrDefaultAsync();

        if (current != null && current.balance >= money)
        {
            current.balance -= money;
            await _paymentDetailCollection.ReplaceOneAsync(x => x.id == current.id, current);
            return true;
        }

        return false;
    }

    //public async Task<PaymentDetail?> GetAsync(string id) =>
    //    await _paymentDetailCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task Add(PaymentDetail newBook) =>
        await _paymentDetailCollection.InsertOneAsync(newBook);

}

//    public async Task UpdateAsync(string id, PaymentDetail updatedBook) =>
//        await _paymentDetailCollection.ReplaceOneAsync(x => x.Id == id, updatedBook);

//    public async Task RemoveAsync(string id) =>
//        await _paymentDetailCollection.DeleteOneAsync(x => x.Id == id);
//}

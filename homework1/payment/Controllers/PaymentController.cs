using payment.Models;
using payment.Services;
using Microsoft.AspNetCore.Mvc;

namespace payment.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class PaymentController : ControllerBase
{
    private readonly PaymentService _paymentService;

    public PaymentController(PaymentService payService) =>
        _paymentService = payService;

    [HttpGet]
    public async Task<List<PaymentDetail>> Get() =>
        await _paymentService.GetAsync();


    [HttpPost("WithdrawMoney")]
    public async Task<IActionResult> WithdrawMoney(PaymentDetailDTO dto)
    {
        var result = await _paymentService.WithdrawMoney(new PaymentDetail
        {
            cardNumber = dto.cardNumber,
            cvv = dto.cvv,
            nameSurname = dto.nameSurname,
            expirationDate = dto.expirationDate,
            
        }, dto.money);
        return Ok(result);
    }

    //[HttpGet("{id:length(24)}")]
    //public async Task<ActionResult<PaymentDetail>> Get(string id)
    //{
    //    var book = await _paymentService.GetAsync(id);

    //    if (book is null)
    //    {
    //        return NotFound();
    //    }

    //    return book;
    //}

    //[HttpPost]
    //public async Task<IActionResult> Post(PaymentDetail newBook)
    //{
    //    await _paymentService.CreateAsync(newBook);

    //    return CreatedAtAction(nameof(Get), new { id = newBook.Id }, newBook);
    //}

    //[HttpPut("{id}")]
    //public async Task<IActionResult> Update(string id, PaymentDetail updatedBook)
    //{
    //    var book = await _paymentService.GetAsync(id);

    //    if (book is null)
    //    {
    //        return NotFound();
    //    }

    //    updatedBook.Id = book.Id;

    //    await _paymentService.UpdateAsync(id, updatedBook);

    //    return NoContent();
    //}

    //[HttpDelete("{id:length(24)}")]
    //public async Task<IActionResult> Delete(string id)
    //{
    //    var book = await _paymentService.GetAsync(id);

    //    if (book is null)
    //    {
    //        return NotFound();
    //    }

    //    await _paymentService.RemoveAsync(book.Id);

    //    return NoContent();
    //}
}
using System.ComponentModel.DataAnnotations;

namespace michangarrito_back
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        [Required]
        [MaxLength(250)]
        public string ProductName { get; set; }
        [Required]
        public int ModelYear { get; set; }
    }
}

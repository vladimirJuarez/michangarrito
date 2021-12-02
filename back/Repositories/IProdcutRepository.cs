using michangarrito_back.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace michangarrito_back.Repositories
{
    public interface IProdcutRepository
    {
        Task<IEnumerable<ProductDTO>> GetProducts();
        Task<ProductDTO> GetProductById(int productId);
        Task<ProductDTO> CreateUpdateProduct(ProductDTO productDTO);
        Task<bool> DeleteProduct(int productId);
    }
}

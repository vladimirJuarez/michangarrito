using AutoMapper;
using michangarrito_back.DbContexts;
using michangarrito_back.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace michangarrito_back.Repositories
{
    public class ProductRepository : IProdcutRepository
    {
        private readonly MiChangarritoDbContext _repo;
        private readonly IMapper _mapper;

        public ProductRepository(MiChangarritoDbContext repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<ProductDTO> CreateUpdateProduct(ProductDTO productDTO)
        {
            var product = _mapper.Map<ProductDTO,Product>(productDTO);

            if(product.ProductId > 0)
            {
                _repo.Products.Update(product);
            }
            else
            {
                _repo.Products.Add(product);
            }

            await _repo.SaveChangesAsync();

            return _mapper.Map<Product, ProductDTO>(product);
        }

        public async Task<bool> DeleteProduct(int productId)
        {
            var product = await _repo.Products.FirstOrDefaultAsync(p => p.ProductId == productId);

            if(product is null)
            {
                return false;
            }

            _repo.Products.Remove(product);
            await _repo.SaveChangesAsync();

            return true;
        }

        public async Task<ProductDTO> GetProductById(int productId)
        {
            var product = await _repo.Products.FirstOrDefaultAsync(p => p.ProductId == productId);

            return _mapper.Map<ProductDTO>(product);
        }

        public async Task<IEnumerable<ProductDTO>> GetProducts()
        {
            var products = await _repo.Products.ToListAsync();
            return _mapper.Map<List<ProductDTO>>(products);
        }
    }
}

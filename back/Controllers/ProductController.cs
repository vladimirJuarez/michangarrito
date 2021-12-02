using michangarrito_back.DTOs;
using michangarrito_back.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace michangarrito_back.Controllers
{
    [ApiController]
    [Route("api/[controller]/")]
    public class ProductController : Controller
    {
        private readonly IProdcutRepository _repository;
        private readonly ILogger _logger;
        private ResponseDTO _response;
        public ProductController(IProdcutRepository repository, 
            ILogger<ProductController> logger)
        {
            _repository = repository;
            _response = new ResponseDTO();
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<ProductDTO>> GetAll()
        {
            try
            {
                _response.Result = await _repository.GetProducts();
                
                if(_response.Result == null || ((List<ProductDTO>)_response.Result).Count == 0)
                {
                    _logger.LogInformation("There are no Products");
                    _response.IsSuccess = false;
                    return NotFound(_response);
                }
                _logger.LogInformation("Products were found");
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Getting the error: {ex.Message}");
                _response.IsSuccess = false;
                _response.ErrorMessage = new List<string> { ex.Message };
                return BadRequest(_response);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ProductDTO>> GetProduct(int id)
        {
            try
            {
                _response.Result = await  _repository.GetProductById(id);

                if(_response.Result == null)
                {
                    _logger.LogInformation($"Product was not found: ProductId {id}");
                    _response.IsSuccess = false;
                    return NotFound(_response);
                }

                _logger.LogInformation($"Product was found: { JsonConvert.SerializeObject(_response.Result) }");
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Getting the error: {ex.Message}");
                _response.IsSuccess = false;
                _response.ErrorMessage = new List<string> { ex.Message };
                return BadRequest(_response);
            }
        }

        [HttpPost]
        public async Task<ActionResult<ProductDTO>> CreateProduct([FromBody] ProductDTO productDTO)
        {
            try
            {
                _response.Result = await _repository.CreateUpdateProduct(productDTO);
                _logger.LogInformation($"Product has been created { JsonConvert.SerializeObject(_response.Result) }");
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Getting the error: {ex.Message}");
                _response.IsSuccess = false;
                _response.ErrorMessage = new List<string> { ex.Message };
                return BadRequest(_response);
            }
            
        }

        [HttpPut]
        public async Task<ActionResult<ProductDTO>>UpdateProduct([FromBody] ProductDTO productDTO)
        {
            try
            {
                _response.Result = await _repository.CreateUpdateProduct(productDTO);
                _logger.LogInformation($"Product has been updated { JsonConvert.SerializeObject(_response.Result) }");
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Getting the error: {ex.Message}");
                _response.IsSuccess = false;
                _response.ErrorMessage = new List<string> { ex.Message };
                return BadRequest(_response);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult<ProductDTO>> DeleteProduct(int id)
        {
            try
            {
                _response.Result = await _repository.DeleteProduct(id);

                if (!(bool)_response.Result)
                {
                    _logger.LogInformation("Product was not found");
                    _response.IsSuccess = false;
                    return NotFound(_response);
                }

                _logger.LogInformation("Product was deleted");
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Getting the error: {ex.Message}");
                _response.IsSuccess = false;
                _response.ErrorMessage = new List<string> { ex.Message };
                return BadRequest(_response);
            }

        }

    }
}

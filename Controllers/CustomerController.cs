using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace angular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        public IList<Customer> Customers { get; private set; }

        private readonly ILogger<CustomerController> _logger;

        public CustomerController(ILogger<CustomerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            if(this.Customers == null)
                this.Customers = new List<Customer>();
           return this.Customers;
        }

        [HttpPost]
        public void Post(Customer customer)
        {
            if(this.Customers == null)
                this.Customers = new List<Customer>();

            this.Customers.Add(customer);
        }
    }
}
